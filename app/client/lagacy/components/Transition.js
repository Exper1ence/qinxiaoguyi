/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import {propTypes, defaultProps} from './types';
import util from './util';

class Timer {
    get isUp() {
        return Date.now() - this._start >= this._duration;
    }
    
    constructor(_duration) {
        Object.assign(this, {
            _start: Date.now(),
            _duration,
        });
    }
    
    reset() {
        this._start = Date.now();
    }
}

class Transition extends Component {
    _init({style, duration}) {
        return {
            state: {
                style,
            },
            _timer: new Timer(duration),
        }
    }
    
    _onLateUpdate({done,}, {style,}, {_timer}) {
        if (_timer.isUp) {
            if (util.isFunction(done)) done();
            else if (done) {
                Object.assign(style, done);
                _timer.reset();
                this.setState({style,});
            }
        }
    }
    
    _onParentLateUpdate({to, done,}, {style,}, {_timer}) {
        if (to) {
            Object.assign(style, to);
            this.setState({style,});
        }
        else {
            if (util.isFunction(done)) {
                done();
            }
            else if (done) {
                Object.assign(style, done);
                _timer.reset();
                this.setState({style,});
            }
        }
    }
    
    _run({to, done, delay, duration, component, ...rest}, {style}) {
        return React.createElement(component, {
            ...rest,
            style,
        });
    }
}
Transition.propTypes = {
    done: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]),
    delay: PropTypes.number,
    duration: PropTypes.number,
    ...propTypes.component,
};
Transition.defaultProps = {
    delay: 0,
    duration: 0,
    ...defaultProps.component,
};
export default Transition;
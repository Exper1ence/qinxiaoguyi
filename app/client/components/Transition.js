/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import {propTypes, defaultProps} from './types';
import util from './util';

class Transition extends Component {
    _init({style}) {
        return {
            state: {
                style,
            },
        }
    }
    
    _onParentLateUpdate({to, done, delay, duration,}, {style,}) {
        setTimeout(() => {
            if (to) {
                Object.assign(style, to);
                if (done) {
                    setTimeout(() => {
                        if (util.isFunction(done)) {
                            done();
                        }
                        else if (done) {
                            Object.assign(style, done);
                            this.setState({style,});
                        }
                    }, duration * 1000);
                }
                this.setState({style,});
            }
            else {
                if (util.isFunction(done)) {
                    done();
                }
                else if (done) {
                    Object.assign(style, done);
                    this.setState({style,});
                }
            }
        }, delay * 1000);
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
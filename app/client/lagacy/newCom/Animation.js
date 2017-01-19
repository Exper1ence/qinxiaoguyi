/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import {propTypes, defaultProps} from './types';
import createClass from './createClass';
import {forOwn} from './util';

class Timer {
    get isUp() {
        return Date.now() - this._start >= this._duration;
    }
    
    constructor(_duration) {
        Object.assign(this, {
            _start: 0,
            _duration,
        });
    }
    
    start() {
        this._start = Date.now();
    }
}

export default createClass({
    awake({
        styleFrom, styleTo, duration, component,
        ..._rest
    }) {
        return {
            _rest,
            state: {
                style: {...styleFrom},
            },
            _timer: new Timer(duration),
            _flag: !0,
        }
    },
    start({}, {}, {_timer,}){
        _timer.start();
    },
    update({styleFrom, styleTo,}, {style,}, {_timer, _flag,}){
        if (_timer.isUp) {
            this.setState({style: Object.assign(style, _flag ? styleTo : styleFrom)});
            this._flag = !_flag;
            _timer.start();
        }
    },
    render({component}, {style,}, {_rest}) {
        return React.createElement(component, {
            ..._rest,
            style,
        });
    },
    propTypes: {
        ...propTypes.component,
        duration: PropTypes.number,
    },
    defaultProps: {
        ...defaultProps.component,
        duration: 1000,
    }
});
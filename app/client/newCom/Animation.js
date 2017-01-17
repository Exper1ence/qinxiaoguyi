/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import View from './View';
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
    awake({style, phases, duration, timing, direction, delay, count, component, ..._rest}) {
        if (!phases[0] || !phases[100])throw new Error('you must have 0 or 100 phase');
        const _pIndexes = [];
        if (count > 0) {
            let transition = '';
            forOwn(phases[0], (k, v) => {
                transition += `,${k} ${duration / 1000}s ${timing}`;
            });
            style = {
                ...style,
                transition: transition.slice(1),
            };
            forOwn(phases, (k, v) => _pIndexes.push(k));
            if (delay > 0) {
                
            }
            else {
                switch (direction) {
                    case 'normal':
                        break;
                    case 'alternate':
                        style = {...style, ...phases[0]};
                        break;
                    case 'reversed':
                        break;
                    default:
                        break;
                }
            }
        }
        return {
            _rest,
            state: {
                count,
                style,
            },
            _timer: new Timer(duration),
            _pIndexes,
            _i: 0,
        }
    },
    start({}, {}, {_timer,}){
        _timer.start();
    },
    update({phases,}, {style,}, {_timer, _pIndexes, _i}){
        if (_timer.isUp) {
            const newI = (++_i) % _pIndexes.length;
            this.setState({style: {...style, ...phases[_pIndexes[newI]]}});
            this._i = newI;
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
        phases: PropTypes.shape({
            0: PropTypes.object,
            100: PropTypes.object,
        }),
        duration: PropTypes.number,
        timing: PropTypes.string,
        direction: PropTypes.string,
        delay: PropTypes.number,
        count: PropTypes.number,
    },
    defaultProps: {
        ...defaultProps.component,
        phases: {0: {}, 100: {}},
        duration: 1,
        timing: 'ease',
        direction: 'alternate',
        delay: 0,
        count: Infinity,
    }
});
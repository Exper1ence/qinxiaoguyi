/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Draggable extends Component {
    _init() {
        return {
            _dir: -1,
            _last: null,
        }
    }
    
    _getVector(start, end) {
        const x = end.clientX - start.clientX;
        const y = end.clientY - start.clientY;
        const magnitude = Math.sqrt(x * x + y * y);
        const unitX = x ? x / magnitude : 0;
        const unitY = y ? y / magnitude : 0;
        return {
            x, y, unitX, unitY,
        }
    }
    
    _run({
        component, onDragVertical, onDrop, onSwipeUp, onSwipeDown,
        ...rest
    }) {
        return React.createElement(component, {
            ...rest,
            onTouchStart: (e) => {
                this._last = e.targetTouches[0];
            },
            onTouchMove: (e) => {
                const newTouch = e.targetTouches[0];
                const {_last, _dir,}=this;
                const {x, y, unitX, unitY,}=this._getVector(_last, newTouch);
                let newDir = -1;
                if (_dir >= 0) {
                    if (_dir >= 2) {
                        if (unitY > 0) {
                            newDir = 3;
                        }
                        else {
                            newDir = 2;
                        }
                        onDragVertical(e, y);
                    }
                    else {
                        if (unitX < 0) {
                            newDir = 0;
                        }
                        else {
                            newDir = 1;
                        }
                    }
                }
                else {
                    if (unitX < -0.5) {
                        newDir = 0;
                    }
                    else if (unitX > 0.5) {
                        newDir = 1;
                    }
                    else if (unitY <= -0.5) {
                        newDir = 2;
                    }
                    else if (unitY >= 0.5) {
                        newDir = 3;
                    }
                }
                this._dir = newDir;
                this._last = newTouch;
            },
            onTouchEnd: (e) => {
                switch (this._dir) {
                    case 2:
                        onSwipeUp(e);
                        break;
                    case 3:
                        onSwipeDown(e);
                        break;
                }
                this._dir = -1;
                onDrop(e);
            }
        });
    }
}
Draggable.propTypes = {
    onDragVertical: PropTypes.func,
    onDrop: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
    ...PropTypes.component,
};
Draggable.defaultProps = {
    onDragVertical: () => null,
    onDrop: () => null,
    onSwipeUp: () => null,
    onSwipeDown: () => null,
    ...defaultProps.component,
};
export default Draggable;
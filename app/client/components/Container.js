/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Responsive from './Responsive';
import View from './View';
import _ from './util';

const COL_PERCENTAGE = 100 / 12;

function diff(start, end) {
    const dirX = end.clientX - start.clientX;
    const dirY = end.clientY - start.clientY;
    const magnitude = Math.sqrt(dirX * dirX + dirY * dirY);
    const unitX = dirX ? dirX / magnitude : 0;
    const unitY = dirY ? dirY / magnitude : 0;
    return {
        dirX, dirY, unitX, unitY,
    }
}

class Container extends Component {
    init() {
        this.attrs = {
            firstTouch: {clientX: 0, clientY: 0},
            lastTouch: {clientX: 0, clientY: 0},
            direction: 0,
        };
    }
    
    run({
        children, style, col, offset,
        push, pull, hidden, fixed, fluid,
        onDragVertical, onSwipeUp,onSwipeDown,
    }) {
        if (fixed || !fluid) {
            return (
                <Responsive
                    xs={{width: '100%'}}
                    sm={{width: '540px'}}
                    md={{width: '720px'}}
                    lg={{width: '960px'}}
                    xl={{width: '1140px'}}
                    render={res => <View style={{...res, ...style}}>{children}</View>}
                />
            )
        }
        else {
            const all = {
                xs: {col: 12, offset: 0, push: 0, pull: 0},
                sm: {}, md: {}, lg: {}, xl: {},
            };
            _.forOwn(all, (res) => {
                Object.assign(res, {display: 'flex'});
            });
            _.forOwn({col, offset, push, pull}, (args, prop) => {
                for (let arg of args) {
                    arg = arg.split('-');
                    all[arg[0]][prop] = parseInt(arg[1]);
                }
            });
            for (let res of hidden) {
                all[res].display = 'none';
            }
            return (
                <Responsive
                    xs={all.xs}
                    sm={all.sm}
                    md={all.md}
                    lg={all.lg}
                    xl={all.xl}
                    render={({col, offset, push, pull, display,}) => {
                        return (
                            <View
                                style={{
                                    width: COL_PERCENTAGE * col + '%',
                                    marginRight: COL_PERCENTAGE * (pull - push) + '%',
                                    marginLeft: COL_PERCENTAGE * (offset + push - pull) + '%',
                                    display,
                                    ...style,
                                }}
                                children={children}
                                onTouchStart={(e) => {
                                    this.attrs = {...this.attrs, firstTouch: e.targetTouches[0]};
                                }}
                                onTouchEnd={(e) => {
                                    switch (this.attrs.direction) {
                                        case 3:
                                            onSwipeUp(e);
                                            break;
                                        case 4:
                                            onSwipeDown(e);
                                            break;
                                    }
                                    this.attrs = {...this.attrs, direction: 0};
                                }}
                                onTouchMove={(e) => {
                                    const {firstTouch, lastTouch, direction,}=this.attrs;
                                    let dir = 0;
                                    let newTouch;
                                    const {unitX, unitY, dirX, dirY,}=diff(firstTouch, e.targetTouches[0]);
                                    if (direction > 0) {
                                        const {unitX, unitY,}=diff(lastTouch, e.targetTouches[0]);
                                        if (direction > 2) {
                                            if (unitY < 0) {
                                                dir = 3;
                                            }
                                            else {
                                                dir = 4;
                                            }
                                            newTouch = onDragVertical(e, dirY);
                                        }
                                        else {
                                            if (unitX < 0) {
                                                dir = 1;
                                            }
                                            else {
                                                dir = 2;
                                            }
                                        }
                                    }
                                    else {
                                        if (unitX < -0.5) {
                                            dir = 1;
                                        }
                                        else if (unitX > 0.5) {
                                            dir = 2;
                                        }
                                        else if (unitY < -0.5) {
                                            dir = 3;
                                        }
                                        else if (unitY > 0.5) {
                                            dir = 4;
                                        }
                                    }
                                    this.attrs = {
                                        ...this.attrs,
                                        direction: dir,
                                        lastTouch: e.targetTouches[0],
                                        firstTouch: newTouch || firstTouch,
                                    };
                                }}
                            />
                        )
                    }}
                />
            );
        }
    }
}
Container.propTypes = {
    col: PropTypes.array,
    offset: PropTypes.array,
    push: PropTypes.array,
    pull: PropTypes.array,
    hidden: PropTypes.array,
    fluid: PropTypes.bool,
    fixed: PropTypes.bool,
    onDragVertical: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeDown:PropTypes.func,
};
Container.defaultProps = {
    col: [],
    offset: [],
    push: [],
    pull: [],
    hidden: [],
    fluid: true,
    onDragVertical: () => null,
    onSwipeUp: () => null,
    onSwipeDown:() => null,
};
export default Container;
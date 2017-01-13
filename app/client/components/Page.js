/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';
import Draggable from './Draggable';

class Page extends Component {
    _init() {
        return {
            _bottom: 0,
            _transition: '',
            _time: .3,
        }
    }
    
    _run({children, backgroundImage}, {bottom, transition}, {_time}) {
        return (
            <Draggable
                style={{
                    width: '100%',
                }}
                onDragVertical={(e, diff) => {
                    const {_bottom}=this;
                    const newBottom = Math.max(0, _bottom - diff);
                    this.setState({bottom: newBottom + 'px', transition: ''});
                    this._bottom = newBottom;
                }}
                onDrop={() => {
                    this._bottom = 0;
                }}
                onSwipeUp={() => {
                    this.setState({bottom: '100%', transition: `bottom ${_time}s ease`});
                }}
                onSwipeDown={() => {
                    this.setState({bottom: 0, transition: `bottom ${_time}s`});
                }}
                children={(
                    <Container
                        style={{
                            color: '#fff',
                            position: 'absolute',
                            bottom,
                            transition,
                            height: '100%',
                            backgroundImage,
                        }}
                        children={children}
                    />
                )}
            />
        )
    }
}
Page.propTypes = {};
Page.defaultProps = {};
export default Page;
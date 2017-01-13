/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';
import util from './util';

class HeartBeat extends Component {
    _init() {
        return {
            _dir: -1,
        }
    }
    
    componentDidMount() {
        this._id = util.setInterval(() => {
            const {_dir, element}=this;
            if (_dir > 0) {
                element.style.width = '150px';
                element.style.height = '150px';
            }
            else {
                element.style.width = '50px';
                element.style.height = '50px';
            }
            this._dir = -_dir;
        }, 500);
    }
    
    stop() {
        util.clearInterval(this._id);
    }
    
    _run({children, style,}) {
        return (
            <View
                style={{
                    height: '150px',
                    width: '150px',
                    borderRadius: '75px',
                    backgroundColor: '#e7f7f5',
                    transition: 'height .5s ease,width .5s ease',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                ref={view => this.element = view.element}
                children={(
                    <View
                        style={{
                            height: '30px',
                            width: '30px',
                            backgroundColor: '#afe4dd',
                            borderRadius: '15px',
                        }}
                    />
                )}
            />
        );
    }
}
HeartBeat.propTypes = {};
HeartBeat.defaultProps = {};
export default HeartBeat;
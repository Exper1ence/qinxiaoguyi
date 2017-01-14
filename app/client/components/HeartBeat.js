/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import View from './View';
import {propTypes, defaultProps} from './types';
import Transition from './Transition';

class HeartBeat extends Component {
    _init() {
        return {
            state: {
                dir: 1,
            }
        }
    }
    
    _run({run,}, {dir,}) {
        return (
            <Transition
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '75px',
                    backgroundColor: '#e7f7f5',
                    transition: 'height .5s ease,width .5s ease',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                to={dir > 0 ? {width: '50px', height: '50px',} : {width: '150px', height: '150px'}}
                done={() => {
                    if (run) {
                        this.setState({dir: -dir});
                    }
                }}
                duration={.5}
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
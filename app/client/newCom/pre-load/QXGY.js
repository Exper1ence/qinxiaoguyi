/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import View from '../View';
import {propTypes, defaultProps} from '../types';
import createClass from '../createClass';
import {HeartBeat,} from '../index';
import Fill from '../Fill';

export default createClass({
    awake({}) {
    },
    start(){
        
    },
    render({style, ...rest}, {}, {}) {
        return (
            <Fill
                h v
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                children={(
                    <HeartBeat
                        style={{...style,}}
                    />
                )}
            />
        );
    },
});
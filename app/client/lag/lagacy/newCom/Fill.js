/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import {propTypes, defaultProps} from './types';
import createClass from './createClass';

export default createClass({
    awake({style, h, v, ..._rest}) {
        return {
            _rest,
        }
    },
    
    render({h, v, style,}, {}, {_rest}) {
        return (
            <div
                {..._rest}
                style={{
                    width: h ? '100%' : 'auto',
                    height: v ? '100%' : 'auto',
                    ...style,
                }}
            />
        );
    },
});
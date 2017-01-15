/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import View from '../View';
import {propTypes, defaultProps} from '../types';
import createClass from '../createClass';

export default createClass({
    start({}) {
        
    },
    render({style, ...rest}, {}, {}) {
        return (
            <View
                {...rest}
                style={{...style,}}
            />
        );
    },
});
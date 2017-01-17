/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import createClass from './createClass';

export default createClass({
    start({}) {
        return {}
    },
    
    render({style, ...rest}, {}, {}) {
        return (
            <span
                {...rest}
                style={{
                    display: 'flex',
                    boxSizing: 'border-box',
                    ...style,
                }}
            />
        );
    },
});
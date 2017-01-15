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
            <div
                {...rest}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    boxSizing: 'border-box',
                    alignItems: 'flex-start',
                    ...style,
                }}
            />
        );
    },
});
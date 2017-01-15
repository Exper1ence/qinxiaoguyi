/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import View from './View';
import {propTypes, defaultProps} from './types';
import createClass from './createClass';
import Animation from './Animation';

export default createClass({
    start({}) {
        
    },
    
    render({style, ...rest}, {}, {}) {
        return (
            <Animation
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '75px',
                    backgroundColor: '#e7f7f5',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...style,
                }}
                phases={{
                    0: {
                        transform: 'scale(1)',
                    },
                    100: {
                        transform: 'scale(3)',
                    }
                }}
                duration={500}
            />
        );
    },
});
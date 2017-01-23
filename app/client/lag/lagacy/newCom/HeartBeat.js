/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import {propTypes, defaultProps} from './types';
import createClass from './createClass';
import Animation from './Animation';

export default createClass({
    start({}) {
        
    },
    
    render({style, ...rest}, {}, {}) {
        return (
            <div
                children={[(
                    <Animation
                        styleFrom={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '75px',
                            backgroundColor: '#e7f7f5',
                            transition: 'transform .5s ease',
                            transform: 'scale(1)',
                        }}
                        styleTo={{
                            transform: 'scale(3)',
                        }}
                        duration={500}
                    />
                ), (
                    <div
                        style={{
                            height: 30,
                            width: 30,
                            backgroundColor: '#afe4dd',
                            borderRadius: '15px',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            marginLeft: -15,
                            marginTop: -15,
                        }}
                    />
                )
                ]}
            />
        
        );
    },
});
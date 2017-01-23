/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import {propTypes, defaultProps} from '../../types';
import createClass from '../../createClass';
 import Fill from '../../Fill';
const {Word}=require('../../index');
export default createClass({
    awake(){
        return {
            state: {
                content: null,
            }
        }
    },
    start(){
        require.ensure('../index', () => {
            
        });
    },
    render({style, ...rest}, {content}, {}) {
        return (
            <div
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundImage:`url${require('./../.././Page/bg.png')}`
                }}
                children={content}
            />
        );
    },
});
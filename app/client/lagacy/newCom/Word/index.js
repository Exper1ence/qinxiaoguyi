/**
 * Created by Exper1ence on 2017/1/17.
 */
import React, {PropTypes} from 'react';
import {propTypes, defaultProps} from '../types';
import createClass from '../createClass';

export default createClass({
    awake({style, ..._rest}) {
        return {
            _rest,
        }
    },
    render({}, {}, {_rest}) {
        return (
            <div
                {..._rest}
                style={{
                    width: '58px',
                    height: '58px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#000',
                    backgroundImage:`url${require('./../../../Word/bg.png')}`
                }}
                children='琴'
            />
        );
    },
});
/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import Container from '../Container';
import {propTypes, defaultProps} from '../types';
import Image from '../Image';


class Arrow extends Component {
    _init({}) {
        return {}
    }
    
    _run({children, style,}) {
        return (
            <Image
                src={require('./arrow.png')}
            />
        );
    }
}
Arrow.propTypes = {};
Arrow.defaultProps = {};
export default Arrow;
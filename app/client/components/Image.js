/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Image extends Component {
    _run({style, src,...rest}) {
        return (
            <View
                {...rest}
                style={{
                ...style,
                backgroundImage: `url(${src})`,
                backgroundSize:'cover',
            }}/>
        );
    }
}
Image.propTypes = {};
Image.defaultProps = {};
export default Image;
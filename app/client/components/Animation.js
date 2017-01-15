/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import View from './View';
import {propTypes, defaultProps} from './types';

class Animation extends Component {
    _init({}) {
        return {}
    }
    
    _run({style, component, ...rest}) {
        return (
            <component
                {...rest}
                style={{...style,}}
                children={}
            />
        );
    }
}
Animation.propTypes = {
    ...propTypes.component,
};
Animation.defaultProps = {
    ...defaultProps.component,
};
export default Animation;
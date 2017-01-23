/**
 * Created by Exper1ence on 2017/1/1.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Margin extends Component {
    _run({children, style, small, normal, large, horizontal, vertical,}) {
        const value = large ? '1rem' : (small ? '.25rem' : '.5rem');
        let margin;
        if (vertical || !horizontal) margin = {height: value};
        else margin = {width: value};
        return (
            <View style={margin}/>
        )
    }
}
Margin.propTypes = {
    ...propTypes.size,
    ...propTypes.direction,
};
Margin.defaultProps = {
    ...defaultProps.size,
    ...defaultProps.direction,
};
export default Margin;

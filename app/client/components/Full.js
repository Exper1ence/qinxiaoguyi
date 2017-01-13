/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Full extends Component {
    _run({children, style, width, height,}) {
        return (
            <View
                style={{
                    width: width ? '100%' : 'auto',
                    height: height ? '100%' : 'auto',
                    ...style,
                }}
                children={children}
                ref={view => this.element = view.element}
            />
        );
    }
}
Full.propTypes = {
    width: PropTypes.bool,
    height: PropTypes.bool,
};
Full.defaultProps = {
    width: false,
    height: false,
};
export default Full;
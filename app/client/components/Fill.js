/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Fill extends Component {
    _run({children, style, h, v,}) {
        return (
            <View
                style={{
                    width: h ? '100%' : 'auto',
                    height: v ? '100%' : 'auto',
                    ...style,
                }}
                children={children}
                ref={view => this.element = view.element}
            />
        );
    }
}
Fill.propTypes = {
    h: PropTypes.bool,
    v: PropTypes.bool,
};
Fill.defaultProps = {
    h: false,
    v: false,
};
export default Fill;
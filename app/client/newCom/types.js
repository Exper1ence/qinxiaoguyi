/**
 * Created by Exper1ence on 2017/1/15.
 */
import {PropTypes} from 'react';
import View from './View';
export const propTypes = {
    direction: {
        horizontal: PropTypes.bool,
        vertical: PropTypes.bool,
    },
    semantic: {
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
        success: PropTypes.bool,
        info: PropTypes.bool,
        warning: PropTypes.bool,
        danger: PropTypes.bool,
    },
    size: {
        small: PropTypes.bool,
        normal: PropTypes.bool,
        large: PropTypes.bool,
    },
    component: {
        component: PropTypes.func,
    },
};
export const defaultProps = {
    direction: {
        horizontal: true,
    },
    semantic: {
        secondary: true,
    },
    size: {
        normal: true,
    },
    component: {
        component: View,
    },
};
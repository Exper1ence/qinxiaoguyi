import React, {PropTypes} from 'react';
import Component from './Component';

class Responsive extends Component {
    _init() {
        window.addEventListener("resize", () => this.setState({
            resolution: this._getRes(),
        }));
        return {
            state: {
                resolution: this._getRes(),
            }
        }
    }
    
    _getRes() {
        const {offsetWidth,}=document.body;
        if (offsetWidth < 576) {
            return 0;
        }
        else if (offsetWidth >= 576 && offsetWidth < 768) {
            return 1;
        }
        else if (offsetWidth >= 768 && offsetWidth < 992) {
            return 2
        }
        else if (offsetWidth >= 992 && offsetWidth < 1200) {
            return 3
        }
        return 4;
    }
    
    _run({xs, sm, md, lg, xl, render,}, {resolution}) {
        let args;
        if (resolution >= 0) {
            args = {...xs};
        }
        if (resolution >= 1) {
            args = {...args, ...sm};
        }
        if (resolution >= 2) {
            args = {...args, ...md};
        }
        if (resolution >= 3) {
            args = {...args, ...lg};
        }
        if (resolution >= 4) {
            args = {...args, ...xl};
        }
        return render(args);
    }
}
Responsive.propTypes = {
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    xl: PropTypes.object,
    render: PropTypes.func,
};
Responsive.defaultProps = {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    render: () => null,
};
export default Responsive;
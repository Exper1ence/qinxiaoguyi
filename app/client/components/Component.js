import React, {Component as ReactComponent} from 'react';


class Component extends ReactComponent {
    constructor(props) {
        super(props);
        if (this.awake) Object.assign(this, {state: {}}, this.awake(props));
        if (this.start) props.setTimeout(this.start.bind(this, this, this.state, this.props));
        this.setState = this.setState.bind(this);
        const render = this.render.bind(this);
        this.render = () => render(this, this.state, this.props);
    }
}
Component.defaultProps = {
    style: {},
    className: '',
};
Component.createElement = function (a, b, c) {
    return React.createElement(a, b, c);
};
export default Component;
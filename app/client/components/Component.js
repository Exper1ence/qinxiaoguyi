import {isFunction,} from './util';
import React, {Component as ReactComponent, PropTypes as Types} from 'react';
const IGNORE_METHODS = {
    constructor: !0,
    awake: !0,
    start: !0,
    destroy: !0,
    render: !0,
};
const COMPONENTS = new WeakMap();
export class Component extends ReactComponent {
    
    componentWillMount() {
        Reflect.ownKeys(Reflect.getPrototypeOf(this)).forEach(prop => {
            if (IGNORE_METHODS[prop] || !isFunction(this[prop]))return;
            this[prop] = this[prop].bind(this);
        });
        COMPONENTS.set(this, !0);
        this.setTimeout = (cb, delay) => setTimeout(() => COMPONENTS.get(this) && cb(), delay);
        this.requestAnimationFrame = (cb) => requestAnimationFrame(() => COMPONENTS.get(this) && cb());
        const render = this.render.bind(this);
        this.render = () => render(this.props);
        isFunction(this.awake) && this.awake(this.props);
    }
    
    componentDidMount() {
        isFunction(this.start) && this.start(this.props);
    }
    
    componentWillUnmount() {
        COMPONENTS.set(this, !!0);
        isFunction(this.destroy) && this.destroy(this.props);
    }
}
Component.defaultProps = {
    style: {},
    className: '',
};
export const PropTypes = Types;
export const h = React.createElement;
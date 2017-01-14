/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {Component as Base} from 'react'
import _ from './util';

export default class Component extends Base {
    constructor(props) {
        super(props);
        Object.assign(this, this._init && this._init.call(this, props));
        this.state = this.state || {};
        this._selfUpdate = false;
    }
    
    setState(state) {
        this._selfUpdate = true;
        super.setState(state);
    }
    
    componentDidMount() {
        setImmediate(() => this._onParentLateUpdate
        && this._onParentLateUpdate.call(this, this.props, this.state, this));
    }
    
    componentDidUpdate() {
        requestAnimationFrame(() => {
            if (this._selfUpdate) {
                this._selfUpdate = false;
            }
            else {
                this._onParentLateUpdate && this._onParentLateUpdate.call(this, this.props, this.state, this);
            }
        });
    }
    
    render() {
        return this._run.call(this, this.props, this.state, this);
    }
}
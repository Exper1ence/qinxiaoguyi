/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {Component as Base} from 'react'
import _ from './util';

export default class Component extends Base {
    constructor(props) {
        super(props);
        Object.assign(this, _.toFunction(this._init).call(this, this.props));
    }
    
    render() {
        return _.toFunction(this._run)
            .call(this, _.toPlainObject(this.props), _.toPlainObject(this.state),this);
    }
}
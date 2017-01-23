/**
 * Created by Exper1ence on 2017/1/15.
 */
import React from 'react';
import {func} from './util';
import RFU from './RFU';

export default function ({awake, start, update, render, defaultProps, ..._rest}) {
    let live = true;
    return React.createClass({
        ..._rest,
        componentWillMount(){
            Object.assign(this, {state: {}}, func(awake) ? awake.call(this, this.props) : null);
            if (func(update)) RFU(() => {
                update.call(this, this.props, this.state, this);
                return live;
            });
        },
        componentDidMount(){
            if (func(start)) start.call(this, this.props, this.state, this);
        },
        componentWillUnmount(){
            live = false;
        },
        render(){
            return render.call(this, this.props, this.state, this);
        },
        getDefaultProps: () => defaultProps,
    })
}
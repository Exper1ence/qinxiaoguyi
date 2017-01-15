/**
 * Created by Exper1ence on 2017/1/15.
 */
import React from 'react';
import _ from './util';
import RFU from './RFU';

export default function ({awake, start, update, render, defaultProps, ..._rest}) {
    return React.createClass({
        ..._rest,
        componentWillMount(){
            Object.assign(this, {state: {}}, _.ifFunction(awake, awake => awake.call(this, this.props)));
            _.ifFunction(update, update => RFU.add(update.bind(this, this.props, this.state, this)));
        },
        componentDidMount(){
            _.ifFunction(start, start => start.call(this, this.props, this.state, this));
        },
        render(){
            return render.call(this, this.props, this.state, this);
        },
        getDefaultProps: () => defaultProps,
    })
}
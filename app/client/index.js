/**
 * Created by Exper1ence on 2016/12/30.
 */
import ENV from './ENV';
window.ENV = ENV;
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {QXGY} from './newCom/pre-load';

if (ENV.debug) {
    render(<QXGY/>, document.getElementById('qxgy'));
}
else {
    render(<QXGY/>, document.getElementById('qxgy'));   
}

/**
 * Created by Exper1ence on 2016/12/30.
 */
import ENV from './ENV';
window.ENV = ENV;
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'babel-polyfill';
import {Qxgy, Synopsis,} from './components/pre-load';

if (ENV.debug) {
    ReactDom.render((
        <Router history={browserHistory}>
            <Route path="/" component={Qxgy}>
                <IndexRoute component={Synopsis}/>
            </Route>
        </Router>
    ), document.getElementById('qxgy'));
}
else {
    ReactDom.render((
        <Router history={browserHistory}>
            <Route path="/" component={Qxgy}>
                <IndexRoute component={Synopsis}/>
            </Route>
        </Router>
    ), document.getElementById('qxgy'));
}
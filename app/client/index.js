/**
 * Created by Exper1ence on 2016/12/30.
 */
import ENV from './ENV';
window.ENV = ENV;
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'babel-polyfill';
import {QXGY} from './newCom/pre-load';

if (ENV.debug) {
    ReactDom.render(<QXGY/>, document.getElementById('qxgy'));
}
else {
    ReactDom.render((
        <Router history={browserHistory}>
            <Route path="/" component={QXGY}>
                <IndexRoute component={Synopsis}/>
            </Route>
        </Router>
    ), document.getElementById('qxgy'));
}
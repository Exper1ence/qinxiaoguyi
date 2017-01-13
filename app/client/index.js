/**
 * Created by Exper1ence on 2016/12/30.
 */
import ENV from './ENV';
window.ENV = ENV;
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'babel-polyfill';
import {Qxgy, Synopsis,} from './components/pre-load';

if (ENV.debug) {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={Qxgy}>
                <IndexRoute component={Synopsis}/>
            </Route>
        </Router>
    ), document.getElementById('qxgy'));
}
else {
    render(<Qxgy/>, document.getElementById('qxgy'));
}
/**
 * Created by Exper1ence on 2016/12/30.
 */
// import Loading from './gakk1/Loading';
// import Page from './gakk1/Page';
// import gakk1, {render, V,} from './gakk1';
// window.V = V;
// render(<Page>
//     <div style.scss={{
//         width: V.width,
//         height: V.height,
//         backgroundColor:'red',
//     }}>qweqwe
//     </div>
// </Page>);
// //     require.ensure('./gakk1', () => {
// //         // setTimeout(() => com.hide(), 2000);
// //     })
import {render} from 'react-dom';
import App from './actComponents/App';
import {h} from './components/Component';
import {Router, Route, IndexRoute, browserHistory, hashHistory,} from 'react-router';
import Home from './actComponents/Home';
import About from './components/About';
import  './components/Test';
import Login from './actComponents/ActLogin';
import Writing from './actComponents/ActWriting';
import User from './actComponents/ActUser';
import store from './actComponents/store';

render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='about' component={About}/>
            <Route path='login' component={Login}/>
            <Route path='writing' component={Writing}/>
            <Route path='user' component={User}/>
        </Route>
    </Router>
), document.getElementById('qxgy'));
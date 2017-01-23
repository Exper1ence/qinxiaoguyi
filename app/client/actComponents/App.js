import {Component, PropTypes, h,} from '../components/Component';
import {ScrollDetective, spring} from '../components/ScrollMotion';
import Posts from './ActPosts';
import BackTop from '../components/BackTop';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import '../components/style.scss';
import {Link,} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import Search from '../components/Search';
import ActDropdown from './ActDropdown';


export default class App extends Component {
    go() {
        
    }
    
    render({style, render, children, className, ...rest}) {
        return h(Provider, {
            store,
            children: h('div', {
                style: {},
                className: 'whfp fdcn',
                children: [
                    h(Navigator, {
                        children: [
                            h(Search),
                            h(ActDropdown),
                        ]
                    }),
                    h('div', {children, className: 'whfp'}),
                    h(BackTop),
                    h(Footer),
                ],
            })
        });
    }
}
App.defaultProps = {};
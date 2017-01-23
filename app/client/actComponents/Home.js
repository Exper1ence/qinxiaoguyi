import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import Posts from './ActPosts';
import {posts,} from '../components/mock';
import {scrollToTop} from '../components/gakk1';

export default class Main extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, ...rest}) {
        
        return h('div', {
            children: h(Posts, {
                onPostClick: scrollToTop,
                onReturnClick: scrollToTop,
            }),
            className: 'whfp',
        });
    }
}
Main.propTypes = {};
Main.defaultProps = {};
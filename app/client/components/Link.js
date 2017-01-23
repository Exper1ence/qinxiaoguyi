import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import {Link as ReactLink} from 'react-router';
import {scrollToTop} from './gakk1';

export default class Link extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, content, to, ...rest}) {
        return to.includes('http') ?
            h('a', {
                href: to,
                children: content,
                target: '_blank',
            }) :
            h(ReactLink, {
                ...rest,
                onClick: scrollToTop,
                children: content,
                to: to,
            });
    }
}
Link.propTypes = {};
Link.defaultProps = {};
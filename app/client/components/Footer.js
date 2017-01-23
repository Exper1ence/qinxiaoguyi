import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Link from './Link';

export default class Footer extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, ...rest}) {
        
        return h('div', {
            ...rest,
            className: 'whfp',
            style: {
                height: 100,
            },
            children: h(Link, {key: 4, to: 'about', content: 'about me'}),
        });
    }
}
Footer.propTypes = {};
Footer.defaultProps = {};
import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import {Link} from 'react-router';

export default class AboutMe extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, ...rest}) {
        
        return h('div', {
            style: {
                height: 500,
            },
            className: 'whfp',
            children: h(Link, {children: 'go home ', to: '/'}),
        });
    }
}
AboutMe.propTypes = {};
AboutMe.defaultProps = {};
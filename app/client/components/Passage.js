import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class Passage extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, content, ...rest}) {
        
        return h('div', {
            ...rest,
            children: content,
            className: 'whfp',
        });
    }
}
Passage.propTypes = {};
Passage.defaultProps = {};
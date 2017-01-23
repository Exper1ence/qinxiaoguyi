import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class Return extends Component {
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({render, style, children, className, content, ...rest}) {
        
        return h('button', {
            ...rest,
            children: content,
        });
    }
}
Return.propTypes = {};
Return.defaultProps = {};
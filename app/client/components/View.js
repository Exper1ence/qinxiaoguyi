import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class View extends Component {
    mixin = [];
    
    awake({}) {
        
    }
    
    start() {
        
    }
    
    render({children, style, isExisted, i, className, content, ...rest}) {
        return h('div', {
            ...rest,
            style: {
                ...style,
                display: isExisted ? 'flex' : 'none',
            },
            className,
            children: content || children,
        });
    }
}
View.propTypes = {};
View.defaultProps = {
    isExisted: !0,
};
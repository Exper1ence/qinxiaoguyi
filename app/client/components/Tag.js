import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class PostTag extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({style, render, children, className, content, ...rest}) {
        const {text}=content;
        return h('div', {
            ...rest,
            children: text,
        });
    }
}
PostTag.propTypes = {};
PostTag.defaultProps = {};
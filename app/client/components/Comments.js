import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Comment from './Comment';

export default class Comments extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({style, render, className, content, ...rest}) {
        const children = content.map((comment, key) => h(Comment, {content: comment, key}));
        return h('div', {
            ...rest,
            children,
        });
    }
}
Comments.propTypes = {};
Comments.defaultProps = {};
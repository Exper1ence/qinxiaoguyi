import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Tag from './Tag';

export default class Tags extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({style, render, className, content, ...rest}) {
        const children = content.map((tag, key) => h(Tag, {content: tag, key,}));
        return h('div', {
            ...rest,
            children,
            className: 'w100p',
        });
    }
}
Tags.propTypes = {
    content: PropTypes.array,
};
Tags.defaultProps = {};
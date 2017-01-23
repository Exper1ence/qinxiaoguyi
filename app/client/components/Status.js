import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class PostStatus extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({content, ...rest}) {
        const {owner, date, viewCount, voteCount}=content;
        return h('div', {
            ...rest,
            children: [
                h('div', {children: owner, key: 0}),
                h('div', {children: date, key: 1}),
                h('div', {children: viewCount, key: 2}),
                h('div', {children: voteCount, key: 3}),
            ]
        });
    }
}
PostStatus.propTypes = {};
PostStatus.defaultProps = {};
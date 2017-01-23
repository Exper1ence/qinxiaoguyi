import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class Comment extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({content, ...rest}) {
        const {owner, date, time, text,}=content;
        return h('div', {
            ...rest,
            children: [
                h('div', {children: owner, key: 0}),
                h('div', {
                    key: 1, children: [
                        h('div', {children: date, key: 0}),
                        h('div', {children: time, key: 1}),
                    ],
                }),
                h('div', {children: text, key: 3}),
            ],
            className: 'fdcn',
        });
    }
}
Comment.propTypes = {};
Comment.defaultProps = {};
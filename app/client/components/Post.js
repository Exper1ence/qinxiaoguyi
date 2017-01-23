import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Title from './Title';
import Status from './Status';
import Synopsis from './Synopsis';
import Tags from './Tags';
import Comments from './Comments';
import View from './View';
import Passage from './Passage';
import {mixins,} from './decorators';
import {propagateEvent} from './mixins';

@mixins(propagateEvent('onClick'))
export default class Post extends Component {
    
    render({onClick, content, isSynopsis, ...rest}) {
        const {title, stat, text, tags, comments,}=content;
        return h(View, {
            ...rest,
            style: {
                width: '100%',
            },
            children: [
                h(Title, {key: 0, content: title}),
                h(Status, {content: stat, key: 1}),
                isSynopsis ? h(Synopsis, {
                        key: 2,
                        content: text,
                    }) : h(Passage, {content: text, key: 2}),
                h(Tags, {key: 3, content: tags,}),
                isSynopsis ? null : h(Comments, {content: comments, key: 4}),
            ],
            onClick: this.propagateClick,
        });
    }
}
Post.propTypes = {};
Post.defaultProps = {};
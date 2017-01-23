import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import {mixins,} from './decorators';
import {propagateEvent} from './mixins';
import Post from './Post';
import View from './View';
import Button from './Button';

@mixins(propagateEvent('onPostClick', 'onReturnClick'))
export default class Posts extends Component {
    state = {viewingPostIndex: -1};
    
    handlePostClick(e, post) {
        this.setState({viewingPostIndex: post.props.i});
        this.propagatePostClick(e);
    }
    
    handleReturnClick(e) {
        this.setState({viewingPostIndex: -1});
        this.propagateReturnClick(e);
    }
    
    render({content, onPostClick, onReturnClick, ...rest}) {
        const vpi = this.state.viewingPostIndex;
        return h(View, {
            ...rest,
            children: [
                vpi < 0 ? null : h(Button, {
                        onClick: this.handleReturnClick, content: '返回', className: 'pnae',
                        key: content.length,
                    }),
                ...(vpi < 0 ?
                    content.map((post, i) => h(Post, {
                        content: post,
                        key: i,
                        isSynopsis: !0,
                        onClick: this.handlePostClick,
                        i,
                    })) :
                    [
                        h(Post, {
                            content: content.find((p, i) => i == vpi),
                            isSynopsis: !!0,
                        })
                    ]),
            ],
        });
    }
}
Posts.propTypes = {
    content: PropTypes.array,
};
Posts.defaultProps = {
    content: [],
};
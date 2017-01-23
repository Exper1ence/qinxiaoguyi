import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class PostSynopsis extends Component {
    
    awake({}) {
        this.state = {};
        this.lengthLimit = 110;
    }
    
    render({content, ...rest}) {
        return h('div', {
            ...rest,
            children: content.length > this.lengthLimit ? content.slice(0, this.lengthLimit) + ' . . .' : content,
            className:'whfp'
        });
    }
}
PostSynopsis.propTypes = {};
PostSynopsis.defaultProps = {};
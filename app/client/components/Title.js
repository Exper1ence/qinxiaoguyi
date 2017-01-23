import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class Title extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({style, render, children, className, content, ...rest}) {
        
        return h('div', {
            ...rest,
            children: content,
            className:'w100p  fsmn'
        });
    }
}
Title.propTypes = {
    text: PropTypes.string,
};
Title.defaultProps = {};
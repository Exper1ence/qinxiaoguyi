import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';

export default class Search extends Component {
    
    awake({}) {
        this.state = {};
    }
    
    render({style, render, children, className, ...rest}) {
    
        return h('input', {
            ...rest,
            
        });
    }
}
Search.propTypes={
    
};
Search.defaultProps = {
    
};
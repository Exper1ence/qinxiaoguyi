import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import {scrollUp as party,} from './gakk1';

export default class ScrollUp extends Component {
    get top() {
        return party.top;
    }
    
    awake({isUp}) {
        this.state = {
            isUp,
        };
    }
    
    start({}) {
        party.join(this.handleUp);
    }
    
    destroy() {
        party.quit(this.handleUp);
    }
    
    handleUp(isUp, top) {
        if (top === 0) this.setState({isUp: this.props.isUp});
        else this.setState({isUp,});
    }
    
    render({render}) {
        return render(this.state.isUp);
    }
}
ScrollUp.propTypes = {
    render: PropTypes.func,
};
ScrollUp.defaultProps = {
    isUp: !0,
};
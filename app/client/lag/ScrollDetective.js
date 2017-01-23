import {Component, PropTypes,} from './components/Component';
import ReactTimeout from 'react-timeout';

@ReactTimeout
export default class ScrollDetective extends Component {
    awake({isIn, max, min,}) {
        document.addEventListener('scroll', e => {
            const top = document.body.scrollTop;
            if (this.state.isIn && (top > max || top < min)) {
                this.setState({isIn: !!0});
            }
            else if (!this.state.isIn && top <= max && top >= min) {
                this.setState({isIn: !0});
            }
        });
        this.state = {isIn,}
    }
    
    render() {
        return this.props.render(this.state.isIn);
    }
}
ScrollDetective.propTypes = {
    render: PropTypes.func,
};
ScrollDetective.defaultProps = {
    isIn: !!0,
    min: 0,
    max: 0,
};
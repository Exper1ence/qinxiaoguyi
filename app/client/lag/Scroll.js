import Component from './components/Component';
import ReactTimeout from 'react-timeout';
import {bind, width, height,} from './components/react-arguments';
import {Motion, spring,} from 'react-motion';
import ScrollDetective from './ScrollDetectiveLg';

@ReactTimeout
export default class Scroll extends Component {
    
    awake({style, min, max,}) {
        new ScrollDetective({
            min,
            max,
            onIn: this.setState.bind(this, {isVisible: true}),
            onOut: this.setState.bind(this, {isVisible: false}),
        });
        this.state = {
            isVisible: false,
        };
    }
    
    render() {
        const {style, children, render, className,}=this.props;
        const {isVisible}=this.state;
        return (
            <Motion
                defaultStyle={{
                    transform: 0,
                }}
                style={{
                    transform: spring(isVisible ? 360 : 0),
                }}
            >
                {render}
            </Motion>
        )
    }
}
Scroll.defaultProps = {};
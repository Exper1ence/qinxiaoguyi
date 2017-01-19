import Component from './components/Component';
import ReactTimeout from 'react-timeout';
import {bind, width, height,} from './components/react-arguments';
import {Motion, spring,} from 'react-motion';
import ScrollDetective from './ScrollDetective';

@ReactTimeout
export default class Edge extends Component {
    
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
        return (
            <Motion
                defaultStyle={{width: 0}}
                style={{width: spring(this.state.isVisible ? width - 20 : 0)}}
            >{render}</Motion>
        )
    }
}
Edge.defaultProps = {};
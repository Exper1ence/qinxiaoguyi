import Component from '../components/Component';
import ReactTimeout from 'react-timeout';
import {bind, width, height,} from '../components/react-arguments';
import {Motion, spring,} from 'react-motion';
import ScrollDetective from '../ScrollDetective';
@ReactTimeout
export default class Fade extends Component {
    
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
        const {style, src, render,}=this.props;
        return (
            <Motion
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(this.state.isVisible ? 1 : 0)}}
            >{render}</Motion>
        )
    }
}
Fade.defaultProps = {};
import Component from '../components/Component';
import ReactTimeout from 'react-timeout';
import {bind, width, height,} from '../components/react-arguments';
import {Motion, spring,} from 'react-motion';
import ScrollDetective from '../ScrollDetective';
@ReactTimeout
export default class Fade extends Component {
    
    render() {
        const {style, src, render, min, max,}=this.props;
        return (
            <ScrollDetective
                min={min}
                max={max}
                render={isIn => (
                    <Motion
                        defaultStyle={{opacity: 0}}
                        style={{opacity: spring(isIn ? 1 : 0)}}
                    >{render}</Motion>
                )}
            />
        )
    }
}
Fade.defaultProps = {};
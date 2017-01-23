import {Component, PropTypes, h,} from './Component';
import {Motion, spring as motionSpring,} from 'react-motion';
import {isFunction, isNumber,} from './util';

export const spring = (value, opt) => {
    return (isIn, outValue) => {
        return isIn ? motionSpring(value, opt) : motionSpring(outValue, opt);
    }
};
export class ScrollDetective extends Component {
    
    awake({}) {
        this.state = {isIn: false};
    }
    
    start() {
        this.handleScroll();
        document.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        const {min, max}=this.props;
        const top = document.body.scrollTop;
        if (this.state.isIn && (top > max || top < min)) {
            this.setState({isIn: !!0});
        }
        else if (!this.state.isIn && top <= max && top >= min) {
            this.setState({isIn: !0});
        }
    }
    
    render({render, children, className, inStyle, outStyle, min, max, ...rest}) {
        if (Reflect.ownKeys(inStyle).length !== Reflect.ownKeys(outStyle).length)throw new Error();
        const isIn = this.state.isIn;
        const style = {};
        Reflect.ownKeys(inStyle)
            .forEach(key => {
                if ((!isNumber(inStyle[key]) && !isFunction(inStyle[key])) || !isNumber(outStyle[key]))
                    throw new TypeError();
                const v = isFunction(inStyle[key]) ? inStyle[key](isIn, outStyle[key]) : inStyle[key];
                v !== void 0 && (style[key] = v);
            });
        return h(Motion, {
            defaultStyle: outStyle,
            style,
            children: render,
        });
    }
}
ScrollDetective.propTypes = {
    inStyle: PropTypes.object,
    outStyle: PropTypes.object,
};
ScrollDetective.defaultProps = {};
import Component from '../components/Component';
import {_function} from '../util';
import ReactTimeout from 'react-timeout';

@ReactTimeout
export default class ScrollSensitive extends Component {
    awake({isIn, onIn, onOut, max, min,}) {
        this.isIn = isIn;
        document.addEventListener('scroll', e => {
            const top = document.body.scrollTop;
            if (this.isIn && (top > max || top < min)) {
                this.isIn = !!0;
                _function(onOut) && onOut();
            }
            else if (!this.isIn && top <= max && top >= min) {
                this.isIn = !0;
                _function(onIn) && onIn();
            }
        });
    }
    
    render() {
        return null;
    }
}
ScrollSensitive.defaultProps = {
    isIn: !!0,
    min: 0,
    max: 0,
    onIn: null,
    onOut: null,
};
import {isFunction} from '../components/util';

export default class ScrollDetective {
    
    constructor({min, max, onIn, onOut, isIn,}) {
        this.isIn = isIn;
        document.addEventListener('scroll', e => {
            const top = document.body.scrollTop;
            if (this.isIn && (top > max || top < min)) {
                this.isIn = !!0;
                isFunction(onOut) && onOut();
            }
            else if (!this.isIn && top <= max && top >= min) {
                this.isIn = !0;
                isFunction(onIn) && onIn();
            }
        });
    }
}
/**
 * Created by Exper1ence on 2017/1/17.
 */
import {func,} from './util';
import RFU from './RFU';

export default class Component {
    constructor(props) {
        if (func(this.update)) RFU(this.update.bind(this, this));
        if (func(this.awake)) Object.assign(this, this.awake(props));
        if (props.children !== void 0) this.$children = props.children;
        this.$element = this.render(props);
        if (func(this.start)) requestAnimationFrame(this.start.bind(this, this));
    }
}
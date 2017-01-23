/**
 * Created by Exper1ence on 2017/1/16.
 */
import HeartBeat from './HeartBeat';
import Loading from './Loading';
import render from './Render';
import Element from './Element';
import {string} from './util';
import './sass';
export {
    render,
    HeartBeat, Loading,
}
export const V = Object.assign(msg => console.log(msg), {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
});
export default function (component, props = {}, children) {
    props = Object.assign({}, props, children === void 0 ? null : {children,});
    if (string(component)) {
        return new Element(component, props);
    }
    return new component(props).$element;
}

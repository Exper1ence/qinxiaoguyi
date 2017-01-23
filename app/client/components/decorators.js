import {isFunction} from './util';

export function mixins(...mixins) {
    return (target) => {
        mixins.forEach(mixin => {
            const m = Object.create(mixin);
            for (let method in m) {
                target.prototype[method] = m[method];
            }
        });
    }
}
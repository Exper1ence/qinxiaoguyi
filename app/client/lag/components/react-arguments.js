export function args() {
    return function (target, method,) {
        let fn = target.constructor.prototype[method];
        let boundFn = null;
        Object.defineProperty(target.constructor.prototype, method, {
            get() {
                if (!boundFn) {
                    fn = fn.bind(this);
                    boundFn = (...args) => fn(this, this.state, this.props, ...args);
                }
                return boundFn;
            }
        });
        return target;
    };
}
export function bind() {
    return function (target, method,) {
        const fn = target.constructor.prototype[method];
        let boundFn = null;
        Object.defineProperty(target.constructor.prototype, method, {
            get() {
                if (!boundFn) {
                    boundFn = fn.bind(this);
                }
                return boundFn;
            }
        });
        return target;
    };
}
export const width = document.body.clientWidth;
export const height = document.body.clientHeight;
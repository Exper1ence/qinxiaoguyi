function isFunction(func) {
    return typeof func === 'function';
}
function isString(str) {
    return typeof str === 'string';
}
function isArray(arr) {
    return arr instanceof Array;
}
function forOwn(obj, cb) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            cb(prop, obj[prop]);
        }
    }
}
function isNumber(num) {
    return typeof num === 'number';
}
export {
    isFunction, isString, isArray, forOwn, isNumber,
}
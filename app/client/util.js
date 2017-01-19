function _function(func) {
    return typeof func === 'function';
}
function _string(str) {
    return typeof str === 'string';
}
function _array(arr) {
    return arr instanceof Array;
}
function _forOwn(obj, cb) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            cb(prop, obj[prop]);
        }
    }
}
export {
    _function, _string, _array, _forOwn
}
/**
 * Created by Exper1ence on 2017/1/15.
 */
/**
 * Created by Exper1ence on 2016/12/31.
 */
export const func = function (func) {
    return typeof func == 'function';
};
export const plain = function (obj) {
    return typeof  obj == 'object';
};
export const forOwn = function (obj, callback) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
        }
    }
};
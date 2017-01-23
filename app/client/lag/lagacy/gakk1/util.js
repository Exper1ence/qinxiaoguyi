/**
 * Created by Exper1ence on 2017/1/17.
 */
export const func = (func) => {
    return typeof func === 'function';
};
export const string = (str) => {
    return typeof str === 'string';
};
export const array = (arr) => {
    return arr instanceof Array;
};
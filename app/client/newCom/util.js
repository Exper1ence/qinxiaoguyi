/**
 * Created by Exper1ence on 2017/1/15.
 */
/**
 * Created by Exper1ence on 2016/12/31.
 */
import _ from 'lodash';
export default Object.assign(_, {
    tryFunction(func, ...params){
        if (_.isFunction(func)) {
            return func();
        }
    },
    ifFunction(func, callback){
        if (_.isFunction(func)) {
            return callback(func);
        }
    },
    ifPlainObject(obj, callback){
        if (_.isPlainObject(obj)) {
            return callback(obj);
        }
    }
});
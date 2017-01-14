/**
 * Created by Exper1ence on 2016/12/31.
 */
import _ from 'lodash';
const Timer = {
    _ids: [],
    getId() {
        const ids = this._ids;
        for (let i = 0; i < ids.length; i++) {
            if (ids[i] == 0) {
                ids[i] = 1;
                return i;
            }
        }
        ids.push(1);
        return ids.length - 1;
    },
    isContinued(id) {
        return this._ids[id] == 1;
    },
    clear(id){
        this._ids[id] = 0;
    }
};
export default Object.assign(_, {
    toPlainObject(obj){
        return _.isPlainObject(obj) ? obj : {};
    },
    toFunction(func){
        return _.isFunction(func) ? func : () => {
            };
    },
    setTimeout(func, delay){
        const id = Timer.getId();
        setTimeout(() => {
            if (Timer.isContinued(id)) {
                func();
                Timer.clear(id);
            }
        }, delay);
        return id;
    },
    setInterval(func, interval){
        const id = Timer.getId();
        func();
        const repeat = () => {
            if (Timer.isContinued(id)) {
                func();
                setTimeout(repeat, interval);
            }
        };
        setTimeout(repeat, interval);
        return id;
    },
    clearInterval(id){
        Timer.clear(id);
    }
})
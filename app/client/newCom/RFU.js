/**
 * Created by Exper1ence on 2017/1/15.
 */
import ReactUpdates  from 'react-dom/lib/ReactUpdates';
import ReactDom from 'react-dom';
let count = 0;
const RFU = {
    _updates: [],
    initialize(){
        requestAnimationFrame(this._tick.bind(this));
    },
    add(update){
        this._updates.push(update);
    },
    _tick(){
        ReactUpdates.flushBatchedUpdates();
        requestAnimationFrame(this._tick.bind(this));
        this._updates.forEach(update => update());
    }
};
ReactUpdates.injection.injectBatchingStrategy({
    isBatchingUpdates: false,
    batchedUpdates: function (callback, ...param) {
        if (this.isBatchingUpdates) {
            callback.apply(null, param);
        }
        else {
            this.isBatchingUpdates = true;
            ReactUpdates.flushBatchedUpdates.bind(ReactUpdates);
            callback.apply(null, param);
        }
        this.isBatchingUpdates = false;
    }
});
RFU.initialize();
export default RFU;
/**
 * Created by Exper1ence on 2017/1/15.
 */
import ReactUpdates  from 'react-dom/lib/ReactUpdates';
import {loop} from './util';

let updates = [];
function tick() {
    ReactUpdates.flushBatchedUpdates();
    updates.forEach(update => update());
    updates = updates.filter(update => update());
    requestAnimationFrame(tick);
}
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
requestAnimationFrame(tick);
export default function (update) {
    updates.push(update);
};
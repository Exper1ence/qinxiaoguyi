/**
 * Created by Exper1ence on 2017/1/17.
 */
export default class Timer {
    _start = 0;
    
    get isUp() {
        return Date.now() - this._start >= this._duration;
    }
    
    constructor(_duration) {
        this._duration = _duration;
    }
    
    start() {
        this._start = Date.now();
    }
}
export default class Timer {
    get left() {
        return Math.max(0, this._end - Date.now());
    }
    
    get isUp() {
        return Date.now() - this._start >= this._duration;
    }
    
    constructor(_duration) {
        Object.assign(this, {
            _start: 0,
            _duration,
            _end: _duration,
        });
    }
    
    start() {
        this._start = Date.now();
        this._end = this._duration + this._start;
    }
}
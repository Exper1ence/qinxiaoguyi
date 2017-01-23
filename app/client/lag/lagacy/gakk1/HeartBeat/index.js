/**
 * Created by Exper1ence on 2017/1/17.
 */
import './style.sass';
import Timer  from '../Timer';
import Component from '../Component';

export default class HeartBeat extends Component {
    _timer = new Timer(500);
    _flag = !0;
    _running = !0;
    
    awake() {
    }
    
    start({_timer, component,}) {
        component.addClass('heart-beat-begin');
        _timer.start();
    }
    
    update({_timer, _running, _flag, component}) {
        if (_running && _timer.isUp) {
            if (_flag) component.addClass('heart-beat-end');
            else component.removeClass('heart-beat-end');
            this._flag = !_flag;
            _timer.start();
        }
    }
    
    startBeat() {
        this._running = !0;
    }
    
    stopBeat() {
        this._running = !!0;
    }
    
    render() {
        return <div/>
    }
}
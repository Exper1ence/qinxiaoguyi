/**
 * Created by Exper1ence on 2017/1/17.
 */
import './style.sass';
import HeartBeat from '../HeartBeat';
import Component from '../Component';

export default class Loading extends Component {
    onStart({component, _beat,}) {
        component.addClass('loading-show');
        component.appendChild(_beat);
    }
    
    hide() {
        this.component.addClass('loading-hide');
        this._beat.stop();
    }
    
    show({_beat}) {
        this.component.removeClass('loading-hide');
        this._beat.start();
    }
    
    render() {
        return (
            <div>
                <HeartBeat/>
            </div>
        )
    }
}
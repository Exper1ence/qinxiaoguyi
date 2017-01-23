/**
 * Created by Exper1ence on 2017/1/17.
 */
import './style.sass';
import Component from '../Component';
import gakk1, {V} from '../../gakk1';
import Timer from '../Timer';

export default class Page extends Component {
    awake({children}) {
        return {
            _height: document.body.offsetHeight,
            _timer: new Timer(300)
        }
    }
    
    render({children}) {
        
        const {width, height,}=V;
        return (
            <div
                style={{
                    width, height,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        width: width + 20,
                        height,
                        overflow: 'scroll',
                        marginRight: -20,
                    }}
                >
                    <div
                        style={{
                            width,
                            height: height * 2,
                        }}
                        touchEnd={() => console.log(123)}
                    >{children}</div>
                </div>
            </div>
        )
    }
}
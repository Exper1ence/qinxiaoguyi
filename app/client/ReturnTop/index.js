import Component from '../components/Component';
import './style.scss';
import ReactTimeout from 'react-timeout';
import {args} from '../components/react-arguments';
import Timer from '../Timer';

@ReactTimeout
export default class ReturnTop extends Component {
    awake({handleScroll}) {
        const body = document.body;
        document.addEventListener('scroll', handleScroll);
        return {
            state: {
                name: 'return-top-hide',
            },
            top: document.body.scrollTop,
            body,
            timer: new Timer(300),
            height: document.body.clientHeight / 2,
        }
    }
    
    @args()
    handleScroll({body, top, setState, height,}) {
        const newTop = body.scrollTop;
        if (newTop > top || newTop < height) {
            setState({name: 'return-top-hide'});
        }
        else if (newTop < top) {
            setState({name: ''});
        }
        this.top = newTop;
    }
    
    @args()
    scrollToTop({scrollToTop, timer, scale, body}, {}, {requestAnimationFrame}) {
        body.scrollTop = timer.left * scale;
        if (body.scrollTop > 0)
            requestAnimationFrame(scrollToTop);
    }
    
    @args()
    handleClick({scrollToTop, top, timer,}) {
        this.scale = top / 300;
        timer.start();
        requestAnimationFrame(scrollToTop);
    }
    
    render({}, {name}) {
        return (
            <div className={'return-top ' + name} key={0}
                 onClick={this.handleClick.bind(this)}
            />
        )
    }
}
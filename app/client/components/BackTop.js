import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Timer from './Timer';
import ScrollUp from './ScrollUp';

export default class ReturnTop extends Component {
    top = 0;
    timer = new Timer(300);
    height = document.body.clientHeight / 2;
    src = require('./BackTop.png');
    scale = 0;
    
    scrollToTop() {
        document.body.scrollTop = this.timer.left * this.scale;
        if (document.body.scrollTop > 0)
            this.requestAnimationFrame(this.scrollToTop);
    }
    
    handleClick() {
        this.scale = this.refs.scroll.top / 300;
        this.timer.start();
        this.requestAnimationFrame(this.scrollToTop);
    }
    
    render({style, render, children, className, ...rest}) {
        
        return h(ScrollUp, {
            render: isUp => h('img', {
                ...rest,
                onClick: this.handleClick,
                style: {
                    display: isUp ? 'flex' : 'none',
                    width: 30,
                    height: 30,
                    bottom: 30,
                    right: 30,
                    borderRadius: 30,
                },
                className: 'pnfd',
                src: this.src,
            }),
            ref: 'scroll',
            isUp: !!0,
        });
    }
}
ReturnTop.propTypes = {};
ReturnTop.defaultProps = {};
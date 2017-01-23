import Component from '../components/Component';
import './style.scss';

export default class Page extends Component {
    render() {
        const {children}=this.props;
        const {clientHeight, clientWidth,}=document.body;
        const style = {
            width: clientWidth,
            height: clientHeight,
        };
        return (
            <div style={{
                ...this.props.style,
                ...style,
                overflow: 'hidden',
            }}>
                <div style={{
                    ...style,
                    width: clientWidth + 50,
                    overflow: 'scroll',
                    marginRight: -50,
                }}>
                    <div style={{
                        ...style,
                        height: clientHeight * 2,
                    }}>{children}</div>
                </div>
            </div>
        )
    }
}
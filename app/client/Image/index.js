import Component from '../components/Component';
import ReactTimeout from 'react-timeout';

@ReactTimeout
export default class Image extends Component {
    render() {
        const {style, src,className,}=this.props;
        return (
            <div
                className={className}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    ...style,
                }}
            />
        )
    }
}
Image.defaultProps = {};
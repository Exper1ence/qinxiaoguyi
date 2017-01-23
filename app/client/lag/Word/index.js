import Component from '../components/Component';
import ReactTimeout from 'react-timeout';
import {args} from '../components/react-arguments';
import {Motion, spring,} from 'react-motion';

@ReactTimeout
export default class Word extends Component {
    awake({}) {
        return {}
    }
    
    @args()
    hide({setState}) {
        setState({name: 'word-hide'});
    }
    
    @args()
    show({setState}) {
        setState({name: 'word-show'});
    }
    
    render({}, {}, {className, text, bgVisible, textVisible}) {
        return (
            <Motion
                defaultStyle={{opacity: 0}} style={{opacity: spring(bgVisible ? 1 : 0)}}
            >
                {style => (
                    <div className='jcct aict' style={{
                        width: 58,
                        height: 58,
                        fontSize: 36,
                        fontWeight: 'bold',
                        backgroundImage: `url(${require(("./bg.png"))})`,
                        backgroundSize: 'cover',
                        ...style,
                    }}>
                        <Motion
                            defaultStyle={{opacity: 0}} style={{opacity: spring(textVisible ? 1 : 0)}}
                        >
                            {style => (
                                <div style={{
                                    ...style,
                                    
                                }}>
                                    {text}
                                </div>
                            )}
                        </Motion>
                    </div>
                )}
            </Motion>
        )
    }
}
Word.defaultProps = {
    text: ''
};
import Component from '../components/Component';
import ReactTimeout from 'react-timeout';
import {args, bind, width, height,} from '../components/react-arguments';
import ScrollSensitive from '../ScrollSensitive';
import Word from '../Word';
import {Motion, spring, presets,} from 'react-motion';
// noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
// gentle: { stiffness: 120, damping: 14 },
// wobbly: { stiffness: 180, damping: 12 },
// stiff: { stiffness: 210, damping: 20 }
@ReactTimeout
export default class Words extends Component {
    height = height / 2 + 100;
    width = width + 200;
    timer = 0;
    
    awake() {
        this.state = {
            isVisible: false,
            textCount: 0,
        };
    }
    
    start() {
        this.handleIn();
    }
    
    @bind()
    handleIn() {
        this.setState({textCount: 0});
        const timer = this.timer = setTimeout(() => {
            if (this.timer === timer) {
                this.setState({isVisible: true});
                this.startCount();
            }
        }, 500);
    }
    
    @bind()
    handleOut() {
        this.setState({isVisible: false, textCount: 0});
    }
    
    startCount() {
        this.setState({textCount: this.state.textCount + 1});
        if (this.state.textCount < 4) {
            const timer = this.timer = setTimeout(() => {
                if (this.timer === timer) {
                    this.startCount();
                }
            }, 500);
        }
    }
    
    render() {
        const {height, width,}=this;
        const {isVisible, textCount}=this.state;
        const words = ['琴', '箫', '古', '艺'].map((w, i) => (
            <Word key={i} text={w} bgVisible={isVisible} textVisible={i < textCount}/>
        ));
        return (
            <div className='w100p h100p jcfe aict fdcl ofhi' style={{
                height,
            }}>
                {[<ScrollSensitive
                    isIn={!0}
                    min={0}
                    max={height / 2}
                    onIn={this.handleIn}
                    onOut={this.handleOut}
                    key={0}
                />,
                    <div key={1} className='words between between-center'>
                        {words}
                    </div>,
                    <Motion key={2}
                            defaultStyle={{
                                marginRight: -width,
                            }}
                            style={{
                                marginRight: spring(isVisible ? 0 : -width, {
                                    stiffness: 400, damping: 12,
                                }),
                            }}>
                        {style => (
                            <div className='words-synopsis center-center'
                                 style={{
                                     ...style,
                                     height: 100,
                                     width: 100,
                                 }}
                            >
                                招生简章</div>
                        )}
                    </Motion>
                ]}
            </div>
        )
    }
}
Words.defaultProps = {};
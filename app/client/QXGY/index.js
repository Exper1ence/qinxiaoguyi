import Component from '../components/Component';
import './style.scss';
import Loading from '../Loading';
import ReactTimeout from 'react-timeout';
import {args} from '../components/react-arguments';
import ScrollSensitive from '../ScrollSensitive';

@ReactTimeout
export default class QXGY extends Component {
    awake() {
        return {
            state: {
                content: null,
                removeLoading: !!0,
            }
        }
    }
    
    render({}, {content, removeLoading,}, {setTimeout}) {
        return (
            <div className='full-size'>
                {[
                    removeLoading ? null : (
                            <Loading render={({Page, Words, ReturnTop}) => {
                                this.setState({
                                    content: (
                                        [<ReturnTop key={1}/>,
                                            <div style={{
                                                backgroundImage: `url(${require('./bg.png')})`,
                                                height: 2000,
                                                width: '100%',
                                                flexDirection: 'column'
                                            }}
                                            >
                                                <Words/>as
                                            </div>
                                        ]
                                    )
                                });
                                this.refs.loading.hide();
                                setTimeout(this.setState.bind(this, {removeLoading: !0}), 500);
                            }} key={0} ref='loading'/>
                        ),
                    content,
                ]}
            </div>
        )
    }
}
QXGY.defaultProps = {};
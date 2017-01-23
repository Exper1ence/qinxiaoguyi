import Component from '../components/Component';
import './style.scss';
import HeartBeat from '../HeartBeat';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            name: 'full-size center-center loading',
        };
        System.import('../components')
            .then((components) => {
                setTimeout(() => props.render(components));
            })
            .catch(e => console.log(e));
    }
    
    hide() {
        this.setState(({name}) => {
            return {name: name + ' loading-hide'}
        });
    }
    
    render() {
        return (
            <div className={this.state.name} ref='div'>
                <HeartBeat/>
            </div>
        )
    }
}
Loading.defaultProps = {
    render: () => null,
};
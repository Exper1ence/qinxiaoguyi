import Component from '../components/Component';
import './style.scss';
export default class HeartBeat extends Component {
    render() {
        return (
            <div className='heart-beat-wrapper'>
                {[
                    <div className='heart-beat' key={0}></div>,
                    <div className='heart-beat-center' key={1}></div>
                ]}
            </div>
        )
    }
}
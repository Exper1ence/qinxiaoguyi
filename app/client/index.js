/**
 * Created by Exper1ence on 2016/12/30.
 */
// import Loading from './gakk1/Loading';
// import Page from './gakk1/Page';
// import gakk1, {render, V,} from './gakk1';
// window.V = V;
// render(<Page>
//     <div style.scss={{
//         width: V.width,
//         height: V.height,
//         backgroundColor:'red',
//     }}>qweqwe
//     </div>
// </Page>);
// //     require.ensure('./gakk1', () => {
// //         // setTimeout(() => com.hide(), 2000);
// //     })
import './scss'
import {render} from 'react-dom';
import Component from './components/Component';
// import './HeartBeat/style.scss';
import HeartBeat from './HeartBeat';
import Loading from './Loading';
import QXGY from './QXGY';

render((
    <div className='full-size center-center'><QXGY/></div>
), document.getElementById('qxgy'));

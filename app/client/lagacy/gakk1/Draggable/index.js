/**
 * Created by Exper1ence on 2017/1/17.
 */
import Component from '../Component';
import gakk1, {V} from '../../gakk1';
import {func,} from '../util';
// export default class Draggable extends Component {
//     awake({}) {
//         return {
//             _dir: -1,
//             _last: null,
//         }
//     }
//
//     render({}, {style.scss,}) {
//         const {width, height, ...rest}=style.scss;
//         return (
//             <div
//                 style.scss={{
//                     ...style.scss,
//                     overflow: 'hidden',
//                 }}
//             >
//                 <div
//                     style.scss={{
//                         width: width + 20,
//                         height: height + 20,
//                         overflow: 'scroll',
//                         marginRight: '-20px',
//                     }}
//                 >
//                     <div
//                         style.scss={{
//                             width,
//                             height,
//                             backgroundColor: 'green',
//                         }}
//                     >
//                         asdasdasd
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
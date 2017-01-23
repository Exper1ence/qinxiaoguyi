import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import Search from './Search';
import DropDown from './DropDown';
import ScrollUp from './ScrollUp';
import View from './View';

export default class Navigator extends Component {
    start() {
        
    }
    
    render({style, render, children, className, ...rest}) {
        return h(ScrollUp, {
            render: isUp => h('div', {
                children: h(View, {
                    ...rest,
                    className: 'pnfd whfp',
                    isExisted: isUp,
                    children,
                }),
                style: {
                    height: 30,
                },
                className: 'whfp',
            }),
        });
    }
}
Navigator.propTypes = {};
Navigator.defaultProps = {};
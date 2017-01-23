import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import View from './View';
import Link from './Link';

export default class DropDown extends Component {
    awake({}) {
        this.state = {
            isExisted: !!0
        };
    }
    
    handleClick() {
        this.setState({isExisted: !this.state.isExisted});
    }
    
    render({style, render, children, className, authority, ...rest}) {
        
        return h(View, {
            children: [
                h('button', {
                    ...rest,
                    children: 'dropdown',
                    key: 0,
                    onClick: this.handleClick,
                }),
                h(View, {
                    key: 1,
                    children: [
                        h(Link, {content: 'home', key: 0, to: '/'}),
                        h(Link, {content: 'about me', key: 1, to: '/about'}),
                        authority > 0 ? h(Link, {content: 'writing', key: 2, to: '/writing'}) : null,
                        authority > 0 ? h(Link, {content: 'user', key: 3, to: '/user'}) : null,
                    ],
                    className: 'pnae fdcn',
                    style: {
                        top: 20,
                        backgroundColor: '#fff'
                    },
                    isExisted: this.state.isExisted,
                    onClick: this.handleClick,
                }),
            ]
        });
    }
}
DropDown.propTypes = {};
DropDown.defaultProps = {};
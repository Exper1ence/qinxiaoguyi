import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import View from './View';
import {mixins,} from './decorators';
import {} from './mixins';

export default class User extends Component {
    handleLogoutClick(e) {
        this.props.handleLogoutClick && this.props.handleLogoutClick(e, this);
    }
    
    render({render, style, children, className, handleLogoutClick, user, ...rest}) {
        return h(View, {
            children: user.authority > 0 ? [
                    `hello ${user.username}`,
                    h('button', {
                        children: 'log out',
                        onClick: this.handleLogoutClick,
                    }),
                ] : null,
            className: 'whfp fdcn',
        });
    }
}
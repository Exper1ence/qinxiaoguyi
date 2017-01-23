import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import View from './View';
import {mixins,} from './decorators';
import {} from './mixins';

export default class Login extends Component {
    username = '';
    password = '';
    
    handleLoginClick(e) {
        this.username = this.refs.username.value;
        this.password = this.refs.password.value;
        this.props.handleLoginClick && this.props.handleLoginClick(e, this);
    }
    
    render({render, style, children, className, user, handleLoginClick, ...rest}) {
        return h(View, {
            children: user.authority !== 0 ?
                null :
                [
                    h(View, {
                        children: [
                            h(View, {content: 'username'}),
                            h('input', {ref: 'username'}),
                        ],
                        className: 'whfp',
                    }),
                    h(View, {
                        children: [
                            h(View, {content: 'password'}),
                            h('input', {ref: 'password'}),
                        ],
                        className: 'whfp',
                    }),
                    h('button', {
                        children: 'login',
                        onClick: this.handleLoginClick,
                    }),
                ],
            className: 'whfp fdcn',
        });
    }
}
Login.propTypes = {};
Login.defaultProps = {};
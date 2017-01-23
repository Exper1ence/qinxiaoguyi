import {Component, PropTypes, h,} from './Component';
import {Motion, spring,} from 'react-motion';
import View from './View';
import {mixins,} from './decorators';
import {} from './mixins';

export default class Writing extends Component {
    title = '';
    text = '';
    stat = {owner: '', date: '',};
    
    handleSendClick(e) {
        this.title = this.refs.title.value;
        this.text = this.refs.text.value;
        this.stat.owner = this.props.user.username;
        this.stat.date = new Date().toDateString();
        this.props.handleSendClick && this.props.handleSendClick(e, this);
    }
    
    render({render, style, children, className, handleSendClick, user, ...rest}) {
        return user.authority === 1 ?
            h(View, {
                children: [
                    h('input', {ref: 'title'}),
                    h('textarea', {
                        style: {
                            height: 300,
                        },
                        className: 'whfp',
                        ref: 'text',
                    }),
                    h(View, {
                        children: h('button', {
                            children: 'send',
                            onClick: this.handleSendClick,
                        }),
                        className: 'jcfe whfp',
                    }),
                ],
                className: 'whfp fdcn aicr',
            }) :
            null;
    }
}
Writing.propTypes = {};
Writing.defaultProps = {};
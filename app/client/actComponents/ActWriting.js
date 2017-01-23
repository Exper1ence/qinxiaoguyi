import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import {connect,} from 'react-redux';
import store from './store';
import updatePosts from './actions/updatePosts';
import Writing from '../components/Writing';
import ajax from './ajax';
import {browserHistory} from 'react-router';
import {Post} from '../../../db/models';

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        handleSendClick: (e, {title, text, stat,}) => {
            ajax({
                url: 'posts',
                method: 'post',
                json: {title, text, stat,},
            })
                .then(result => {
                    if (result.ce === 233) {
                        const posts = store.getState().posts;
                        store.dispatch(updatePosts([new Post({title, text, stat,}), ...posts]));
                        browserHistory.push('/');
                    }
                });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Writing);


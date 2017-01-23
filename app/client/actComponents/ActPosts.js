import Posts from '../components/Posts';
import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import {connect,} from 'react-redux';
import ajax from './ajax';
import store from './store';
import updatePosts from './actions/updatePosts';
import {Post} from '../../../db/models';

ajax({
    url: '/posts',
    json: {},
})
    .then(result => {
        if (result.ce === 233) {
            const posts = result.da.map(post => new Post(post));
            store.dispatch(updatePosts(posts));
        }
    });

function mapStateToProps(state) {
    return {
        content: state.posts,
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


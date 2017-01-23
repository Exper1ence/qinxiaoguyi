import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import {connect,} from 'react-redux';
import store from './store';
import updateUser from './actions/updateUser';
import User from '../components/User';
import ajax from './ajax';
import {browserHistory} from 'react-router';

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        handleLogoutClick: () => {
            ajax({
                url: 'session',
                method: 'delete',
            })
                .then(result => {
                    if (result.ce === 233) {
                        store.dispatch(updateUser({authority: 0}));
                        browserHistory.push('/login');
                    }
                });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);


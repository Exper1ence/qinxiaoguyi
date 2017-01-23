import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import {connect,} from 'react-redux';
import store from './store';
import updateUser from './actions/updateUser';
import Login from '../components/Login';
import ajax from './ajax';
import {browserHistory,} from 'react-router';

ajax({
    url: 'session',
})
    .then(result => {
        const pathname = browserHistory.getCurrentLocation().pathname;
        if (result.ce === 233) {
            store.dispatch(updateUser({authority: 1, ...result.da}));
            if (pathname == '/login') {
                browserHistory.push('/user');
            }
        }
        else {
            switch (pathname) {
                case '/writing':
                case '/user':
                    browserHistory.push('/login');
                    break;
            }
            store.dispatch(updateUser({authority: 0,}));
        }
    });

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        handleLoginClick: (e, {username, password,}) => {
            ajax({
                url: '/session',
                method: 'post',
                json: {username, password,},
            })
                .then(result => {
                    if (result.ce === 233) {
                        store.dispatch(updateUser({authority: 1, ...result.da}));
                        browserHistory.push('/user');
                    }
                });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


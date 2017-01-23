import {Component, PropTypes, h,} from '../components/Component';
import {Motion, spring,} from 'react-motion';
import {connect,} from 'react-redux';
import ajax from './ajax';
import store from './store';
import updatePosts from './actions/updatePosts';
import DropDown from '../components/DropDown';

function mapStateToProps(state) {
    return {
        authority: state.user.authority,
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);


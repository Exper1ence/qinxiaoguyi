import {UPDATE_USER} from '../actions/types';


export default function (state = {authority: -1}, action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.user;
        default:
            return state;
    }
}
import {UPDATE_USER} from './types';


export default function (user) {
    return {
        type: UPDATE_USER,
        user,
    }
}

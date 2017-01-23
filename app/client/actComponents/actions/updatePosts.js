import {UPDATE_POSTS} from './types';


export default function (posts) {
    return {
        type: UPDATE_POSTS,
        posts,
    }
}

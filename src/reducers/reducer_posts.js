import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {   // previous state and action
    switch(action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };  
            // newState[post.id] = post;
            // return newState;

            // es6
            return { ...state, [action.payload.data.id]: action.payload.data }; // key:value 페어를 만들어서 ...state에 넣어줌
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');        // array -> object(map)
        default:
            return state;
    }
}
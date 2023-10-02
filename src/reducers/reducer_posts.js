import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {   // previous state and action
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');        // array -> object(map)
        default:
            return state;
    }
}
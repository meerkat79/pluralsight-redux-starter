import * as types from '../actions/actionTypes'

export default function errorReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_COURSES_ERROR:
            return action.errors;

        default: 
            return state;
    }
}

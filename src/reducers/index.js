import {combineReducers} from 'redux';
import courses from './courseReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
    courses, errors
});

export default rootReducer;

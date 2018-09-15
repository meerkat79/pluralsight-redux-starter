import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'

//action creator example below
export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCoursesError(errors) {
    return {type: types.LOAD_COURSES_ERROR, errors};
}

//thunk example below
export function loadCourses() {
    return function (dispatch){
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses))
        }).catch(errors => {
            dispatch(loadCoursesError(errors))
        });
    };
}
import {SET_LANGUAGE,INITIAL_ROUTE} from '../types';
export const setSelectedLanguage = (data) => {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            dispatch({
                type: SET_LANGUAGE,
                payload: data,
            });
            resolve();
        });
    };
}

export const setInitialRoute = (data) => {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            dispatch({
                type: INITIAL_ROUTE,
                payload: data,
            });
            resolve();
        });
    };
}
import * as actionTypes from './actionTypes';

export const setVisibility = () => {
    return {
        type: actionTypes.SET_VISIBILITY,
    };
};

export const initVisibility = () => {
    return dispatch => {
        dispatch(setVisibility(isVisible));
    };
};

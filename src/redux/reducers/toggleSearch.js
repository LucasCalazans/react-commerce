import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isVisible: false,
};

const setVisibility = (state, action) => {
    return {
        ...state,
        isVisible: !state.isVisible,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY:
            return setVisibility(state, action);
        default:
            return state;
    }
};

export default reducer;

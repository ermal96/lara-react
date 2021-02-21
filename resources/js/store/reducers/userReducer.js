import { types } from "../types";

const defaultState = {
    loggedIn: false,
    info: {},
    errors: [],
    loading: false,
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.user.SET_USER:
            return {
                ...state,
                loggedIn: true,
                info: action.payload,
            };

        case types.user.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };

        case types.user.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
};

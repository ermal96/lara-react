import { types } from "../types";

const defaultState = {
    loggedIn: false,
    info: {},
    errors: [],
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

        default:
            return state;
    }
};

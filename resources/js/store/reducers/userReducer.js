import { types } from "../types";

const defaultState = {
    loggedIn: false,
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.user.SET_USER:
            return {
                ...state,
                loggedIn: action.payload,
            };

        default:
            return state;
    }
};

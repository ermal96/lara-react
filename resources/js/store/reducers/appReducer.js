import { types } from "../types";

const defaultState = {
    appLive: false,
};

export const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.app.LOAD_APP:
            return {
                ...state,
                appLive: action.payload,
            };

        default:
            return state;
    }
};

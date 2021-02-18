import { types } from "../types";
import axios from "axios";

// action creators
export const init = (payload) => ({
    type: types.app.LOAD_APP,
    payload,
});

// action handlers
export const initApp = () => async (dispatch) => {
    try {
        const res = await axios.get("/init");
        dispatch(init(true));
    } catch (error) {
        dispatch(init(false));
    }
};

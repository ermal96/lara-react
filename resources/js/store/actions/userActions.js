import { types } from "../types";
import axios from "axios";

// action creators
export const setUser = (payload) => ({
    type: types.user.SET_USER,
    payload,
});

export const setError = (payload) => ({
    type: types.user.SET_ERRORS,
    payload,
});

// action handlers
export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post("/users", data);
        console.log(res);
        dispatch(setError([]));
        dispatch(setUser(res.data.data));
    } catch (error) {
        dispatch(setError(error.response.data.error));
    }
};

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

export const setLoading = (payload) => ({
    type: types.user.SET_LOADING,
    payload,
});

// action handlers
export const register = (data) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const res = await axios.post("/auth/register", data);

        dispatch(setError([]));

        dispatch(setUser(res.data.data));

        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error.response.data.error));
        dispatch(setLoading(false));
    }
};

export const login = (data) => async (dispatch) => {
    console.log(data);
    try {
        dispatch(setLoading(true));

        const res = await axios.post("/auth/login", data);

        dispatch(setError([]));

        dispatch(setUser(res.data.data));

        dispatch(setLoading(false));
    } catch (error) {
        console.log(error.response);
        dispatch(setError(error.response.data.error));
        dispatch(setLoading(false));
    }
};

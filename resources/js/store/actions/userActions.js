import { types } from "../types";
import axios from "axios";

// action creators
export const setUser = (payload) => ({
    type: types.user.SET_USER,
    payload,
});

// action handlers
export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post("/auth/register", data);

        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
};

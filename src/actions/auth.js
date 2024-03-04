import { AUTH, AUTHSIGNUP } from "../constants/actionTypes";
import * as api from '../api/index.js'


export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTHSIGNUP, data });

        history.push("/confirmation-email");
    } catch (error) {
        console.log(error);
    }
};
export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};
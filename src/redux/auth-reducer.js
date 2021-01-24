import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    };
};

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const authLogin = () => (dispatch) => {
    authAPI.authLogin().then(data => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setUserData(id, email, login, true));
        };
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(authLogin());
        } else {
            const message = data?.messages?.length > 0 ? data.messages[0] : "Some error!";
            dispatch(stopSubmit("login", { _error: message }));
        };
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        };
    });
};

export default authReducer;
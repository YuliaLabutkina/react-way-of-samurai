import {authAPI} from '../api/api';

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, {type, data}) => {
    switch (type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const authLogin = () => (dispatch) => {
    authAPI.authLogin().then(data => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setUserData(id, email, login));
        }
    })
};

export default authReducer;
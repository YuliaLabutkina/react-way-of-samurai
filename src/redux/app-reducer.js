import { authLogin } from './auth-reducer';

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, {type}) => {
    switch (type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    };
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initialize = () => (dispatch) => {
    const promise = dispatch(authLogin());
    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
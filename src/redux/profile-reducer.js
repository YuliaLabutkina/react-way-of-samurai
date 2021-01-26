import {profileAPI} from '../api/api';

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
    posts: [
        { "message": "Hi, how are you?", "id": 1, "likesCount": 0 },
        { "message": "It's my first post", "id": 2, "likesCount": 23 }
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, {type, profile, status, profileAddNewPostForm, photo}) => {
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { "message": profileAddNewPostForm, "id": 3, "likesCount": 1 }],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: status,
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...profile, photos: photo},
            };
        default:
            return state;
    };
};

export const addPostActionCreator = (profileAddNewPostForm) =>  ({ type: ADD_POST, profileAddNewPostForm });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo });

export const getUserProfile = (userId) => async (dispatch) => {
    const result = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(result));
};

export const getStatus = (userId) => async (dispatch) => {
    const result = await profileAPI.getStatus(userId);
    dispatch(setStatus(result));
};

export const updateStatus = (status) => async (dispatch) => {
    const {resultCode} = await profileAPI.updateStatus(status)
    if (resultCode === 0) {
      dispatch(setStatus(status));
    };
};

export const savePhoto = (file) => async (dispatch) => {
    const { resultCode, data } = await profileAPI.savePhoto(file);
    if (resultCode === 0) {
      dispatch(savePhotoSuccess(data.photos));
    };
};

export default profileReducer;
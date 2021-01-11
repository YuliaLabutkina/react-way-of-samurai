import {usersAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        { "message": "Hi, how are you?", "id": 1, "likesCount": 0 },
        { "message": "It's my first post", "id": 2, "likesCount": 23 }
    ],
    newPostText: 'Bro',
    profile: null,
};


const profileReducer = (state = initialState, {type, newText, profile}) => {
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { "message": state.newPostText, "id": 3, "likesCount": 1 }],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: profile,
            };
        default:
            return state;
    };
};

export const addPostActionCreator = () =>  ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};

export default profileReducer;
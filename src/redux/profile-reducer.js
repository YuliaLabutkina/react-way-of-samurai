const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () =>  ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

const initialState = {
    posts: [
        { "message": "Hi, how are you?", "id": 1, "likesCount": 0 },
        { "message": "It's my first post", "id": 2, "likesCount": 23 }
    ],
    newPostText: 'Bro'
};


const profileReducer = (state = initialState, {type, newText}) => {
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
        default:
            return state;
    }
};

export default profileReducer;
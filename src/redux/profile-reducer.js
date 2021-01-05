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
            const newPost = { "message": state.newPostText, "id": 3, "likesCount": 1 };
            state.newPostText = '';
            state.posts = [...state.posts, newPost];
            return state;
        
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = newText;
            return state;
    
        default:
            return state;
    }

    // if (action.type === ADD_POST) {
    //     const newPost = { "message": state.newPostText, "id": 3, "likesCount": 1 };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }


    // return state;
};

export default profileReducer;
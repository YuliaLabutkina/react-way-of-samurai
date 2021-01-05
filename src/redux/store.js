import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';

const store = {
    _state: {

        messagesPage: {
            messages: [
                { "message": "Hi", "id": 1 },
                { "message": "Hello", "id": 2 },
                { "message": "Yo", "id": 3 },
                { "message": "Hello world", "id": 4 }
            ],

            users: [
                { "name": "Yulia", "id": 1 },
                { "name": "Artem", "id": 2 },
                { "name": "Illya", "id": 3 },
                { "name": "Oleksandr", "id": 4 }
            ],

            newMessagesBody: "",
        },
    
        profilePage: {
            posts: [
                { "message": "Hi, how are you?", "id": 1, "likesCount": 0 },
                { "message": "It's my first post", "id": 2, "likesCount": 23 }
            ],
            newPostText: 'Bro'
        },

        sideBar: {
            friends: [
                { "name": "Artem", "id": 1 },
                { "name": "Illya", "id": 2 },
                { "name": "Alex", "id": 3 }
            ]
        }
    },

    _callSubscriber() {
        console.log("State")
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
    this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
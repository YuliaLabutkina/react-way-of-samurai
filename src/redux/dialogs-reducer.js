const UPDATE_NEW_MASSAGES_BODY = "UPDATE-NEW-MASSAGES-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessageCreator = () => ({type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MASSAGES_BODY, body })

const initialState = {
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
};

const dialogsReducer = (state = initialState, { type, body }) => {
    switch (type) {
        case UPDATE_NEW_MASSAGES_BODY:
            return {
                ...state,
                newMessagesBody: body,
            };
        case SEND_MESSAGE:
            return {
                ...state,
                newMessagesBody: '',
                messages: [...state.messages, { "message": state.newMessagesBody, "id": 5 }],
            };
        default:
            return state;
    };
};

export default dialogsReducer;
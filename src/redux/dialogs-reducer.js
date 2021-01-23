const SEND_MESSAGE = "SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, { type, newMessageBody }) => {
    switch (type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { "message": newMessageBody, "id": 5 }],
            };
        default:
            return state;
    };
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
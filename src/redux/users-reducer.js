const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, {type, userId, users}) => {
    switch (type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === userId) {
                        return { ...user, followed: false }
                    };
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...users],
            };
        default:
            return state;
    }
};


export const followAC = (userId) =>  ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_TOTAL_USERS_CURRENT = "GET_TOTAL_USERS_CURRENT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, {type, userId, users, totalUsersCount, currentPage}) => {
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
                users: [...users],
            };
        case GET_TOTAL_USERS_CURRENT:
            return {
                ...state,
                totalUsersCount: totalUsersCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: currentPage,
            };
        default:
            return state;
    }
};

export const followAC = (userId) =>  ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const getTotalUsersCount = (totalUsersCount) => ({ type: GET_TOTAL_USERS_CURRENT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default usersReducer;
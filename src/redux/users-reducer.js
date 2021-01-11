import {usersAPI} from '../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const GET_TOTAL_USERS_CURRENT = "GET_TOTAL_USERS_CURRENT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, {type, userId, users, totalUsersCount, currentPage, isFetching}) => {
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: isFetching
                    ? [...state.followingInProgress, userId]
                    : state.followingInProgress.filter(id => id !== userId), 
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) =>  ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const getTotalUsersCount = (totalUsersCount) => ({ type: GET_TOTAL_USERS_CURRENT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUser = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(getTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    });
};

export const follow = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));

    usersAPI.followUser(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(id));
            dispatch(toggleFollowingProgress(false, id));
        };
    }).catch(e => {
        dispatch(toggleFollowingProgress(false, id));
    });
};

export const unfollow = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    
    usersAPI.unFollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
                dispatch(toggleFollowingProgress(false, id));
            };
        }).catch(e => {
            dispatch(toggleFollowingProgress(false, id));
        });
};

export default usersReducer;
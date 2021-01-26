import {usersAPI} from '../api/api';
import { updateObjectInArray } from '../utils/validators/object-helpers';

const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET_USERS";
const GET_TOTAL_USERS_CURRENT = "user/GET_TOTAL_USERS_CURRENT";
const SET_CURRENT_PAGE = "user/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "user/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "user/TOGGLE_IS_FOLLOWING_PROGRESS";

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
                users: updateObjectInArray(state.users, userId, "id", {followed: true}),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, userId, "id", {followed: false}),
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
    };
};

export const followSuccess = (userId) =>  ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const getTotalUsersCount = (totalUsersCount) => ({ type: GET_TOTAL_USERS_CURRENT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUser = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const { items, totalCount } = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(items));
    dispatch(getTotalUsersCount(totalCount));
    dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));

    try {
        const { resultCode } = await apiMethod(userId);
        if (resultCode === 0) {
            dispatch(actionCreator(userId));
            dispatch(toggleFollowingProgress(false, userId));
        };
    } catch {
        dispatch(toggleFollowingProgress(false, userId));
    };
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
    };
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);
    };
};

export default usersReducer;
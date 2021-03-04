import { UsersAPI } from "../../api/api";
import types from "./types";

const follow = (userId) => ({
    type: types.FOLLOW_USER,
    userId
});
const unfollow = (userId) => ({
    type: types.UNFOLLOW_USER,
    userId
});
const setUsers = (users) => ({
    type: types.SET_USERS,
    users
});
const setCurrentPage = (currentPage) => ({
    type: types.SET_CURRENT_PAGE,
    currentPage
});
const setTotalCount = (totalCount) => ({
    type: types.SET_TOTAL_COUNT,
    totalCount
});
const toggleIsLoading = (isLoading) => ({
    type: types.TOGGLE_IS_LOADING,
    isLoading
});
const toggleFollowingProgress = (isFetching, userId) => ({
    type: types.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsLoading(true));
    UsersAPI.getUsersAPI(currentPage, pageSize).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    });
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsLoading(false));
}
export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    UsersAPI.followAPI(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    UsersAPI.unfollowAPI(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}
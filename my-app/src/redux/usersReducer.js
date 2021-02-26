import { UsersAPI } from "./../api/api";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users : [],
    isLoading : false,
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_USER: 
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                ...state.users,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId] 
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default: {
            return state;
        }
    } 
}

export const follow = (userId) => ({ 
    type: FOLLOW_USER,
    userId
});
export const unfollow = (userId) => ({ 
    type: UNFOLLOW_USER,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING,
    isLoading
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
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
        if (data.resultCode == 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    UsersAPI.unfollowAPI(userId).then((data) => {
        if (data.resultCode == 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}

export default usersReducer;
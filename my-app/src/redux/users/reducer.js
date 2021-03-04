import types from "./types";

let initialState = {
    users: [],
    isLoading: false,
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };
        case types.UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };
        case types.SET_USERS:
            return {
                ...state,
                ...state.users,
                users: action.users
            }
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case types.SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case types.TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case types.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: {
            return state;
        }
    }
}

export default usersReducer;
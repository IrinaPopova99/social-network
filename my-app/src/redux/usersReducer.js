const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const GET_USERS = 'GET_USERS';
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    users : [],
    isLoading : false,
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
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
        case GET_USERS:
            return {
                ...state,
                ...state.users,
                users: action.users
            }
        case GET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case GET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
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
export const getUsers = (users) => ({
    type: GET_USERS,
    users
});
export const getCurrentPage = (currentPage) => ({
    type: GET_CURRENT_PAGE,
    currentPage
});
export const getTotalCount = (totalCount) => ({
    type: GET_TOTAL_COUNT,
    totalCount
});
export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING,
    isLoading
});

export default usersReducer;
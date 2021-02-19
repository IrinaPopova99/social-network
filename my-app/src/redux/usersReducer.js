const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const GET_USERS = 'GET_USERS';

let initialState = {
    users : [],
    loading : false,
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
        default: {
            return state;
        }
    } 
}

export const followUserAC = (userId) => ({ 
    type: FOLLOW_USER,
    userId
});
export const unfollowUserAC = (userId) => ({ 
    type: UNFOLLOW_USER,
    userId
});
export const getUsersAC = (users) => ({
    type: GET_USERS,
    users
});

export default usersReducer;
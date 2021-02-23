const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                userId: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                photo: action.photo
            }
        default: {
            return state;
        }
    } 
}

export const setAuthUserData = (data) => ({
    type: SET_AUTH_USER_DATA,
    data
});
export const setCurrentUser = (photo) => ({
    type: SET_CURRENT_USER,
    photo
});

export default authReducer;
import types from "./types";

let initialState = {
    userId: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_AUTH_USER_DATA:
            return {
                ...state,
                userId: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth
            };
        case types.SET_CURRENT_USER:
            return {
                ...state,
                photo: action.photo
            }
        default: {
            return state;
        }
    } 
}

export default authReducer;
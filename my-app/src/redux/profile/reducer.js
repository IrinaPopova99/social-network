import types from "./types";

let initialState = {
    posts : [
        {id: 1, post: "Hi, how are you", likesCount: 23},
        {id: 2, post: "It's my first post", likesCount: 5},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, { id: 5, post: action.text, likesCount: 0 }]
            };
        case types.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case types.SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case types.PUT_USER_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default: {
            return state;
        }
    } 
}

export default profileReducer;
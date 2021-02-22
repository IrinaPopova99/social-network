const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';

let initialState = {
    posts : [
        {id: 1, post: "Hi, how are you", likesCount: 23},
        {id: 2, post: "It's my first post", likesCount: 5},
    ],
    newPostText : "Hello",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, { id: 5, post: text, likesCount: 0 }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: {
            return state;
        }
    } 
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
export const getUserProfile = (profile) => ({
    type: GET_USER_PROFILE, 
    profile
});

export default profileReducer;
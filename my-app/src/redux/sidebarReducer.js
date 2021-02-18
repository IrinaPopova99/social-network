const GET_FRIENDS = 'GET_FRIENDS';
let initialState = {
    friends : [
        {name: 'Dima'},
        {name: 'Sveta'},
        {name: 'Sasha'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FRIENDS: return state;
        default: return state
    }
}

export const getFriendsActionCreator = () => ({ type: GET_FRIENDS })

export default sidebarReducer;
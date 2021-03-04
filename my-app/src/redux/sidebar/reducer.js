import types from "./types";

let initialState = {
    friends: [
        { name: 'Dima' },
        { name: 'Sveta' },
        { name: 'Sasha' },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FRIENDS: return state;
        default: return state
    }
}

export default sidebarReducer;
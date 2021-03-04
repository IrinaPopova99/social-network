import types from "./types";

let initialState = {
    dialogs : [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
    ],
    messages : [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "Yeah"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEND_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.text}] // слева закидываем все элементы из старого messages,справа добавляем новый элемент в конец
            };
        default: {
            return state;
        }
    } 
}

export default dialogsReducer;
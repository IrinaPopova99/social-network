const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
    newMessageText : "",
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 6, message: text}] // слева закидываем все элементы из старого messages,справа добавляем новый элемент в конец
            };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default: {
            return state;
        }
    } 
}

export const addMessageActionCreater = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
});

export default dialogsReducer;
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            debugger;
            state.newMessageText = "";
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessage;
            return state;
        }
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
import types from "./types";

const addMessage = (text) => ({ type: types.SEND_MESSAGE, text });

export const addNewMessage = (text) => (dispatch) => {
    dispatch(addMessage(text))
};
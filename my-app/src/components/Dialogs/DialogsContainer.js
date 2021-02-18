import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreater, updateMessageTextActionCreater } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(addMessageActionCreater()),
        updateMessageText: (text) => dispatch(updateMessageTextActionCreater(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
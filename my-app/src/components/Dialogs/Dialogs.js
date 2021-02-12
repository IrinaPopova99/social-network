import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";
import { addMessageActionCreater, updateMessageTextActionCreater } from './../../redux/store';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map( m => <Message message={m.message} />);
    
    let message = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreater());
    }

    let onMessageChange = () => {
        let text = message.current.value;
        props.dispatch(updateMessageTextActionCreater(text));
    }

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                <div className="left">
                    {messagesElements}
                </div>
                <div className="right">
                    {messagesElements}
                </div>
                <div className="send-message">
                    <textarea ref={message} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
                </div>
                <div className="send-button"> 
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
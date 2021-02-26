import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messages.map( m => <Message message={m.message} key={m.id}/>);
    
    let message = props.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
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
                    <textarea value={message} onChange={onMessageChange}></textarea>
                </div>
                <div className="send-button"> 
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
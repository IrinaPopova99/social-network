import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map( m => <Message message={m.message} />);
    
    let message = React.createRef();

    let sendMessage = () => {
        let text = message.current.value;
        alert(text);
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
                    <textarea ref={message}></textarea>
                </div>
                <div className="send-button"> 
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
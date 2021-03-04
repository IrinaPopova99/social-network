import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";
import MessageForm from './MessageForm';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />);

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                <div className="left">
                    {/* {messagesElements} */}
                </div>
                <div className="right">
                    {messagesElements}
                </div>
                <MessageForm sendMessage={props.sendMessage} />
            </div>
        </div>

    );
}

export default Dialogs;
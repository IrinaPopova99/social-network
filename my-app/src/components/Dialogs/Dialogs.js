import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map( m => <Message message={m.message} />);

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;
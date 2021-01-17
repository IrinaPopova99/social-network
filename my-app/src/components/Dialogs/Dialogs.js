import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import "./Dialogs.css";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
    ];
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "Yeah"},
    ];

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map( m => <Message message={m.message} />);

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
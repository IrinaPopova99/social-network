import "./Message.css";

const Message = (props) => {
    return (
        <div className="message-item">
            {props.message}
        </div>
    );
}

export default Message;
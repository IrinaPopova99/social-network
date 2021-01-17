import { NavLink } from "react-router-dom";
import "./DialogItem.css";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className="dialogs-item active">
                <span>{props.name}</span>
            </div>
        </NavLink>
    );
}

export default DialogItem;
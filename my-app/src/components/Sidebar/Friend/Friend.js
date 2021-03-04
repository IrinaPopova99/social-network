import SmallRoundPhoto from "../../Common/SmallRoundPhoto/SmallRoundPhoto";
import "./Friend.css";

const Friend = (props) => {
    return (
        <div className="friend">
            <SmallRoundPhoto />
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;
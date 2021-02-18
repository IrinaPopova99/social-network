import "./Sidebar.css";
import Friend from './Friend/Friend';

const Sidebar = (props) => {
    let friends = props.friends.map(f => <Friend name={f.name} />);

    return (
        <div className="sidebar main">
            <h3>FRIENDS</h3>
            <div className="friends-list">
                {friends}
            </div>
        </div>
    );
}

export default Sidebar;
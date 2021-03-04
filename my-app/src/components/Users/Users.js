import { NavLink } from "react-router-dom";
import "./Users.css";
import SmallRoundPhoto from "../Common/SmallRoundPhoto/SmallRoundPhoto";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let isDisabled = props.followingInProgress;

    return (
        <div>
            {props.users.map(user =>
                <div className="user-card" key={user.id}>
                    <div className="user-info">
                        <div className="photo-mini">
                            <NavLink to={`/profile/${user.id}`}>
                                <SmallRoundPhoto photo={user.photos.small} login={user.name} />
                            </NavLink>
                        </div>
                        <div className="user-info__text">
                            <div><b>Username:</b> {user.name}</div>
                            <div>
                                <b>Status:</b> {user.status || "-"}
                            </div>
                        </div>
                    </div>
                    <div className="follow-button">
                        {user.followed
                            ? <button disabled={isDisabled.some(id => id === user.id)} onClick={() => props.unfollow(user.id)}>
                                {isDisabled.some(id => id === user.id) ? 'Wait...' : 'Unfollow'}
                            </button>
                            : <button disabled={isDisabled.some(id => id === user.id)} onClick={() => props.follow(user.id)}>
                                {isDisabled.some(id => id === user.id) ? 'Wait...' : 'Follow'}
                            </button>
                        }
                    </div>
                </div>
            )}
            <div className="pages-buttons">
                {pages.map(page => <span className={props.currentPage === page && "active-number"} onClick={() => props.onPageChanged(page)}>{page} </span>)}
            </div>
        </div>
    );
}

export default Users;
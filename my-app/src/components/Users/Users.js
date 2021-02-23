import { NavLink } from "react-router-dom";
import "./Users.css";
import userPhoto from "./../../assets/images/user.jpeg";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {props.users.map(user => 
                <div className="user-card" key={user.id}>
                    <div className="user-info">
                        <div className="photo-mini">
                            <NavLink to={`/profile/${user.id}`}><img src={user.photos.small || userPhoto} /></NavLink>
                        </div>
                        <div className="user-info__text">
                            <div><b>Username:</b> {user.name}</div>
                            <div>
                                <b>Status:</b> {user.status || "-" }
                            </div>
                        </div>
                    </div>
                    <div className="follow-button">
                        { user.followed 
                            ? <button onClick={ () => props.unfollow(user.id) }>Unfollow</button> 
                            : <button onClick={ () => props.follow(user.id) }>Follow</button>
                        }
                    </div>
                </div>
            )}
            <div className="pages-buttons">
                {pages.map(page => <span className={props.currentPage === page && "active-number"} onClick={() => props.onPageChanged(page)}>{page} </span> )}
            </div>
        </div>
    );
}

export default Users;
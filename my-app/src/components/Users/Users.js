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
            <div className="pages-buttons">
                {pages.map(page => <span className={props.currentPage === page && "active-number"} onClick={() => props.onPageChanged(page)}>{page} </span> )}
            </div>
            {props.users.map(user => 
                <div key={user.id}>
                    <div>
                        <div className="photo-mini">
                            <img src={user.photos.small || userPhoto} />
                        </div>
                        <div>
                            { user.followed 
                                ? <button onClick={ () => props.unfollow(user.id) }>Unfollow</button> 
                                : <button onClick={ () => props.follow(user.id) }>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;
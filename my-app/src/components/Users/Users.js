import axios from "axios";
import "./Users.css";
import userPhoto from "./../../assets/images/user.jpeg";

const Users = (props) => {
    if (props.users.length === 0) {
        console.log("!")
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => props.getUsers(res.data.items));
    }
    return (
        <div>
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
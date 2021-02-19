import axios from "axios";
import React from 'react';
import "./Users.css";
import userPhoto from "./../../assets/images/user.jpeg";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => this.props.getUsers(res.data.items));
    }
    render() {
        return (
            <div>
                {this.props.users.map(user => 
                    <div key={user.id}>
                        <div>
                            <div className="photo-mini">
                                <img src={user.photos.small || userPhoto} />
                            </div>
                            <div>
                                { user.followed 
                                    ? <button onClick={ () => this.props.unfollow(user.id) }>Unfollow</button> 
                                    : <button onClick={ () => this.props.follow(user.id) }>Follow</button>
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
}

export default Users;
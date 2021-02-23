import React from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import { follow, getCurrentPage, getTotalCount, getUsers, toggleIsLoading, unfollow } from "../../redux/usersReducer"
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
                    {withCredentials: true})
            .then((res) => {
                this.props.getUsers(res.data.items);
                this.props.getTotalCount(res.data.totalCount);
            });
        this.props.toggleIsLoading(false);
    }

    onPageChanged = (page) => {
        this.props.toggleIsLoading(true);
        this.props.getCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, 
                    {withCredentials: true})
            .then((res) => this.props.getUsers(res.data.items));
        this.props.toggleIsLoading(false);
    }

    onFollow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, { 
                        withCredentials: true,
                        headers: {
                            "API-KEY": "e9c3e74e-8fd8-4678-9a75-20b768afb84a"
                        }
                    })
            .then((res) => {
                if (res.data.resultCode == 0) {
                    this.props.follow(userId)
                }
            });
    }

    onUnfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, { 
                    withCredentials: true,
                    headers: {
                        "API-KEY": "e9c3e74e-8fd8-4678-9a75-20b768afb84a"
                    }
                })
            .then((res) => {
                if (res.data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
            });
    }
 
    render() {  
        console.log(this.props.isLoading)     
        return (
            <>  
                {this.props.isLoading ? <Preloader /> : null} 
                <Users totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.onFollow}
                    unfollow={this.onUnfollow}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, { follow, unfollow, getUsers, getCurrentPage, getTotalCount, toggleIsLoading })(UsersContainer);

// этот функционал перенесен в функцию connect в виде объекта
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followUserAC(userId)),
//         unfollow: (userId) => dispatch(unfollowUserAC(userId)),
//         getUsers: (users) => dispatch(getUsersAC(users)),
//         getCurrentPage: (currentPage) => dispatch(getCurrentPageAC(currentPage)),
//         getTotalCount: (totalCount) => dispatch(getTotalCountAC(totalCount)),
//         toggleIsLoading: (isLoading) => dispatch(toggleIsLoadingAC(isLoading)),
//     }
// }
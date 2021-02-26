import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { 
    getUsers,
    followUser,
    unfollowUser,
} from "../../redux/usersReducer";
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => this.props.getUsers(page, this.props.pageSize);

    onFollow = (userId) => this.props.followUser(userId);

    onUnfollow = (userId) => this.props.unfollowUser(userId);
 
    render() {  
        return (
            <>  
                {this.props.isLoading ? <Preloader /> : null} 
                <Users totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.onFollow}
                    unfollow={this.onUnfollow}
                    followingInProgress={this.props.followingInProgress}/>
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
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, { 
    getUsers,
    followUser,
    unfollowUser,
})(UsersContainer);



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
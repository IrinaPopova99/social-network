import { connect } from "react-redux"
import { followUserAC, getUsersAC, unfollowUserAC } from "../../redux/usersReducer"
import Users from "./Users"

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(1)
    return {
        follow: (userId) => dispatch(followUserAC(userId)),
        unfollow: (userId) => dispatch(unfollowUserAC(userId)),
        getUsers: (users) => dispatch(getUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
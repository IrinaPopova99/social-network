import React from 'react';
import { connect } from "react-redux";
import Header from './Header';
import { getAuthUserData, logoutUser } from './../../redux/authentication/actions';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    onLogoutUser = () => this.props.logoutUser();
    render() {
        return (
            <Header {...this.props} onLogoutUser={this.onLogoutUser}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData, logoutUser })(HeaderContainer);
import React from 'react';
import { connect } from "react-redux";
import Login from './Login';
import { getLoginUser } from '../../redux/authentication/actions';

class LoginContainer extends React.Component {
    onGetLoginUser = (email, password, rememberMe) => this.props.getLoginUser(email, password, rememberMe);
    render() {
        return (
            <Login onGetLoginUser={this.onGetLoginUser} isAuth={this.props.isAuth} error={this.props.error}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
});

export default connect(mapStateToProps, { getLoginUser })(LoginContainer);
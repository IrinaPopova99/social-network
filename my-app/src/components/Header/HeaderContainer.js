import React from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Header from './Header';
import { setAuthUserData, setCurrentUser } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`)
                        .then(response => {
                            this.props.setCurrentUser(response.data.photos.small)
                        })
                }
            });
      }
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData, setCurrentUser })(HeaderContainer);
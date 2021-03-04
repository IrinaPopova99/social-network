import React from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile/actions';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.auth.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <div>
                {/* прокидываем все пропсы, разворачивает пропсы с помощью спред-оператора */}
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth,
    status: state.profilePage.status

});
// в compose компоненты перебрасывают снизу вверх
export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
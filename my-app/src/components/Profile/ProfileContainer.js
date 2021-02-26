import React from 'react';
import { connect } from "react-redux";
import Profile from './Profile';
import { getUserProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.auth.userId;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return(
      <div>
        {/* прокидываем все пропсы, разворачивает пропсы с помощью спред-оператора */}
        <Profile {...this.props} profile={this.props.profile}/> 
      </div>
    );
  }
   
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth
});
// в compose компоненты перебрасывают снизу вверх
export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
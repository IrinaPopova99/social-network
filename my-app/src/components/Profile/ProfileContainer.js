import React from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Profile from './Profile';
import { getUserProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.getUserProfile(res.data);
            });
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
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
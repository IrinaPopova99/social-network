import React from 'react';
import { connect } from "react-redux"
import axios from "axios";
import Profile from './Profile';
import { getUserProfile } from './../../redux/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
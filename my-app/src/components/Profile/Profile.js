import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.css';

const Profile = (props) => {

  return(
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;
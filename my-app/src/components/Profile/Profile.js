import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
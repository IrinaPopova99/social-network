import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.css';

const Profile = () => {
  let posts = [
    {id: 1, post: "Hi, how are you", likesCount: 23},
    {id: 2, post: "It's my first post", likesCount: 5},
  ];
  return(
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
}

export default Profile;
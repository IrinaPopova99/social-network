import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
    <div className="my-posts">
      <div className="create-posts">
        <div className="post-name"><p>My post</p></div>
        <div className="post-input"> 
          <textarea placeholder="Your news..."></textarea>
        </div>
        <div className="send-button"> 
          <button>Send</button>
        </div>
      </div>
        <div className="posts">
          <Post message="Hi, how are you?" like="23"/>
          <Post message="It's my first post" like="2"/>
          {/* <Post /> */}
        </div>
    </div>
  );
}

export default MyPosts;
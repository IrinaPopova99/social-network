import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

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
          {postsElements}
        </div>
    </div>
  );
}

export default MyPosts;
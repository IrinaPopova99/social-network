import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
// import { addPostActionCreater, updatePostTextActionCreater } from './../../../redux/profileReducer';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.post} key={p.id} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.unpdateNewPostText(text);
  }
  console.log(props);
  return(
    <div className="my-posts">
      <div className="create-posts">
        <div className="post-name"><p>Share your news:</p></div>
        <div className="post-input"> 
          <textarea placeholder="Your news..." ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div className="send-button"> 
          <button onClick={onAddPost}>Send</button>
        </div>
      </div>
        <div className="posts">
          {postsElements}
        </div>
    </div>
  );
}

export default MyPosts;
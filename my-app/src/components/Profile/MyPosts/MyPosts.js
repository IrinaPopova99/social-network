import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import PostForm from './PostForm';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} key={p.id} likesCount={p.likesCount} />);
    return (
        <div className="my-posts">
            <div className="create-posts">
                <div className="post-name"><p>Share your news:</p></div>
                <PostForm addPost={props.addPost} />
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
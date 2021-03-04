import React from 'react';
import { useForm } from "react-hook-form";
import { validations } from '../../../utilities/validations/validations';
import ErrorMessages from '../../Common/ErrorMessages/ErrorMessages';
import SendButton from '../../Common/SendButton/SendButton';
import './MyPosts.css';
import Post from './Post/Post';

const PostForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm();
    const onSubmit = (formData) => {
        props.addPost(formData.post);
        setValue('post', '')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="post-input">
                <textarea name={'post'} ref={register(validations(false, 5))} placeholder="Your news..." />
            </div>
            <ErrorMessages errors={errors} name="post" />
            <SendButton />
        </form>
    )
}

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
import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreater, updatePostTextActionCreater } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreater()),
    unpdateNewPostText: (text) => dispatch(updatePostTextActionCreater(text)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
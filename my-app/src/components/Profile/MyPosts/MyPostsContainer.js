import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile/actions'; //диспатч на экшен 

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => dispatch(addPostActionCreator(text)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
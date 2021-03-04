import SmallRoundPhoto from '../../../Common/SmallRoundPhoto/SmallRoundPhoto';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <SmallRoundPhoto />
                <div className="post-text">
                    {props.message}
                </div>
            </div>
            <div className="post-like">
                <i class="fas fa-heart"></i>
                <span> {props.likesCount} </span>
            </div>
        </div>
    );
}

export default Post;
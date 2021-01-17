import './Post.css';

const Post = (props) => {
  return(
    <div className="post">  
      <div className="post-content">
        <div className="post-photo">
          <img alt="" src='https://pcache-06.chocoapp.ru/h2/6/24350568/0/58bcbbd0c34f31d6de3f4e4d2095a868/2/18755738_500sq.jpg'></img>
        </div>
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
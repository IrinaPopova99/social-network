import "./Friend.css";

const Friend = (props) => {
    debugger;
    return (
        <div className="friend">
            <div className="photo-mini">
                <img alt="" src='https://pcache-06.chocoapp.ru/h2/6/24350568/0/58bcbbd0c34f31d6de3f4e4d2095a868/2/18755738_500sq.jpg'></img>
            </div>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;
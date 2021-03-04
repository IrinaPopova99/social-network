import userPhoto from '../../../assets/images/user.jpeg';

const SmallRoundPhoto = (props) => (
    <div className="photo-mini">
        <img alt="" src={props.photo || userPhoto} alt="User Photo" title={props.login || "No name"}></img>
    </div>
)

export default SmallRoundPhoto;
import './ProfileInfo.css';

const ProfileInfo = () => {
  return(
    <div className="profile">
      <div className='photo-avatar'>
        <img alt="" src='https://pcache-06.chocoapp.ru/h2/6/24350568/0/58bcbbd0c34f31d6de3f4e4d2095a868/2/18755738_500sq.jpg'></img>
      </div>
      <div className="profile-information">
        <p className="profile-name">Name Surname</p>
        <p><span>Date of Birth:</span> 2 January</p>
        <p><span>City:</span> Moscow</p>
        <p><span>Education:</span> BSU</p>
        <p><span>Web Site:</span> google.com</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
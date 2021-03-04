import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from './../../../assets/images/user.jpeg'
import ProfileStatus from "./ProfileStatus";
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    let contacts = [];

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile">
            <div className='photo-avatar'>
                <img alt="" src={props.profile.photos.large || userPhoto}></img>
            </div>
            <div className="profile-information">
                <p className="profile-name">{props.profile.fullName}</p>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                <p><span>Contacts:</span></p>
                <p>
                    <p><span>github: </span>{props.profile.contacts.github ? <span>{props.profile.contacts.github}</span> : " - "}</p>
                    <p><span>vk: </span>{props.profile.contacts.vk ? <span>{props.profile.contacts.vk}</span> : " - "}</p>
                    <p><span>facebook: </span>{props.profile.contacts.facebook ? <span>{props.profile.contacts.facebook}</span> : " - "}</p>
                    <p><span>instagram: </span>{props.profile.contacts.instagram ? <span>{props.profile.contacts.instagram}</span> : " - "}</p>
                    <p><span>twitter: </span>{props.profile.contacts.twitter ? <span>{props.profile.contacts.twitter}</span> : " - "}</p>
                    <p><span>website: </span>{props.profile.contacts.website ? <span>{props.profile.contacts.website}</span> : " - "}</p>
                    <p><span>youtube: </span>{props.profile.contacts.youtube ? <span>{props.profile.contacts.youtube}</span> : " - "}</p>
                    <p><span>mainLink: </span>{props.profile.contacts.mainLink ? <span>{props.profile.contacts.mainLink}</span> : " - "}</p>
                </p>
            </div>
        </div>
    );
}

export default ProfileInfo;
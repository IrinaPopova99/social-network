import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from '../../../redux/profile/actions';
import { ProfileForm } from './ProfileForm';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const onChangeStatus = (status) => {
        setEditMode(false);
        dispatch(updateUserStatus(status));
    }
    const onActivateEditMode = () => setEditMode(true)

    return (<>

        {(!editMode
            ? <span onDoubleClick={onActivateEditMode} >
                {props.status || <span>Add status</span>}
            </span>
            : <ProfileForm onChangeStatus={onChangeStatus} status={props.status} />
        )}
    </>
    );
}

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//     }
//     onActivateEditMode = () => {
//         this.setState({ editMode: true })
//     }
//     onChangeStatus = (status) => {
//         updateUserStatus(status);
//     }
//     // this.setState({ editMode: false })
//     // перенести все в формы (input) используя useForm
//     render() {

//         return (<>
//         <ProfileForm onChangeStatus={this.onChangeStatus} status={this.props.status} />
//             {/* {(!this.state.editMode
//                 ? <span onDoubleClick={this.onActivateEditMode} >
//                     {this.props.status || <span>Add status</span>}
//                 </span>
//                 : 
//             )} */}
//         </>
//         );
//     }
// }

export default ProfileStatus;

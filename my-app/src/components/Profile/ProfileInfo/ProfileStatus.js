import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    onActivateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    onDeactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

    }
    // перенести все в формы (input) используя useForm
    render() {
        return (
            <div>
                <span>Status: </span>
                {(!this.state.editMode
                    ? <span onDoubleClick={this.onActivateEditMode}>
                        {this.props.status ? this.props.status : <span>Add status</span>}
                    </span>
                    : <input onChange={this.onStatusChange} autoFocus='true' onBlur={this.onDeactivateEditMode} value={this.props.status} />
                )}

            </div>
        );
    }
}

export default ProfileStatus;
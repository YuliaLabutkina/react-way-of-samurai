import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({ editMode: true })
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = ({ target }) => {
        this.setState({ status: target.value })

    };

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        };

    };

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                }
            </>
        );
    };
}

export default ProfileStatus;
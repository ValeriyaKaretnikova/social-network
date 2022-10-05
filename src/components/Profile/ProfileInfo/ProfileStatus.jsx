import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "***"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              defaultValue={this.state.status}
              onChange={this.onStatusChange}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

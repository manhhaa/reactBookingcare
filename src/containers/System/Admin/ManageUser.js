import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageUser.scss";
import * as actions from "../../../store/actions";
import { LANGUAGES, CRUD_USER } from "../../../utils";

class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }
  componentDidMount() {
    this.props.getAllUserRedux();
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.users !== this.props.users) {
      this.setState({
        arrUsers: this.props.users,
      });
    }
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user.id);
  };

  handleSelectUser = (user) => {
    this.props.getUserUpdate(user);
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <table id="ManageUser">
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>

          {arrUsers &&
            arrUsers.length > 0 &&
            arrUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      this.handleSelectUser(user);
                    }}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDeleteUser(user)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserRedux: () => dispatch(actions.AllUserRedux()),
    deleteUserRedux: (data) => dispatch(actions.fecthDeleteUser(data)),
    updateUserRedux: (data) => dispatch(actions.UpdateUserRedux(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);

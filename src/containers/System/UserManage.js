import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalUpdateUser from "./ModalUpdateUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpen: false,
      isOpenUpdate: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.data.errCode === 0) {
      this.setState({
        arrUsers: response.data.user,
      });
    }
  };

  handleAddNewUser = async (data) => {
    try {
      let response = await createNewUser(data);
      if (response && response.data.errCode !== 0) {
        alert(response.data.message);
      } else {
        await this.getAllUsersFromReact();
        this.showMenuCreateUser();
      }
    } catch (e) {
      console.log(e);
    }
  };

  showMenuCreateUser = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  showMenuUpdateUser = () => {
    this.setState({
      isOpenUpdate: !this.state.isOpenUpdate,
    });
  };

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUser(user.id);
      if (response && response.data.errCode !== 0) {
        alert(response.data.message);
      } else {
        await this.getAllUsersFromReact();
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleUpdateUser = async (data) => {
    console.log(data);
    try {
      let response = await updateUser(data);
      console.log(response);
      if (response && response.data.errCode !== 0) {
        alert(response.data.message);
      } else {
        await this.getAllUsersFromReact();
        this.showMenuUpdateUser();
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleSelectUser = (user) => {
    this.showMenuUpdateUser();
    this.setState({
      userEdit: user,
    });
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <div className="users-container">
          <div className="text-center title">Manage users</div>

          <div className="add-new-user">
            <button
              className="btn-create-new-user p-2"
              onClick={() => {
                this.showMenuCreateUser();
              }}
            >
              <i className="fa-solid fa-plus"></i>
              Add new user
              <ModalUser
                isOpen={this.state.isOpen}
                showMenuCreateUser={this.showMenuCreateUser}
                handleAddNewUser={this.handleAddNewUser}
              />
              {this.state.isOpenUpdate && (
                <ModalUpdateUser
                  isOpenUpdate={this.state.isOpenUpdate}
                  showMenuUpdateUser={this.showMenuUpdateUser}
                  handleUpdateUser={this.handleUpdateUser}
                  user={this.state.userEdit}
                />
              )}
            </button>
          </div>
          <div className="user-table mt-3 mx-1">
            <table id="customers">
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
              {arrUsers &&
                arrUsers.map((user, index) => {
                  return (
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
                  );
                })}
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

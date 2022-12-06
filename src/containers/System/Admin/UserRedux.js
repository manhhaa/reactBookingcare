import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_USER, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ManageUser from "./ManageUser";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      arrGender: [],
      arrPosition: [],
      arrRole: [],
      imageUrl: "",
      isOpen: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
      action: CRUD_USER.CREATE,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
  }

  componentDidUpdate(preProps, preState, snapshot) {
    let genderRedux = this.props.genderRedux;
    if (preProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        arrGender: genderRedux,
        gender:
          genderRedux && genderRedux.length > 0 ? genderRedux[0].keymap : "",
      });
    }
    if (preProps.positionRedux !== this.props.positionRedux) {
      let positionRedux = this.props.positionRedux;
      this.setState({
        arrPosition: positionRedux,
        position:
          positionRedux && positionRedux.length > 0
            ? positionRedux[0].keymap
            : "",
      });
    }
    if (preProps.roleRedux !== this.props.roleRedux) {
      let roleRedux = this.props.roleRedux;
      this.setState({
        arrRole: roleRedux,
        role: roleRedux && roleRedux.length > 0 ? roleRedux[0].keymap : "",
      });
    }
    if (preProps.users !== this.props.users) {
      let genderRedux = this.props.genderRedux;
      let positionRedux = this.props.positionRedux;
      let roleRedux = this.props.roleRedux;

      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        gender:
          genderRedux && genderRedux.length > 0 ? genderRedux[0].keymap : "",
        phoneNumber: "",
        position:
          positionRedux && positionRedux.length > 0
            ? positionRedux[0].keymap
            : "",
        role: roleRedux && roleRedux.length > 0 ? roleRedux[0].keymap : "",
        avatar: "",
        actions: CRUD_USER.CREATE,
        imageUrl: "",
      });
    }
  }

  handleUploadImage = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      console.log(base64);
      this.setState({
        imageUrl: URL.createObjectURL(file),
        avatar: base64,
      });
    }
  };

  handleSaveUser = (e, id) => {
    let arr = { ...this.state };
    arr[id] = e.target.value;
    this.setState({
      ...arr,
    });
  };

  handleCreateUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid == false) return;

    let { action } = this.state;

    if (action === CRUD_USER.CREATE) {
      this.props.createNewUserRedux({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        position: this.state.position,
        role: this.state.role,
        avatar: this.state.avatar,
      });
      this.setState({
        action: CRUD_USER.CREATE,
      });
    }
    if (action === CRUD_USER.EDIT) {
      console.log(this.state);
      this.props.updateUserRedux({
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        position: this.state.position,
        role: this.state.role,
        avatar: this.state.avatar,
      });
      this.setState({
        action: CRUD_USER.CREATE,
      });
    }
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("This input is required: ", arrCheck[i]);
        break;
      }
    }
  };

  getUserUpdate = (user) => {
    let imageBase64 = "";
    if (user.image) {
      imageBase64 = new Buffer(user.image, "base64").toString("binary");
    }
    if (user) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "HARDCODE",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        position: user.positionId,
        role: user.roleId,
        action: CRUD_USER.EDIT,
        avatar: "",
        imageUrl: imageBase64,
      });
    }
  };

  render() {
    let genders = this.state.arrGender;
    let positions = this.state.arrPosition;
    let roles = this.state.arrRole;
    let language = this.props.language;
    let email = this.state.email;
    let password = this.state.password;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let address = this.state.address;
    let phoneNumber = this.state.phoneNumber;
    let gender = this.state.gender;
    let position = this.state.position;
    let role = this.state.role;
    return (
      <div className="user-redux-container">
        <div className="title">Manage user with redux</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3 fw-bold">
                <FormattedMessage id="manage-user.addUser" />
              </div>

              <div className="col-6">
                <label>
                  <FormattedMessage id="manage-user.email" />
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => this.handleSaveUser(e, "email")}
                  disabled={this.state.action === CRUD_USER.EDIT ? true : false}
                />
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manage-user.password" />
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => this.handleSaveUser(e, "password")}
                  disabled={this.state.action === CRUD_USER.EDIT ? true : false}
                />
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manage-user.firstName" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => this.handleSaveUser(e, "firstName")}
                />
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manage-user.lastName" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => this.handleSaveUser(e, "lastName")}
                />
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.phoneNumber" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => this.handleSaveUser(e, "phoneNumber")}
                />
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => this.handleSaveUser(e, "address")}
                />
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select
                  value={gender}
                  className="form-control"
                  onChange={(e) => this.handleSaveUser(e, "gender")}
                >
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index} value={item.keymap}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEN}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select
                  value={position}
                  className="form-control"
                  onChange={(e) => this.handleSaveUser(e, "position")}
                >
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      return (
                        <option key={index} value={item.keymap}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEN}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.role" />
                </label>
                <select
                  value={role}
                  className="form-control"
                  onChange={(e) => this.handleSaveUser(e, "role")}
                >
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
                      return (
                        <option key={index} value={item.keymap}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEN}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="col-3">
                <label>
                  <FormattedMessage id="manage-user.avatar" />
                </label>
                <div className="form-control preview-image-container">
                  <input
                    type="file"
                    // className="form-control"
                    id="preview-img"
                    onChange={(e) => {
                      this.handleUploadImage(e);
                    }}
                    hidden
                  />
                  <label htmlFor="preview-img">
                    <i class="fa-solid fa-upload"></i>
                    Tải ảnh
                  </label>
                  <div
                    className="preview-image"
                    style={{ backgroundImage: `url(${this.state.imageUrl})` }}
                    onClick={() => {
                      this.setState({
                        isOpen: true,
                      });
                    }}
                  ></div>
                </div>
              </div>
              {this.state.isOpen && (
                <Lightbox
                  mainSrc={this.state.imageUrl}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                />
              )}

              <div className="col-12 my-3">
                <button
                  type="button"
                  className={
                    this.state.action === CRUD_USER.EDIT
                      ? "btn btn-warning"
                      : "btn btn-primary"
                  }
                  onClick={() => {
                    this.handleCreateUser();
                  }}
                >
                  {this.state.action === CRUD_USER.EDIT ? (
                    <FormattedMessage id="manage-user.edit" />
                  ) : (
                    <FormattedMessage id="manage-user.button" />
                  )}
                </button>
              </div>
              <div className="col-12 mb-10">
                <ManageUser getUserUpdate={this.getUserUpdate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fecthGenderStart()),
    getPositionStart: () => dispatch(actions.fecthPositionStart()),
    getRoleStart: () => dispatch(actions.fecthRoleStart()),
    createNewUserRedux: (data) => dispatch(actions.createNewUserRedux(data)),
    getAllUserRedux: () => dispatch(actions.AllUserRedux()),
    updateUserRedux: (data) => dispatch(actions.UpdateUserRedux(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

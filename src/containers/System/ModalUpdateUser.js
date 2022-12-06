import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";

class ModalUpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
  }
  componentDidMount() {
    if (this.props.user && !_.isEmpty(this.props.user)) {
      this.setState({
        id: this.props.user.id,
        email: this.props.user.email,
        password: this.props.user.password,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        address: this.props.user.address,
        phoneNumber: this.props.user.phoneNumber,
      });
    }
  }

  handleOnchange = (e, id) => {
    let copyState = { ...this.setState };
    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidate = () => {
    let check = true;
    let arrInput = ["firstName", "lastName", "address", "phoneNumber"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        check = false;
        alert("missing parameter " + arrInput[i]);
        break;
      }
    }
    return check;
  };

  handleUpdate = (data) => {
    let isValid = this.checkValidate();
    if (isValid === true) {
      this.props.handleUpdateUser(data);
    }
  };

  render() {
    let data = this.state;
    return (
      <div className="text-center">
        <Modal
          isOpen={this.props.isOpenUpdate}
          className={"modal-user-container"}
          size="lg"
          //   styles={{ background: "#fff" }}
        >
          <ModalHeader toggle={() => this.props.showMenuUpdateUser()}>
            Update user
          </ModalHeader>
          <ModalBody>
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleOnchange(e, "email");
                }}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={(e) => {
                  this.handleOnchange(e, "password");
                }}
                disabled
              />
            </div>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                value={this.state.firstName}
                onChange={(e) => {
                  this.handleOnchange(e, "firstName");
                }}
              />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                value={this.state.lastName}
                onChange={(e) => {
                  this.handleOnchange(e, "lastName");
                }}
              />
            </div>
            <div className="input-container">
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={(e) => {
                  this.handleOnchange(e, "address");
                }}
              />
            </div>
            <div className="input-container">
              <label>Phonenumber</label>
              <input
                type="text"
                value={this.state.phoneNumber}
                onChange={(e) => {
                  this.handleOnchange(e, "phoneNumber");
                }}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleUpdate(data)}>
              Save changes
            </Button>
            <Button
              color="secondary"
              onClick={() => this.props.showMenuUpdateUser()}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateUser);

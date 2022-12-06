import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
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
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        check = false;
        alert("missing parameter " + arrInput[i]);
        break;
      }
    }
    return check;
  };

  handleAddNewUser = (data) => {
    let isValid = this.checkValidate();
    if (isValid === true) {
      this.props.handleAddNewUser(data);
    }
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    });
  };

  render() {
    let data = this.state;
    return (
      <div className="text-center">
        <Modal
          isOpen={this.props.isOpen}
          className={"modal-user-container"}
          size="lg"
        >
          <ModalHeader toggle={() => this.props.showMenuCreateUser()}>
            Create new user
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
            <Button color="primary" onClick={() => this.handleAddNewUser(data)}>
              Save changes
            </Button>
            <Button
              color="secondary"
              onClick={() => this.props.showMenuCreateUser()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

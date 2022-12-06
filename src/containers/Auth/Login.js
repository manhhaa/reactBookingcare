import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions/userActions";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      eye: true,
      errMessage: "",
    };
  }

  handleOnchangeUsername = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleOnchangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.email, this.state.password);
      this.props.userLoginSuccess(data.user);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleShowPassword = () => {
    this.setState({
      eye: !this.state.eye,
    });
  };

  render() {
    return (
      <>
        <div className="login-background">
          <div className="login-container">
            <div className="login-content row">
              <div className="col-12 login-text">Login</div>
              <div className="col-12 form-group login-input">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Username"
                  value={this.state.username}
                  onChange={(e) => {
                    this.handleOnchangeUsername(e);
                  }}
                ></input>
              </div>
              <div className="col-12 form-group login-input">
                <label>Password:</label>

                <div className="custom-input-password">
                  <input
                    type={this.state.eye == true ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.handleOnchangePassword(e);
                    }}
                  ></input>
                  {this.state.eye == true ? (
                    <i
                      class="fa-solid fa-eye"
                      onClick={() => {
                        this.handleShowPassword();
                      }}
                    ></i>
                  ) : (
                    <i
                      class="fa-sharp fa-solid fa-eye-slash"
                      onClick={() => {
                        this.handleShowPassword();
                      }}
                    ></i>
                  )}
                </div>
              </div>
              <div className="col-12" style={{ color: "red" }}>
                {this.state.errMessage}
              </div>
              <div className="col-12">
                <button type="button" onClick={() => this.handleLogin()}>
                  Login
                </button>
              </div>
              <div className="col-12 text-center">
                <span className="login-forgot">Forgot your password?</span>
              </div>
              <div className="col-12 text-center pt-3">
                <span className="text-other-login">Or Login with:</span>
              </div>
              <div className="col-12 social-login mt-3">
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

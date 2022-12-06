import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";
import logo from "../../../assets/vtv1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Media.scss";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

class Media extends Component {
  render() {
    return (
      <Fragment>
        <div className="Media-container">
          <div className="Media">
            <div className="Media-header">
              <h2>Truyền thông nói gì</h2>
            </div>

            <LiteYouTubeEmbed
              id="FyDQljKtWnI"
              title="BookingCare trên VTV1"
              className="lite-youtube"
            />
            <div className="Media-content">
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
              <img src={logo} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);

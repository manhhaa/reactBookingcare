import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Specialty.scss";

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <Fragment>
        <div className="Specialty-container">
          <div className="specialty">
            <div className="specialty-header">
              <h2>Chuyên khoa phổ biến</h2>
              <button type="button">Xem thêm</button>
            </div>
            <Slider {...settings}>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Cơ xương khớp</h3>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

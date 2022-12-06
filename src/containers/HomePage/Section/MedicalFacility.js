import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MedicalFacility.scss";

class MedicalFacility extends Component {
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
        <div className="MedicalFacility-container">
          <div className="MedicalFacility">
            <div className="MedicalFacility-header">
              <h2>Cơ sở y tế nổi bật</h2>
              <button type="button">Tìm kiếm</button>
            </div>
            <Slider {...settings}>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
              </div>
              <div className="section-list">
                <div className="section-image"></div>
                <h3>Bệnh viện Hữu nghị Việt Đức</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

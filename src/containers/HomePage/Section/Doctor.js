import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Doctor.scss";

class Doctor extends Component {
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
        <div className="Doctor-container">
          <div className="Doctor">
            <div className="Doctor-header">
              <h2>Bác sĩ nổi bật tuần qua</h2>
              <button type="button">Tìm kiếm</button>
            </div>
            <Slider {...settings}>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
              </div>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
              </div>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
              </div>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
              </div>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
              </div>
              <div className="Doctor-list">
                <div className="Doctor-image"></div>
                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                <h4>Da liễu</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

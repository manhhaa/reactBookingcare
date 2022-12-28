import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HandBook.scss";

class HandBook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <Fragment>
        <div className="HandBook-container">
          <div className="HandBook">
            <div className="HandBook-header">
              <h2>Cẩm nang</h2>
              <button type="button">Tất cả bài viết</button>
            </div>
            <Slider {...settings}>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
              </div>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
              </div>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
              </div>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
              </div>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
              </div>
              <div className="HandBook-list">
                <div className="HandBook-image"></div>
                <div className="HandBook-content">
                  <h3>
                    Lưu ngay 5 Phòng khám Tai mũi họng Gò Vấp có bác sĩ giỏi, uy
                    tín
                  </h3>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);

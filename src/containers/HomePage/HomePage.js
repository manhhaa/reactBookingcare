import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import CustomScrollbars from "../../components/CustomScrollbars";
import MedicalFacility from "./Section/MedicalFacility";
import Doctor from "./Section/Doctor";
import HandBook from "./Section/HandBook";
import Media from "./Section/Media";
import Footer from "./Section/Footer";
import "./HomePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
        <div className="HomePage-container">
          <HomeHeader isShowBanner={true} />
          <Specialty settings={settings} />
          <MedicalFacility settings={settings} />
          <Doctor settings={settings} />
          <HandBook />
          <Media />
          <Footer />
        </div>
      </CustomScrollbars>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

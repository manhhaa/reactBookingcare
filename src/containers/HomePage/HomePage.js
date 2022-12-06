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

class HomePage extends Component {
  render() {
    return (
      <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
        <div className="HomePage-container">
          <HomeHeader />
          <Specialty />
          <MedicalFacility />
          <Doctor />
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

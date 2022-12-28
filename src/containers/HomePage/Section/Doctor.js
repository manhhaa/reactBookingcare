import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";

import Slider from "react-slick";
import "./Doctor.scss";
import { withRouter } from "react-router";

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidUpdate(preProps, preState, snapshot) {
    if (preProps.doctors !== this.props.doctors) {
      this.setState({
        arrDoctors: this.props.doctors,
      });
    }
  }

  handleViewDetailDoctor = (doctor) => {
    console.log("check Detail doctor: ", doctor);
    this.props.history.push(`/detail-doctor/${doctor.id}`);
  };

  componentDidMount() {
    this.props.fecthHomeDoctor();
  }

  render() {
    let arrDoctors = this.state.arrDoctors;
    console.log(arrDoctors)
    return (
      <Fragment>
        <div className="Doctor-container">
          <div className="Doctor">
            <div className="Doctor-header">
              <h2>Bác sĩ nổi bật tuần qua</h2>
              <button type="button">Tìm kiếm</button>
            </div>
            <Slider {...this.props.settings}>
              {arrDoctors &&
                arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  return (
                    <div
                      className="Doctor-list"
                      key={index}
                      onClick={() => this.handleViewDetailDoctor(item)}
                    >
                      <div
                        className="Doctor-image"
                        style={{
                          backgroundImage: `url("${imageBase64}")`,
                        }}
                      ></div>
                      <h3>
                        {item.positionData.valueVI}, {item.lastName}{" "}
                        {item.firstName}
                      </h3>
                      <h4>Da liễu</h4>
                    </div>
                  );
                })}
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
    doctors: state.admin.doctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    fecthHomeDoctor: () => dispatch(actions.fecthHomeDoctor()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));

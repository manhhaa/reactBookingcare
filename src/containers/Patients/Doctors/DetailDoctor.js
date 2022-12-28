import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDetailInforDoctorById } from "../../../services/userService";
import DoctorSchedule from "./DoctorSchedule";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailDoctor: "",
    };
  }
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      console.log(id);
      let res = await getDetailInforDoctorById(id);
      if (res && res.data && res.data.errCode === 0) {
        this.setState({
          DetailDoctor: res.data.message,
        });
      }
    }
  }
  componentDidUpdate(preProps, preState, snapshot) { }
  render() {
    let { DetailDoctor } = this.state;
    let nameVI = "",
      nameEN = "";
    if (DetailDoctor && DetailDoctor.positionData) {
      nameVI = `${DetailDoctor.positionData.valueVI}, ${DetailDoctor.lastName} ${DetailDoctor.firstName}`;
      nameEN = `${DetailDoctor.positionData.valeEN}, ${DetailDoctor.firstName} ${DetailDoctor.lastName}`;
    }
    return (
      <>
        <HomeHeader isShowBanner="false" />
        <div className="detail-doctor">
          <div className="detail-doctor-view">
            <div className="detail-doctor-content">
              <div
                className="content-left"
                style={{
                  backgroundImage: `url("${DetailDoctor.image}")`,
                }}
              ></div>
              <div className="content-right">
                <h1 className="doctor-name">{nameVI}</h1>
                <span>
                  {DetailDoctor &&
                    DetailDoctor.Markdown &&
                    DetailDoctor.Markdown.description}
                </span>
              </div>
            </div>
            <div className="detail-doctor-schedule">
              <div className="content-left">
                <DoctorSchedule doctorId={DetailDoctor && DetailDoctor.id ? DetailDoctor.id : -1} />
              </div>
              <div className="content-right">

              </div>
            </div>
          </div>


          <div className="detail-doctor-contentHTML">
            <div className="detail-doctor-markdown">
              {DetailDoctor &&
                DetailDoctor.Markdown &&
                DetailDoctor.Markdown.contentHTML && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DetailDoctor.Markdown.contentHTML,
                    }}
                  ></div>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);

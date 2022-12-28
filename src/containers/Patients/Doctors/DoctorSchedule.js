import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedule.scss";
import localization from "moment/locale/vi";
import { getScheduleByDate } from "../../../services/userService";

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllDays: [],
            allTime: [],
        };
    }
    async componentDidMount() {
        let { language } = this.props;
        let AllDays = this.setArrDays();
        this.setState({
            AllDays: AllDays,
        });
    }

    setArrDays = (language) => {
        let AllDays = [];
        for (let i = 0; i < 7; i++) {
            let obj = [];
            if (i === 0) {
                let ddMM = moment(new Date()).format("DD/MM");
                let today = `Hôm nay - ${ddMM}`
                obj.label = today;
            } else {
                obj.label = moment(new Date()).add(i, "days").format("dd - DD/MM");
            }
            obj.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
            AllDays.push(obj);
        }

        return AllDays
    };

    async componentDidUpdate(preProps, preState, snapshot) {
        if (this.props.doctorId !== preProps.doctorId) {
            let AllDays = this.setArrDays();
            let res = await getScheduleByDate(this.props.doctorId, AllDays[0].value);
            this.setState({
                allTime: res.data ? res.data.message : []
            })
        }
    }

    handleOnchangeTime = async (e) => {
        if (this.props.doctorId && this.props.doctorId !== -1) {
            let doctorId = this.props.doctorId;
            let date = e.target.value;
            let res = await getScheduleByDate(doctorId, date);
            let data = res.data.message;
            this.setState({
                allTime: data,
            });
        }
    };

    render() {
        console.log(this.state.allTime);
        let { AllDays, allTime } = this.state;
        return (
            <>
                <div className="doctor-schedule-container">
                    <div className="all-schedule">
                        <div className="schedule-select">
                            <select onChange={(e) => this.handleOnchangeTime(e)}>
                                {AllDays &&
                                    AllDays.length > 0 &&
                                    AllDays.map((item, index) => {
                                        return (
                                            <option key={index} value={item.value}>
                                                {item.label}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className="all-available-time">
                            <div className="text-calender">
                                <span>
                                    <i class="fa-solid fa-calendar-days"></i>Lịch khám
                                </span>
                            </div>
                            <div className="time-content">
                                {allTime &&
                                    allTime.length > 0 ?
                                    <>
                                        <div className="time-content-btn">
                                            {
                                                allTime.map((item, index) => {
                                                    return <>
                                                        <button key={index}>{item.timeTypeData.valueVI}</button>

                                                    </>;
                                                })
                                            }
                                        </div>
                                        <div className="book-free">Chọn <i className="far fa-hand-point-up"></i> và đặt lịch</div>
                                    </> :
                                    <div>Không có lịch hẹn trong thời gian này, vùi lòng chọn lịch hẹn khác!</div>
                                }

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
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);

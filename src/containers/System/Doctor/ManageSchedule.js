import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { LANGUAGES, CRUD_USER, dateFormat } from "../../../utils";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import _, { first } from "lodash";
import "./ManageSchedule.scss";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";
import { toast } from "react-toastify";
import { getBulkScheduleDoctor } from '../../../services/userService';

class ManageSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDoctors: [],
            selectedOption: {},
            currentDate: new Date(),
            doctorHours: [],
        };
    }
    componentDidMount() {
        this.props.getAllDoctors();
        this.props.fecthHoursDoctors();
    }

    componentDidUpdate(preProps, preState, snapshot) {
        if (preProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.setOptionSelectDoctor(this.props.allDoctors);
            this.setState({
                allDoctors: dataSelect,
            });
        }

        if (preProps.doctorHours !== this.props.doctorHours) {
            let data = this.props.doctorHours;
            console.log(data)
            if (data && data.length > 0) {
                data = data.map((item) => ({ ...item, isSelected: false }));
            }
            this.setState({
                doctorHours: data,
            });
        }

        // if (preProps.language !== this.props.language) {
        //     let dataSelect = this.setOptionSelectDoctor(this.props.allDoctors);
        //     this.setState({
        //         allDoctors: dataSelect,
        //     });
        // }
    }

    setOptionSelectDoctor = (allDoctors) => {
        let arrDoctor = [];
        let { language } = this.props;
        if (allDoctors && allDoctors.length > 0) {
            allDoctors.map((item, index) => {
                let object = {};
                let valueVI = `${item.lastName} ${item.firstName}`;
                let valueEN = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? valueVI : valueEN;
                object.value = item.id;
                arrDoctor.push(object);
            });
        }
        return arrDoctor;
    };

    handleChange = async (option) => {

        this.setState({
            selectedOption: option,
        });
    };

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0],
        });
    };
    handleAddTime = (time) => {
        let { doctorHours } = this.state;
        if (doctorHours && doctorHours.length > 0) {
            doctorHours = doctorHours.map((item) => {
                if (item.id === time.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            this.setState({
                doctorHours: doctorHours,
            });
        }
    };

    handleSaveSchedule = async () => {
        let { doctorHours, selectedOption, currentDate } = this.state;
        if (!currentDate) {
            toast.error("Invalid date!");
            return;
        }
        if (selectedOption && _.isEmpty(selectedOption)) {
            toast.error("Invalid selected doctor!");
            return;
        }

        let formatDate = new Date(currentDate).getTime();

        if (doctorHours && doctorHours.length > 0) {
            let data = doctorHours.filter((item) => item.isSelected === true);
            let result = [];
            if (data && data.length > 0) {
                data.map((item) => {
                    let obj = {};
                    obj.doctorId = selectedOption.value;
                    obj.date = formatDate;
                    obj.timeType = item.keymap;
                    result.push(obj);
                });
                console.log(result);
            } else {
                toast.error("Invalid selected time!");
                return;
            }
            console.log({
                arrSchedule: result,
                doctorId: selectedOption.value,
                formatedDate: formatDate
            })
            let res = await getBulkScheduleDoctor({
                arrSchedule: result,
                doctorId: selectedOption.value,
                formatedDate: formatDate
            })
            if (res && res.data.errCode === 0) {
                toast.success("Save infor succeed");
            } else {
                toast.error("Error save bulk");
                console.log('error save bulk', res);
            }

        }
    };

    render() {
        let { allDoctors, doctorHours } = this.state;
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

        return (
            <>
                <div className="manage-schedule">
                    <div className="manage-schedule-title">
                        Quản lý kế hoạch khám bệnh của bác sĩ
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>Chọn bác sĩ</label>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={allDoctors}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Chọn ngày</label>
                                <DatePicker
                                    onChange={this.handleOnChangeDatePicker}
                                    className="form-control"
                                    value={this.state.currentDate}
                                    minDate={yesterday}
                                />
                            </div>
                            <div className="col-12 pick-hour-container">
                                {doctorHours &&
                                    doctorHours.length > 0 &&
                                    doctorHours.map((item, index) => {
                                        return (
                                            <button
                                                className={
                                                    item && item.isSelected === true
                                                        ? "btn select-hour active"
                                                        : "btn select-hour"
                                                }
                                                key={index}
                                                onClick={() => this.handleAddTime(item)}
                                            >
                                                {this.props.language === LANGUAGES.VI
                                                    ? item.valueVi
                                                    : item.valueEN}
                                            </button>
                                        );
                                    })}
                            </div>

                            <div className="col-3">
                                <button
                                    className="btn btn-primary btn-schedule"
                                    onClick={() => this.handleSaveSchedule()}
                                >
                                    Lưu thông tin
                                </button>
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
        allDoctors: state.admin.allDoctors,
        doctorHours: state.admin.doctorHours,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDoctors: () => dispatch(actions.fecthAllDoctors()),
        fecthHoursDoctors: () => dispatch(actions.fecthHoursDoctors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";
import { LANGUAGES, CRUD_USER } from "../../../utils";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import { first } from "lodash";
import { getDetailInforDoctorById } from "../../../services/userService";


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHTML: "",
      contentMarkdown: "",
      selectedOption: "",
      description: "",
      allDoctors: [],
      setBtnChange: false,
    };
  }
  componentDidMount() {
    this.props.getAllDoctors();
  }

  componentDidUpdate(preProps, preState, snapshot) {
    if (preProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.setOptionSelectDoctor(this.props.allDoctors);
      this.setState({
        allDoctors: dataSelect,
      });
    }
    if (preProps.language !== this.props.language) {
      let dataSelect = this.setOptionSelectDoctor(this.props.allDoctors);
      this.setState({
        allDoctors: dataSelect,
      });
    }
  }

  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
    let id = selectedOption.value;
    let res = await getDetailInforDoctorById(id);
    console.log(res);
    if (res.data.message.Markdown.description === null) {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        setBtnChange: false,
      });
    } else if (res && res.data && res.data.errCode === 0 && res.data.message) {
      this.setState({
        contentHTML: res.data.message.Markdown.contentHTML,
        contentMarkdown: res.data.message.Markdown.contentMarkdown,
        description: res.data.message.Markdown.description,
        setBtnChange: true,
      });
    }
  };

  handleEditerOnchange = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
    });
  };

  handleSetDescription = (e) => {
    this.setState({ description: e.target.value });
  };

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

  handleSaveContentMarkdown = () => {
    this.props.saveInforDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
      action:
        this.state.setBtnChange === true ? CRUD_USER.EDIT : CRUD_USER.CREATE,
    });
  };

  render() {
    let { setBtnChange } = this.state;
    return (
      <>
        <div className="manage-doctor-container">
          <div className="manage-doctor-title">Quản lý thông tin Bác sĩ</div>
          <div className="more-info">
            <div className="content-left form-group">
              <label>Chọn bác sĩ</label>
              <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.allDoctors}
              />
            </div>
            <div className="content-right">
              <label>Thông tin giới thiệu:</label>
              <textarea
                className="form-control"
                rows="4"
                onChange={(e) => this.handleSetDescription(e)}
                value={this.state.description}
              ></textarea>
            </div>
          </div>
          <div className="manage-doctor-editer">
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditerOnchange}
              value={this.state.contentMarkdown}
            />
          </div>
          <button
            type="submit"
            className={
              setBtnChange === true ? "btn-save-info" : "btn-create-info"
            }
            onClick={() => this.handleSaveContentMarkdown()}
          >
            {setBtnChange === true ? <span>Save</span> : <span>Create</span>}
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctors: () => dispatch(actions.fecthAllDoctors()),
    saveInforDoctor: (data) => dispatch(actions.fecthSaveInforDoctors(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

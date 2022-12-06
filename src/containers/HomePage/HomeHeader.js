import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import Icon1 from "../../assets/khamchuyenkhoa.png";
import Icon2 from "../../assets/khamtuxa.png";
import Icon3 from "../../assets/khamtongquat.png";
import Icon4 from "../../assets/dichvuxetnghiem.png";
import Icon5 from "../../assets/suckhoetinhthan.png";
import Icon6 from "../../assets/khamnhakhoa.png";
import Icon7 from "../../assets/phauthuat.jpg";
import Icon8 from "../../assets/khamtainha.png";
import Icon9 from "../../assets/lichsu.jpg";

import * as actions from "../../store/actions";

class HomeHeader extends Component {
  render() {
    console.log("Check this props: ", this.props);

    return (
      <React.Fragment>
        <div className="home-header-containeer">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fa-solid fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="sub-title">Tìm theo bác sĩ chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="sub-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="sub-title">Chọn bác sĩ giỏi</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="sub-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fa-solid fa-circle-question"></i>
                Hỗ trợ
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-section">
          <div>
            <div className="search">
              <div className="content-up">
                <div className="title">
                  <h1>
                    NỀN TẢNG Y TẾ
                    <br />
                    <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
                  </h1>
                </div>
                <div className="search-input">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Tìm kiếm" />
                </div>
              </div>
            </div>
            <div className="content-down">
              <div className="option-list">
                <ul>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon1})`,
                        }}
                      ></div>
                      Khám <br />
                      chuyên khoa
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon2})`,
                        }}
                      ></div>
                      Khám <br />
                      từ xa
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon3})`,
                        }}
                      ></div>
                      Khám
                      <br /> tổng quát
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon4})`,
                        }}
                      ></div>
                      Xét nghiệm <br />y học
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon5})`,
                        }}
                      ></div>
                      Sức khỏe <br />
                      tinh thần
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon6})`,
                        }}
                      ></div>
                      Khám <br />
                      nha khoa
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon7})`,
                        }}
                      ></div>
                      Gói <br />
                      Phẫu thuật
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon8})`,
                        }}
                      ></div>
                      Sản phẩm <br />Y tế
                    </a>
                  </li>
                  <li>
                    <a href="" className="option">
                      <div
                        className="option-icon"
                        style={{
                          backgroundImage: `url(${Icon9})`,
                        }}
                      ></div>
                      Sức khỏe <br />
                      Doanh nghiệp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

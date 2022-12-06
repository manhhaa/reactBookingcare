import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Fragment } from "react";
import logo from "../../../assets/bct.svg";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="Footer-container">
          <div className="Footer">
            <div className="Footer-content">
              <div className="Footer-info">
                <div className="Footer-info-logo"></div>
                <h3>Công ty Cổ Phần Công nghệ BookingCare</h3>
                <h4>
                  <i class="fa-solid fa-location-dot"></i>
                  28 Thành Thái, Dịch Vọng, Cầu Giấy, hà Nội
                </h4>
                <h4>
                  <i class="fa-solid fa-check"></i>
                  ĐKKD số: 0106790291, Sở KHĐT Hà Nội cấp ngày 16/03/2015
                </h4>

                <div className="Footer-confirm">
                  <img
                    className="Footer-info-logo-bct"
                    width={"78"}
                    height={"30"}
                    src={logo}
                  ></img>
                  <img
                    className="Footer-info-logo-bct"
                    width={"78"}
                    height={"30"}
                    src={logo}
                  ></img>
                </div>
              </div>
              <div className="Footer-contact">
                <div className="Footer-contact-list">
                  <div className="contact-list">Liên kết hợp tác</div>
                  <div className="contact-list">
                    Gói chuyển đổi số doanh nghiệp
                  </div>
                  <div className="contact-list">Tuyển dụng</div>
                  <div className="contact-list">Câu hỏi thường gặp</div>
                  <div className="contact-list">Điều khoản sử dụng</div>
                  <div className="contact-list">Chính sách Bảo mật</div>
                  <div className="contact-list">
                    Quy trình hỗ trợ giải quyết khiếu nại
                  </div>
                  <div className="contact-list">Quy chế hoạt động</div>
                </div>
                <div className="Footer-location">
                  <div className="location">
                    <h3>Trụ sở tại Hà Nội</h3>
                    <h4>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</h4>
                  </div>
                  <div className="location">
                    <h3>Văn phòng tại TP Hồ Chí Minh</h3>
                    <h4>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</h4>
                  </div>
                  <div className="location">
                    <h3>Hỗ trợ khách hàng</h3>
                    <h4>support@bookingcare.vn (7h - 18h)</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="Footer-download">
              <hr />
              <div className="download-app">
                <i class="fa-light fa-mobile-notch"></i>
                Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
                <div className="download-list">Android</div>-
                <div className="download-list"> iPhone/iPad </div> -
                <div className="download-list"> Khác</div>
              </div>
            </div>
          </div>
        </div>
        <div className="chan-trang">
          <div className="chan-trang-content">
            <div className="copyright">
              <small>© 2022 BookingCare.</small>
            </div>
            <div className="watch-info">
              <div className="face"></div>
              <div className="you"></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

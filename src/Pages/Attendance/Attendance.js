import "../Learning-Development/Learning-Development.css";
import attendanceImage from "./dashboard.jpg";
import leavesImage from "./leaves.jpg";
import calendar from "./calendar.jpg";
import { useContext } from "react";
import { IntranetContext } from "../../context";
import { Text } from "../../containers/Language";
import PagesHeader from "../../Components/Header/PagesHeader";
import Cookies from "js-cookie";
import axios from "axios";

const Attendance = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);
  const { userEmail } = myCookieUserObj;

  const logToDashbard = () => {
    const date = Date.now();
    const encryptedBody = window.btoa(
      JSON.stringify(
        "employee_email=" +
          userEmail +
          date +
          "&fromMobileApplication=TRUE&date=" +
          date
      )
    );

    const dashboardLogin = document.getElementById("dashboardLogin");
    dashboardLogin.insertAdjacentHTML(
      "afterbegin",
      `<form
        style="display:none !important"
        method="post"
        id="attLoginForm"
        action="https://dmgian.corp-dmg.com/attendance/login/"
      >
        <input name="body" value="` +
        encryptedBody +
        `" />
      </form>`
    );
    let loginForm = document.getElementById("attLoginForm");
    loginForm.submit();
  };

  return (
    <div>
      <PagesHeader data={<Text tid="Attendance" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-center g-4">
              <div className="col" id="dashboardLogin">
                <a onClick={logToDashbard} style={{ cursor: "pointer" }}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={attendanceImage} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Dashboard</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="http://erpprod.daralmimar.local:8000/OA_HTML/AppsLocalLogin.jsp?requestUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FRF.jsp%3Ffunction_id%3D17471%26resp_id%3D51818%26resp_appl_id%3D800%26security_group_id%3D0%26lang_code%3DUS%26params%3DoR0XR4.F4jyzz9j21ymTmezlGoSAeY6q6ILPRYDaIp0%26oas%3DGAmo0KB9z-8uFhEJ9afx6g..&cancelUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FAppsLogin&langCode=US">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={leavesImage} className="" alt="..." />
                    </div>
                    {/* <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h5>
                    </div> */}
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Leaves</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="javascript:void(0)">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={calendar} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h6 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h6>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Calendar</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

import React, { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import CoursesImg from "./imgs/coashing.jpg";
import icon from "./imgs/icons8-meeting-50.png";
import OnlineCoursesImg from "./imgs/onlineCourses.jpg";
import CoachingImg from "./imgs/courses.jpg";
import SharingImg from "./imgs/sharing.jpg";
// import "../Services/Services.css";
import "./Learning-Development.css";
import { IntranetContext } from "../../context";
import Cookies from "js-cookie";

const LearningDevelopment = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);
  const logToDashbard = () => {
    const date = Date.now();
    const encryptedBody = window.btoa(
      JSON.stringify(
        "employee_email=" +
          myCookieUserObj.userEmail +
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
        action="https://dmgian.corp-dmg.com/DMG-University/login/"
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
      <PagesHeader data={<Text tid="Learning & Development" />} />
      <div className={`container font ${colorTheme}`}>
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {/* <div className="col">
                <a href="https://dmgian.corp-dmg.com/DMG-University/">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={CoursesImg} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}  text-nowrap`}>
                      <p className="m-1">University Courses</p>
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="col " id="dashboardLogin">
                <a onClick={logToDashbard} style={{ cursor: "pointer" }}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={CoursesImg} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}  text-nowrap`}>
                      <p className="m-1" style={{ fontSize: "14.5px" }}>
                        University Courses
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://ehda.login.em2.oraclecloud.com/">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={OnlineCoursesImg} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Online Courses</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <div className="card">
                  <div className="image-wrapper">
                    <img src={CoachingImg} className="" alt="..." />
                  </div>
                  <div className="card-img-overlay">
                    <h6 className={`card-title ${colorTheme} `}>
                      Coming Soon...
                    </h6>
                  </div>
                  <div className={`card-footer ${colorTheme}  text-nowrap`}>
                    <p className="m-1  text-nowrap">Coaching</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="image-wrapper">
                    <img src={SharingImg} className="" alt="..." />
                  </div>
                  <div className="card-img-overlay">
                    <h5 className={`card-title ${colorTheme} text-nowrap`}>
                      Coming Soon...
                    </h5>
                  </div>
                  <div className={`card-footer ${colorTheme} text-nowrap `}>
                    <p className="m-1">Sharing Knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-md-5 m-3 text-center">
          <center>
            <a
              style={{
                color:
                  myCookieUserObj.userCompanyToShow === "MV"
                    ? "#0f4c8e"
                    : "#1d1d1b",
              }}
              className="fs-5 text-decoration-underline"
              // href="mailto:walaa.anwar@corp-dmg.com"
              href="mailto:walaa.anwar@corp-dmg.com?subject=Intranet%20Employee%20Request"
            >
              Request a meeting with Team{" "}
              <span className="ms-3">
                <img
                  src={icon}
                  width={30}
                  height={30}
                  alt="icon of people having a meeting"
                />
              </span>
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopment;

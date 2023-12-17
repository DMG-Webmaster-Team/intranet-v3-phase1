import React, { useContext } from "react";
import "./navbar.scss";
// import logoutIcon from "./images/logout icon.png";
import { Link, NavLink } from "react-router-dom";
import { Text } from "../../containers/Language";
import "./header.css";
import { motion } from "framer-motion";
import { IntranetContext } from "../../context";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import Cookies from "js-cookie";

const NavBar = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);

  // console.log(myCookieUserObj);

  const AboutUsLinks = {
    DMC: "https://www.dmc-egy.com/",
    Curve: "https://www.curvelandscape.com/",
    MV: "https://mountainviewegypt.com/",
    DMA: "https://dma.com.eg",
  };
  let destLink = AboutUsLinks.MV;
  if (myCookieUserObj?.userCompanyToShow === "mv") {
    destLink = AboutUsLinks.MV;
  }
  if (myCookieUserObj?.userCompanyToShow === "dme") {
    destLink = AboutUsLinks.DMC;
  }
  if (myCookieUserObj?.userCompanyToShow === "dma") {
    destLink = AboutUsLinks.DMA;
  }
  if (myCookieUserObj?.userCompanyToShow === "Curve") {
    destLink = AboutUsLinks.Curve;
  }
  const lighthouseLinks = {
    MV: "https://xd.adobe.com/view/3c358f98-eb42-43e6-a6ca-f0a38ce926ee-6966/screen/7e3f74b5-8c89-4939-ac20-efd63f101ef7/?fullscreen&hints=off",
    DME: "https://xd.adobe.com/view/c241150c-861a-4d66-a877-a71e253d5fa8-9712/?fullscreen&hints=off",
    DMA: "",
  };
  let LHlink = lighthouseLinks.MV;
  if (myCookieUserObj?.userCompanyToShow === "dme") {
    LHlink = lighthouseLinks.DME;
  }
  if (myCookieUserObj?.userCompanyToShow === "dma") {
    LHlink = lighthouseLinks.DMA;
  }
  const tooltip = <Tooltip id="tooltip-top">Coming Soon...</Tooltip>;

  const { userId, userEmail } = myCookieUserObj;

  function reverseString(str) {
    const data = str?.split("").reverse().join("");
    return data;
  }
  var encodedData = window.btoa(reverseString(userId));

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

    const dashboardLogin = document.getElementById("benefitsLogin");
    dashboardLogin.insertAdjacentHTML(
      "afterbegin",
      `<form
        style="display:none !important"
        method="post"
        id="attLoginForm"
        action={"https://dmgian.corp-dmg.com/benefits/login/"}
      >
        <input name="body" value="` +
        encryptedBody +
        `" />
      </form>`
    );
    let loginForm = document.getElementById("attLoginForm");
    loginForm.submit();
  };
  // const logToUniversity = () => {
  //   const date = Date.now();
  //   const encryptedBody = window.btoa(
  //     JSON.stringify(
  //       "employee_email=" +
  //         userEmail +
  //         date +
  //         "&fromMobileApplication=TRUE&date=" +
  //         date
  //     )
  //   );

  //   const dashboardLogin = document.getElementById("universityLogin");
  //   dashboardLogin.insertAdjacentHTML(
  //     "afterbegin",
  //     `<form
  //       style="display:none !important"
  //       method="post"
  //       id="attLoginForm"
  //       action={"https://dmgian.corp-dmg.com/DMG-University/login/"}
  //     >
  //       <input name="body" value="` +
  //       encryptedBody +
  //       `" />
  //     </form>`
  //   );
  //   let loginForm = document.getElementById("attLoginForm");
  //   loginForm.submit();
  // };

  return (
    <motion.nav
      className={`navbar ${colorTheme} navbar-expand-md navbar-light navbar-zindex bg-light position-relative`}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container-fluid  justify-content-end">
        <motion.button
          className="navbar-toggler  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <motion.span
            whileHover={{
              rotate: 180,
              transition: { duration: 0.5 },
            }}
            className="navbar-toggler-icon"
          ></motion.span>
        </motion.button>
        <div className="collapse navbar-collapse dropdown-nav " id="navbarNav">
          <ul className="navbar-nav zIndex  mx-auto">
            <li className="nav-item dropdown-parent">
              <NavLink
                to={`/employees-hub`}
                className={`nav-link ${colorTheme} nav-link d-sm-none`}
              >
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Employees Hub
                </span>
              </NavLink>
              <NavLink
                to={`/employees-hub`}
                className={`nav-link ${colorTheme} emp-hub nav-link d-none d-sm-block`}
              >
                <Text tid="Employees Hub" />
              </NavLink>
              <ul className="dropdown-hover position-absolute ">
                <li className="position-relative sub-drop">
                  <Link to="/learning-development">Learning & Development</Link>
                  <ul className="dropdown-sub-hub-hover text-nowrap position-absolute ">
                    <li id="universityLogin">
                      <a>University Courses</a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://ehda.login.em2.oraclecloud.com/"
                      >
                        Online Courses
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Coaching</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Sharing Knowledge</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">HR Policies</a>
                </li>
                <li className="position-relative sub-drop">
                  <Link to="/requests">HR Requests</Link>
                  <ul className="dropdown-sub-hub-hover text-nowrap position-absolute ">
                    <li>
                      <a
                        href={`http://10.1.11.83:8080/ords/f?p=164:37:::::P37_CRYBTO:${encodedData}`}
                      >
                        Medical Insurance
                      </a>
                    </li>
                    {/* <li> */}
                    <Link to="/forms">Forms</Link>
                    {/* </li> */}
                    <li>
                      <a
                        href={`http://10.1.11.83:8080/ords/f?p=165:21:::::P21_CRYBTO:${encodedData}`}
                      >
                        Family Fund
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Car Leasing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Employee Referrals</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">HR Letter</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Travel Requests</a>
                    </li>
                  </ul>
                </li>
                <li id="benefitsLogin">
                  <a onClick={logToDashbard}>Benefits</a>
                </li>
                <li>
                  <a
                    href="https://ehda.login.em2.oraclecloud.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Performance
                  </a>
                </li>
                <li className="position-relative sub-drop">
                  <Link to="/attendance">Attendance</Link>
                  <ul className="dropdown-sub-hub-hover text-nowrap position-absolute ">
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://dmgian.corp-dmg.com/attendance/"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://erpprod.daralmimar.local:8000/OA_HTML/AppsLocalLogin.jsp?requestUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FRF.jsp%3Ffunction_id%3D17471%26resp_id%3D51818%26resp_appl_id%3D800%26security_group_id%3D0%26lang_code%3DUS%26params%3DoR0XR4.F4jyzz9j21ymTmezlGoSAeY6q6ILPRYDaIp0%26oas%3DGAmo0KB9z-8uFhEJ9afx6g..&cancelUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FAppsLogin&langCode=US"
                      >
                        Leaves
                      </a>
                    </li>
                    <li>
                      <Link to="/attendance/calendar">Calendar</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">My Rewards</a>
                </li>
                <li>
                  <Link to="/other-policies">Other Policies</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown-parent position-relative ">
              <NavLink
                to={`/radio`}
                className={`nav-link ${colorTheme} nav-link`}
              >
                {/* <OverlayTrigger placement="top" overlay={tooltip}>
                  <button
                    type="button"
                    className="soon tooltip-trigger btn btn-secondary"
                  >
                  </button>
                </OverlayTrigger> */}
                <Text tid="navFamilyRadio" />
              </NavLink>
              <ul className="dropdown-hover text-nowrap position-absolute ">
                <li>
                  <a
                    href="https://radio.mountainviewegypt.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Listen Live
                  </a>
                </li>
                <li>
                  <Link to="/radioS01">Season One</Link>
                </li>
                <li className="position-relative sub-drop">
                  <Link to="/radioS02">Season Two</Link>
                  <ul className="dropdown-sub-hover text-nowrap position-absolute ">
                    <li>
                      <Link to="/sa3aM3El3ela">ساعة مع العيلة</Link>
                    </li>
                    <li className="">
                      <NavLink to="/mentor">The Mentor</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown-parent soonCont">
              <NavLink
                to="/goodness"
                className={`nav-link ${colorTheme} nav-link`}
              >
                Goodness
              </NavLink>
              <ul className="dropdown-hover position-absolute ">
                <li>
                  <a href="javascript:void(0)">ESG</a>
                </li>
                <li>
                  <Link to="/goodness/mv-foundation">MV Foundation</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/news`}
                className={`nav-link ${colorTheme} nav-link d-sm-none`}
              >
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  News
                </span>
              </NavLink>

              <NavLink
                to={`/news`}
                className={`nav-link ${colorTheme} nav-link d-none d-sm-block`}
              >
                <Text tid="navNews" />
              </NavLink>
            </li>
            <li className="nav-item soonCont">
              <a
                href="javascript:void(0)"
                className={`nav-link ${colorTheme} nav-link d-sm-none`}
              >
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  <OverlayTrigger placement="top" overlay={tooltip}>
                    <button
                      type="button"
                      className="soon tooltip-trigger btn btn-secondary"
                    >
                      <Text tid="Careers" />
                    </button>
                  </OverlayTrigger>
                </span>
              </a>
              <a
                href="javascript:void(0)"
                className={`nav-link ${colorTheme} nav-link d-none d-sm-block`}
              >
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <button
                    type="button"
                    className="soon tooltip-trigger btn btn-secondary"
                  >
                    <Text tid="navCareers" />
                  </button>
                </OverlayTrigger>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={LHlink}
                target="_blank"
                rel="noreferrer"
                className={`nav-link ${colorTheme} ${
                  myCookieUserObj?.userCompanyToShow === "dma"
                    ? "nav-link d-none"
                    : "nav-link"
                }`}
              >
                <Text tid="navLighthouse" />
              </a>
              {myCookieUserObj?.userCompanyToShow === "dma" && (
                <div className={`nav-link ${colorTheme} nav-link`}>
                  <OverlayTrigger placement="top" overlay={tooltip}>
                    <button
                      type="button"
                      className="soon border-0  tooltip-trigger btn btn-secondary"
                    >
                      <Text tid="Lighthouse" className="fw-bold " />
                    </button>
                  </OverlayTrigger>
                </div>
              )}
            </li>
            {myCookieUserObj?.userCompanyToShow === "dme" ? (
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={`nav-link ${colorTheme} nav-link`}
                >
                  About Us
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  href={destLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`nav-link ${colorTheme} nav-link`}
                >
                  About Us
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;

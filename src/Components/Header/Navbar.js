import React, { useContext } from "react";
import "./navbar.scss";
import logoutIcon from "./images/logout icon.png";
import { NavLink } from "react-router-dom";
import { Text } from "../../containers/Language";
import "./header.css";
import { motion } from "framer-motion";
import { IntranetContext } from "../../context";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import Cookies from "js-cookie";

const NavBar = () => {
  const { logout, colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);

  // console.log(myCookieUserObj?.userCompanyToShow);

  const AboutUsLinks = {
    DMC: "https://www.dmc-egy.com/",
    Curve: "https://www.curvelandscape.com/",
    MV: "https://mountainviewegypt.com/",
    DMA: "https://dma.com.eg",
  };
  let destLink = AboutUsLinks.MV;
  if (myCookieUserObj?.userCompanyToShow.includes("MV")) {
    destLink = AboutUsLinks.MV;
  }
  if (myCookieUserObj?.userCompanyToShow.includes("DMA")) {
    destLink = AboutUsLinks.DMA;
  }
  if (myCookieUserObj?.userCompanyToShow.includes("DME")) {
    destLink = AboutUsLinks.DME;
  }
  if (myCookieUserObj?.userCompanyToShow.includes("Curve")) {
    destLink = AboutUsLinks.Curve;
  }
  const lighthouseLinks = {
    MV: "https://xd.adobe.com/view/3c358f98-eb42-43e6-a6ca-f0a38ce926ee-6966/screen/7e3f74b5-8c89-4939-ac20-efd63f101ef7/?fullscreen&hints=off",
    DME: "https://xd.adobe.com/view/c241150c-861a-4d66-a877-a71e253d5fa8-9712/?fullscreen&hints=off",
    DMA: "",
  };
  let LHlink = lighthouseLinks.MV;
  if (myCookieUserObj?.userCompanyToShow.includes("DME")) {
    LHlink = lighthouseLinks.DME;
  }
  if (myCookieUserObj?.userCompanyToShow.includes("DMA")) {
    LHlink = lighthouseLinks.DMA;
  }
  const tooltip = <Tooltip id="tooltip-top">Coming Soon...</Tooltip>;
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
            <li className="nav-item">
              <NavLink to={`/employees-hub`} className="nav-link d-sm-none">
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Employees Hub
                </span>
              </NavLink>
              <NavLink
                to={`/employees-hub`}
                className="nav-link d-none d-sm-block"
                // aria-current='page'
              >
                <Text tid="Employees Hub" />
              </NavLink>
            </li>
            <li className="nav-item soonCont">
              <NavLink to={`/radio`} className="nav-link">
                {/* <OverlayTrigger placement="top" overlay={tooltip}>
                  <button
                    type="button"
                    className="soon tooltip-trigger btn btn-secondary"
                  >
                  </button>
                </OverlayTrigger> */}
                <Text tid="navFamilyRadio" />
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://mountainview.foundation/"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <Text tid="navMvFoundation" />
              </a>
            </li>
            <li className="nav-item">
              <NavLink to={`/news`} className="nav-link d-sm-none">
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  News
                </span>
              </NavLink>

              <NavLink to={`/news`} className="nav-link d-none d-sm-block">
                <Text tid="navNews" />
              </NavLink>
            </li>
            <li className="nav-item soonCont">
              <NavLink to={`/jobs`} className="nav-link d-sm-none">
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
              </NavLink>
              <NavLink to={`/jobs`} className="nav-link d-none d-sm-block">
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <button
                    type="button"
                    className="soon tooltip-trigger btn btn-secondary"
                  >
                    <Text tid="navCareers" />
                  </button>
                </OverlayTrigger>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href={LHlink}
                target="_blank"
                rel="noreferrer"
                className={`${
                  myCookieUserObj?.userCompanyToShow.includes("DMA")
                    ? "nav-link d-none"
                    : "nav-link"
                }`}
              >
                <Text tid="navLighthouse" />
              </a>
              {myCookieUserObj?.userCompanyToShow.includes("DMA") && (
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <button
                    type="button"
                    className="soon border-0  tooltip-trigger btn btn-secondary"
                  >
                    <Text tid="LH" />
                  </button>
                </OverlayTrigger>
              )}
            </li>
            <li className="nav-item">
              <NavLink to={`/it-policies`} className="nav-link d-sm-none">
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Other Policies
                </span>
              </NavLink>
              <NavLink
                to={`/other-policies`}
                className="nav-link d-none d-sm-block"
              >
                <Text tid="Other Policies" />
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href={destLink}
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                {/* <Text tid="navLighthouse" /> */}
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;

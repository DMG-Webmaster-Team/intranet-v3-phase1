import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Text } from "../../containers/Language";
import { motion } from "framer-motion";
import logo from "./images/logo.png";
import DMELogo from "./images/DMElogo.png";
import DMEHeaderLogo from "./images/dme-logo.png";
import DMAHeaderLogo from "./images/DMA  blueLogofinaaaal-01.png";
import mvLogo from "./images/MV Logo cases_MV Primary Logo white copy.png";

import { IntranetContext } from "../../context";
import { Nav, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";

import DataTableRes from "./DataTableRes";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  const { logout, colorTheme, handleInputChange, searchQuery } =
    useContext(IntranetContext);

  const myCookie = Cookies.get("user");
  // console.log(myCookie);

  const myThemeCookie = Cookies.get("theme");
  // console.log(myThemeCookie);
  const myCookieUserObj = myCookie && JSON.parse(myCookie);

  const userName = myCookieUserObj?.userName?.split(" ")[0];

  const userInitials = `${myCookieUserObj?.userName?.split(" ")[0][0]}${
    myCookieUserObj?.userName?.split(" ")[1][0]
  }`;

  function ProfilePicture(props) {
    return <h2 className={`initials ${colorTheme}`}>{userInitials}</h2>;
  }

  let src = "",
    width = "",
    height = "",
    m = "",
    p = "";
  // console.log(myCookieUserObj);
  if (myCookieUserObj?.userCompanyToShow === "dma") {
    src = DMAHeaderLogo;
    width = "120px";
    height = "80px";
    m = "mx-4 mb-2";
    p = "";
  }
  if (myCookieUserObj?.userCompanyToShow === "dme") {
    src = DMEHeaderLogo;
    width = "100px";
    height = "50px";
    m = "me-4";
    p = "px-2";
  }
  if (myCookieUserObj?.userCompanyToShow === "mv") {
    src = mvLogo;
    m = "mb-3";
    p = "px-0";
    width = "100px";
    height = "75px";
  }
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //   }
  // };

  return (
    <motion.div
      className={`container-fluid header ${colorTheme}`}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="d-flex  flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center ">
        {/* logo */}
        <div
          id="dmg-logo"
          className="d-flex justify-content-center justify-content-sm-start"
        >
          <Link to={`/`}>
            <img
              className="p-2 w-100"
              src={myThemeCookie === "theme-3" ? DMELogo : logo}
              alt="Dmg logo"
            />
          </Link>
        </div>
        <ul
          className={`navbar ${colorTheme} d-flex justify-content-center my-0`}
        >
          <li className={`mx-5 nav-item ${colorTheme}`}>
            <form className="d-flex align-items-center" role="search">
              <label htmlFor="search" className="searchLabel me-0 me-md-2 ">
                HR Directory
              </label>
              <input
                value={searchQuery}
                onChange={handleInputChange}
                id="search"
                className="form-control form-control-sm p-3"
                type="text"
                placeholder="Search for employees..."
                aria-label="Search"
                // onKeyDown={handleKeyDown}
              />

              <i className="bi bi-search"></i>
            </form>
          </li>
          <li className="d-flex align-items-star m-0 justify-content-start align-items-end ">
            <img
              src={src}
              width={width}
              height={height}
              className={`${m} ${p}`}
              alt={`Logo`}
            />
          </li>
          <li className={`nav-item welcome-user ${colorTheme} py-0`}>
            <Text tid="welcomeUser" /> {userName} <br />{" "}
            <Text tid="happyToSeeYou" />
          </li>

          {/* Language Change */}
          {/* <motion.li
            whilehover={{
              scale: 1.2,
            }}
            className="nav-item"
          >
            <LanguageSelector />
          </motion.li> */}

          <Nav className="ml-auto">
            <NavDropdown
              className={`dropNav ${colorTheme}`}
              title={<ProfilePicture />}
              id="basic-nav-dropdown"
              show={dropdownOpen}
              onClick={toggleDropdown}
            >
              <NavLink className="text-primary" to={`/my-profile`}>
                My Profile{" "}
                <span className="ms-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#0f4b8f"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </span>
              </NavLink>

              <NavDropdown.Item onClick={logout}>
                <Text tid="logout" />
                <span
                  whilehover={{
                    scale: 1.1,
                  }}
                  className="nav-item ms-4 logout-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0f4b8f"
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  {/* Logout */}
                </span>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <div className="language d-flex  ">
                  <LanguageSelector />
                </div>
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </ul>
      </div>

      <DataTableRes />
    </motion.div>
  );
};

export default Header;

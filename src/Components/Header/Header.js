import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Text } from "../../containers/Language";
import { motion } from "framer-motion";
import logo from "./images/logo.png";
import DMELogo from "./images/DMElogo.png";

import profileImg from "./images/no-user-img.jpg";
import logoutIcon from "../../img/logout icon.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { IntranetContext } from "../../context";
import { Nav, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  const { logout, loggedIn, colorTheme } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);

  const userName = myCookieUserObj?.userEmail?.split("@")[0].split(".")[0];
  const userInitials = `${myCookieUserObj?.userName?.split(" ")[0][0]}${
    myCookieUserObj?.userName?.split(" ")[1][0]
  }`;
  function ProfilePicture(props) {
    return <h2 className={`initials`}>{userInitials}</h2>;
  }

  return (
    <motion.div
      className={`container-fluid header ${colorTheme} py-3`}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
        {/* logo */}
        <div
          id="dmg-logo"
          className="d-flex justify-content-center justify-content-sm-start"
        >
          <Link to="/">
            <img
              className="p-2 w-100"
              src={myCookieUserObj.userCompanyToShow === "MV" ? logo : DMELogo}
              alt="Dmg logo"
            />
          </Link>
        </div>
        <ul
          className={`navbar ${colorTheme} d-flex justify-content-center my-auto`}
        >
          <li className=" mx-5 nav-item">
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control form-control-sm p-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="bi bi-search"></i>
            </form>
          </li>
          <li className="nav-item welcome-user p-2">
            <Text tid="welcomeUser" /> {userName} <br />{" "}
            <Text tid="happyToSeeYou" />
          </li>

          {/* Language Change */}
          {/* <motion.li
            whilehover={{
              scale: 1.2,
            }}
            className="nav-item text-black"
          >
            <LanguageSelector />
          </motion.li> */}

          <Nav className="ml-auto">
            <NavDropdown
              className={`dropNav ${colorTheme}`}
              title={<ProfilePicture src={profileImg} />}
              id="basic-nav-dropdown"
              show={dropdownOpen}
              onClick={toggleDropdown}
            >
              <NavLink className="text-primary" to="/my-profile">
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
              {/* <NavDropdown.Item
                className="text-white"
                style={{ color: "red" }}
                href="#action/2"
              >
                Download{" "}
                <span className="ms-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#0f4b8f"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </span>
              </NavDropdown.Item> */}
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
            </NavDropdown>
          </Nav>

          {/* Logout */}
          {/* <motion.li
            whilehover={{
              scale: 1.1,
            }}
            className="nav-item d-none d-md-block logout-btn"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="logout"
              height="25"
              width="25"
              className="mr-2"
            />
            <Text tid="logout" />
          </motion.li> */}
        </ul>

        {/* <div
          id='user-icon'
          className=' col-4 col-md-8   d-flex  justify-content-end    align-content-center'
        >
          <div className='user-name  align-self-center '>
            <h5 className='text-muted  '>{Name} &nbsp; &nbsp; &nbsp; &nbsp;</h5>
          </div>
          <div className='logout-lang d-none d-md-flex align-items-center'>
            <div
              className='  justify-content-between align-content-center h3 logout-btn '
              onClick={logout}
            >
              <img
                src={logoutIcon}
                alt='logout'
                height='25'
                width='25'
                className='mt-2 d-block'
              />
              <span className='logout-span'>Logout</span>
            </div>
          </div>
          <div className='language d-flex  '>
            <LanguageSelector />
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;

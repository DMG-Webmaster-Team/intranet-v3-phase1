import React, { useState, useContext } from "react";
import "./login.scss";
import logo from "./Asset 1.png";
import dmaLogo from "../../img/login-imgs/dma.png";
import mvLogo from "../../img/login-imgs/mv.png";
import dmeLogo from "../../img/login-imgs/dme.png";
import { IntranetContext } from "../../context";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";
import { Text } from "../../containers/Language";
import Cookies from "js-cookie";
const Login = () => {
  const { user, login, handleThemeChange } = useContext(IntranetContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const { isAuthenticated, isLoading } = user;

  const { loggedIn, handleFontChange } = useContext(IntranetContext);

  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = JSON.parse(myCookie);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setShowError(true);
    // handleThemeChange("theme-3");
    // handleFontChange("font-1");
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }
  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-header  text-white row text-center  p-2 p-md-5">
          <div>
            <img src={logo} alt="" className="p-2 " width={280} height={80} />
          </div>
        </div>
        <div className="container ">
          <div className="row  justify-content-center mt-5">
            <div className="col-9 col-md-7 col-lg-8 mt-5">
              <div className="row gx-md-5  gx-3">
                <div className="col-12 col-md-4  text-white text-center">
                  <img className="w-100" src={dmaLogo} alt="" />
                </div>
                <div className="col-12 col-md-4  text-white text-center">
                  <img className="w-100" src={mvLogo} alt="" />
                </div>
                <div className="col-12 col-md-4  text-white text-center">
                  <img className="w-100" src={dmeLogo} alt="" />
                </div>
              </div>

              <div className="row justify-content-center">
                <form
                  name="frmLogin"
                  method="post"
                  className="mt-5 col-md-10"
                  onSubmit={handleSubmit}
                >
                  <h2>
                    <Text tid="signIn" />
                  </h2>
                  <div className="row gx-4 gy-3">
                    <div className="col-md-6 col-12 form-label-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 col-12 form-label-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        autoComplete="false"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="btn-container text-md-end text-center">
                    <button
                      className="btn btn-lg login-btn mb-4 px-5 py-1"
                      name="submit"
                      type="submit"
                    >
                      <Text tid="signIn" />
                    </button>
                  </div>
                  {showError ? (
                    user.error ? (
                      <Alert variant="danger">{user.error}</Alert>
                    ) : null
                  ) : null}
                  {/* <p className="mt-5 mb-3 text-muted text-center">
                    &copy; {new Date().getFullYear()}
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/"></Redirect>;
  }
};

export default Login;

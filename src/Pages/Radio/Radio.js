import Cookies from "js-cookie";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import onAir from "./assets/onAir.jpg";
import S01 from "./assets/S01.jpg";
import S02 from "./assets/S02.jpg";
import "../Learning-Development/Learning-Development.css";

const Radio = () => {
  const { colorTheme } = useContext(IntranetContext);
  // const myCookie = loggedIn && Cookies.get("user");

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

    const radioLogin = document.getElementById("radioLogin");
    radioLogin.insertAdjacentHTML(
      "afterbegin",
      `<form
        style="display:none !important"
        method="post"
        id="attLoginForm"
        action="https://radio.mountainviewegypt.com/login/"
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
    <>
      <PagesHeader data={<Text tid="Family Radio" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8 ">
            <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col" id="radioLogin">
                <a
                  onClick={logToDashbard}
                  style={{ cursor: "pointer" }}
                  // href="https://radio.mountainviewegypt.com/"
                  // rel="noreferrer"
                  // target="_blank"
                >
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={onAir} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1 talent-text">Listen Live</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <NavLink to={`/radioS01`}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={S01} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Season One</p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col">
                <NavLink to={`/radioS02`}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={S02} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Season Two</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radio;

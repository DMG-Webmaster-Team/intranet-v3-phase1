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
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  return (
    <>
      <PagesHeader data={<Text tid="Family Radio" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8 ">
            <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col">
                <a href="#" rel="noreferrer" target="_blank">
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
                <NavLink to={`${process.env.PUBLIC_URL}/radioS01`}>
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
                <NavLink to={`${process.env.PUBLIC_URL}/radioS02`}>
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

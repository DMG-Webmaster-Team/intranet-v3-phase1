import Cookies from "js-cookie";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import Sa3aM3El3Ela from "./assets/Sa3aM3El3ela.jpg";
import theMentor from "./assets/theMentor.jpg";
import "../Services/Services.css";
import "../Learning-Development/Learning-Development.css";

const RadioS02 = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  return (
    <>
      <PagesHeader data={<Text tid="Season Two" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8 ">
            <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col">
                <NavLink to={`/sa3aM3El3ela`}>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Sa3aM3El3Ela} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p
                        className="m-1 talent-text"
                        style={{ fontFamily: "Tajawal" }}
                      >
                        ساعة مع العيلة
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col">
                <NavLink to="/mentor">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={theMentor} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">The Mentor</p>
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

export default RadioS02;

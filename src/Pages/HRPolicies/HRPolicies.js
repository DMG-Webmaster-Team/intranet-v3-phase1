import { useContext, useState } from "react";
import policiesImg from "../Services/images/Policies.jpg";
import test2 from "../Learning-Development/imgs/courses.jpg";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "../Learning-Development/Learning-Development.css";
import "./HrPolicies.css";
import Cookies from "js-cookie";
import rewards from "./imgs/rewards.jpg";
import coc from "./imgs/coc.png";
import talentAcqImg from "./imgs/talentAcquisition.jpg";
import { Link } from "react-router-dom";

const HRPolicies = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);
  return (
    <>
      <PagesHeader data={<Text tid="HR Policies" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8">
            <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col">
                <Link to='code-of-conduct'>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={coc} className="widthFixed" style={{ height: "290px", width: "196px" }} alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Code of conduct</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* <div className="col">
                <a href={talentAcq} target="_blank" rel="noreferrer">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={talentAcqImg} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">HR Policies</p>
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="col">
                <a
                  // href={`http://10.1.11.83:8080/ords/f?p=129:37:::::P37_CRYBTO:${encodedData}`}
                  href="javascript:void(0)"
                >
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={policiesImg} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h6 className={`card-title ${colorTheme}`}>Coming Soon...</h6>
                    </div>
                    <div
                      className={`card-footer ${colorTheme}   text-nowrap`}
                    >
                      <p className="m-1" style={{ fontSize: "14.5px" }}>
                        HR Policies
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HRPolicies;

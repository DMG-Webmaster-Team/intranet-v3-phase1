import { Link } from "react-router-dom";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import HRPolicies from "../HRPolicies/HRPolicies";
import test from "../Learning-Development/imgs/7-Coaching.jpg";
import HRLetter from "./imgs/hrLetter.jpg";
import TravelReq from "./imgs/travel.jpg";
import forms from "./imgs/forms.jpg";
import CarLeasing from "./imgs/carLeasing.jpg";
import FamilyFund from "./imgs/familyFund.jpg";
import Employee from "./imgs/empRef.jpg";
import MedicalInsurance from "./imgs/medInsurance.jpg";
import "./requests.css";
import { useContext } from "react";
import { IntranetContext } from "../../context";
import Cookies from "js-cookie";
const Requests = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userId } = myCookieUserObj;
  function reverseString(str) {
    const data = str.split("").reverse().join("");
    return data;
  }
  var encodedData = window.btoa(reverseString(userId));

  console.log(userId);
  return (
    <div>
      <PagesHeader data={<Text tid="HR Requests & Forms" />} />

      {/* old design approach */}
      {/* <div className="container mt-md-5 mt-3">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-10">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-2 g-4">
              <Link to="/application">
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={HRLetter}
                      className=""
                      alt="..."
                    />

                    <div className="card-footer text-center text-nowrap">
                      <p className="m-1">HR Letters</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={TravelReq}
                      className=""
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
                    </div>
                    <div className="card-footer text-center text-nowrap">
                      <p className="m-1">Travel requests</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={CarLeasing}
                      className=""
                      alt="..."
                    />

                    <div className="card-footer text-center text-nowrap">
                      <p className="m-1">Car Leasing</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={FamilyFund}
                      className=""
                      alt="..."
                    />

                    <div className="card-footer text-center text-nowrap">
                      <p className="m-1">Family Fund</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={Employee}
                      className=""
                      alt="..."
                    />

                    <div className="card-footer text-center text-wrap">
                      <p className="m-0">Employee Referrals</p>
                    </div>
                  </div>
                </div>
              </Link>

              <a
                href="http://10.1.11.83:8080/ords/f?p=151:37:::::P37_CRYBTO:"
                rel="noreferrer"
              >
                <div className="col">
                  <div className="card">
                    <img
                      width={180}
                      height={240}
                      src={MedicalInsurance}
                      className=""
                      alt="..."
                    />

                    <div className="card-footer text-center">
                      <p className="m-0">Medical insurance</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-2 mt-2">
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={HRLetter} className="" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
              </div>
              <div className={`card-footer ${colorTheme}`}>
                <p className="m-1">HR Letter</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={TravelReq} className="" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
              </div>
              <div className={`card-footer ${colorTheme}`}>
                <p className="m-1">Travel Requests</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={CarLeasing} className="" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
              </div>
              <div className={`card-footer ${colorTheme}`}>
                <p className="m-1">Car Leasing</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={FamilyFund} className="" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
              </div>
              <div className={`card-footer ${colorTheme}`}>
                <p className="m-1">Family Fund</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-2">
          <div className="col">
            <a
              href={`http://10.1.11.83:8080/ords/f?p=129:37:::::P37_CRYBTO:${encodedData}`}
            >
              <div className="card">
                <div className="image-wrapper">
                  <img src={Employee} className="" alt="..." />
                </div>
                <div className="card-img-overlay">
                  <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
                </div>
                <div className={`card-footer ${colorTheme}`}>
                  <p className="m-1">Employee Referrals</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a
              href={`http://10.1.11.83:8080/ords/f?p=151:37:::::P37_CRYBTO:${encodedData}`}
              // href={`http://10.1.11.83:8080/ords/f?p=108:37:::::P37_CRYBTO:${userId}`}
            >
              <div className="card">
                <div className="image-wrapper">
                  <img src={MedicalInsurance} className="" alt="..." />
                </div>
                <div className="card-img-overlay">
                  {/* <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5> */}
                </div>
                <div className={`card-footer ${colorTheme}`}>
                  <p className="m-1">Medical Insurance</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <Link to="forms">
              <div className="card">
                <div className="image-wrapper">
                  <img src={forms} className="" alt="..." />
                </div>
                {/* <div className="card-img-overlay">
                  <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5>
                </div> */}
                <div className={`card-footer ${colorTheme}`}>
                  <p className="m-1">Forms</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;

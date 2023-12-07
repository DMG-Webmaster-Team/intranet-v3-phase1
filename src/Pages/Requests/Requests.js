import { Link } from "react-router-dom";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
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
  const { colorTheme, loggedIn, font } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userId } = myCookieUserObj;
  function reverseString(str) {
    const data = str?.split("").reverse().join("");
    return data;
  }
  var encodedData = window.btoa(reverseString(userId));

  return (
    <div>
      <PagesHeader data={<Text tid="HR Requests & Forms" />} />
      <div className={`container font ${colorTheme}`}>
        <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-2 mt-2">
          <div className="col">
            <a
              href={`http://10.1.11.83:8080/ords/f?p=164:37:::::P37_CRYBTO:${encodedData}`}
              // href={`http://10.1.11.83:8080/ords/f?p=155:20:::::P20_CRYBTO:${encodedData}`} FAMILY FUND
            >
              <div className="card">
                <div className="image-wrapper">
                  <img
                    src={MedicalInsurance}
                    className="widthFixed"
                    alt="..."
                  />
                </div>
                <div className="card-img-overlay">
                  {/* <h5 className={`card-title ${colorTheme}`}>Coming Soon...</h5> */}
                </div>
                <div className={`card-footer ${colorTheme} ${font}`}>
                  <p className="m-1" style={{ fontSize: "14.5px" }}>
                    Medical Insurance
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <Link to={`/forms`}>
              <div className="card">
                <div className="image-wrapper">
                  <img src={forms} alt="..." />
                </div>
                <div className={`card-footer ${colorTheme} ${font}`}>
                  <p className="m-1">Forms</p>
                </div>
              </div>
            </Link>
          </div>
          {/* Family Fund */}
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={FamilyFund} className="widthFixed" alt="..." />
              </div>

              <div className={`card-footer ${colorTheme} ${font}`}>
                <p className="m-1">Family Fund</p>
              </div>
            </div>
            {/* <a
              // href={`http://10.1.11.83:8080/ords/f?p=165:::::P20_CRYBTO:${encodedData}`}
              href={`http://10.1.11.83:8080/ords/f?p=165:21:::::P21_CRYBTO:${encodedData}`}
            >
            </a> */}
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={CarLeasing} className="widthFixed" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h6 className={`card-title ${colorTheme}`}>Coming Soon...</h6>
              </div>
              <div className={`card-footer ${colorTheme} ${font}`}>
                <p className="m-1">Car Leasing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mb-2">
          <div className="col">
            <a
              // href={`http://10.1.11.83:8080/ords/f?p=129:37:::::P37_CRYBTO:${encodedData}`}
              href="javascript:void(0)"
            >
              <div className="card">
                <div className="image-wrapper">
                  <img src={Employee} className="widthFixed" alt="..." />
                </div>
                <div className="card-img-overlay">
                  <h6 className={`card-title ${colorTheme}`}>Coming Soon...</h6>
                </div>
                <div
                  className={`card-footer ${colorTheme} ${font}  text-nowrap`}
                >
                  <p className="m-1" style={{ fontSize: "14.5px" }}>
                    Employee Referrals
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={HRLetter} className="widthFixed" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h6 className={`card-title ${colorTheme}`}>Coming Soon...</h6>
              </div>
              <div className={`card-footer ${colorTheme} ${font}`}>
                <p className="m-1">HR Letter</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="image-wrapper">
                <img src={TravelReq} className="widthFixed" alt="..." />
              </div>
              <div className="card-img-overlay">
                <h6 className={`card-title ${colorTheme}`}>Coming Soon...</h6>
              </div>
              <div className={`card-footer ${colorTheme} ${font}`}>
                <p className="m-1">Travel Requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;

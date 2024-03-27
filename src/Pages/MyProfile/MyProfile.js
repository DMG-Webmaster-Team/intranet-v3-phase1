import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import "./MyProfile.css";
import Cookies from "js-cookie";
import { useContext, useState, useEffect } from "react";
import { IntranetContext } from "../../context";
import axios from "axios";
import { GrNotification } from "react-icons/gr";

const MyProfile = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);
  const { colorTheme } = useContext(IntranetContext);

  const {
    userName,
    userDepartment,
    userId,
    userCompany,
    userJob,
    userHiringDate,
    userCompanyToShow,
  } = myCookieUserObj;

  function reverseString(str) {
    const data = str?.split("").reverse().join("");
    return data;
  }
  var encodedData = window.btoa(reverseString(userId));
  return (
    <>
      <PagesHeader data={<Text tid="My Profile" />} />
      <div className="row d-flex justify-content-center pt-md-4 pt-2">
        <div className="col-11">
          <div className="row">
            <div className="col-md-2 col-12 text-white">
              {/* <img src={pic} alt="" className="img-fluid h-75 mt-5  " /> */}
            </div>
            <div className="col-md-7 col-12">
              <div className="row">
                <h2 className={`${colorTheme}`}>{userName}</h2>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3">
                  <h5 className={`${colorTheme}`}>Title</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9 ">
                  <h5 className={`${colorTheme}`}>{userJob.split("|")[1]}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Code</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userId}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Department</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userDepartment}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>First Hiring Date</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userHiringDate}</h5>
                </div>
              </div>
              {/* <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>userCompany</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userCompanyToShow}</h5>
                </div>
              </div> */}
              {/* <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>Last Promotion</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userPromotionDate}</h5>
                </div>
              </div> */}
            </div>
            <div className="col-md-2 col-12 d-flex justify-content-center">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${colorTheme} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Employee Data
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <a
                        href={`http://10.1.11.83:8080/ords/f?p=151:37:::::P37_CRYBTO:${encodedData}`}
                      >
                        <div>
                          <p className="m-0">Marital status</p>
                          <br />
                          <p className="m-0">Home address</p>
                          <br />
                          <p className="m-0">Change in data</p>
                          <br />
                          <p className="m-0">Family data</p>
                        </div>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

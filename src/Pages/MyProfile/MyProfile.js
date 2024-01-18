import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import "./MyProfile.css";
import pic from "./Screenshot 2023-12-03 at 9.50.33 AM.png";
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

  async function getFeedback(emp_code, emp_comp) {
    try {
      const response = await axios.post(
        `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
        {
          data_type: "getFeedBack",
          credentials: {
            emp_code: emp_code,
            emp_comp: emp_comp,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const x = await getFeedback(userId, userCompany);
        // console.log(x);
        setFeedbacks(x);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        <div className="col-8 ">
          {feedbacks.length > 0 && (
            <>
              <hr />
              <h2 className="ps-5">
                You have received {feedbacks.length}{" "}
                {`Feedback${feedbacks.length === 1 ? "" : "s"}`}{" "}
                <span>
                  <GrNotification className="text-primary" />
                </span>
              </h2>
              {feedbacks.map((message, index) => (
                <section key={index} className="px-5">
                  {message.showName === "yes" && <h5>From: {message.from}</h5>}
                  <h5>Message: {message.message}</h5>
                  <h5>Date: {message.date}</h5>
                  <h5>Feedback Type: {message.feedbackType}</h5>
                  <h5>Assess: {message.assess}</h5>
                  <hr />
                </section>
              ))}
            </>
          )}
          {feedbacks.length === 0 && (
            <center>
              <h2 className="ps-5">You are all caught up!</h2>
              <p className="ps-5 fw-bolder">No messages for you yet!</p>
            </center>
          )}
        </div>
      </div>
      <div className="row text-black d-flex justify-content-center"></div>
    </>
  );
};

export default MyProfile;

import "./Services.css";
import learningImg from "./images/Learning.jpg";
import policiesImg from "./images/Policies.jpg";
import benefitsImg from "./images/Benefits.jpg";
import empHistory from "./images/Employe history.jpg";
import comp from "./images/compensation.jpg";
import attend from "./images/attendance.jpg";
import PerformanceImg from "./images/performance.jpg";
import requestsImg from "./images/req.jpg";
import { Text } from "../../containers/Language";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { IntranetContext } from "../../context";
import axios from "axios";
import Cookies from "js-cookie";

const Services = () => {
  const { loggedIn, colorTheme } = useContext(IntranetContext);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userId } = myCookieUserObj;
  function reverseString(str) {
    const data = str.split("").reverse().join("");
    return data;
  }
  var encodedData = window.btoa(reverseString(userId));

  return (
    <>
      <PagesHeader data={<Text tid=" Hub" />} />
      <div className="container">
        <div className="row  mt-md-1 mt-2 justify-content-center text-center">
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <Link
              to="/learning-development"
              className={`icon overlayCont ${colorTheme}`}
              id="learning-development"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={learningImg}
                alt="university-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  {/* <Text tid="navAnnouncements" /> */}
                  Learning & Development
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <Link
              to="/hr-policies"
              className={`icon overlayCont ${colorTheme}`}
              id="policies"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={policiesImg}
                alt="jobs-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text text-nowrap">
                  {/* <Text tid="navNews" /> */}
                  HR Policies
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <Link
              to="/requests"
              className={`icon overlayCont ${colorTheme}`}
              id=""
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={requestsImg}
                alt="news-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text text-nowrap">
                  {/* <Text tid="navJobs" /> */}
                  HR Requests
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            {/* <Link to="/benefits" className={`icon overlayCont ${colorTheme}`} id="benefits"> */}
            <a
              className={`icon overlayCont ${colorTheme}`}
              href="https://dmgian.corp-dmg.com/benefits/"
              rel="noreferrer"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={benefitsImg}
                alt="announcments-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  {/* <Text tid="navUniversity" /> */}
                  <span className="fs-1 mazaya">مزايا</span> Benefits
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </a>
            {/* </Link> */}
          </div>
        </div>
        <div className="row  mt-1 justify-content-center text-center">
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <a
              href="https://ehda.login.em2.oraclecloud.com/"
              className={`icon overlayCont ${colorTheme}`}
              id="benefits"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={PerformanceImg}
                alt="announcments-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  <span className="">Performance</span>
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <Link
              to="/attendance"
              // onClick={logToDashbard}
              className={`icon overlayCont ${colorTheme}`}
              id="benefits"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={attend}
                alt="announcments-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  <span className="">Attendance</span>
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <Link
              to="/compensation"
              className={`icon overlayCont ${colorTheme}`}
              id="benefits"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={comp}
                alt="announcments-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  <span className="text-nowrap">My Compensation</span>
                  <br />
                  <span className="soon">Coming Soon...</span>
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>Coming Soon...</div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <a
              href={`http://10.1.11.83:8080/ords/f?p=129:37:::::P37_CRYBTO:${encodedData}`}
              className={`icon overlayCont ${colorTheme}`}
              id="benefits"
            >
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                id="icon"
                src={empHistory}
                alt="announcments-icon"
                className="rounded image"
              />
              <div className="middle">
                <div className="text">
                  <span className="">Employment History</span>
                </div>
              </div>
              <div className={`more-cont ${colorTheme}`}>View more</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

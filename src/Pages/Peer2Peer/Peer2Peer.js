import { useContext, useEffect, useState } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { GrNotification } from "react-icons/gr";
import Cookies from "js-cookie";
import { IntranetContext } from "../../context";
import axios from "axios";
import "../MyProfile/MyProfile.css";

const Peer2Peer = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);
  //   const { colorTheme } = useContext(IntranetContext);

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
      console.log(response.data);
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
      <div>
        <PagesHeader data={<Text tid="Peer to Peer" />} />
        <div className="container">
          <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="col-9">
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
                      {message.showName === "yes" && (
                        <h5>From: {message.from}</h5>
                      )}
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
        </div>
      </div>
    </>
  );
};

export default Peer2Peer;

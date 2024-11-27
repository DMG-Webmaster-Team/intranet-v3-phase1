import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import "../MyProfile/MyProfile.css";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { IntranetContext } from "../../context";
import axios from "axios";
import CommentIcon from "../../Components/CommentIcon";

const API_URL =
  "https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php";

export default function UserInfo() {
  const [message, setMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [assess, setAssess] = useState("");
  const [showName, setShowName] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { colorTheme, userInfo } = useContext(IntranetContext);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  // async function setFeedback(created_by, emp_code, emp_comp, details) {
  //   try {
  //     const response = await axios.post(
  //       `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
  //       {
  //         data_type: "setFeedBack",
  //         credentials: {
  //           created_by: created_by,
  //           emp_code: emp_code,
  //           emp_comp: emp_comp,
  //           details: details,
  //         },
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const addMessageToUser = (targetUserName, messageContent) => {
  //   const currentDate = new Date();
  //   const newMessage = {
  //     message: messageContent,
  //     from: myCookieUserObj.userName,
  //     to: targetUserName,
  //     date: currentDate.toLocaleString(),
  //     feedbackType: feedbackType,
  //     assess: assess,
  //     showName: showName,
  //   };

  //   setFeedback(
  //     myCookieUserObj.userId,
  //     userInfo.code,
  //     userInfo.company,
  //     newMessage
  //   );
  // };

  useEffect(() => {
    if (submissionMessage) {
      const timeout = setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [submissionMessage]);

  // function handleSubmit(e) {
  //   e.preventDefault()

  //       if (!feedbackType || !assess || !message) {
  //         setSubmissionMessage("Please fill in all fields.");
  //         return;
  //       }
  //   addMessageToUser(userInfo.name, message)
  //   setMessage('')
  //   setFeedbackType('')
  //   setAssess('')
  //   setShowName(null)
  //   setSubmissionMessage('Your Message has been sent successfully!')
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedbackType || !assess || !message) {
      setSubmissionMessage("Please fill in all fields.");
      return;
    }

    const newMessage = {
      message,
      from: myCookieUserObj.userName,
      to: userInfo.name,
      date: new Date().toLocaleString(),
      feedbackType,
      assess,
      showName,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          data_type: "setFeedBack",
          credentials: {
            created_by: myCookieUserObj.userId,
            emp_code: userInfo.code,
            emp_comp: userInfo.company,
            details: newMessage,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setSubmissionMessage("Your message has been sent successfully!");
      setMessage("");
      setFeedbackType("");
      setAssess("");
      setShowName(null);
    } catch (error) {
      console.error(error);
      setSubmissionMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PagesHeader data={<Text tid="Employee Info" />} />
      <div className="row d-flex justify-content-center pt-md-4 pt-2">
        <div className="col-11">
          <div className="row">
            <div className="col-md-2 col-12 bg-dar text-white"></div>
            <div className="col-md-7 col-12">
              <div className="row">
                <h3 className={`${colorTheme}`}>
                  {userInfo.name || "Still no data"}
                </h3>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3">
                  <h5 className={`${colorTheme}`}>Title</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9 ">
                  <h5 className={`${colorTheme}`}>{userInfo.title}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Email</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.email}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Department</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.department}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Direct Manager</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.Direct_manager}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Work Number</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>
                    {userInfo.work_umber || "--"}
                  </h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1 mt-2">
                <div className="col-12">
                  <center>
                    <h5 className={`${colorTheme}`}>
                      <span>
                        <CommentIcon />
                      </span>
                      &nbsp; Give Feedback To {userInfo.name?.split(" ")[0]}{" "}
                      &nbsp;
                      <span>
                        <CommentIcon />
                      </span>
                    </h5>
                  </center>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <form onSubmit={handleSubmit}>
                  <div className="col-12 my-3">
                    <label htmlFor="showName" className="me-5">
                      <h5> Show my name?</h5>
                    </label>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="yes"
                        name="showName"
                        value="yes"
                        checked={showName === "yes"}
                        onChange={(e) => setShowName(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="no"
                        name="showName"
                        value="no"
                        checked={showName === "no"}
                        onChange={(e) => setShowName(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-flex gap-5 align-items-center  my-2">
                    <div>
                      <label htmlFor="feedbackType">
                        <h5>Feedback Type</h5>
                      </label>
                      <select
                        name="feedbackType"
                        value={feedbackType}
                        onChange={(e) => setFeedbackType(e.target.value)}
                        className="ms-2 px-2"
                        id="feedbackType"
                      >
                        <option value="">Choose</option>
                        <option value="gratitude">Gratitude</option>
                        <option value="positive">Positive</option>
                        <option value="Improvement">Improvement</option>
                      </select>
                    </div>

                    <div className="my-2">
                      <label hrmlFor="assess">
                        <h5>Related to</h5>
                      </label>
                      <select
                        name="assess"
                        value={assess}
                        onChange={(e) => setAssess(e.target.value)}
                        className="ms-2 px-2"
                        id="assess"
                      >
                        <option value="">Choose</option>
                        <option value="character">Character</option>
                        <option value="values">Values</option>
                        <option value="skills">Skills</option>
                        <option value="behavior">Behavior</option>
                        <option value="attitude">Attitude</option>
                        <option value="leadership">Leadership</option>
                        <option value="teamwork">Teamwork</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        <h5>
                          Write your message to &nbsp;
                          {userInfo.name?.split(" ")[0]}
                        </h5>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        placeholder="Write your message....."
                        onChange={(e) => setMessage(e.target.value)}
                        rows="3"
                      ></textarea>
                      {submissionMessage && (
                        <center className="mt-3">
                          <p className="text-white bg-primary w-50 p-2 rounded-5">
                            {submissionMessage}
                          </p>
                        </center>
                      )}

                      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="" style={{ color: "#1E1E1E69" }}>
                            Be a light to your peer
                          </small>
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="rounded-pill bg-primary text-white px-5 py-2  border-0 "
                        >
                          {loading ? "Submitting..." : "Send"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import "./MyProfile.css";
import pic from "./40.jpg";
import Cookies from "js-cookie";

const MyProfile = () => {
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userName, userDepartment, userId, userJob, userHiringDate } =
    myCookieUserObj;

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
            <div className="col-md-2 col-12 bg-dar text-white">
              {/* <img src={pic} alt="" className="img-fluid h-75" /> */}
            </div>
            <div className="col-md-7 col-12">
              <div className="row">
                <h2>{userName}</h2>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3">
                  <h5 className="">Title</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9 ">
                  <h5 className="">{userJob.split("|")[1]}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>Code</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userId}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>Department</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userDepartment}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>First Hiring Date</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userHiringDate}</h5>
                </div>
              </div>
              {/* <div className="row gx-2 me-3 gy-2 mb-3">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5>Performance</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5>{userPerformance}</h5>
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
            <div className="col-md-3 col-12 d-flex justify-content-center">
              <div className="accordion" id="accordionExample">
                {/* <div className="accordion-item">
                  <h2 className="accordion-header" id="headingZero">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseZero"
                      aria-expanded="false"
                      aria-controls="collapseZero"
                    >
                      Attendance
                    </button>
                  </h2>
                  <div
                    id="collapseZero"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingZero"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <a href="https://dmgian.corp-dmg.com/attendance/">
                        <p className="m-0">Dashboard</p>
                      </a>
                      <br />
                      <a href="http://erpprod.daralmimar.local:8000/OA_HTML/AppsLocalLogin.jsp?requestUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FRF.jsp%3Ffunction_id%3D17471%26resp_id%3D51818%26resp_appl_id%3D800%26security_group_id%3D0%26lang_code%3DUS%26params%3DoR0XR4.F4jyzz9j21ymTmezlGoSAeY6q6ILPRYDaIp0%26oas%3DGAmo0KB9z-8uFhEJ9afx6g..&cancelUrl=http%3A%2F%2Ferpprod.daralmimar.local%3A8000%2FOA_HTML%2FAppsLogin&errCode=FND_SESSION_ICX_EXPIRED&langCode=US&username=h9C2CmTQL6-KpGsGDTtybgFlel.qW.8T7WwHG9kxho0">
                        <p className="m-0">Leaves</p>
                      </a>
                    </div>
                  </div>
                </div> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
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
                {/* <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      My Compensation
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <a href="">
                        <div>
                          <p className="m-0">Pay slip</p>
                          <br />
                          <p className="m-0">Annual increasement</p>
                          <br />
                          <p className="m-0">
                            Compensation <br className="p-o m-o" /> Statement
                          </p>
                          <br />
                          <p className="m-0">Family data</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button text-nowrap collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Promotions & Transfers
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>Contet to be put</strong>{" "}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";

import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import testImage from "../Learning-Development/imgs/sharing.jpg";
import "../Learning-Development/Learning-Development.css";

const OtherPolicies = () => {
  const [documents, setDocuments] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, loading, isDataLoading } =
    useContext(IntranetContext);
  useEffect(() => {
    fetchData("documents").then((res) => {
      setDocuments(res.documents);
    });
    setIsArabic(getLang());
  }, []);
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);
  console.log(documents);
  return (
    <>
      <div>
        <PagesHeader data={<Text tid="Other Policies" />} />
        <div className="container">
          <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="col-8">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={testImage} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h5>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">IT Policies</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={testImage} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h5>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Finance Policies</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={testImage} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h5>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Procurement</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={testImage} className="" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h5>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Sharing Knowledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-md-5 mt-5">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button fs-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    HR
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="accordion" id="sub-accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="sub-headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sub-collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            HR Forms
                          </button>
                        </h2>
                        <div
                          id="sub-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="sub-headingOne"
                          data-bs-parent="#sub-accordionExample"
                        >
                          <div className="accordion-body">
                            <p>Body content here</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="sub-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sub-collapseTwo"
                            aria-expanded="false"
                            aria-controls="sub-collapseTwo"
                          >
                            HR Policies
                          </button>
                        </h2>
                        <div
                          id="sub-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="sub-headingTwo"
                          data-bs-parent="#sub-accordionExample"
                        >
                          <div className="accordion-body">
                            <center>
                              This is the second item's accordion body.
                            </center>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid">
        <br />
        <br />
        <br />
        <Document
          data={documents}
          type="documents"
          isArabic={isArabic}
          loading={loading}
        />
      </div> */}
    </>
  );
};

export default OtherPolicies;

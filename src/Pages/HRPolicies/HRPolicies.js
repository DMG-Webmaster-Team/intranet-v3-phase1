import { useContext, useState } from "react";

import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "./HrPolicies.css";

const HRPolicies = () => {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <>
      <PagesHeader data={<Text tid="HR Policies" />} />
      <div className="container mt-md-5 mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-8 d-flex justify-content-center">
            <div className="row mb-md-5 mb-3">
              <div className="col-12">
                <div className="row text-center mb-3">
                  <div
                    className="col-12 col-md-7 d-flex justify-content-center align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(237,237,240)",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 className="m-0">Talent Management</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <div
                        className={`backColor ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="row text-center mb-3">
                  <div
                    className="col-12 col-md-7 d-flex justify-content-center align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(237,237,240)",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 className="m-0">Rewards</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <div
                        className={`backColor ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center mb-3">
                  <div
                    className="col-12 col-md-7 d-flex justify-content-center align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(237,237,240)",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 className="m-0">HR Operation</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <div
                        className={`backColor ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center mb-3">
                  <div
                    className="col-12 col-md-7 d-flex justify-content-center align-items-center gap-2"
                    style={{
                      backgroundColor: "rgb(237,237,240)",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 className="m-0">To be named</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <div
                        className={`backColor ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </div>
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

export default HRPolicies;

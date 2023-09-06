import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "./forms.css";
import clearence from "./assets/Clearance.pdf";
import familyFund from "./assets/Family Fund.pdf";
import resignation from "./assets/Resignation.pdf";
import sickLeave from "./assets/Sick leave.pdf";
import maternity from "./assets/Matenity leave.pdf";
import childCare from "./assets/Child care vacation.pdf";
import carLeasing from "./assets/Car Leasing.pdf";

const Forms = () => {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <>
      <PagesHeader data={<Text tid="Forms" />} />
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
                    <h4 className="m-0">Sick Leave</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={sickLeave}
                        rel="noreferrer"
                        target="_blank"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={sickLeave}
                        rel="noreferrer"
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Family Fund</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={familyFund}
                        rel="noreferrer"
                        target="_blank"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={familyFund}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Resignation</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={resignation}
                        target="_blank"
                        rel="noreferrer"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={resignation}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Clearance</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={clearence}
                        target="_blank"
                        rel="noreferrer"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={clearence}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Maternity Leave</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={maternity}
                        target="_blank"
                        rel="noreferrer"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={maternity}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Child Care Vacation</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={childCare}
                        target="_blank"
                        rel="noreferrer"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={childCare}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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
                    <h4 className="m-0">Car Leasing</h4>
                  </div>
                  <div className="col-12 col-md-4 mx-2 text-white">
                    <div className="row">
                      <a
                        href={carLeasing}
                        target="_blank"
                        rel="noreferrer"
                        className={`view ${colorTheme} col-12 col-md-7 d-flex justify-content-center align-items-center gap-2`}
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        <p className="mb-1 pt-2">View </p>
                        <span className="mt-2">
                          <i className="bi bi-eye-fill"></i>
                        </span>
                      </a>
                      <a
                        href={carLeasing}
                        download
                        className={`downloadPDF view backColor ${colorTheme} col-12 px-2 col-md-7  d-flex justify-content-center align-items-center`}
                        style={{}}
                      >
                        <p className="mb-1 mx-1 pt-2">Download</p>
                        <i className="bi bi-download mb-1 pt-2"></i>
                      </a>
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

export default Forms;

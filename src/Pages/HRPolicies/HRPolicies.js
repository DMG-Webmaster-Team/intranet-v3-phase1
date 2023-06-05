import { useContext, useState } from "react";
import test from "../Learning-Development/imgs/coashing.jpg";
import test2 from "../Learning-Development/imgs/courses.jpg";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "../Learning-Development/Learning-Development.css";
import "./HrPolicies.css";
import Cookies from "js-cookie";
import rewards from "./imgs/rewards.jpg";
import talent from "./imgs/talentManagment.jpg";
import operation from "./imgs/hrOperation.jpg";
import talentAcq from "./imgs/talentAcquisition.jpg";
import talentPDF from "./imgs/TalentManagment.pdf";
import rewardsPDF from "./imgs/Rewards.pdf";
import operationPDF from "./imgs/HR Operations.pdf";
import talentAcqPDF from "./imgs/TalentAcquisition.pdf";

const HRPolicies = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);
  return (
    <>
      <PagesHeader data={<Text tid="HR Policies" />} />
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
          <div className="col-8">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="col">
                <a href={talentPDF} rel="noreferrer" target="_blank">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={talent} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1 talent-text">Talent Management</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href={rewardsPDF} rel="noreferrer" target="_blank">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={rewards} className="" alt="..." />
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Rewards</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href={operationPDF} target="_blank" rel="noreferrer">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={operation} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">HR Operations</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href={talentAcqPDF} target="_blank" rel="noreferrer">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={talentAcq} className="" alt="..." />
                    </div>

                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1">Talent Acquisition</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HRPolicies;

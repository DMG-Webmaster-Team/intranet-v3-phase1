import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import HrPoliciesImg from "./imgs/9-HR Policies.jpg";
import ItPoliciesImg from "./imgs/10-IT Policies.jpg";
import { IntranetContext } from "../../context";

const Policies = () => {
  const { colorTheme } = useContext(IntranetContext);

  return (
    <div>
      <PagesHeader data={<Text tid="Policies" />} />
      <div className="container">
        <div className="row mt-md-4 mt-3 text-center justify-content-md-center">
          <div className="col-12  mx-md-5 mx-3 col-md-3">
            <Link to="/hr-policies">
              <div className="card">
                <img src={HrPoliciesImg} className="card-img-top" alt="..." />
                <div className={`card-footer ${colorTheme}`}>
                  <h3 className="m-1">HR Policies</h3>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="col-12  mx-md-5 mx-3 col-md-3">
            <Link to="/it-policies">
              <div className="card">
                <img src={ItPoliciesImg} className="card-img-top" alt="..." />
                <div className="card-footer">
                  <h3 className="m-1">IT Policies</h3>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Policies;

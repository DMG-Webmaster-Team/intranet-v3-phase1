import React from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import benefitsImg from "./imgs/4-Benefits.jpg";
import offersImg from "./imgs/15-Offers.jpg";

const Policies = () => {
  return (
    <div>
      <PagesHeader data={<Text tid="Benefits" />} />
      <div className="container">
        <div className="row mt-md-5 mt-3 text-center justify-content-md-center">
          <div className="col-12  mx-md-5 mx-3 col-md-3">
            <div className="card">
              <img src={benefitsImg} className="card-img-top" alt="..." />
              <div className="card-footer">
                <h3 className="m-1 text-decoration-underline">
                  Medical Services
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12  mx-md-5 mx-3 col-md-3">
            <div className="card">
              <img src={offersImg} className="card-img-top" alt="..." />
              <div className="card-footer">
                <h3 className="m-1 text-decoration-underline">Offers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;

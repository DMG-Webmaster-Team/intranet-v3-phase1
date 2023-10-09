import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import itPoliciesAndProcedures from "./Extra Photos-02.jpg";
import "../Learning-Development/Learning-Development.css";

const OtherPolicies = () => {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <>
      <div>
        <PagesHeader data={<Text tid="Other Policies" />} />
        <div className="container">
          <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="col-8">
              <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                  <div className="card">
                    <div className="image-wrapper">
                      <img
                        src={itPoliciesAndProcedures}
                        className=""
                        alt="..."
                      />
                    </div>
                    <div className="card-img-overlay">
                      <h6 className={`card-title ${colorTheme}`}>
                        Coming Soon...
                      </h6>
                    </div>
                    <div className={`card-footer ${colorTheme}`}>
                      <p className="m-1 text-nowrap ">
                        IT Policies & procedures
                      </p>
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

export default OtherPolicies;

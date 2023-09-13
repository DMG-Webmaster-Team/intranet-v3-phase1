import { useContext } from "react";
import { NavLink } from "react-router-dom";
import img1 from "./ESGFINAL.jpg";
import img2 from "./ESG&MV Foundation-02.jpg";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "../Services/Services.css";

const OtherPolicies = () => {
  const { colorTheme } = useContext(IntranetContext);

  return (
    <>
      <div>
        <PagesHeader data={<Text tid="Goodness" />} />
        <div className="container">
          <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="col-8 ">
              <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col">
                  <a href="javascript:void(0)">
                    <div className="card">
                      <div className="image-wrapper">
                        <img src={img1} className="" alt="..." />
                      </div>
                      <div className="card-img-overlay">
                        <h6 className={`card-title ${colorTheme}`}>
                          Coming Soon...
                        </h6>
                      </div>
                      <div className={`card-footer ${colorTheme}`}>
                        <p className="m-1">ESG</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <NavLink to={`/goodness/mv-foundation`}>
                    <div className="card">
                      <div className="image-wrapper">
                        <img src={img2} className="" alt="..." />
                      </div>

                      <div className={`card-footer ${colorTheme}`}>
                        <p className="m-1">MV Foundation</p>
                      </div>
                    </div>
                  </NavLink>
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

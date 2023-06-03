import Cookies from "js-cookie";
import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import testImage from "../Learning-Development/imgs/sharing.jpg";
import "../Learning-Development/Learning-Development.css";

const Compensation = () => {
  const { colorTheme, loggedIn } = useContext(IntranetContext);
  const myCookie = loggedIn && Cookies.get("user");
  const myCookieUserObj = loggedIn && JSON.parse(myCookie);

  return (
    <div>
      <PagesHeader data={<Text tid="My Compensation" />} />
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
                    <p className="m-1">Pay Slip</p>
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
                    <p className="m-1">Annual Increment</p>
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
                    <p className="m-1  text-nowrap">Compensation Statement</p>
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
                    <p className="m-1">Variable Pay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compensation;

import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import "../Learning-Development/Learning-Development.css";
// import curveLogo from "./WhatsApp Image 2023-09-11 at 1.01.35 PM (1).jpeg";
import dmcLogo from "../../fonts/Logos-01.png";
import curveLogo from "../../fonts/Logos-02.png";
import { useContext } from "react";
import { IntranetContext } from "../../context";

const About = () => {
  const { colorTheme, font } = useContext(IntranetContext);

  return (
    <>
      <div>
        <PagesHeader data={<Text tid="About Us" />} />
        <div className="container">
          <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="row d-flex justify-content-center">
              <div className="col-8 d-flex justify-content-center">
                <div className="col-12 col-md-6 d-flex justify-content-center  ">
                  <a
                    href=" https://www.dmc-egy.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <center>
                      <img
                        src={dmcLogo}
                        height={275}
                        width={275}
                        className=""
                        alt="DMC Logo"
                      />
                      <div
                        className={`card-footer m-0 w-50   ${colorTheme} ${font}`}
                      >
                        <p className="mt-3 p-2 text-nowrap ">Visit Website</p>
                      </div>
                    </center>
                  </a>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center  ">
                  <a
                    href=" https://www.curvelandscape.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <center>
                      <img
                        height={275}
                        width={285}
                        src={curveLogo}
                        className="img"
                        alt="Curve Logo"
                      />
                      <div
                        className={`card-footer w-50   ${colorTheme} ${font}`}
                      >
                        <p className="mt-3 p-2 ">Visit Website</p>
                      </div>
                    </center>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

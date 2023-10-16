import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import seasonOne from "./seasonOne.json";
import { BsPlayCircle } from "react-icons/bs";

const RadioS01 = () => {
  return (
    <>
      <PagesHeader data={<Text tid="Season One" />} />
      <div className="container text-center mt-md-5 mt-3">
        <div className="row d-flex justify-content-center ">
          <div className=" col-md-10 offset-md-3">
            {seasonOne.map((ep) => {
              return (
                <div className="row mb-2" key={ep.id}>
                  <h3 className="col-12 col-md-8 bg-secondary py-2 text-white ">{`${ep.id}-${ep.name}`}</h3>
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noreferrer"
                    className="col-12 col-md-4 text-center"
                  >
                    <h3 className="text-dark">
                      {" "}
                      <BsPlayCircle />
                    </h3>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioS01;

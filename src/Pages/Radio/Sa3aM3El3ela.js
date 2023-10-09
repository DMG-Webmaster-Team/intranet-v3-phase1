import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import season2 from "./seasonTwo.json";
import { BsPlayCircle } from "react-icons/bs";

const Sa3aM3El3ela = () => {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <>
      <PagesHeader data={<Text tid={`Season Two "Family Time "`} />} />
      <div className="container text-center mt-md-5 mt-3">
        <div className="row d-flex justify-content-center ">
          <div className=" col-md-10 offset-md-3">
            {season2.map((ep) => {
              return (
                <div className="row mb-2" key={ep.id}>
                  <h3 className="col-12 col-md-8 bg-secondary py-2 text-white  ">{`${ep.id}-${ep.name}`}</h3>
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noreferrer"
                    className="col-12 col-md-4 text-center"
                  >
                    <h3 className="text-dark">
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

export default Sa3aM3El3ela;

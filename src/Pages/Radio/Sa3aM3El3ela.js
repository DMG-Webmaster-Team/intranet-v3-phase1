import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import season2 from "./seasonTwo.json";

const Sa3aM3El3ela = () => {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <>
      <PagesHeader data={<Text tid="Season One" />} />
      <div className="container text-center mt-md-5 mt-3">
        <div className="row">
          <div className=" col-md-8 offset-md-3">
            {season2.map((ep) => {
              return (
                <div className="row mb-2" key={ep.id}>
                  <h3 className="col-12 col-md-8 bg-secondary">{`${ep.id}-${ep.name}`}</h3>
                  <a href={ep.url} className="col-12 col-md-4 text-center">
                    <h3 className="">Listen</h3>
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

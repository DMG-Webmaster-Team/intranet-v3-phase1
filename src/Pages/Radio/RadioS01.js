import { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import seasonOne from "./seasonOne.json";

const RadioS01 = () => {
  console.log(seasonOne);
  const { colorTheme } = useContext(IntranetContext);
  function genFrom1To30(arg) {
    return Array.from({ length: 30 }, (_, i) => `${arg}${i + 1}`);
  }
  const baseRadioEpURL = `https://dmgian.corp-dmg.com/DMG-Family-Radio/OLD-EPISODE/EP-`;
  const baseEpName = `EPisode `;
  const allS01URLs = genFrom1To30(`${baseRadioEpURL}`);
  const allS01Titles = genFrom1To30(`${baseEpName}`);
  // console.log(allS01URLs);
  // console.log(allS01Titles);
  return (
    <>
      <PagesHeader data={<Text tid="Season One" />} />
      <div className="container text-center mt-md-5 mt-3">
        <div className="row">
          <div className=" col-md-8 offset-md-3">
            {seasonOne.map((ep) => {
              return (
                <div className="row mb-2" key={ep.id}>
                  <h3 className="col-12 col-md-8 bg-secondary">{ep.name}</h3>
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

export default RadioS01;

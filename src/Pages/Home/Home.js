import React, { useState, useContext, useEffect } from "react";
import { IntranetContext } from "../../context";
import mv from "./assets/mv.jpg";
import dma from "./assets/dma.jpg";
import dma2 from "./assets/dma2.jpg";
import dme from "./assets/dme.jpg";
import Sliders from "../../Components/Sliders/Sliders";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";
import Cookies from "js-cookie";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, isDataLoading } = useContext(IntranetContext);
  useEffect(() => {
    fetchData("slides").then((res) => {
      setSlides(res.sliders);
    });
    setIsArabic(getLang());
  }, []);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userCompanyToShow } = myCookieUserObj;
  if (isDataLoading) {
    return <SkeletonLoader />;
  }
  if (userCompanyToShow === "dme") {
    return (
      <div>
        <img src={dme} className="img-fluid " alt="Dar Almeamar Engineering" />
      </div>
    );
  }
  if (userCompanyToShow === "dma") {
    return (
      <>
        <img
          src={dma2}
          className="img-fluid "
          alt="Dar Almeamar Architecture "
        />
      </>
    );
  }
  return (
    <>
      <img
        src={mv}
        className="img-filled"
        alt="One of Mountain View's major compounds "
      />
      {/* <Sliders data={slides} isArabic={isArabic} home={true} /> */}
    </>
  );
};

export default Home;

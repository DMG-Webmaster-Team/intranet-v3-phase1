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
  const [news, setNews] = useState([]);

  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, isDataLoading } = useContext(IntranetContext);
  useEffect(() => {
    fetchData("news").then((res) => {
      setNews(res.news);
    });
    setIsArabic(getLang());
  }, []);
  const myCookie = Cookies.get("user");
  const myCookieUserObj = myCookie !== "undefined" && JSON.parse(myCookie);

  const { userCompanyToShow } = myCookieUserObj;
  if (isDataLoading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <Sliders data={news} isArabic={isArabic} home={true} />
    </>
  );
};

export default Home;

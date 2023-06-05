import React, { useState, useContext, useEffect } from "react";
import { IntranetContext } from "../../context";
import Sliders from "../../Components/Sliders/Sliders";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";

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
  console.log(slides);
  if (isDataLoading) {
    return <SkeletonLoader />;
  } else
    return (
      <div>
        <Sliders data={slides} isArabic={isArabic} home={true} />
      </div>
    );
};

export default Home;

import React, { useEffect, useState, useContext } from "react";
import { IntranetContext } from "../../context";
import PagesHeader from "../../Components/Header/PagesHeader";
import "./news.css";
import { Text } from "../../containers/Language";
import NewsFeed from "../../Components/News/NewsFeed";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";

const News = () => {
  const [news, setNews] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, isDataLoading } = useContext(IntranetContext);

  useEffect(() => {
    fetchData("news").then((res) => {
      setNews(res.news);
    });
    setIsArabic(getLang());
  }, []);
  // console.log(getLang());
  if (isDataLoading) {
    return <SkeletonLoader />;
  } else
    return (
      <div>
        <div className=" ">
          <PagesHeader data={<Text tid="navNews" />} />
          <NewsFeed news={news} isArabic={isArabic} />
        </div>
      </div>
    );
};

export default News;

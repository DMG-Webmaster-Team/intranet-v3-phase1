import React from "react";
import WeeklyTopNewsArea from "./WeeklyTopNewsArea";
// import TrendingArea from "./TrendingArea";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";
import Sliders from "../Sliders/Sliders";
import "../../Pages/News/news.css";
const NewsFeed = ({ news, isArabic }) => {
  return (
    <>
      {news && news.length !== 0 ? (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* <TrendingArea tendingNews={trendingNews} isArabic={isArabic} /> */}
          <Sliders data={news} isArabic={isArabic} />

          <WeeklyTopNewsArea isArabic={isArabic} weeklyNews={news} />
        </motion.main>
      ) : (
        <motion.div
          className="text-center  text-capitalize mx-auto d-block"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="text-center no-data-available">
            <Text tid="noDataAvailable" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NewsFeed;

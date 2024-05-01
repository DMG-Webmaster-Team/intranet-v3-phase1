import React from "react";
import "./assets/scss/style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../Pages/News/news.css";
import NewsMonthComponent from "./NewsMonth";
const WeeklyTopNewsArea = ({ isArabic, weeklyNews }) => {
  return (
    <div className="weekly2-news-area weekly2-pading  ">
      <div className="container mt-5">
        <div className="weekly2-wrapper">
          <NewsMonthComponent
            monthTitle="شهر أبريل ٢٠٢٤"
            monthFilter={[39, 41]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر مارس ٢٠٢٤"
            monthFilter={[35, 37]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر يناير ٢٠٢٤"
            monthFilter={[25, 26, 27, 28, 29, 30, 34]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر ديسمبر ٢٠٢٣"
            monthFilter={[17, 18, 19, 20, 21, 22, 23]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر نوفمبر ٢٠٢٣"
            monthFilter={[14, 15, 16]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر أكتوبر ٢٠٢٣"
            monthFilter={[1, 2, 3, 7]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
          <NewsMonthComponent
            monthTitle="شهر سبتمبر ٢٠٢٣"
            monthFilter={[4, 5, 6, 9, 8, 10, 11, 12, 13]}
            weeklyNews={weeklyNews}
            isArabic={isArabic}
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyTopNewsArea;

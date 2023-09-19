import React from "react";
import "./assets/scss/style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WeeklyTopNewsArea = ({ isArabic, weeklyNews }) => {
  // console.log(weeklyNews);
  return (
    <div className="weekly2-news-area weekly2-pading  ">
      <div className="container mt-5">
        <div className="weekly2-wrapper">
          {/* <!-- section Tittle --> */}

          <div className="row">
            {weeklyNews.map((item, id) => {
              return (
                <div
                  className="col-12 col-sm-6  col-lg-3 mb-5 mb-sm-0 "
                  key={id}
                >
                  <div className="weekly2-news-active dot-style dot-style">
                    <Link to={`/news/${item.count}`}>
                      <motion.div
                        className="weekly2-single mx-auto w-100"
                        whileHover={{
                          scale: 1.1,
                        }}
                      >
                        <div className="weekly2-img ">
                          <img
                            src={item.image}
                            alt="pic"
                            className="weekly2-img-image"
                          />
                        </div>
                        <div
                          className={
                            isArabic
                              ? "weekly2-caption mt-3 text-right"
                              : "weekly2-caption mt-3"
                          }
                        >
                          <h6 className="Tajawal fw-bold ">
                            {isArabic ? item.title_ar : item.title_ar}
                          </h6>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTopNewsArea;

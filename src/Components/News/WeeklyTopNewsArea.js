import React from "react";
import "./assets/scss/style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../Pages/News/news.css";
const WeeklyTopNewsArea = ({ isArabic, weeklyNews }) => {
  return (
    <div className="weekly2-news-area weekly2-pading  ">
      <div className="container mt-5">
        <div className="weekly2-wrapper">
          {/* <!-- section Tittle --> */}

          <div className="row">
            <h4 dir="rtl" className="Tajawal mb-4">
              شهر أكتوبر
            </h4>
            <div className="d-flex justify-content-end p-0">
              {weeklyNews
                .filter((item) => item.count === 1 || item.count === 2)
                .map((item, id) => {
                  return (
                    <div
                      className=" col-12 col-sm-6 col-lg-3 mb-5 mb-sm-3"
                      key={id}
                    >
                      <div className="weekly2-news-active dot-style dot-style">
                        <Link to={`/news/${item.count}`} className="bg-blac">
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
                              <h6 dir="rtl" className=" pe-3 Tajawal fw-bold">
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
          <hr style={{ borderBottom: "1px solid black", height: "1px" }} />
          <div className="row">
            <h4 dir="rtl" className="Tajawal mb-4">
              شهر سبتمبر
            </h4>

            {weeklyNews
              .filter(
                (item) =>
                  item.count === 3 ||
                  item.count === 4 ||
                  item.count === 5 ||
                  item.count === 6 ||
                  item.count === 7 ||
                  item.count === 8 ||
                  item.count === 9 ||
                  item.count === 10 ||
                  item.count === 11 ||
                  item.count === 12
              )
              .map((item, id) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-lg-3 mb-5 mb-sm-3"
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
                            <h6 dir="rtl" className=" pe-3 Tajawal fw-bold">
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

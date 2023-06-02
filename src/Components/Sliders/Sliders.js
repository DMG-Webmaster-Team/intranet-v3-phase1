import React, { useContext } from "react";
import Slider from "react-slick";
import "./slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import { Text } from "../../containers/Language";
// import { Link } from "react-router-dom";

const Sliders = ({ isArabic, data, home }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: (
      <button type="button">
        <i className="bi bi-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button">
        <i className="bi bi-arrow-right"></i>
      </button>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        {data.length > 0 &&
          typeof data !== "undefined" &&
          data !== null &&
          data.map((slider, key) => {
            return (
              <div
                className={home ? "mySlides" : " mySlides mySlides-news"}
                key={key}
              >
                <img
                  src={slider.image}
                  alt={isArabic ? slider.title_ar : slider.title}
                  className={
                    home ? "  slider-img" : "img-fluid slider-img-news"
                  }
                  // height={00}
                />

                {/* {home ? (
                  <div
                    className={
                      isArabic
                        ? "  col-10 col-md-5 article-container-arabic   "
                        : "article-container col-10 col-md-5"
                    }
                  >
                    <div
                      className={
                        isArabic
                          ? "article-container-titles-arabic row d-flex flex-column mr-4"
                          : "article-container-titles row d-flex flex-column ml-4"
                      }
                    >
                      <h1>{isArabic ? slider.title_ar : slider.title}</h1>
                      <h4>{isArabic ? slider.details_ar : slider.details}</h4>
                    </div>

                    <motion.div
                      className={
                        isArabic
                          ? "article-container-btn-arabic row justify-content-end ml-5 "
                          : " row justify-content-end mr-5"
                      }
                    >
                      <motion.a
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                        className="read-more"
                        href={slider.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text tid="readMore" />
                      </motion.a>
                    </motion.div>
                  </div>
                ) : (
                  <div
                    className={
                      isArabic
                        ? "news-sliders d-flex justify-content-end mr-3"
                        : "news-sliders d-flex justify-content-start ml-3"
                    }
                  >
                    <h2
                      className={
                        isArabic
                          ? "article-container-titles-arabic news-slider-title   font-weight-bold "
                          : "news-slider-title   font-weight-bold "
                      }
                    >
                      <Link to={`/news/${slider.count}`}>
                        {isArabic ? slider.title_ar : slider.title}
                      </Link>
                    </h2>
                  </div>
                )} */}
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default Sliders;

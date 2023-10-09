import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 4000,
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
          data
            .filter(
              (item) =>
                item.count === 1 ||
                item.count === 2 ||
                item.count === 3 ||
                item.count === 5 ||
                item.count === 6 ||
                item.count === 7 ||
                item.count === 9 ||
                item.count === 12
            )
            .map((slider, key) => {
              return (
                <div
                  className={
                    home
                      ? "mySlides d-flex justify-content-center  "
                      : " mySlides mySlides-news d-flex justify-content-center  "
                  }
                  key={key}
                >
                  <Link to={`/news/${slider.count}`}>
                    <img
                      src={slider.image}
                      alt={isArabic ? slider.title_ar : slider.title}
                      className={
                        "img-fluid"
                        // home ? " slider-img" : "img-fluid slider-img-news"
                      }
                    />
                  </Link>
                </div>
              );
            })}
      </Slider>
    </>
  );
};

export default Sliders;

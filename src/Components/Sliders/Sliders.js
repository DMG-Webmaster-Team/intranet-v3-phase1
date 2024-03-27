import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

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
  // console.log(data);
  const filterCondition = [27, 33, 36, 34, 37, 35];
  const customOrder = [35, 37, 34, 36, 33, 27];
  const filteredAndOrderedItems = data
    .filter((item) => filterCondition.includes(item.count))
    .sort((a, b) => customOrder.indexOf(a.count) - customOrder.indexOf(b.count))
    .map((slider, key) => (
      <div
        className={
          home
            ? "mySlides d-flex justify-content-center"
            : " mySlides mySlides-news d-flex justify-content-center"
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
    ));

  const videoId = "ygX7dY5ox5I";
  const opts = {
    height: "590",
    width: "940",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>

      {/* <Slider {...settings}>
        {data.length > 0 &&
          typeof data !== "undefined" &&
          data !== null &&
          filteredAndOrderedItems}
      </Slider> */}
    </>
  );
};

export default Sliders;

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
  // console.log(data);
  const filterCondition = [27, 33, 36, 34, 40, 42];
  const customOrder = [42, 40, 34, 36, 33, 27];
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
        {slider.count === 42 ? (
          <a
            href="https://www.figma.com/file/lsLtWroCmAjPeyKryD4Rei/Speak-UP?type=design&node-id=79-13092&mode=design&t=fmYGMiLaI18YaBHu-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={slider.image}
              alt={isArabic ? slider.title_ar : slider.title}
              className="img-fluid"
            />
          </a>
        ) : (
          <Link to={`/news/${slider.count}`}>
            <img
              src={slider.image}
              alt={isArabic ? slider.title_ar : slider.title}
              className="img-fluid"
            />
          </Link>
        )}
      </div>
    ));

  return (
    <>
      <Slider {...settings}>
        {data.length > 0 &&
          typeof data !== "undefined" &&
          data !== null &&
          filteredAndOrderedItems}
      </Slider>
    </>
  );
};

export default Sliders;

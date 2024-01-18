import "./assets/scss/style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsMonthComponent = ({
  monthTitle,
  monthFilter,
  weeklyNews,
  isArabic,
}) => {
  return (
    <div className="row">
      <h4 dir="rtl" className="Tajawal mb- p- ">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{monthTitle}
      </h4>
      <div className="d-flex flex-wrap flex-row-reverse px-4">
        {weeklyNews
          .filter((item) => monthFilter.includes(item.count))
          .map((item, id) => (
            <div
              className="d-flex flex-row col-12 col-sm-6 col-lg-3 mb-5 mb-sm-3"
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
                      <h6 dir="rtl" className=" pe-5 Tajawal fw-bold">
                        {isArabic ? item.title_ar : item.title_ar}
                      </h6>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsMonthComponent;

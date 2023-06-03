import React from "react";
import "./assets/scss/style.scss";
import { Link } from "react-router-dom";

const TrendingArea = ({ tendingNews, isArabic }) => {
  return (
    <div className="trending-area fix mt-5">
      <div className="container">
        <div className="trending-main">
          <div className="row">
            <div className="col-12">
              {/* <!-- Trending Top --> */}
              <div className="trending-top mb-30">
                <div className="trend-top-img">
                  {/* <img
                    src={tendingNews.image}
                    // className='img-fluid'

                    style={{
                      height: "370px",
                    }}
                    alt="pic"
                  /> */}
                  <div
                    className={
                      isArabic ? "trend-top-cap-arabic" : "trend-top-cap"
                    }
                  >
                    <h2 className="trend-top-cap-title">
                      <Link to={`/news/${tendingNews.count}`}>
                        {isArabic ? tendingNews.title_ar : tendingNews.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingArea;

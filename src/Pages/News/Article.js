import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IntranetContext } from "../../context";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";
import video from "./interns.mp4";
import "./news.css";
import Loader from "../../Components/Skeleton/SkeletonLoader";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Article = (props) => {
  const [news, setNews] = useState([]);
  const [isArabic, setIsArabic] = useState(false);
  const [showNextImg, setShowNextImg] = useState(false);
  const [showPrevImg, setShowPrevImg] = useState(false);

  const { getLang, fetchData } = useContext(IntranetContext);

  useEffect(() => {
    fetchData("news").then((res) => {
      setNews(res.news);
    });
    setIsArabic(getLang());
  }, []);
  // console.log(news);
  const { id } = props.match.params;
  // console.log(id);

  const article = news && news.find((item) => item.count === Number(id));

  return (
    <div className="container mt-5">
      {article ? (
        <div className="row ">
          {article.count !== 2 && (
            <img
              src={article?.image}
              className="mx-auto d-block col-12 col-md-8"
              height="300"
              width="200"
              alt="..."
            />
          )}

          {article.count === 2 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <video controls autoPlay width={900}>
                <source type="video/mp4" src={video} />
              </video>
            </div>
          )}
          <div className="d-flex justify-content-between ">
            <div className="borderr">
              {article.count !== 1 && (
                <div className="position-relative rel">
                  <div
                    className={`position-aboslute abs ${
                      showPrevImg ? "" : "opacity-0"
                    } `}
                  >
                    <img
                      width={200}
                      height={200}
                      className="mg-fluid"
                      src={`${news[id - 2].image}`}
                      alt="Previous article image"
                    />
                  </div>
                </div>
              )}

              {article.count > 1 && (
                <Link
                  onMouseEnter={() => setShowPrevImg(true)}
                  onMouseLeave={() => setShowPrevImg(false)}
                  className="prevLink ms-5"
                  to={`${article?.count - 1}`}
                >
                  <h2 className="ms-5">
                    <GrLinkPrevious />
                  </h2>
                </Link>
              )}
            </div>
            <div className="borderr">
              {article?.count !== news.length && (
                <div className="position-relative rel">
                  <div
                    className={` position-aboslute abs ${
                      showNextImg ? "" : "opacity-0"
                    } `}
                  >
                    <div className="d-flex flex-column">
                      <small
                        style={{ width: "200px !important" }}
                        className=" w-25 text-wrap d-inline-block "
                      >
                        {/* {news[id].title} */}
                      </small>
                      <img
                        width={200}
                        height={200}
                        className="mg-fluid"
                        src={`${news[id].image}`}
                        alt="Next article image"
                      />
                    </div>
                  </div>
                </div>
              )}
              {article?.count < news.length && (
                <Link
                  onMouseEnter={() => setShowNextImg(true)}
                  onMouseLeave={() => setShowNextImg(false)}
                  className="nextLink ms-5"
                  to={`${article?.count + 1}`}
                >
                  <h2 className="ms-3">
                    <GrLinkNext />
                  </h2>
                </Link>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center content">
            <div className="col-8 ">
              <div className="details">
                <h2 className="mb-4 text-center fw-bold Tajawal">
                  {article.title_ar}
                </h2>
                <p
                  dir="rtl"
                  className={isArabic ? "Tajawal" : "Tajawal text-muted"}
                >
                  {article.details_ar}
                </p>
              </div>
            </div>
          </div>
          <div className=" mx-auto text-center  ">
            <Link to="/news" style={{ marginTop: "2rem" }}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button className="default-btn text-center">
                  <Text tid="returnNews" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Loader />
          <Link to="/news" style={{ marginTop: "2rem", background: "#C4AB7D" }}>
            <Button className="default-btn " style={{ background: "#C4AB7D" }}>
              <Text tid="returnNews" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Article;

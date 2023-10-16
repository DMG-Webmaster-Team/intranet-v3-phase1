import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IntranetContext } from "../../context";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";
import "./news.css";
import Loader from "../../Components/Skeleton/SkeletonLoader";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Article = (props) => {
  const [news, setNews] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

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
          <img
            src={article?.image}
            className="mx-auto d-block col-12 col-md-8"
            height="300"
            width="200"
            alt="..."
          />

          <div className="d-flex justify-content-between ">
            <div>
              {/* {article.count !== 1 && (
                <div>
                  <img
                    width={200}
                    height={200}
                    src={`${news[id - 2].image}`}
                    alt="Previous article image"
                  />
                </div>
              )} */}
              {article.count !== 1 && (
                <div className="position-relative imgParent2">
                  <div className="position-absolute">
                    <img
                      width={200}
                      height={200}
                      src={`${news[id - 2].image}`}
                      alt="Next article image"
                      className="imageHover"
                    />
                  </div>
                </div>
              )}
              {article.count > 1 && (
                <Link className="prevArrow" to={`${article?.count - 1}`}>
                  <div className="h2 ms-5">
                    <GrLinkPrevious />
                  </div>
                </Link>
              )}
            </div>
            <div className="">
              {article?.count !== news.length && (
                <div className="position-relative imgParent">
                  <div className="position-absolute">
                    <img
                      width={200}
                      height={200}
                      src={`${news[id].image}`}
                      alt="Next article image"
                      className="imageHover"
                    />
                  </div>
                </div>
              )}
              {article?.count < news.length && (
                <Link className="nextArrow" to={`${article?.count + 1}`}>
                  <div className="h2 me-5">
                    <GrLinkNext />
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-8  mt-5 ">
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

import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IntranetContext } from "../../context";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";
import "./news.css";
import Loader from "../../Components/Skeleton/SkeletonLoader";

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

  const { id } = props.match.params;

  const article = news && news.find((item) => item.count === Number(id));

  return (
    <div className="container mt-5">
      {article ? (
        <div className="row ">
          <img
            src={article.image}
            className="mx-auto d-block col-12 col-md-8"
            height="300"
            width="200"
            alt="..."
          />
          <div className="d-flex justify-content-center">
            <div className="col-8  mt-5 ">
              <div className="details">
                <h2 className="mb-4 text-center fw-bold Tajawal">
                  {isArabic ? article.title_ar : article.title}
                </h2>
                <p
                  dir="rtl"
                  className={isArabic ? "Tajawal" : "Tajawal text-muted"}
                >
                  {isArabic ? article.details_ar : article.details}
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
          <h1>Loading...</h1>
          {/* <Loader /> */}
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

// import React, { useEffect, useState, useContext } from "react";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { IntranetContext } from "../../context";
// import { motion } from "framer-motion";
// import { Text } from "../../containers/Language";
// import "./news.css";
// import Loader from "../../Components/Skeleton/SkeletonLoader";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

// const Article = (props) => {
//   const [news, setNews] = useState([]);
//   const [isArabic, setIsArabic] = useState(false);

//   const { getLang, fetchData } = useContext(IntranetContext);

//   useEffect(() => {
//     fetchData("news").then((res) => {
//       setNews(res.news);
//     });
//     setIsArabic(getLang());
//   }, []);

//   const { id } = props.match.params;
//   console.log(news[id].image);
//   const article = news && news.find((item) => item.count === Number(id));

//   return (
//     <div className="container mt-5">
//       {article ? (
//         <div className="row ">
//           <img
//             src={article.image}
//             className="mx-auto d-block col-12 col-md-8"
//             height="300"
//             width="200"
//             alt="..."
//           />
//           <div className="d-flex justify-content-between ">
//             <div>
//               <div>
//                 <img
//                   width={200}
//                   height={200}
//                   src={`${news[id - 2].image}`}
//                   alt="Next article image"
//                 />
//               </div>
//               {article.count > 1 && (
//                 <Link to={`${article.count - 1}`}>Previous</Link>
//               )}
//             </div>
//             <div>
//               <div>
//                 <img
//                   width={200}
//                   height={200}
//                   src={`${news[id].image}`}
//                   alt="Next article image"
//                 />
//               </div>
//               {article.count < news.length && (
//                 <Link to={`${article.count + 1}`}>Next</Link>
//               )}
//             </div>
//           </div>
//           <div className="d-flex justify-content-center">
//             <div className="col-8  mt-5 ">
//               <div className="details">
//                 <h2 className="mb-4 text-center fw-bold Tajawal">
//                   {isArabic ? article.title_ar : article.title}
//                 </h2>
//                 <p
//                   dir="rtl"
//                   className={isArabic ? "Tajawal" : "Tajawal text-muted"}
//                 >
//                   {isArabic ? article.details_ar : article.details}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className=" mx-auto text-center  ">
//             <Link to="/news" style={{ marginTop: "2rem" }}>
//               <motion.div
//                 whileHover={{
//                   scale: 1.1,
//                 }}
//               >
//                 <Button className="default-btn text-center">
//                   <Text tid="returnNews" />
//                 </Button>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center">
//           <Loader />
//           <Link to="/news" style={{ marginTop: "2rem", background: "#C4AB7D" }}>
//             <Button className="default-btn " style={{ background: "#C4AB7D" }}>
//               <Text tid="returnNews" />
//             </Button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Article;

// Most Recent Backup

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
              {article.count !== 1 && (
                <div>
                  <img
                    width={200}
                    height={200}
                    src={`${news[id - 2].image}`}
                    alt="Previous article image"
                  />
                </div>
              )}

              {article.count > 1 && (
                <Link to={`${article?.count - 1}`}>
                  <h2>
                    <GrLinkPrevious />
                  </h2>
                </Link>
              )}
            </div>
            <div>
              {article?.count !== news.length && (
                <div>
                  <img
                    width={200}
                    height={200}
                    src={`${news[id].image}`}
                    alt="Next article image"
                  />
                </div>
              )}
              {article?.count < news.length && (
                <Link to={`${article?.count + 1}`}>
                  <h2>
                    <GrLinkNext />
                  </h2>
                </Link>
              )}
            </div>
          </div>
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

// import React, { Fragment } from "react";

// import "./document.scss";
// import "../Jobs/table.scss";

// import pdfIcon from "./images/pdf.png";
// import imgIcon from "./images/img-icon.png";
// import wordIcon from "./images/word-icon.png";
// import excelIcon from "./images/excel-icon.png";

// import powerIcon from "./images/powerpoint-icon.png";

// import Services from "../../Pages/Services/Services";

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     x: "100vw",
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       delay: 0.5,
//     },
//   },
// };

// const mapIconsToUrls = {
//   pdf: pdfIcon,
//   docx: wordIcon,
//   doc: wordIcon,
//   excel: excelIcon,
//   pptx: powerIcon,
//   png: imgIcon,
//   jpg: imgIcon,
//   jpeg: imgIcon,
// };

// const Document = ({ data, isArabic, type, loading }) => {
//   let categories = [];
//   data.map((item) => {
//     return (
//       !categories.includes(item.category) && categories.push(item.category)
//     );
//   });

//   return (
//     <Fragment>
//       <div className="container ">
//         <Services />
//       </div>
//     </Fragment>
//   );
// };

// export default Document;

import React from "react";

import "./document.scss";
import "../Jobs/table.scss";

import pdfIcon from "./images/pdf.png";
import imgIcon from "./images/img-icon.png";
import wordIcon from "./images/word-icon.png";
import excelIcon from "./images/excel-icon.png";
import unknownIcon from "./images/unknow-icon.png";
import powerIcon from "./images/powerpoint-icon.png";
import notificationIcon from "./images/notification-icon.png";
import { Text } from "../../containers/Language";
import { motion } from "framer-motion";
import Table from "./Table";
import { Accordion } from "react-bootstrap";
import NoDataAvailable from "../NoDataAvailable";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const mapIconsToUrls = {
  pdf: pdfIcon,
  docx: wordIcon,
  doc: wordIcon,
  excel: excelIcon,
  pptx: powerIcon,
  png: imgIcon,
  jpg: imgIcon,
  jpeg: imgIcon,
};

const Document = ({ data, isArabic, type, loading }) => {
  let categories = [];
  data.map((item) => {
    return (
      !categories.includes(item.category) && categories.push(item.category)
    );
  });

  const getSomeDateAfterGivenDays = (date, numOfDays) => {
    const myDate = new Date(date);
    const myDateAfterGivenDays = new Date(date);

    myDateAfterGivenDays.setDate(myDate.getDate() + numOfDays);

    return myDateAfterGivenDays;
  };

  const checkIfCertainDateHasLeft = (date) => {
    const today = new Date().getTime();
    let isTimeHasLeft;
    if (!isNaN(date)) {
      isTimeHasLeft = today > date;
    }
    return isTimeHasLeft;
  };

  return (
    <motion.div
      className="col-12 col-lg-10 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.length > 0 ? (
        <Accordion>
          {categories.map((catName, id) => {
            return (
              <Accordion.Item eventKey={id} key={id}>
                <Accordion.Header>{catName}</Accordion.Header>
                <Accordion.Body>
                  <Table
                    isArabic={isArabic}
                    data={data}
                    getSomeDateAfterGivenDays={getSomeDateAfterGivenDays}
                    checkIfCertainDateHasLeft={checkIfCertainDateHasLeft}
                    mapIconsToUrls={mapIconsToUrls}
                    notificationIcon={notificationIcon}
                    catName={catName}
                    type={type}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      ) : (
        <NoDataAvailable tid="noDataAvailable" />
      )}
    </motion.div>
  );
};

export default Document;

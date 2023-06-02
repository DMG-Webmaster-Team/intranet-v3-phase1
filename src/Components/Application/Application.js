import React from "react";
import { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./application.css";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";

import { IntranetContext } from "../../context";
import AppCards from "./AppCards";
import { apexData } from "./apexData";
import { useEffect } from "react";

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

const Application = ({ data, isArabic }) => {
  const { user } = useContext(IntranetContext);

  const { userId } = user?.userData;

  function reverseString(str) {
    const data = str?.split("").reverse().join("");
    return data;
  }

  var encodedData = window.btoa(reverseString(userId));
  let allAppsData;

  if (data?.length > 0 && apexData?.length > 0) {
    allAppsData = apexData.map((obj) => {
      obj.link += encodedData;
      return obj;
    });
    allAppsData = [...allAppsData, ...data];
  }
  console.log(allAppsData);
  return (
    <>
      <motion.div
        className="row"
        id="idbody"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allAppsData ? (
          <Container className="apps text-center">
            <Row className="display-board" id="board">
              <AppCards data={allAppsData} isArabic={isArabic} />
            </Row>
          </Container>
        ) : (
          <motion.div
            className="text-center  text-capitalize mx-auto d-block"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="text-center no-data-available">
              <Text tid="noDataAvailable" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Application;

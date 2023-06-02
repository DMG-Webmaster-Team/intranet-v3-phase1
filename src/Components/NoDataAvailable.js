import { motion } from "framer-motion";
import React from "react";
import { Text } from "../containers/Language";

const NoDataAvailable = ({ tid }) => {
  return (
    <motion.div
      className="text-center  text-capitalize mx-auto d-block"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="text-center no-data-available">
        <Text tid={tid} />
      </div>
    </motion.div>
  );
};

export default NoDataAvailable;

import React, { useContext } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { IntranetContext } from "../../context";

function PagesHeader({ data }) {
  const { colorTheme } = useContext(IntranetContext);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: "spring" }}
      id="Header"
      className={`header ${colorTheme} row`}
    >
      <h3 className="page_header-header text-white text-center">{data}</h3>
    </motion.div>
  );
}

export default PagesHeader;

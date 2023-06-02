import React, { useEffect, useState, useContext } from "react";
import { IntranetContext } from "../../context";
import PagesHeader from "../../Components/Header/PagesHeader";
import Document from "../../Components/Document/Document";
import { Text } from "../../containers/Language";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";
import halfDmgLogo from "../../Components/Document/images/half-dmg-logo.png";
const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, isDataLoading } = useContext(IntranetContext);

  useEffect(() => {
    fetchData("templates").then((res) => {
      setTemplates(res.templates);
    });
    setIsArabic(getLang());
  }, []);

  if (isDataLoading) {
    return <SkeletonLoader />;
  } else
    return (
      <>
        <div className="container-fluid">
          <PagesHeader data={<Text tid="navTemplates" />} />
          {/* <img
            id='document-background'
            alt='pic'
            src={halfDmgLogo}
            height='300'
          /> */}
          <br />
          <br />
          <br />
          <Document data={templates} type="templates" isArabic={isArabic} />
        </div>
      </>
    );
};

export default Templates;

import React, { useEffect, useState, useContext } from "react";
import { IntranetContext } from "../../context";
import PagesHeader from "../../Components/Header/PagesHeader";
import Document from "../../Components/Document/Document";
import { Text } from "../../containers/Language";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, loading, isDataLoading } =
    useContext(IntranetContext);
  useEffect(() => {
    fetchData("documents").then((res) => {
      setDocuments(res.documents);
    });
    setIsArabic(getLang());
  }, []);
  console.log(documents);

  if (isDataLoading) {
    return <SkeletonLoader />;
  } else
    return (
      <>
        <div className="container-fluid">
          <PagesHeader data={<Text tid="navHRServices" />} />
          <br />
          <br />

          <br />
          <Document
            data={documents}
            type="documents"
            isArabic={isArabic}
            loading={loading}
          />
        </div>
      </>
    );
};

export default Documents;

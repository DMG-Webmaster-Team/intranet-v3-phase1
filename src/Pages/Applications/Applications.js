import React, { useEffect, useState, useContext } from "react";
import { IntranetContext } from "../../context";
import PagesHeader from "../../Components/Header/PagesHeader";
import Application from "../../Components/Application/Application";
import { Text } from "../../containers/Language";
import SkeletonLoader from "../../Components/Skeleton/SkeletonLoader";
const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, fetchData, isDataLoading } = useContext(IntranetContext);

  useEffect(() => {
    fetchData("applications").then((res) => {
      setApplications(res.applications);
    });
    setIsArabic(getLang());
  }, []);
  console.log(applications);
  if (isDataLoading) {
    return <SkeletonLoader />;
  } else
    return (
      <div className="container-fluid">
        <PagesHeader data={<Text tid="HR Requests & Forms" />} />
        <Application data={applications} isArabic={isArabic} />
      </div>
    );
};

export default Applications;

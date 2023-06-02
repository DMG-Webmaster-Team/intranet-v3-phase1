import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Text } from "../../containers/Language";
import unknownIcon from "./images/unknow-icon.png";

const Table = ({
  isArabic,
  data,
  getSomeDateAfterGivenDays,
  checkIfCertainDateHasLeft,
  mapIconsToUrls,
  notificationIcon,
  catName,
  type,
}) => {
  return (
    <table className="tableJobs table">
      <tbody>
        <tr>
          <th className={isArabic ? "th-filename arabic" : "th-filename"}>
            <Text tid="fileName" />
          </th>
          <th className={isArabic ? "th-date arabic" : "th-date"}>
            <Text tid="documentType" />
          </th>

          <th className={isArabic ? "th-date arabic" : "th-date"}>
            <Text tid="effectiveDate" />
          </th>
        </tr>
        {data.map((doc, key) => {
          if (doc.category === catName) {
            // Handling date to show bell icon

            // get effectiveDate after 7 days
            const effectiveDateAfterSevenDays = getSomeDateAfterGivenDays(
              doc.effective_date,
              7
            ).getTime();

            // get lastModificationDate After 7 days
            const lastModificationDateAfterSevenDays =
              getSomeDateAfterGivenDays(doc.lastModificationDate, 7).getTime();

            // check validity of days
            let isEffectiveDateHasLeft = checkIfCertainDateHasLeft(
              effectiveDateAfterSevenDays
            );

            let isLastModificationDateHasLeft = checkIfCertainDateHasLeft(
              lastModificationDateAfterSevenDays
            );

            return (
              <tr key={key}>
                <td className={isArabic ? "arabic" : ""}>
                  <img
                    className="pdfORword"
                    src={
                      type === "templates"
                        ? mapIconsToUrls[doc.template_type.toLowerCase()]
                          ? mapIconsToUrls[doc.template_type.toLowerCase()]
                          : unknownIcon
                        : mapIconsToUrls[doc.document_type.toLowerCase()]
                        ? mapIconsToUrls[doc.document_type.toLowerCase()]
                        : unknownIcon
                    }
                    alt="pic"
                  />
                  <a
                    href={
                      type === "templates" ? doc.template_url : doc.document_url
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                    download="file"
                  >
                    {type === "templates"
                      ? doc.template_name
                      : doc.document_name}
                  </a>
                </td>
                <td
                  className={
                    isArabic
                      ? "arabic  align-middle text-uppercase"
                      : "align-middle text-uppercase"
                  }
                >
                  {type === "templates" ? doc.template_type : doc.document_type}
                </td>

                <td
                  className={
                    isArabic
                      ? "arabic   align-middle text-uppercase"
                      : " align-middle text-uppercase"
                  }
                >
                  {(isEffectiveDateHasLeft === false ||
                    undefined ||
                    isLastModificationDateHasLeft === false ||
                    undefined) && (
                    <div className="d-flex align-items-center    ">
                      {doc.effective_date && (
                        <p className=" text-center my-auto">
                          {doc.effective_date}
                        </p>
                      )}
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                          <Tooltip id={`tooltip-top}`}>
                            Newly or Updated Item
                          </Tooltip>
                        }
                      >
                        <img
                          className="ml-2  "
                          src={notificationIcon}
                          alt="not-label"
                          width={25}
                        />
                      </OverlayTrigger>
                    </div>
                  )}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;

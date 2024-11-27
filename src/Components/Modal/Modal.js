import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import English from "./modalPages/English";
import Arabic from "./modalPages/Arabic";
import DefaultPage from "./modalPages/DefaultPage";
import submitThanks from "./modalPages/SubmitThanks";
import Disclose from "./modalPages/Disclose";
import DiscloseAr from "./modalPages/DiscloseAr";
import './modal.css'
import SubmitThanks from "./modalPages/SubmitThanks";
import Thanks from "./modalPages/DiscloseThanks";

const MyModal = ({ show, handleClose }) => {
  const { i18n } = useTranslation();

  const [currentContent, setCurrentContent] = useState('default');
  const [textDirection, setTextDirection] = useState('ltr');

  const changeContent = (contentKey, direction) => {
    setCurrentContent(contentKey);
    setTextDirection(direction);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const renderContent = () => {
    switch (currentContent) {
      case 'english':
        return (
          <English changeContent={changeContent} changeLanguage={changeLanguage} />
        );
      case 'arabic':
        return (
          <Arabic changeContent={changeContent} changeLanguage={changeLanguage} />
        );
      case 'discloseThanks':
        return (
          <>
            <Thanks changeContent={changeContent} />
          </>
        )
      case 'submitThanks':
        return (
          <>
            <SubmitThanks changeContent={changeContent} />
          </>
        )
      case "disclose":
        return (
          <>
            <Disclose changeContent={changeContent} />
          </>
        )
      case "disclose_ar":
        return (
          <>
            <DiscloseAr changeContent={changeContent} />
          </>
        )
      case 'default':
      default:
        return (
          <>
            <DefaultPage changeContent={changeContent} />
          </>
        );
    }
  };

  const contentStyle = {
    default: "d-flex justify-content-center align-items-center  ",
    thanks: "",
    arabic: "w-100",
    english: "w-100",
    disclose: "p-4 d-flex justify-content-center align-items-center",
    disclose_ar: "p-4 d-flex justify-content-center align-items-center"
  }

  const getContentStyle = (currentContent) => {
    return contentStyle[currentContent] || contentStyle.default;
  };

  return (
    <div className={`tajawal ${localStorage.getItem("i18nextLng") === "en" && "poppins"}`}>
      <Modal
        size="lg"
        onEscapeKeyDown={(e) => {
          if (currentContent !== "discloseThanks" || currentContent !== "submitThanks") {
            e.preventDefault()
          }
        }}
        show={show}
        onHide={handleClose}
        dialogClassName={`${currentContent !== "thanks" && "custom-modal"}`}
        aria-labelledby="example-custom-modal-styling-title"
        centered
        backdrop="static"
        style={{ direction: textDirection }}
      >
        <Modal.Body>
          {currentContent.includes("Thanks") && <Modal.Header style={{ borderBottom: 'none', margin: "1rem" }} closeButton>
          </Modal.Header>}
          <div className={getContentStyle(currentContent)}>
            {renderContent()}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;

import React from "react";
import { Modal, Button } from "react-bootstrap";
import video from "./Untitled.mp4";

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header>{/* <Modal.Title>Watch Now!</Modal.Title> */}</Modal.Header>
      <Modal.Body>
        {/* <h2>Video</h2> */}
        <video controls width="100%" height="100%">
          <source type="video/mp4" src={video} />
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-close-btn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;

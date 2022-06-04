import React from "react";
import { Modal, Button } from "react-bootstrap";

function BootstrapModal({ noOnClick, yesOnClick, show, setShow }) {

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You have unsaved changes to this note!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to save these changes before continuing?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={noOnClick}>
            No
          </Button>
          <Button variant="primary" onClick={yesOnClick}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapModal;

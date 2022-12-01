import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from 'components/CButton';

const MyModal = ({
  show,
  setShow,
  children,
  title
}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;

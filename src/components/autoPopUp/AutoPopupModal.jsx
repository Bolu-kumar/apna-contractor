import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AutoPopupModalCSS.css"; // Import the CSS file

const AutoPopupModal = ({ showInitially, modalData }) => {
  const [showModal, setShowModal] = useState(showInitially);

  useEffect(() => {
    // Additional logic can be added here to control when to show the modal automatically
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="custom-modal"
      centered
      className="mt-5"
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalData.message}</p>
        <Button
          variant="primary"
          onClick={handleClose}
          className="me-2 btn-rounded"
        >
          <a
            href={modalData.requestForWorkLink}
            className="text-white text-decoration-none"
          >
            Request For Work
          </a>
        </Button>
        <Button
          variant="secondary"
          onClick={handleClose}
          className="btn-rounded"
        >
          <a
            href={modalData.requestForContractLink}
            className="text-white text-decoration-none"
          >
            Contract Work Request
          </a>
        </Button>
        {modalData.imageUrl && (
          <div className="modal-image-container mt-4">
            <img
              src={modalData.imageUrl}
              alt="Modal Illustration"
              className="img-fluid"
            />
          </div>
        )}
        {/* <div className="contact-info mt-4">
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${modalData.phone}`}>{modalData.phone}</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${modalData.email}`}>{modalData.email}</a>
          </p>
        </div> */}
      </Modal.Body>
    </Modal>
  );
};

AutoPopupModal.propTypes = {
  showInitially: PropTypes.bool.isRequired,
  modalData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    requestForWorkLink: PropTypes.string.isRequired,
    requestForContractLink: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default AutoPopupModal;

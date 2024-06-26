import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AutoPopupModalCSS.css"; // Import the CSS file
import RequestForWorkButton from "../button/CandidatesButton";
import ContractWorkRequestButton from "../button/ClientsButton";

const AutoPopupModal = ({ showInitially, modalData }) => {
  const [showModal, setShowModal] = useState(showInitially);

  useEffect(() => {
    // Additional logic can be added here to control when to show the modal automatically
  }, []);

  const handleClose = () => setShowModal(false);

  const buttonLinks = {
    requestForWorkLink: modalData.requestForWorkLink,
    requestForContractLink: modalData.requestForContractLink,
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="custom-modal"
      centered
      className="mt-5 autoPopUp-margin"
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalData.message}</p>

        <RequestForWorkButton
          handleClose={handleClose}
          buttonLink={buttonLinks.requestForWorkLink}
        />

        <ContractWorkRequestButton
          handleClose={handleClose}
          buttonLink={buttonLinks.requestForContractLink}
        />

        {modalData.imageUrl && (
          <div className="modal-image-container mt-4">
            <img
              src={modalData.imageUrl}
              alt="Modal Illustration"
              className="img-fluid"
            />
          </div>
        )}
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

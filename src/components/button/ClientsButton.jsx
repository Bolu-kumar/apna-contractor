import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ContractWorkRequestButton = ({ handleClose, buttonLink }) => {
  return (
    <Button
      variant="secondary"
      onClick={handleClose}
      className="me-2 btn-rounded btn-large btn-autoPopUp"
    >
      <a href={buttonLink} className="text-white text-decoration-none">
        Contract Work Request
      </a>
    </Button>
  );
};

ContractWorkRequestButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
  buttonLink: PropTypes.shape({
    requestForContractLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContractWorkRequestButton;

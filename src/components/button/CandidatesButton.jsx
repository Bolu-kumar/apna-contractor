import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const RequestForWorkButton = ({ handleClose, buttonLink }) => {
  return (
    <Button
      variant="primary"
      onClick={handleClose}
      className="me-2 btn-rounded btn-large btn-autoPopUp"
    >
      <a href={buttonLink} className="text-white text-decoration-none">
        Request For Work
      </a>
    </Button>
  );
};

RequestForWorkButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
  buttonLink: PropTypes.shape({
    requestForWorkLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default RequestForWorkButton;

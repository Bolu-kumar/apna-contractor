import PropTypes from "prop-types";
import "../../../public/css/style.css";

const addressData = {
  address: "Partawal Bazar, Maharajganj, UP",
  phone: "+919350125817",
  email: "rkdk.contractor@gmail.com",
  socialLinks: {
    twitter: "#",
    facebook: "#",
    youtube: "#",
    linkedin: "#",
  },
};

const FooterAddress = ({ address, phone, email, socialLinks }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Address</h4>
      <p className="mb-2">
        <i className="fa fa-map-marker-alt me-3"></i>
        {address}
      </p>
      <p className="mb-2">
        <i className="fa fa-phone-alt me-3"></i>
        {phone}
      </p>
      <p className="mb-2">
        <i className="fa fa-envelope me-3"></i>
        {email}
      </p>
      <div className="d-flex pt-2">
        <a
          className="btn btn-outline-light btn-social"
          href={socialLinks.twitter}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="btn btn-outline-light btn-social"
          href={socialLinks.facebook}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="btn btn-outline-light btn-social"
          href={socialLinks.youtube}
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="btn btn-outline-light btn-social"
          href={socialLinks.linkedin}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

FooterAddress.propTypes = {
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

// Adding default props to ensure the component uses addressData by default
FooterAddress.defaultProps = {
  address: addressData.address,
  phone: addressData.phone,
  email: addressData.email,
  socialLinks: addressData.socialLinks,
};

export default FooterAddress;

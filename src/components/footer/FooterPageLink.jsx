import PropTypes from "prop-types";

const FooterPageLinkComponent = ({
  termsLink,
  privacyLink,
  aboutLink,
  servicesLink,
  contactLink,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Quick Links</h4>
      <ul className="list-unstyled">
        <li>
          <a href={aboutLink} className="text-light text-decoration-none">
            About
          </a>
        </li>
        <li>
          <a href={servicesLink} className="text-light text-decoration-none">
            Services
          </a>
        </li>
        <li>
          <a href={contactLink} className="text-light text-decoration-none">
            Contact
          </a>
        </li>
        <li>
          <a href={termsLink} className="text-light text-decoration-none">
            Terms-Conditions
          </a>
        </li>
        <li>
          <a href={privacyLink} className="text-light text-decoration-none">
            Privacy-Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

FooterPageLinkComponent.propTypes = {
  termsLink: PropTypes.string.isRequired,
  privacyLink: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired,
  servicesLink: PropTypes.string.isRequired,
  contactLink: PropTypes.string.isRequired, // Add contactLink prop validation
};

export default FooterPageLinkComponent;

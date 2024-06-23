import PropTypes from "prop-types";
import "../../../public/css/global.css";
import "../../../public/css/bootstrap.min.css";

const TopbarComponent = ({ brandName, address, email, socialLinks }) => {
  return (
    <div className="container-fluid bg-dark text-white d-none d-lg-block">
      <div className="row align-items-center top-bar">
        <div className="col-lg-3 col-md-12 text-center text-lg-start">
          <a href="/" className="navbar-brand m-0 p-0">
            <h1 className="text-white m-0">{brandName}</h1>
          </a>
        </div>
        <div className="col-lg-9 col-md-12 text-end">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <i className="fa fa-map-marker-alt text-primary me-2" />
            <p className="m-0">{address}</p>
          </div>
          <div className="h-100 d-inline-flex align-items-center me-4">
            <i className="far fa-envelope-open text-primary me-2" />
            <p className="m-0">{email}</p>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="btn btn-sm-square bg-white text-primary me-1"
                href={link.href}
              >
                <i className={link.iconClass} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TopbarComponent.propTypes = {
  brandName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TopbarComponent;

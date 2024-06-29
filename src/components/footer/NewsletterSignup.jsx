import PropTypes from "prop-types";

const newsletterData = {
  title: "Subscribe",
  description:
    "Stay informed with our latest updates on all things RKDK Contractor, including special promotions.",
  placeholder: "Your email",
  buttonText: "SignUp",
};

const NewsletterSignup = ({ title, description, placeholder, buttonText }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">{title}</h4>
      <p>{description}</p>
      <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
        <input
          className="form-control border-0 w-100 py-3 ps-4 pe-5"
          type="text"
          placeholder={placeholder}
        />
        <button
          type="button"
          className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

NewsletterSignup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

// Providing defaultProps to ensure component doesn't break if props are not provided
NewsletterSignup.defaultProps = {
  title: newsletterData.title,
  description: newsletterData.description,
  placeholder: newsletterData.placeholder,
  buttonText: newsletterData.buttonText,
};

export default NewsletterSignup;

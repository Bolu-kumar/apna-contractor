import PropTypes from "prop-types";

const AboutComponent = ({
  title,
  subtitle,
  description,
  points,
  contactNumber,
  image1,
  image2,
}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">{title}</h6>
            <h1 className="mb-4">{subtitle}</h1>
            <p className="mb-4">{description}</p>
            {points.map((point, index) => (
              <p key={index} className="fw-medium text-dark">
                <i className="fa fa-check text-dark me-3"></i>
                {point}
              </p>
            ))}
            <div className="bg-warning d-flex align-items-center p-4 mt-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt fa-2x text-primary"></i>
              </div>
              <div className="ms-3 ">
                <p className="fs-5 fw-medium mb-2 text-white">Contact Us</p>
                <h3 className="m-0 text-secondary">{contactNumber}</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-4" style={{ minHeight: "500px" }}>
            <div
              className="position-relative h-100 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={image1}
                style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
                alt="About Us"
              />
              <img
                className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                src={image2}
                style={{ objectFit: "cover" }}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  contactNumber: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
};

export default AboutComponent;

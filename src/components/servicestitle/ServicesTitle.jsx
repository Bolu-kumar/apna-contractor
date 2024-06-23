import PropTypes from "prop-types";

const ServiceTitleComponent = ({ services }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay={`${0.1 * (index + 1)}s`}
            >
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src={service.image}
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center justify-content-between bg-light p-4">
                <h5 className="text-truncate me-3 mb-0">{service.title}</h5>
                <a
                  className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
                  href={service.link}
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ServiceTitleComponent.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceTitleComponent;

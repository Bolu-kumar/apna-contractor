import "./MainServices.css";

// import "../../../public/css/style.css";
const services = [
  {
    icon: "fa-hard-hat",
    title: "Building Shuttering",
    description:
      "RKDK Contractor Company provides top-notch building shuttering services. Our team ensures precision and durability in every project, using high-quality materials for optimal performance.",
    features: ["Quality Service", "Customer Satisfaction", "Support 24/7"],
    link: "",
  },
  {
    icon: "fa-bolt",
    title: "Building Wiring",
    description:
      "At RKDK Contractor Company, we specialize in safe and efficient building wiring. Our experts adhere to the highest safety standards, ensuring reliable electrical systems for your structures.",
    features: ["Quality Service", "Customer Satisfaction", "Support 24/7"],
    link: "",
  },
  {
    icon: "fa-paint-roller",
    title: "Building Painting",
    description:
      "Transform your buildings with RKDK Contractor Company's professional painting services. We deliver stunning finishes, tailored to your aesthetic preferences, using premium paints for long-lasting beauty.",
    features: ["Quality Service", "Customer Satisfaction", "Support 24/7"],
    link: "",
  },
];

const MainServiceComponent = () => {
  return (
    <div className="container-fluid py-5 px-4 px-lg-0">
      <div className="row g-0">
        <div className="col-lg-3 d-none d-lg-flex">
          <div className="d-flex align-items-center justify-content-center bg-dark w-100 h-100">
            <h1
              className="display-3 text-white m-0"
              style={{ transform: "rotate(-90deg)" }}
            >
              5+ Years Experiences
            </h1>
          </div>
        </div>
        <div className="col-md-12 col-lg-9">
          <div className="ms-lg-5 ps-lg-5">
            <div
              className="text-center text-lg-start wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="text-secondary text-uppercase">Our Services</h6>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div
              className="owl-carousel service-carousel position-relative wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {services.map((service, index) => (
                <div className="bg-light p-4" key={index}>
                  <div
                    className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                    style={{ width: "75px", height: "75px" }}
                  >
                    <i className={`fa ${service.icon} fa-2x text-primary`}></i>
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p>{service.description}</p>
                  {service.features.map((feature, i) => (
                    <p className="text-dark fw-medium" key={i}>
                      <i className="fa fa-check text-dark me-2"></i>
                      {feature}
                    </p>
                  ))}
                  <a
                    href={service.link}
                    className="btn bg-white text-dark w-100 mt-2"
                  >
                    Read More
                    <i className="fa fa-arrow-right text-dark ms-2"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServiceComponent;

import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./CarouselCSS.css";

const CarouselComponent = ({ items }) => {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: false,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel
        className="owl-carousel header-carousel position-relative"
        {...options}
      >
        {items.map((item, index) => (
          <div key={index} className="owl-carousel-item position-relative">
            <img className="img-fluid" src={item.image} alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, .4)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-12 col-lg-12 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      {item.subtitle}
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      {item.title}
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      {item.description}
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                      <a
                        href={item.candidates}
                        className="btn btn-primary btn-rounded btn-lg py-md-3 px-md-5 me-3 mb-3 animated slideInLeft text-lg"
                      >
                        Request For Work
                      </a>
                      <a
                        href={item.clients}
                        className="btn btn-secondary btn-rounded btn-lg py-md-3 px-md-5 mb-3 animated slideInRight text-lg"
                      >
                        Contract Work Request
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

CarouselComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      candidates: PropTypes.string.isRequired,
      clients: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselComponent;

import PropTypes from "prop-types";

const servicesData = [
  { name: "Residential & Commercial Shuttering", link: "#" },
  { name: "Residential & Commercial Wiring", link: "#" },
  { name: "Residential & Commercial Painting", link: "#" },
  { name: "Skill Manpower Supplier", link: "#" },
  { name: "Non-Skill Manpower Supplier", link: "#" },
];

const FooterServices = ({ services = servicesData }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Services</h4>
      {services.map((service, index) => (
        <a key={index} className="btn btn-link" href={service.link}>
          {service.name}
        </a>
      ))}
    </div>
  );
};

FooterServices.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterServices;

// Fact.jsx
import PropTypes from "prop-types";
import CountUp from "react-countup";

const FactComponent = ({ facts }) => {
  return (
    <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="col-md-3 col-xs-6 text-center wow fadeIn"
              data-wow-delay={`${0.2 * index}s`}
            >
              <i className={`fa ${fact.icon} fa-2x text-white mb-3`}></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">
                <CountUp end={fact.number} duration={2} />
              </h2>
              <p className="text-white mb-0">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FactComponent.propTypes = {
  facts: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FactComponent;

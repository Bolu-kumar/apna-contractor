import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Breadcrumb = ({ items }) => {
  console.log("Breadcrumb -> items", items);

  return (
    <nav aria-label="breadcrumb" className="animated slideInDown">
      <ol className="breadcrumb text-uppercase">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item${item.active ? " active" : ""}`}
            aria-current={item.active ? "page" : null}
          >
            {item.active ? (
              <span className="text-white">{item.label}</span>
            ) : (
              <Link to={item.path} className="text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;

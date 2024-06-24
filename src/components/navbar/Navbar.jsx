import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/img/logo.svg"; // Adjust the path according to your directory structure
import "./Nav.css";
const NavbarComponent = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
    setIsDropdownOpen(false); // Ensure dropdown menu is closed
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container-fluid nav-bar bg-light w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center m-0 p-0"
          onClick={closeNavMenu}
        >
          <img src={logo} alt="RKDK Contractor" style={{ height: "100px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={handleNavCollapse}
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-item nav-link" onClick={closeNavMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link"
              onClick={closeNavMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="nav-item nav-link"
              onClick={closeNavMenu}
            >
              Services
            </Link>

            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                Legal Page
              </Link>
              <div
                className={`dropdown-menu fade-up m-0 ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <Link
                  to="/privacy-policy"
                  className="dropdown-item"
                  onClick={closeNavMenu}
                >
                  Privacy-Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="dropdown-item"
                  onClick={closeNavMenu}
                >
                  Terms-Conditions
                </Link>

                <Link
                  to="/our-certificates"
                  className="dropdown-item"
                  onClick={closeNavMenu}
                >
                  Our-Certificates
                </Link>
              </div>
            </div>

            <Link
              to="/candidates"
              className="nav-item nav-link"
              onClick={closeNavMenu}
            >
              Candidate
            </Link>

            <Link
              to="/clients"
              className="nav-item nav-link"
              onClick={closeNavMenu}
            >
              Contract
            </Link>

            <Link
              to="/contact"
              className="nav-item nav-link"
              onClick={closeNavMenu}
            >
              Contact
            </Link>
          </div>
          <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-warning d-flex align-items-center">
            <div
              className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="fa fa-phone-alt text-primary"></i>
            </div>
            <div className="ms-3">
              <p className="mb-1 text-dark">Emergency 24/7</p>
              <h5 className="m-0 text-secondary">+919795298080</h5>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;

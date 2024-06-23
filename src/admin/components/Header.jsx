// import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../../public/img/logo.svg";

const Header = () => {
  return (
    <header className="admin-header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Admin Panel</h1>
    </header>
  );
};

export default Header;

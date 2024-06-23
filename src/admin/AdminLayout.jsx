// import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-main">
        <Sidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;

import { useState } from "react";
import AdminHeader from "./components/Header";
import AdminFooter from "./components/Footer";
import AdminSidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import "./assets/css/Admin.css";

const AdminLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div
      className={`grid-container ${openSidebarToggle ? "sidebar-open" : ""}`}
    >
      <AdminHeader OpenSidebar={toggleSidebar} />
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={toggleSidebar}
      />
      <main className="main-container">
        <Outlet /> {/* This will render the nested routes */}
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;

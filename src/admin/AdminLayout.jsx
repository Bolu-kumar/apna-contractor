import { useState } from "react";
import AdminHeader from "./components/Header";
import AdminFooter from "./components/Footer";
import AdminSidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./assets/css/Admin.css";

const AdminLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar openSidebarToggle={openSidebarToggle} />
      <main className="main-container">
        <Home />
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;

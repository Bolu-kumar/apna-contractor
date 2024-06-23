// import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="admin-sidebar">
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

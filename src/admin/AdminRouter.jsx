// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UsersComponent";
import Settings from "./pages/Settings";

const AdminRouter = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default AdminRouter;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./admin/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Candidates from "./pages/Candidates";
import Clients from "./pages/Clients";
import LoginPage from "./pages/Login";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsConditions from "./pages/Terms-Conditions";
import NotFoundPage from "./pages/NotFoundPage";
import ResetPasswordPage from "./pages/ResetPassword";
import Admin from "./pages/Admins";
import Users from "./admin/pages/AdminPageUsersManagement";
import Settings from "./admin/pages/AdminPageSettings";
import ProtectedRoute from "./auth/protectRoute/ProtectRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<Admin />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            {/* Add more admin routes here */}
          </Route>
        </Route>

        {/* Main Site Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

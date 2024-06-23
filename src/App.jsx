import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopbarComponent from "./components/topbar/Tobbar";
import topbarContent from "./components/topbar/TopbarContent";

import NavbarComponent from "./components/navbar/Navbar";

import FooterComponent from "./components/footer/FooterMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Candidates from "./pages/Candidates";
import Clients from "./pages/Clients";

import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsConditions from "./pages/Terms-Conditions";

import NotFoundPage from "./pages/NotFoundPage"; // Import the NotFoundPage component
import WhatsAppComponent from "./components/whatsApp/WhatsAppProbesPass";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  return (
    <Router>
      <div className="App">
        <TopbarComponent {...topbarContent} />

        <NavbarComponent />
        <WhatsAppComponent />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Terms-conditions" element={<TermsConditions />} />

          <Route path="*" element={<NotFoundPage />} />

          {/* Other routes */}
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;

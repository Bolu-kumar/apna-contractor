import { Outlet } from "react-router-dom";
import TopbarComponent from "../components/topbar/Tobbar";
import topbarContent from "../components/topbar/TopbarContent";
import NavbarComponent from "../components/navbar/Navbar";
import FooterComponent from "../components/footer/FooterMain";
import WhatsAppComponent from "../components/whatsApp/WhatsAppProbesPass";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <TopbarComponent {...topbarContent} />
      <NavbarComponent />
      <WhatsAppComponent />
      <BackToTopButton />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;

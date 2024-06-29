import CarouselComponent from "../components/carousel/Carousel";
import carouselContent from "../components/carousel/CarouselContent";

import ServiceTitleComponent from "../components/servicestitle/ServicesTitle";
import servicesContent from "../components/servicestitle/ServicesTitleContent";

import AboutComponent from "../components/about/About";
import aboutUsContent from "../components/about/AboutContent";

import FactComponent from "../components/fact/Fact";
import factContent from "../components/fact/FactContent";

import ServicesComponent from "../components/ourservices/MainServices";
import Team from "../components/ourteam/TeamContent";
import FAQComponent from "../components/faq/FaqsProbsData";

import OurWorkComponent from "../components/ourwork/WorkData";
import AutoPopUpModal from "../components/autoPopUp/AutoPopupModal";
import modalData from "../components/autoPopUp/AutoPopModelContent";

const HomePage = () => {
  return (
    <div className="App">
      <AutoPopUpModal showInitially={true} modalData={modalData} />

      <CarouselComponent items={carouselContent} />

      <ServiceTitleComponent services={servicesContent} />

      <AboutComponent {...aboutUsContent} />

      <ServicesComponent />
      <OurWorkComponent />
      <FactComponent facts={factContent} />

      {/* <FactComponent /> */}
      <Team />

      <FAQComponent />
    </div>
  );
};

export default HomePage;

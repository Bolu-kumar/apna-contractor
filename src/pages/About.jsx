import ServiceTitleComponent from "../components/servicestitle/ServicesTitle";
import servicesContent from "../components/servicestitle/ServicesTitleContent";

import AboutComponent from "../components/about/About";
import aboutUsContent from "../components/about/AboutContent";

import FactComponent from "../components/fact/Fact";
import factContent from "../components/fact/FactContent";

import Team from "../components/ourteam/TeamContent";

import Breadcrumb from "../components/header/Breacrumb"; // Adjust path relative to the location of About.js

const About = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "About", path: "/about", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        <ServiceTitleComponent services={servicesContent} />

        {/* <AboutComponent /> */}
        <AboutComponent {...aboutUsContent} />

        <Team />
        <FactComponent facts={factContent} />
      </div>
    </div>
  );
};

export default About;

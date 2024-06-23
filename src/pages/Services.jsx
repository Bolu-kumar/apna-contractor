import ServiceTitleComponent from "../components/servicestitle/ServicesTitle";
import servicesContent from "../components/servicestitle/ServicesTitleContent";

import ServicesComponent from "../components/ourservices/MainServices";

import OurWorkComponent from "../components/ourwork/WorkData";

import Breadcrumb from "../components/header/Breacrumb"; // Adjust path relative to the location of About.js

const Services = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Services", path: "/services", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Our Services
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container-fluid">
        <ServiceTitleComponent services={servicesContent} />

        <ServicesComponent />
        <OurWorkComponent />
      </div>
    </div>
  );
};

export default Services;

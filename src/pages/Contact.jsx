import ContactComponent from "../components/contact/Contacts";

import Breadcrumb from "../components/header/Breacrumb"; // Adjust path relative to the location of About.js

const Contact = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Contact", path: "/contact", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact Us
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;

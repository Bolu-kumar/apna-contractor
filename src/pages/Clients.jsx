// import React from "react";
import ClientContractFormComponent from "../components/form/Clients"; // Adjust path as per your project structure
import Breadcrumb from "../components/header/Breacrumb"; // Adjust path as per your project structure

const Clients = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Work Request", path: "/Clients", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Work Request
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        <ClientContractFormComponent />
      </div>
    </div>
  );
};

export default Clients;

// import React from "react";
import CandidatesFormComponent from "../components/form/Candidates"; // Adjust path as per your project structure
import Breadcrumb from "../components/header/Breacrumb"; // Adjust path as per your project structure

const Candidates = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Apply", path: "/candidates", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Apply Job
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        <CandidatesFormComponent />
      </div>
    </div>
  );
};

export default Candidates;

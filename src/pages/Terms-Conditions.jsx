import TermsConditionsComponent from "../components/legalDocs//TermsConditions";
import TermsConditionsContent from "../components/legalDocs/TermsConditionsContent";

import Breadcrumb from "../components/header/Breacrumb"; // Adjust path relative to the location of About.js

const TermsConditions = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Terms Conditions", path: "/terms-conditions", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Terms Conditions
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        {/* Pass companyInfo as props to PrivacyPolicyComponent */}
        <TermsConditionsComponent companyInfo={TermsConditionsContent} />
      </div>
    </div>
  );
};

export default TermsConditions;

import PrivacyPolicyComponent from "../components/legalDocs/PrivacyPolicy";
import companyInfo from "../components/legalDocs/PrivacyPolicyContent";

import Breadcrumb from "../components/header/Breacrumb"; // Adjust path relative to the location of About.js

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Pages", path: "/", active: false },
    { label: "Privacy Policy", path: "/privacy-policy", active: true },
  ];

  return (
    <div>
      <div className="container-fluid page-header mb-5 py-5">
        <div className="container">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Privacy Policy
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <div className="container">
        {/* Pass companyInfo as props to PrivacyPolicyComponent */}
        <PrivacyPolicyComponent companyInfo={companyInfo} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// import React from 'react';
import PropTypes from "prop-types";

const PrivacyPolicyComponrnt = ({ companyInfo }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h2 className="mb-4">Privacy and Policy</h2>

          {/* Introduction */}
          <section className="mb-5">
            <h3>1. Introduction</h3>
            <p>{companyInfo.introduction}</p>
          </section>

          {/* Privacy Policy */}
          <section className="mb-5">
            <h3>2. Privacy Policy</h3>
            <p>{companyInfo.privacyPolicy}</p>
          </section>

          {/* Service Policy */}
          <section className="mb-5">
            <h3>3. Service Policy</h3>
            <p>{companyInfo.servicePolicy}</p>
          </section>

          {/* Safety Policy */}
          <section className="mb-5">
            <h3>4. Safety Policy</h3>
            <p>{companyInfo.safetyPolicy}</p>
          </section>

          {/* Quality Assurance Policy */}
          <section className="mb-5">
            <h3>5. Quality Assurance Policy</h3>
            <p>{companyInfo.qualityAssurancePolicy}</p>
          </section>

          {/* Client Satisfaction Policy */}
          <section className="mb-5">
            <h3>6. Client Satisfaction Policy</h3>
            <p>{companyInfo.clientSatisfactionPolicy}</p>
          </section>

          {/* Data Protection Policy */}
          <section className="mb-5">
            <h3>7. Data Protection Policy</h3>
            <p>{companyInfo.dataProtectionPolicy}</p>
          </section>

          {/* Contact Information */}
          <section className="mb-5">
            <h3>8. Contact Information</h3>
            <p>
              If you have any questions or concerns about our privacy and policy
              document, please contact us at {companyInfo.contactEmail} or call:{" "}
              {companyInfo.contactPhone}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

PrivacyPolicyComponrnt.propTypes = {
  companyInfo: PropTypes.shape({
    introduction: PropTypes.string.isRequired,
    privacyPolicy: PropTypes.string.isRequired,
    servicePolicy: PropTypes.string.isRequired,
    safetyPolicy: PropTypes.string.isRequired,
    qualityAssurancePolicy: PropTypes.string.isRequired,
    clientSatisfactionPolicy: PropTypes.string.isRequired,
    dataProtectionPolicy: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
  }).isRequired,
};

export default PrivacyPolicyComponrnt;

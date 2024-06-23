import PropTypes from "prop-types";

const TermsConditionsComponent = ({ companyInfo }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h2 className="mb-4">Terms and Conditions</h2>

          {/* General */}
          <section className="mb-5">
            <h3>1. General</h3>
            <p>{companyInfo.general}</p>
          </section>

          {/* Service Provision */}
          <section className="mb-5">
            <h3>2. Service Provision</h3>
            <p>{companyInfo.serviceProvision}</p>
          </section>

          {/* Payment Terms */}
          <section className="mb-5">
            <h3>3. Payment Terms</h3>
            <p>{companyInfo.paymentTerms}</p>
          </section>

          {/* Cancellation Policy */}
          <section className="mb-5">
            <h3>4. Cancellation Policy</h3>
            <p>{companyInfo.cancellationPolicy}</p>
          </section>

          {/* Liability */}
          <section className="mb-5">
            <h3>5. Liability</h3>
            <p>{companyInfo.liability}</p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-5">
            <h3>6. Dispute Resolution</h3>
            <p>{companyInfo.disputeResolution}</p>
          </section>

          {/* Amendments */}
          <section className="mb-5">
            <h3>7. Amendments</h3>
            <p>{companyInfo.amendments}</p>
          </section>

          {/* Acceptance */}
          <section className="mb-5">
            <h3>8. Acceptance</h3>
            <p>{companyInfo.acceptance}</p>
          </section>

          {/* Change Order Policy */}
          <section className="mb-5">
            <h3>9. Change Order Policy</h3>
            <p>{companyInfo.changeOrderPolicy}</p>
          </section>

          {/* Warranty Clause */}
          <section className="mb-5">
            <h3>10. Warranty Clause</h3>
            <p>{companyInfo.warrantyClause}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

TermsConditionsComponent.propTypes = {
  companyInfo: PropTypes.shape({
    general: PropTypes.string.isRequired,
    serviceProvision: PropTypes.string.isRequired,
    paymentTerms: PropTypes.string.isRequired,
    cancellationPolicy: PropTypes.string.isRequired,
    liability: PropTypes.string.isRequired,
    disputeResolution: PropTypes.string.isRequired,
    amendments: PropTypes.string.isRequired,
    acceptance: PropTypes.string.isRequired,
    changeOrderPolicy: PropTypes.string.isRequired,
    warrantyClause: PropTypes.string.isRequired,
  }).isRequired,
};

export default TermsConditionsComponent;

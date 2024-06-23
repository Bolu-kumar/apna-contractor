import FooterAddress from "./FooterAddress";
import FooterPageLinkComponent from "./FooterPageLink";
import FooterServices from "./FooterServices";
import NewsletterSignup from "./NewsletterSignup";
import "./Footer.css";
const FooterComponent = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 px-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <FooterAddress />
          <FooterPageLinkComponent
            aboutLink="/about"
            servicesLink="/services"
            termsLink="/terms-conditions"
            privacyLink="/privacy-policy"
            contactLink="/contact"
          />
          <FooterServices />
          <NewsletterSignup />
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="text-center  mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                RKDK Contractor
              </a>
              , All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

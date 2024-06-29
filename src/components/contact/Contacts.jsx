import PropTypes from "prop-types";

const contactInfo = {
  address: "Partawal Bazar, Maharajganj, UP, India (273301)",
  phone: "+919350125817",
  email: "rkdk.contractor@gmail.com",
  desc: "Welcome to RKDK Contractor, your trusted partner for a wide range of building services.",
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.0834129516866!2d83.60804836677883!3d26.964257711886805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fe3ef69cb62b%3A0x5aa8e17530000000!2sConsulting%20services!5e0!3m2!1sen!2sin!4v1719075599402!5m2!1sen!2sin",
};

const ContactComponent = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Get In Touch</h6>
            <p className="mb-4">
              {contactInfo.desc} <a href={contactInfo.location}>Download Now</a>
              .
            </p>
            <iframe
              className="position-relative w-100"
              src={contactInfo.src}
              frameBorder="0"
              style={{ height: "300px", border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-light p-5 h-100 d-flex align-items-center">
              <div>
                <h4>Contact Information</h4>
                <p>Address: {contactInfo.address}</p>
                <p>Phone: {contactInfo.phone}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.shape({
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactComponent;

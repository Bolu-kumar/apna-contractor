// import "./Work.css"; // Custom CSS for styling if needed

const OurWorkComponent = () => {
  const services = [
    {
      title: "Commercial Shuttring",
      image: "img/our-work/s1.jpg",
      link: "/residential-plumbing",
    },
    {
      title: "Residential Shuttring",
      image: "img/our-work/s2.jpg",
      link: "/commercial-plumbing",
    },
    {
      title: "Residential Shuttring",
      image: "img/our-work/s3.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Residential Electric Wiring",
      image: "img/our-work/e1.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Electric Shocket Installation",
      image: "img/our-work/e2.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Electric Shocket Wiring",
      image: "img/our-work/e3.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Wall Painting",
      image: "img/our-work/p1.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Ceiling Painting",
      image: "img/our-work/p2.jpg",
      link: "/emergency-servicing",
    },
    {
      title: "Outside Wall Painting",
      image: "img/our-work/p3.jpg",
      link: "/emergency-servicing",
    },

    // Add more services as needed
  ];

  return (
    <div className="container-xxl py-5 border">
      <div className="container ">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Our Work</h6>
          <h1 className="mb-5">Our Work Gallary </h1>
        </div>
        <div className="row g-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
              data-wow-delay={`${index * 0.1 + 0.1}s`}
            >
              <div className="overflow-hidden">
                <img
                  className="img-fluid w-100 h-100"
                  src={service.image}
                  alt={service.title}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="d-flex align-items-center justify-content-between bg-light p-4">
                <h5 className="text-truncate me-3 mb-0">{service.title}</h5>
                <a
                  className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
                  href={service.link}
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkComponent;

import PropTypes from "prop-types";

const TeamMember = ({
  imgSrc,
  name,
  designation,
  facebook,
  twitter,
  instagram,
}) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item">
        <div className="position-relative overflow-hidden">
          <img className="img-fluid" src={imgSrc} alt={name} />
        </div>
        <div className="team-text">
          <div className="bg-light">
            <h5 className="fw-bold mb-0">{name}</h5>
            <small>{designation}</small>
          </div>
          <div className="bg-primary">
            <a className="btn btn-square mx-1" href={facebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square mx-1" href={twitter}>
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square mx-1" href={instagram}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
};

export default TeamMember;

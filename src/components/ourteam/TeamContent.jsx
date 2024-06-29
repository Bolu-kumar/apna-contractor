import TeamMember from "./Team";
import "./TeamsCSS.css";

const teamMembers = [
  {
    imgSrc: "img/team/Rishikesh.jpg",
    name: "Er. Rishikesh (5+ Years Exp.)",
    designation: "CEO & Founder",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },

  {
    imgSrc: "img/team/Anand.jpg",
    name: "Er. Anand (4+ Years Exp.)",
    designation: "Electrical Engineer",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },

  {
    imgSrc: "img/team/Shivnandand.jpg",
    name: "Er. Shivnandand (3+ Years Exp.)",
    designation: "Electrical Engineer",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    imgSrc: "img/team/Sachin.jpg",
    name: "Sachin Saroj(5+ Years Exp.)",
    designation: "Manager Director",
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
];

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Our Team</h6>
          <h1 className="mb-5">Our Expert Team</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

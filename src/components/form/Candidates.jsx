import { useState } from "react";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";
// import firebaseApp from "../../firebaseConfig/firebaseConfig"; // Adjust path as per your project structure
import firebaseApp from "../../firebaseConfig/firebaseConfig"; // Adjust path as per your project structure

import "./CandidateCSS.css"; // Import CSS file for styling

const CandidatesFormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
    role: "", // New field for dropdown
    experience: "", // New field for text input
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase(firebaseApp);
    const applicationsRef = ref(db, "CandidatesData");

    // Include timestamp
    const timestamp = serverTimestamp();

    // Save data to Firebase Realtime Database
    push(applicationsRef, { ...formData, timestamp })
      .then(() => {
        alert("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          resume: "",
          message: "",
          role: "", // Reset dropdown value
          experience: "", // Reset text input value
        });
      })
      .catch((error) => {
        console.error("Error adding application: ", error);
        alert("Failed to submit application. Please try again.");
      });
  };

  return (
    <div className="container">
      <h2 className="form-title">Registration For Work</h2>
      <form className="job-application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone<span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role" className="form-label">
            Applying for position<span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="helper">Helper</option>
            <option value="painter">Painter</option>
            <option value="electrician">Electrician</option>
            <option value="shutteringCarpenter">Shuttering Carpenter</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience" className="form-label">
            Your Experience<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume" className="form-label">
            Resume (URL)
          </label>
          <input
            type="url"
            className="form-control"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CandidatesFormComponent;

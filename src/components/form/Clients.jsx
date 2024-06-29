import { useState } from "react";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";
import firebaseApp from "../../firebaseConfig/firebaseConfig"; // Adjust path as per your project structure

const ClientContractFormComponent = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    projectDetails: "",
    startingDate: "", // New field
    manpower: "", // New field
    duration: "", // New field
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
    const contractsRef = ref(db, "clientContractsData");

    // Include timestamp
    const timestamp = serverTimestamp();

    // Check if manpower is greater than 0
    if (formData.manpower <= 0) {
      alert("Number of Manpower Required must be greater than 0");
      return;
    }

    // Save data to Firebase Realtime Database with timestamp
    push(contractsRef, { ...formData, timestamp })
      .then(() => {
        alert("Contract request submitted successfully!");
        setFormData({
          clientName: "",
          email: "",
          phone: "",
          projectDetails: "",
          startingDate: "",
          manpower: "",
          duration: "",
        });
      })
      .catch((error) => {
        console.error("Error adding contract request: ", error);
        alert("Failed to submit contract request. Please try again.");
      });
  };

  return (
    <div className="container">
      <h2 className="form-title">Client Contract Work Request</h2>
      <form className="contract-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientName" className="form-label">
            Company/Owner Name:<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:<span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone:<span className="text-danger">*</span>
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
          <label htmlFor="startingDate" className="form-label">
            Project Starting Date<span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="startingDate"
            name="startingDate"
            value={formData.startingDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="manpower" className="form-label">
            Number of Manpower Required<span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="manpower"
            name="manpower"
            value={formData.manpower}
            onChange={handleInputChange}
            min="1" // Ensure minimum value is 1
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration" className="form-label">
            Project Duration<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="e.g., 10 days, 6 months, 2 years"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDetails" className="form-label">
            Project Details:<span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            id="projectDetails"
            name="projectDetails"
            rows="4"
            value={formData.projectDetails}
            onChange={handleInputChange}
            placeholder="e.g. Construction Work: 5 Helper, 2 Shuttering Mason"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Contract Request
        </button>
      </form>
    </div>
  );
};

export default ClientContractFormComponent;

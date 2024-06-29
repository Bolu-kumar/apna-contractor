import { useState } from "react";
import { db } from "../../../firebaseConfig/firebaseConfig"; // Adjust the path if needed
import { ref, push } from "firebase/database"; // Import ref and push from Firebase database module

import { Form, Button } from "react-bootstrap";

const AddAvailableStaff = () => {
  const [staffName, setStaffName] = useState("");
  const [staffRole, setStaffRole] = useState("");
  const [staffSalary, setStaffSalary] = useState("");
  const [staffPhone, setStaffPhone] = useState(""); // Changed from value to state setter function

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newStaffData = {
        staffName,
        staffRole,
        staffSalary: parseFloat(staffSalary), // Convert to float if necessary
        staffPhone, // Include staff phone number
      };

      // Save to Firebase database
      const staffListRef = ref(db, "Staffs"); // Assuming "Staffs" is your database node for storing staff data
      push(staffListRef, newStaffData);
      alert("New staff added:");

      // Reset form fields
      setStaffName("");
      setStaffRole("");
      setStaffSalary("");
      setStaffPhone("");
    } catch (error) {
      console.error("Error adding new staff:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mb-4 bg-dark p-3 text-center text-white">
        Add Available Staff:
      </h2>
      <Form.Group controlId="staffName">
        <Form.Label className="text-dark">Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter staff name"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="staffRole">
        <Form.Label className="text-dark">Role:</Form.Label>
        <Form.Control
          as="select"
          value={staffRole}
          onChange={(e) => setStaffRole(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a role:
          </option>
          <optgroup label="Helper">
            <option value="paintingHelper">Painting Helper</option>
            <option value="constructionHelper">Construction Helper</option>
            <option value="electricianHelper">Electrician Helper</option>
          </optgroup>
          <optgroup label="Mistry">
            <option value="paintingMistry">Painting Mistry</option>
            <option value="constructionMistry">Construction Mistry</option>
            <option value="electricianMistry">Electrician Mistry</option>
          </optgroup>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="staffSalary">
        <Form.Label className="text-dark">Salary:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter staff salary"
          value={staffSalary}
          onChange={(e) => setStaffSalary(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="staffPhone">
        <Form.Label className="text-dark">Phone:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter staff phone"
          value={staffPhone} // Fix: Corrected the value prop to use staffPhone state
          onChange={(e) => setStaffPhone(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Add Staff
      </Button>
    </Form>
  );
};

export default AddAvailableStaff;

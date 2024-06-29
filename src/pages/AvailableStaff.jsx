import { Table, Container, Spinner, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { ref, get } from "firebase/database";
import { db } from "../firebaseConfig/firebaseConfig";
import { useState } from "react";
import PaginationComponent from "../components/pagination/PaginationComponents"; // Adjust path as necessary

const PAGE_SIZE = 10; // Number of items per page

const capitalizeWords = (str) => {
  // Regex pattern to find and replace camelCase with spaces
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const fetchStaffData = async (pageNumber) => {
  const staffsRef = ref(db, "Staffs");
  try {
    const snapshot = await get(staffsRef);
    const staffs = snapshot.val();

    if (staffs) {
      // Convert Firebase object to array of objects
      const staffArray = Object.keys(staffs).map((key) => ({
        id: key,
        ...staffs[key],
      }));

      // Calculate pagination
      const startIndex = (pageNumber - 1) * PAGE_SIZE;
      const paginatedStaffList = staffArray.slice(
        startIndex,
        startIndex + PAGE_SIZE
      );

      return {
        totalPages: Math.ceil(staffArray.length / PAGE_SIZE),
        staffList: paginatedStaffList,
      };
    } else {
      return {
        totalPages: 0,
        staffList: [],
      };
    }
  } catch (error) {
    console.error("Error fetching staff data:", error);
    throw new Error("Failed to fetch staff data");
  }
};

const maskPhoneNumber = (phoneNumber) => {
  const visibleDigits = phoneNumber.slice(0, -4); // Get all digits except the last four
  const hiddenDigits = phoneNumber.slice(-4).replace(/\d/g, "*"); // Mask the last four digits
  return `${visibleDigits}${hiddenDigits}`;
};

const AvailableStaff = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: { staffList, totalPages } = { staffList: [], totalPages: 0 },
    isLoading,
    error,
  } = useQuery(["staffList", currentPage], () => fetchStaffData(currentPage), {
    keepPreviousData: true,
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">
          Error loading staff data: {error.message}
        </Alert>
      </Container>
    );
  }

  // Ensure staffList is an array before mapping
  if (!Array.isArray(staffList)) {
    return (
      <Container>
        <Alert variant="danger">Error: Invalid data format received.</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5 ">Today Available Staffs: </h1>
      <p>
        <span className="text-dark">Note:</span>The minimum wage for staff is
        ₹500 for 8 hours of work per day. WhatsApp Us: +919795298080
      </p>
      {staffList.length === 0 ? (
        <p>No staff data available.</p>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Role</th>
                <th>Wages</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={staff.id}>
                  <td>{index + 1}</td>
                  <td>{staff.staffName}</td>
                  <td>{capitalizeWords(staff.staffRole)}</td>
                  <td>₹{staff.staffSalary}</td>
                  <td>{maskPhoneNumber(staff.staffPhone)}</td>{" "}
                  {/* Masking phone number */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default AvailableStaff;

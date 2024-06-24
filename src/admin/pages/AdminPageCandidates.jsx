import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig/firebaseConfig";
import { Table } from "react-bootstrap";
import CustomPagination from "../../components/pagination/PaginationComponents"; // Import the pagination component
// import "bootstrap/dist/css/bootstrap.min.css";

const AdminPageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const candidatesRef = ref(db, "CandidatesData");
        const snapshot = await get(candidatesRef);
        if (snapshot.exists()) {
          const candidatesData = [];
          snapshot.forEach((childSnapshot) => {
            const candidate = childSnapshot.val();
            candidatesData.push({ id: childSnapshot.key, ...candidate });
          });
          setCandidates(candidatesData);
          setTotalPages(Math.ceil(candidatesData.length / itemsPerPage));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching candidates data: ", error);
      }
    };

    fetchCandidates();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCandidates = candidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4  bg-dark p-3 text-center text-white">
        Candidates Data:
      </h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Message</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.fullName}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.role}</td>
              <td>{candidate.experience}</td>
              <td>{candidate.message}</td>
              <td>{candidate.resume}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AdminPageCandidates;

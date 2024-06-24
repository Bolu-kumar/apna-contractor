import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebaseConfig/firebaseConfig";
import { Table } from "react-bootstrap";
import CustomPagination from "../../components/pagination/PaginationComponents"; // Import the pagination component
import formatDate from "../components/DateFormat";

const AdminPageClients = () => {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsRef = ref(db, "clientContractsData");
        const snapshot = await get(clientsRef);
        if (snapshot.exists()) {
          const clientsData = [];
          snapshot.forEach((childSnapshot) => {
            const client = childSnapshot.val();
            clientsData.push({ id: childSnapshot.key, ...client });
          });
          setClients(clientsData);
          setTotalPages(Math.ceil(clientsData.length / itemsPerPage));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching clients data: ", error);
      }
    };

    fetchClients();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedClients = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4  bg-dark p-3 text-center text-white">
        Clients Data:
      </h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Project Details</th>
            <th>Starting Date</th>
            <th>Duration</th>
            <th>Manpower</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {paginatedClients.map((client) => (
            <tr key={client.id}>
              <td>{client.clientName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.projectDetails}</td>
              <td>{client.startingDate}</td>
              <td>{client.duration}</td>
              <td>{client.manpower}</td>
              <td>{formatDate(client.timestamp)}</td>{" "}
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

export default AdminPageClients;

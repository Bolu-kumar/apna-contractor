import { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  BsPeopleFill,
  BsBuilding,
  BsPersonBoundingBox,
  BsFileText,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function AdminPageDashboard() {
  const [candidatesData, setCandidatesData] = useState([]);
  const [clientContractsData, setClientContractsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const candidatesRef = ref(db, "CandidatesData");
    const clientsRef = ref(db, "clientContractsData");

    onValue(
      candidatesRef,
      (snapshot) => {
        const data = snapshot.val();
        setCandidatesData(data ? Object.values(data) : []);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    onValue(
      clientsRef,
      (snapshot) => {
        const data = snapshot.val();
        setClientContractsData(data ? Object.values(data) : []);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  const getTotalCount = (data) => data.length;

  const getTodayCount = (data) => {
    const today = new Date().toISOString().split("T")[0];
    return data.filter((item) => item.date === today).length;
  };

  const totalCandidates = getTotalCount(candidatesData);
  const totalClients = getTotalCount(clientContractsData);
  const todayCandidates = getTodayCount(candidatesData);
  const todayClients = getTodayCount(clientContractsData);

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error loading content: {error.message}</Alert>
      </Container>
    );
  }

  const candidatesGraphData = candidatesData.map((item) => ({
    date: item.date,
    count: 1,
  }));
  const clientsGraphData = clientContractsData.map((item) => ({
    date: item.date,
    count: 1,
  }));

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="text-white">DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Candidates</h3>
            <BsPersonBoundingBox className="card_icon" />
          </div>
          <h1>{totalCandidates}</h1>
          <p>Manage and track all candidates in one place.</p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Clients</h3>
            <BsBuilding className="card_icon" />
          </div>
          <h1>{totalClients}</h1>
          <p>Stay connected with all client contracts and agreements.</p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Today's Candidates</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{todayCandidates}</h1>
          <p>New candidates added today.</p>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Today's Clients</h3>
            <BsFileText className="card_icon" />
          </div>
          <h1>{todayClients}</h1>
          <p>New client contracts today.</p>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={candidatesGraphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={300}
            data={clientsGraphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AdminPageDashboard;

import { useState } from "react";
import ExportData from "../components/ExportData";
import CleanDatabase from "../components/CleanData"; // Correct import

const AdminPageSettings = () => {
  const [showClients, setShowClients] = useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  const clientHeaders = [
    "clientName",
    "email",
    "phone",
    "projectDetails",
    "startingDate",
    "duration",
    "manpower",
  ];
  const candidateHeaders = [
    "fullName",
    "email",
    "phone",
    "role",
    "experience",
    "message",
    "resume",
  ];

  const handleShowClients = () => {
    setShowClients(true);
    setShowCandidates(false);
  };

  const handleShowCandidates = () => {
    setShowClients(false);
    setShowCandidates(true);
  };

  return (
    <section
      id="settings"
      style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* <h3 className="text-center text-white bg-dark p-3 mb-4">Settings:</h3> */}

        {/* Buttons Row */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <button
              className="btn btn-primary btn-block p-3"
              onClick={handleShowClients}
              style={{ width: "100%" }}
            >
              Show Clients
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-secondary btn-block p-3"
              onClick={handleShowCandidates}
              style={{ width: "100%" }}
            >
              Show Candidates
            </button>
          </div>
        </div>
        {/* Heading based on active section */}
        <h4 className="text-left text-dark mb-4">
          {showClients && "Clients Data"}
          {showCandidates && "Candidates Data"}
        </h4>
        {/* Row for Clients */}
        {showClients && (
          <div className="row mb-4">
            <div className="col-lg-6 mb-3">
              <CleanDatabase databaseRef="clientContractsData" />
            </div>
            <div className="col-lg-6 mb-3">
              <ExportData
                databaseRef="clientContractsData"
                filename="clients_data.csv"
                headers={clientHeaders}
              />
            </div>
          </div>
        )}

        {/* Row for Candidates */}
        {showCandidates && (
          <div className="row">
            <div className="col-lg-6 mb-3">
              <CleanDatabase databaseRef="CandidatesData" />
            </div>
            <div className="col-lg-6 mb-3">
              <ExportData
                databaseRef="CandidatesData"
                filename="candidates_data.csv"
                headers={candidateHeaders}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPageSettings;

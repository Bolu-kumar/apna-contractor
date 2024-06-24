// // // import React from "react";

// // const AdminPageSettings = () => {
// //   return (
// //     <div>
// //       <h2 className="text-black">Setting</h2>
// //       <p className="text-black">Settings Page! </p>
// //     </div>
// //   );
// // };

// // export default AdminPageSettings;

// import ExportData from "../components/ExportData";
// import CleanDatabase from "../components/CleanData"; // Correct import

// const AdminPageSettings = () => {
//   const clientHeaders = [
//     "clientName",
//     "email",
//     "phone",
//     "projectDetails",
//     "startingDate",
//     "duration",
//     "manpower",
//   ];
//   const candidateHeaders = [
//     "fullName",
//     "email",
//     "phone",
//     "role",
//     "experience",
//     "message",
//     "resume",
//   ];

//   return (
//     <section
//       id="settings"
//       style={{ padding: "20px", backgroundColor: "white" }}
//     >
//       <div className="container">
//         <div className="row mb-4">
//           <h3 className="text-center text-white bg-dark p-3 mb-4">
//             Clients Data:
//           </h3>
//           <div className="col-md-6">
//             <ExportData
//               databaseRef="clientContractsData"
//               filename="clients_data.csv"
//               headers={clientHeaders}
//             />
//           </div>
//           <div className="col-md-6">
//             <CleanDatabase databaseRef="clientContractsData" />
//           </div>
//         </div>
//         <div className="row mb-4">
//           <h3 className="text-center text-white bg-dark p-3 mb-4">
//             Candidates Data:
//           </h3>
//           <div className="col-md-6">
//             <ExportData
//               databaseRef="CandidatesData"
//               filename="candidates_data.csv"
//               headers={candidateHeaders}
//             />
//           </div>
//           <div className="col-md-6">
//             <CleanDatabase databaseRef="CandidatesData" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminPageSettings;
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
        <h4 className="text-center text-white bg-dark p-3 mb-4">
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

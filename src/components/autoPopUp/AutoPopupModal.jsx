// import { useState, useEffect } from "react";
// import { Modal, Spinner, Alert } from "react-bootstrap";
// import PropTypes from "prop-types";
// import { ref, onValue } from "firebase/database";
// import { db } from "../../firebaseConfig/firebaseConfig";
// import { useQuery } from "react-query";
// import "./AutoPopupModalCSS.css";
// import RequestForWorkButton from "../button/CandidatesButton";
// import ContractWorkRequestButton from "../button/ClientsButton";

// const fetchAutoPopupModalData = async () => {
//   const autoPopupRef = ref(db, "autoPopUpPage");
//   return new Promise((resolve, reject) => {
//     onValue(autoPopupRef, (snapshot) => {
//       const data = snapshot.val();
//       console.log(`data: ${data}`);
//       if (data) {
//         resolve(data);
//       } else {
//         reject("No data available");
//       }
//     });
//   });
// };

// const AutoPopupModal = ({ showInitially }) => {
//   const { data, error, isLoading } = useQuery(
//     "autoPopupModalData",
//     fetchAutoPopupModalData,
//     {
//       initialData: () => {
//         const savedContent = localStorage.getItem("autoPopUpContent");
//         return savedContent
//           ? JSON.parse(savedContent)
//           : {
//               title: "Welcome to RKDK Contractor!",
//               message:
//                 "We are glad you are here. Please choose one of the following options to get started:",
//               requestForWorkLink: "/candidates",
//               requestForContractLink: "/clients",
//               imageUrl: "img/Services/electric.png",
//               phone: "+919350125817",
//               email: "rkdk.contractor@gmail.com",
//             };
//       },
//       staleTime: 60000,
//       cacheTime: 300000,
//       onSuccess: (data) => {
//         localStorage.setItem("autoPopUpContent", JSON.stringify(data));
//       },
//     }
//   );

//   const [showModal, setShowModal] = useState(showInitially);

//   const handleClose = () => setShowModal(false);

//   useEffect(() => {
//     const autoPopupRef = ref(db, "autoPopUpPage");
//     onValue(autoPopupRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         localStorage.setItem("autoPopUpContent", JSON.stringify(data));
//       }
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <Modal
//         show={showModal}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         dialogClassName="custom-modal"
//         centered
//         className="mt-5 autoPopUp-margin"
//       >
//         <Modal.Body>
//           <Spinner animation="border" role="status">
//             <span className="sr-only">Loading...</span>
//           </Spinner>
//         </Modal.Body>
//       </Modal>
//     );
//   }

//   if (error) {
//     return (
//       <Modal
//         show={showModal}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         dialogClassName="custom-modal"
//         centered
//         className="mt-5 autoPopUp-margin"
//       >
//         <Modal.Body>
//           <Alert variant="danger">Error loading content: {error}</Alert>
//         </Modal.Body>
//       </Modal>
//     );
//   }

//   // const buttonLinks = {
//   //   requestForWorkLink: data?.requestForWorkLink || "/candidates",
//   //   requestForContractLink: data?.requestForContractLink || "/clients",
//   // };

//   const buttonLinks = {
//     requestForWorkLink: { url: data?.requestForWorkLink || "/candidates" },
//     requestForContractLink: { url: data?.requestForContractLink || "/clients" },
//   };

//   return (
//     <Modal
//       show={showModal}
//       onHide={handleClose}
//       backdrop="static"
//       keyboard={false}
//       dialogClassName="custom-modal"
//       centered
//       className="mt-5 autoPopUp-margin"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>{data?.title || "Default Title"}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>{data?.message || "Default Message"}</p>

//         <RequestForWorkButton
//           handleClose={handleClose}
//           buttonLink={buttonLinks.requestForWorkLink}
//         />

//         <ContractWorkRequestButton
//           handleClose={handleClose}
//           buttonLink={buttonLinks.requestForContractLink}
//         />

//         {data?.imageUrl && (
//           <div className="modal-image-container mt-4">
//             <img
//               src={data.imageUrl}
//               alt="Modal Illustration"
//               className="img-fluid"
//             />
//           </div>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// AutoPopupModal.propTypes = {
//   showInitially: PropTypes.bool.isRequired,
// };

// export default AutoPopupModal;

import { useState, useEffect } from "react";
import { Modal, Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig/firebaseConfig";
import { useQuery } from "react-query";
import "./AutoPopupModalCSS.css";
import RequestForWorkButton from "../button/CandidatesButton";
import ContractWorkRequestButton from "../button/ClientsButton";

const fetchAutoPopupModalData = async () => {
  const autoPopupRef = ref(db, "autoPopUpPage");
  return new Promise((resolve, reject) => {
    onValue(autoPopupRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject("No data available");
      }
    });
  });
};

const AutoPopupModal = ({ showInitially }) => {
  const { data, error, isLoading } = useQuery(
    "autoPopupModalData",
    fetchAutoPopupModalData,
    {
      initialData: () => {
        const savedContent = localStorage.getItem("autoPopUpContent");
        return savedContent
          ? JSON.parse(savedContent)
          : {
              title: "Welcome to RKDK Contractor!",
              message:
                "We are glad you are here. Please choose one of the following options to get started:",
              requestForWorkLink: "/candidates",
              requestForContractLink: "/clients",
              imageUrl: "img/Services/electric.png",
              phone: "+919350125817",
              email: "rkdk.contractor@gmail.com",
            };
      },
      staleTime: 60000,
      cacheTime: 300000,
      onSuccess: (data) => {
        localStorage.setItem("autoPopUpContent", JSON.stringify(data));
      },
    }
  );

  const [showModal, setShowModal] = useState(showInitially);

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const autoPopupRef = ref(db, "autoPopUpPage");
    onValue(autoPopupRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        localStorage.setItem("autoPopUpContent", JSON.stringify(data));
      }
    });
  }, []);

  if (isLoading) {
    return (
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="custom-modal"
        centered
        className="mt-5 autoPopUp-margin"
      >
        <Modal.Body>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="custom-modal"
        centered
        className="mt-5 autoPopUp-margin"
      >
        <Modal.Body>
          <Alert variant="danger">Error loading content: {error}</Alert>
        </Modal.Body>
      </Modal>
    );
  }

  const buttonLinks = {
    requestForWorkLink: { url: data?.requestForWorkLink || "/candidates" },
    requestForContractLink: { url: data?.requestForContractLink || "/clients" },
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="custom-modal"
      centered
      className="mt-5 autoPopUp-margin"
    >
      <Modal.Header closeButton>
        <Modal.Title>{data?.title || "Default Title"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{data?.message || "Default Message"}</p>

        <RequestForWorkButton
          handleClose={handleClose}
          buttonLink={buttonLinks.requestForWorkLink}
        />

        <ContractWorkRequestButton
          handleClose={handleClose}
          buttonLink={buttonLinks.requestForContractLink}
        />

        {data?.imageUrl && (
          <div className="modal-image-container mt-4">
            <img
              src={data.imageUrl}
              alt="Modal Illustration"
              className="img-fluid"
            />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

AutoPopupModal.propTypes = {
  showInitially: PropTypes.bool.isRequired,
};

export default AutoPopupModal;

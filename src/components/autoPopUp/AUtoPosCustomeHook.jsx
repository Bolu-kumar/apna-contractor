// import { useState, useEffect } from "react";
// import { ref, onValue } from "firebase/database";
// import { ref as storageRef, getDownloadURL } from "firebase/storage";
// import { db, storage } from "../../firebaseConfig/firebaseConfig";

// const defaultModalData = {
//   title: "Welcome to RKDK Contractor!",
//   message:
//     "We are glad you are here. Please choose one of the following options to get started:",
//   requestForWorkLink: "/candidates",
//   requestForContractLink: "/clients",
//   imageUrl: "img/Services/electric.png",
//   phone: "+919350125817",
//   email: "rkdk.contractor@gmail.com",
// };

// const useModalData = () => {
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     const modalRef = ref(db, "modalData");
//     onValue(modalRef, (snapshot) => {
//       const data = snapshot.val();

//       console.log("Fetched data:", data); // Log fetched data for debugging

//       if (data) {
//         const updatedModalData = {
//           title: data.title || defaultModalData.title,
//           message: data.message || defaultModalData.message,
//           requestForWorkLink:
//             data.requestForWorkLink || defaultModalData.requestForWorkLink,
//           requestForContractLink:
//             data.requestForContractLink ||
//             defaultModalData.requestForContractLink,
//           phone: data.phone || defaultModalData.phone,
//           email: data.email || defaultModalData.email,
//         };

//         if (data.imagePath) {
//           const imageRef = storageRef(storage, data.imagePath);
//           getDownloadURL(imageRef)
//             .then((url) => {
//               updatedModalData.imageUrl = url;
//               setModalData(updatedModalData);
//             })
//             .catch((error) => {
//               console.error("Error fetching image URL:", error);
//               setModalData(defaultModalData); // Fallback to default values on error
//             });
//         } else {
//           setModalData(updatedModalData);
//         }
//       } else {
//         // No data found in database, use default values
//         setModalData({ ...defaultModalData });
//       }
//     });
//   }, []);

//   // Return modalData or defaultModalData if modalData is null
//   return modalData || defaultModalData;
// };

// export default useModalData;
//============================

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebaseConfig/firebaseConfig";

const defaultModalData = {
  title: "Welcome to RKDK Contractor!",
  message:
    "We are glad you are here. Please choose one of the following options to get started:",
  requestForWorkLink: "/candidates",
  requestForContractLink: "/clients",
  imageUrl: "img/Services/electric.png",
  phone: "+919350125817",
  email: "rkdk.contractor@gmail.com",
};

const useModalData = () => {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const modalRef = ref(db, "modalData");
    onValue(modalRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const updatedModalData = {
          title: data.title || defaultModalData.title,
          message: data.message || defaultModalData.message,
          requestForWorkLink:
            data.requestForWorkLink || defaultModalData.requestForWorkLink,
          requestForContractLink:
            data.requestForContractLink ||
            defaultModalData.requestForContractLink,
          phone: data.phone || defaultModalData.phone,
          email: data.email || defaultModalData.email,
        };

        if (data.imagePath) {
          const imageRef = storageRef(storage, data.imagePath);
          getDownloadURL(imageRef)
            .then((url) => {
              updatedModalData.imageUrl = url;
              setModalData(updatedModalData);
            })
            .catch((error) => {
              console.error("Error fetching image URL:", error);
              setModalData(defaultModalData); // Fallback to default values on error
            });
        } else {
          setModalData(updatedModalData);
        }
      } else {
        // No data found in database, use default values
        setModalData({ ...defaultModalData });
      }
    });
  }, []);

  // Return modalData or defaultModalData if modalData is null
  return modalData || defaultModalData;
};

export default useModalData;

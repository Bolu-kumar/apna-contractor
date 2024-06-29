// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import AdminLayout from "./admin/AdminLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Candidates from "./pages/Candidates";
// import Clients from "./pages/Clients";
// import LoginPage from "./pages/Login";
// import PrivacyPolicy from "./pages/Privacy-Policy";
// import TermsConditions from "./pages/Terms-Conditions";
// import NotFoundPage from "./pages/NotFoundPage";
// import ResetPasswordPage from "./pages/ResetPassword";
// import AdminPageCandidates from "./admin/pages/AdminPageCandidates";
// import AdminPageClients from "./admin/pages/AdminPageClients";
// import AdminPageDashboard from "./admin/pages/AdminPageDashboard";
// import AdminPageFrontEnd from "./admin/pages/AdminPageFrontEndUpdate";
// import AdminPageReport from "./admin/pages/AdminPageReport";
// import Settings from "./admin/pages/AdminPageSettings";
// import ProtectedRoute from "./auth/protectRoute/ProtectRoute";
// import LatestUpdate from "./pages/LatestUpdate";
// import AvailableStaff from "./pages/AvailableStaff";

// import { useEffect } from "react";
// import { ref, onValue } from "firebase/database";
// import { db } from "./firebaseConfig/firebaseConfig";
// import { useQueryClient } from "react-query";
// import LatestUpdateForm from "./admin/pages/adminPageUpdate/LatestUpdateForm";
// import AutoPopUpPage from "./admin/pages/adminPageUpdate/AutoPopUp";

// function App() {
//   const queryClient = useQueryClient();

//   useEffect(() => {
//     const prefetchData = async () => {
//       const aboutUsRef = ref(db, "aboutUs");
//       const autoPopUpRef = ref(db, "autoPopUpPage");

//       onValue(aboutUsRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           localStorage.setItem("aboutUsContent", JSON.stringify(data));
//           queryClient.setQueryData("aboutUsContent", data);
//         }
//       });

//       onValue(autoPopUpRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           localStorage.setItem("autoPopUpContent", JSON.stringify(data));
//           queryClient.setQueryData("autoPopUpContent", data);
//         }
//       });
//     };

//     prefetchData();
//   }, [queryClient]);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin/*" element={<AdminLayout />}>
//             <Route path="" element={<Navigate to="dashboard" replace />} />{" "}
//             {/* Default route */}
//             <Route path="dashboard" element={<AdminPageDashboard />} />
//             <Route path="candidates" element={<AdminPageCandidates />} />
//             <Route path="clients" element={<AdminPageClients />} />
//             <Route path="update" element={<AdminPageFrontEnd />} />
//             <Route path="reports" element={<AdminPageReport />} />
//             {/* <Route path="users" element={<Users />} /> */}
//             <Route path="settings" element={<Settings />} />
//             <Route path="update/autopopup" element={<AutoPopUpPage />} />
//             <Route path="update/latest-update" element={<LatestUpdateForm />} />
//             {/* Route for Add Page Form */}
//             {/* Add more admin routes here */}
//           </Route>
//         </Route>

//         {/* Main Site Routes */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/candidates" element={<Candidates />} />
//           <Route path="/clients" element={<Clients />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/reset-password" element={<ResetPasswordPage />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-conditions" element={<TermsConditions />} />
//           <Route path="/latest-update" element={<LatestUpdate />} />
//           <Route path="/available-staff" element={<AvailableStaff />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Candidates from "./pages/Candidates";
import Clients from "./pages/Clients";
import LoginPage from "./pages/Login";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsConditions from "./pages/Terms-Conditions";
import NotFoundPage from "./pages/NotFoundPage";
import ResetPasswordPage from "./pages/ResetPassword";
import AdminPageCandidates from "./admin/pages/AdminPageCandidates";
import AdminPageClients from "./admin/pages/AdminPageClients";
import AdminPageDashboard from "./admin/pages/AdminPageDashboard";
import AdminPageFrontEnd from "./admin/pages/AdminPageFrontEndUpdate";
import AdminPageReport from "./admin/pages/AdminPageReport";
import Settings from "./admin/pages/AdminPageSettings";
import ProtectedRoute from "./auth/protectRoute/ProtectRoute";
import LatestUpdate from "./pages/LatestUpdate";
import AvailableStaff from "./pages/AvailableStaff";

import { useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebaseConfig/firebaseConfig";
import { useQueryClient } from "react-query";
import LatestUpdateForm from "./admin/pages/adminPageUpdate/LatestUpdateForm";
import AddAvailableStaff from "./admin/pages/adminPageUpdate/adminPageAddStaff";

import AutoPopUpPage from "./admin/pages/adminPageUpdate/AutoPopUp";

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchData = async () => {
      const aboutUsRef = ref(db, "aboutUs");
      const autoPopUpRef = ref(db, "autoPopUpPage");
      const staffsRef = ref(db, "Staffs"); // Adjust the path to match your Firebase structure

      try {
        // Fetch aboutUs data
        onValue(aboutUsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            localStorage.setItem("aboutUsContent", JSON.stringify(data));
            queryClient.setQueryData("aboutUsContent", data);
          }
        });

        // Fetch autoPopUpPage data
        onValue(autoPopUpRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            localStorage.setItem("autoPopUpContent", JSON.stringify(data));
            queryClient.setQueryData("autoPopUpContent", data);
          }
        });

        // Fetch staff data
        onValue(staffsRef, (snapshot) => {
          const staffsData = snapshot.val();
          if (staffsData) {
            localStorage.setItem("staffsContent", JSON.stringify(staffsData));
            queryClient.setQueryData("staffsContent", staffsData);
          }
        });
      } catch (error) {
        console.error("Error prefetching data:", error);
      }
    };

    prefetchData();
  }, [queryClient]);

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="" element={<Navigate to="dashboard" replace />} />{" "}
            {/* Default route */}
            <Route path="dashboard" element={<AdminPageDashboard />} />
            <Route path="candidates" element={<AdminPageCandidates />} />
            <Route path="clients" element={<AdminPageClients />} />
            <Route path="update" element={<AdminPageFrontEnd />} />
            <Route path="reports" element={<AdminPageReport />} />
            {/* <Route path="users" element={<Users />} /> */}
            <Route path="settings" element={<Settings />} />
            <Route path="update/autopopup" element={<AutoPopUpPage />} />
            <Route path="update/latest-update" element={<LatestUpdateForm />} />
            <Route
              path="update/add-available-staff"
              element={<AddAvailableStaff />}
            />
            {/* Route for Add Page Form */}
            {/* Add more admin routes here */}
          </Route>
        </Route>

        {/* Main Site Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/latest-update" element={<LatestUpdate />} />
          <Route path="/available-staff" element={<AvailableStaff />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

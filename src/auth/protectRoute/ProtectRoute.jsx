// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="text-center text-danger">Loading...</div>; // Or any loading spinner/component
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

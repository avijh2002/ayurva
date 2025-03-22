import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import AdminLogin from "./AdminLogin";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  // If user is not authenticated, show login form
  if (!user) {
    return <AdminLogin onLogin={setUser} />;
  }

  return children;
};

export default AuthGuard;

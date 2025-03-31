import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import BackToTopButton from "./components/BackToTop";
import { incrementVisitorCount } from "./config/fetchVisitorsCount";

const App = () => {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      incrementVisitorCount();
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <>
      <Toaster />
      {!hideNavbar && <Navbar />}
      <Outlet />
      <BackToTopButton />
    </>
  );
};

export default App;

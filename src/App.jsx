import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import BackToTopButton from "./components/BackToTop";

const App = () => {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!hideNavbar && <Navbar />}
      <Outlet />
      <BackToTopButton/>
    </>
  );
};

export default App;
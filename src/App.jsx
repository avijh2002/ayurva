import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default App;
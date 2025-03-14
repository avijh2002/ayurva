import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";



const App = () => {

  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
};





export default App;

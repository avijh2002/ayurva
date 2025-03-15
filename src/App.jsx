import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Contactform from "./components/Contactform";



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

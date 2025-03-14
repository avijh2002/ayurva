import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Service from "./components/Service";


const App = () => {

  return (
    <>
      <Toaster />
      <Navbar />
      {/* <Outlet /> */}
      <Service/>
    </>
  );
};





export default App;

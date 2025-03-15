import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Contactform from "./components/Contactform";
import Qna from "./components/Qna";



const App = () => {

  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
      <Qna/>
      
      
    </>
  );
};





export default App;

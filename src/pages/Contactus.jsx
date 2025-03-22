import Contactform from "../components/Contactform"
import Footer2 from "../components/Footer2"
import { useEffect } from "react";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <div className="max-w-full mx-auto p-4">
         <Contactform />
        <Footer2/>
    </div>
  )
}

export default Contactus
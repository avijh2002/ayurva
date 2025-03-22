import {useEffect} from "react";
import Footer2 from "../components/Footer2";


import Mission from "../components/Mission";
import Team from "../components/Team";
import About from "../components/About";

const AboutUs = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="mx-auto max-w-full">
      {/* Mission Section */}
      <About/>
      <Mission />
      {/* <Team/> */}
      <Footer2/>
    </div>
  );
};

export default AboutUs;

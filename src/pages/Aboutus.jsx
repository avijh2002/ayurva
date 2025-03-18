import React from "react";
import Footer2 from "../components/Footer2";


import Mission from "../components/Mission";
import Team from "../components/Team";
import About from "../components/About";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-[1280px]">
      {/* Mission Section */}
      <About/>
      <Mission />
      {/* <Team/> */}
      <Footer2/>
    </div>
  );
};

export default AboutUs;

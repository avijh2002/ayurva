import React from "react";
import Footer2 from "../components/Footer2";
import picklogo from "../assets/picklogo.png";

import Mission from "../components/Mission";
import Team from "../components/Team";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-[1280px]">
      {/* Header Section */}
      <div className="max-w-[1280px] flex justify-center gap-2 items-center text-center py-10 mx-auto ">
        <div className="w-1/2">
          <img
            src={picklogo}
            alt="Ayurva Logo"
            className=" ml-5w-[413px] h-[491px] mb-4 "
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold text-left">About Ayurva</h2>
          <p className="mt-4 max-w-2xl text-left text-3xl text-gray-600">
            We're passionate about addressing pain and spondylitis naturally.
            Our journey began with a deep understanding of the limitations of
            conventional pain management, inspiring us to create a holistic
            platform that combines the wisdom of ancient practices with modern
            technology.
          </p>
        </div>
      </div>

      {/* Mission Section */}

      <div className="max-w-[1280px] mx-auto bg-[#283618] text-white py-16 px-6 text-center md:flex md:items-center md:justify-center">
     
        <Mission />
      </div>

      {/* Meet Our Team Section */}
      <Team/>

      {/*footer2*/}
      <Footer2/>
    </div>
  );
};

export default AboutUs;

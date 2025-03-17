import React from "react";
import { FaPlay } from "react-icons/fa";
import massage from "../assets/massage.png";
import Buttonleft from "./Buttonleft";


const Mission = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#283618] text-white py-16 px-6 text-center md:flex md:items-center md:justify-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6 text-right">
        <div>
          <h2 className="text-4xl font-semibold text-white">Our Mission</h2>
          <p className="mt-4 text-3xl text-white leading-relaxed">
            We believe in addressing the root cause of pain, not just masking
            the symptoms. Our approach leverages the power of Ayurveda,
            Homeopathy, and natural, side-effect-free solutions. We also guide
            you toward relevant health tests to get a full picture of your
            health.
          </p>
        </div>
        <div className="flex justify-end">
          {/* button left */}
         <Buttonleft
            info="Start your Journey"
            bgColor="bg-white"
            textColor="text-[#283618]"
            arrowBg="bg-[#283618]"
            arrowColor="text-white"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={massage}
          alt="Our Mission"
          className="rounded-2xl w-[300px] md:w-[413px] h-[320px] md:h-[491px] object-cover"
        />
      </div>
    </div>
  );
};

export default Mission;

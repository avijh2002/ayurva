import React from "react";
import { FaPlay } from "react-icons/fa";
import massage from "../assets/massage.png";
import Buttonleft from "./Buttonleft";

const Mission = () => {
  return (
    <div className="max-w-full mx-auto bg-[#283618] text-white py-16 px-6 text-center flex flex-col md:flex-row-reverse md:items-center  md:justify-between gap-10 sm:py-40 sm:px-28">
      {/* Right Image (Stacked Below on Small Screens) */}
      <div className="w-full  md:w-1/2 flex justify-center rounded-4xl">
        <img
          src={massage}
          alt="Our Mission"
          className="rounded-2xl w-full sm:w-[413px] h-[252px] sm:h-[491px] object-cover"
        />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between  text-center md:text-right">
        <div>
          <h2 className="text-2xl sm:text-5xl md:text-5xl  font-semibold text-white">
            Our Mission
          </h2>
          <p className="mt-3 mb-9 text-sm sm:text-3xl md:text-[26px] md:mt-6 md:mb-18 md:leading-none">
            We believe in addressing the root cause of pain, not just masking
            the symptoms. Our approach leverages the power of Ayurveda,
            Homeopathy, and natural, side-effect-free solutions. We also guide
            you toward relevant health tests to get a full picture of your
            health.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          {/* Button Left */}
          <Buttonleft
            info="Start your Journey"
            bgColor="bg-white"
            textColor="text-[#283618]"
            arrowBg="bg-[#283618]"
            arrowColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;

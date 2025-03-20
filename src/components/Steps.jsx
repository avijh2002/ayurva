import React, { useState } from "react";
import Buttonright from "./Buttonright";

const stepsData = [
  {
    step: "Step 1",
    title: "Get Started with Our 2-Minute Pain Assessment",
    description:
      "Quickly evaluate your pain levels and receive initial recommendations.",
    buttonText: "Get Started",
  },
  {
    step: "Step 2",
    title: "Receive Your Personalized Plan",
    description:
      "Get a tailored recovery plan based on your answers and medical expertise.",
    buttonText: "Next Step",
  },
  {
    step: "Step 3",
    title: "Start Your Recovery Journey",
    description:
      "Begin your personalized recovery process with expert guidance.",
    buttonText: "Finish",
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-[1280px] mx-auto p-4 md:p-10  my-[60px] md:my-[170px] ">
      <h2 className="text-center text-[22px] md:text-[40px] font-semibold mb-[40px] md:mb-[134px] ">
        It is a 3 step Solution
      </h2>

      <div className="flex justify-evenly items-center ">
        {/* Left Steps Navigation */}
        <div className=" w-1/3 h-1/3 flex flex-col justify-center ">
          {stepsData.map((item, index) => (
            <p
              key={index}
              className={`cursor-pointer py-5 text-[16px]  md:text-[32px] text-center  ${
                activeStep === index ? "font-bold" : "font-light"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {item.step}
            </p>
          ))}
        </div>

        {/* Right Step Content */}
        <div className="w-1/2 md:border-l border-gray-300 py-5 md:pl-[115px] ">
          <h3 className="text-[20px] md:text-[32px] font-medium leading-none md:w-2/3 mb-[18px]">
            {stepsData[activeStep].title}
          </h3>
          <p className="text-gray-500 mt-2 text-lg md:text-xl mb-[40px] md:mb-[56px]">
            {stepsData[activeStep].description}
          </p>

          {/* Button */}
          <div className="mt-6 md:mt-10 w-4/5">
            <Buttonright
              info={stepsData[activeStep].buttonText}
              bgColor="bg-[#283618]"
              textColor="text-white"
              arrowBg="bg-[#F2EFE7]"
              arrowColor="text-[#283618]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
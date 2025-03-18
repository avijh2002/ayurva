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
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10 sm:mb-20">
        It is a 3-Step Solution
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Steps Navigation */}
        <div className="md:w-1/3 flex md:block gap-4 md:gap-0">
          {stepsData.map((item, index) => (
            <p
              key={index}
              className={`cursor-pointer py-2 text-xl sm:text-2xl md:text-[32px] ${
                activeStep === index ? "font-bold" : "font-light"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {item.step}
            </p>
          ))}
        </div>

        {/* Right Step Content */}
        <div className="md:w-2/3 border-t md:border-l border-gray-300 md:pl-10 pt-6 md:pt-0">
          <h3 className="text-2xl sm:text-3xl font-medium leading-tight mb-4">
            {stepsData[activeStep].title}
          </h3>
          <p className="text-gray-500 text-lg sm:text-xl mb-6">
            {stepsData[activeStep].description}
          </p>

          {/* Button */}
          <div className="mt-6">
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

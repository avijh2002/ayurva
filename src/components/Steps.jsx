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
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">
        It is a 3-Step Solution
      </h2>

      <div className="flex  gap-6 md:items-start">
        {/* Left Steps Navigation */}
        <div className="w-full md:w-1/3 flex flex-col space-y-4">
          {stepsData.map((item, index) => (
            <p
              key={index}
              className={`cursor-pointer text-lg transition-all duration-300 ease-in-out ${
                activeStep === index ? "font-bold text-black" : "font-normal text-gray-500"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {item.step}
            </p>
          ))}
        </div>

        {/* Right Step Content */}
        <div className="w-full md:w-2/3 border-l border-gray-300 pl-10 min-h-full">
          <h3 className="text-xl font-semibold mb-2">
            {stepsData[activeStep].title}
          </h3>
          <p className="text-gray-600 text-base mb-6">
            {stepsData[activeStep].description}
          </p>

          {/* Button */}
          <div className="mt-4">
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

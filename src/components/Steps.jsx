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
    <div className="max-w-[1280px] mx-auto p-41 ">
      <h2 className="text-center text-[40px] font-semibold mb-[134px] ">
        It is a 3 step Solution
      </h2>

      <div className="flex gap-6">
        {/* Left Steps Navigation */}
        <div className="w-1/3">
          {stepsData.map((item, index) => (
            <p
              key={index}
              className={`cursor-pointer py-2 text-[32px] ${
                activeStep === index ? "font-bold" : "font-light"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {item.step}
            </p>
          ))}
        </div>

        {/* Right Step Content */}
        <div className="w-full border-l border-gray-300 pl-[115px]">
          <h3 className="text-[32px] font-medium leading-none w-[595px] h-[78px] mb-[18px]">
            {stepsData[activeStep].title}
          </h3>
          <p className="text-gray-500 mt-2 text-xl mb-[56px]">
            {stepsData[activeStep].description}
          </p>

          {/* Button */}
          <div className="mt-10">
            <Buttonright
              info="Get Started"
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

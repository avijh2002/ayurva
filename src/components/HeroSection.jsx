import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import Buttonright from "./Buttonright";

const HeroSection = () => {
  return (
    <div className="bg-[radial-gradient(64.38%_55.17%_at_10.47%_92.57%,_#F7D8B5_0%,_#FFFFFF_100%)] h-[645px] max-w-[1280px] mx-auto flex justify-between ">
      <div className="w-3/5    flex flex-col mx-1 justify-center p-8 md:p-16">
        <div className=" h-[#280px] mb-4">
          <h1 className="text-[46px] font-medium text-black leading-tight ">
            Reclaim Your Life:
          </h1>
          <h2 className="text-[46px] font-medium text-black leading-tight">
            Natural Relief from Back Pain & Spondilysis. Your Personalized Path
            to Pain- Free Living Starts Here.
          </h2>
        </div>

        <p className="text-[#6F6F6F] mb-6">
          Don't let back pain dictate your life. Discover lasting relief with
          our expert-guided Yoga, personalized Diet plans, and Alternative
          Medicine. Take our free 2-minute at-home test to understand your pain
          better and start your healing journey today!
        </p>
        <Buttonright
          info="Book an Appointment"
          bgColor="bg-[#283618]"
          textColor="text-white"
          arrowBg="bg-[#F2EFE7]"
          arrowColor="text-[#283618]"
        />
      </div>

      <div className="flex w-2/5 h-full">
        <div className="flex flex-col w-1/2">
          <img src={hero1} alt="hero1" className="h-[164px] " />
          <img src={hero2} alt="hero2" className="h-[356px] " />
          <img src={hero3} alt="hero3" className="h-[132px] " />
        </div>
        <div className="flex flex-col w-1/2">
          <img src={hero4} alt="hero4" className="h-[333px] " />
          <img src={hero5} alt="hero5" className="h-[312px] " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

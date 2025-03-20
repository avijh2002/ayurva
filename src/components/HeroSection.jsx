import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import Buttonright from "./Buttonright";

const HeroSection = () => {
  return (
    <div
      className=" md:h-[645px] bg-[radial-gradient(64.38%_55.17%_at_10.47%_92.57%,_#F7D8B5_0%,_#FFFFFF_100%)] max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between"
    >
      {/* Left Content */}
      <div className="w-full pl-[25px] md:pl-[78px] py-[31px] md:py-[83px] text-left  md:w-3/5 flex flex-col justify-center  ">
        <h1 className="text-[clamp(32px,5vw,46px)] pr-[50px] md:text-[46px] font-medium text-black leading-tight">
          Reclaim Your Life:
        </h1>
        <h2 className="text-[clamp(32px,5vw,46px)] md:pr-[61px] font-medium text-black  leading-tight">
          Natural Relief from Back Pain & Spondylitis. Your Personalized Path to
          Pain-Free Living Starts Here.
        </h2>
        <p className="text-[#6F6F6F] pr-[40px] mt-4 md:mt-5 text-[15px]">
          Don't let back pain dictate your life. Discover lasting relief with
          our expert-guided Yoga, personalized Diet plans, and Alternative
          Medicine. Take our free 2-minute at-home test to understand your pain
          better and start your healing journey today!
        </p>
        <div className="mt-6">
          <Buttonright
            info="Book Appointment"
            bgColor="bg-[#283618]"
            textColor="text-white"
            arrowBg="bg-[#F2EFE7]"
            arrowColor="text-[#283618]"
          />
        </div>
      </div>

      <div className="hidden md:flex w-2/5 md:h-full bg-purple-950">
        <div className="flex flex-col w-1/2 h-full">
          <img src={hero1} alt="hero1" className="h-1/3 w-full object-cover" />
          <img src={hero2} alt="hero2" className="h-1/3 w-full object-cover" />
          <img src={hero3} alt="hero3" className="h-1/3 w-full object-cover" />
        </div>
        <div className="flex flex-col w-1/2 h-full">
          <img src={hero4} alt="hero4" className="h-1/2 w-full object-cover" />
          <img src={hero5} alt="hero5" className="h-1/2 w-full object-cover" />
        </div>
      </div>

      {/* Right Image Grid */}
      <div className="flex w-full h-[160px] bg-purple-950 md:hidden">
  {/* Left Section: 2 Columns */}
  <div className="flex flex-col w-2/5 h-full">
    <img src={hero1} alt="hero1" className="h-2/3 w-full object-cover" />
    <img src={hero3} alt="hero2" className="h-1/3 w-full object-cover" />
  </div>

  <div className="flex w-3/5 h-full">
    {/* Tall Image */}
    <img src={hero4} alt="hero4" className="w-2/5 h-full object-cover" />
    
    <div className="flex flex-col w-3/5 h-full">
      <img src={hero2} alt="hero3" className="h-1/2 w-full object-cover" />
      <img src={hero5} alt="hero5" className="h-1/2 w-full object-cover" />
    </div>
  </div>
</div>

    </div>
  );
};

export default HeroSection;

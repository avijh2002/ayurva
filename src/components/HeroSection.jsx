import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import Buttonright from "./Buttonright";

const HeroSection = () => {
  return (
    <div className="bg-[radial-gradient(64.38%_55.17%_at_10.47%_92.57%,_#F7D8B5_0%,_#FFFFFF_100%)] 
      h-auto max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between px-6 md:px-10 py-10 md:py-16">
      
      {/* Left Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-[clamp(32px,5vw,46px)] font-medium text-black leading-tight">
          Reclaim Your Life:
        </h1>
        <h2 className="text-[clamp(32px,5vw,46px)] font-medium text-black leading-tight">
          Natural Relief from Back Pain & Spondylitis. Your Personalized Path
          to Pain-Free Living Starts Here.
        </h2>
        <p className="text-[#6F6F6F] mt-4 md:mt-6 text-lg">
          Don't let back pain dictate your life. Discover lasting relief with
          our expert-guided Yoga, personalized Diet plans, and Alternative
          Medicine. Take our free 2-minute at-home test to understand your pain
          better and start your healing journey today!
        </p>
        <div className="mt-6">
          <Buttonright
            info="Book an Appointment"
            bgColor="bg-[#283618]"
            textColor="text-white"
            arrowBg="bg-[#F2EFE7]"
            arrowColor="text-[#283618]"
          />
        </div>
      </div>

      {/* Right Image Grid */}
      <div className="w-full md:w-2/5 mt-10 md:mt-0 grid grid-cols-2 gap-0">
        <img src={hero1} alt="hero1" className="h-40 md:h-[164px] w-full object-cover rounded-lg" />
        <img src={hero4} alt="hero4" className="h-40 md:h-[333px] w-full object-cover rounded-lg" />
        <img src={hero2} alt="hero2" className="h-48 md:h-[356px] w-full object-cover rounded-lg" />
        <img src={hero5} alt="hero5" className="h-40 md:h-[312px] w-full object-cover rounded-lg" />
        <img src={hero3} alt="hero3" className="h-32 md:h-[132px] w-full object-cover rounded-lg col-span-2" />
      </div>
    </div>
  );
};

export default HeroSection;

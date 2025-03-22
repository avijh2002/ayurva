import React from "react";
import Buttonright from "./Buttonright";
import service1 from "../assets/service1.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import Overlappingcircle from "./OverLappingcircle";
import Servicetext from "./Servicetext";
import service2 from "../assets/Ellipse 8.png";

const Service = () => {
  return (
    <section className="max-w-full mx-auto px-[26px] md:px-[50px] mb-[40px] ">
      <div
        id="services"
        className="bg-[#f2f2f2] flex-col items-center space-y-4 p-11 rounded-lg"
      >
        <div className="text-center p-3 lg:p-0 -mt-6 lg:mt-0 ">
          <p className="text-[22px] lg:text-[40px] leading-[24px] font-medium text-black">
            Services Offered By Ayurva
          </p>
        </div>

        {/* ✅ First Card */}
        <div className="w-full  flex flex-col-reverse lg:flex-row justify-center items-center gap-[29px] lg:gap-2 p-3 mx-auto mb-[90px]">
          <div className="w-full lg:w-1/2 text-center lg:text-left flex-col items-center  ">
            <Servicetext
              para1={"Yoga Therapy for Back Pain & Spondylitis"}
              para2={
                "Experience targeted yoga sessions designed to improve spinal flexibility, strengthen core muscles, and reduce pain. It also Includes one-on-one sessions, guided exercises, and video recordings."
              }
            />
            <div className="mt-10 w-fit mx-auto lg:w-auto">
              <Buttonright
                info="Book Yoga Session"
                bgColor="bg-[#283618]"
                textColor="text-white"
                arrowBg="bg-[#F2EFE7]"
                arrowColor="text-[#283618]"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6 mx-auto flex items-center justify-center  ">
            <Overlappingcircle image={service1} />
          </div>
        </div>

        {/* ✅ Second Card */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[29px] lg:gap-2 p-3 mx-auto mb-[90px]">
          <div className="w-full lg:w-1/2 p-6 mx-auto flex items-center justify-center ">
            <Overlappingcircle image={service2} />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left w-full flex-col items-center ">
            <Servicetext
              para1={"Diet & Nutrition Consultation"}
              para2={
                "Personalized Ayurvedic diet plans to reduce inflammation, strengthen bones, and boost energy. It also Includes meal plans, Ayurvedic recommendations, and progress tracking."
              }
            />
            <div className="mt-10 w-fit mx-auto lg:w-auto">
              <Buttonright
                info="Get Diet Plan"
                bgColor="bg-[#283618]"
                textColor="text-white"
                arrowBg="bg-[#F2EFE7]"
                arrowColor="text-[#283618]"
              />
            </div>
          </div>
        </div>

        {/* ✅ Third Card */}
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-[29px] lg:gap-2 p-3 mx-auto mb-[90px]">
          <div className="lg:w-1/2 text-center lg:text-left w-full flex-col items-center ">
            <Servicetext
              para1={"Expert Doctor Consultation"}
              para2={
                "Consult with experienced Ayurveda, Homeopathy, and Naturopathy specialists for personalized treatment plans. Includes video consultations, herbal remedies, and lifestyle coaching. Also get blood tests recommendations to help your healing journey."
              }
            />
            <div className="mt-10 w-fit mx-auto lg:w-auto">
              <Buttonright
                info="Talk To A Specialist"
                bgColor="bg-[#283618]"
                textColor="text-white"
                arrowBg="bg-[#F2EFE7]"
                arrowColor="text-[#283618]"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6 mx-auto flex items-center justify-center ">
            <Overlappingcircle image={service3} />
          </div>
        </div>

        {/* ✅ Fourth Card */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[29px] lg:gap-2 p-3 mx-auto mb-[90px]">
          <div className="w-full lg:w-1/2 p-6 mx-auto flex items-center justify-center ">
            <Overlappingcircle image={service4} />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left w-full flex-col items-center ">
            <Servicetext
              para1={"Corporate Wellness Plans"}
              para2={
                "Improve your team's health and productivity with our tailored corporate wellness plans. We focus on reducing back pain and improving overall well-being in the workplace."
              }
            />
            <div className="mt-10 w-fit mx-auto lg:w-auto">
              <Buttonright
                info="Know More"
                bgColor="bg-[#283618]"
                textColor="text-white"
                arrowBg="bg-[#F2EFE7]"
                arrowColor="text-[#283618]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

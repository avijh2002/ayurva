import React, { useState } from "react";
import { data } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import ResultButton from "./ResultButton";
import { useNavigate } from "react-router-dom";

const Result = ({ reset }) => {
  const path = useNavigate();
  const handleHome = () => {
    path("/");
  };

  const result={
    resText:"Your symptoms suggest early-stage spondylitis or nerve irritation.Mobility exercises & posture correction may help.",
    video:"https://www.youtube.com/embed/AWAsI3U2EaE",
  }

  return (
      <div className="max-w-[1280px] mx-auto flex flex-col h-auto pt-[41px] px-4 md:px-0">
        <div className="w-full md:mx-[49px] h-auto rounded-xl bg-[#283618] flex-col items-center justify-center p-6 md:p-8 pb-[75px] mb-[55px]">
          <div className="flex items-center mb-[30px]">
            <button onClick={reset} className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <FaAngleLeft className="text-lg font-extralight text-[#283618]" />
            </button>
  
            <div className="w-full flex justify-center items-center text-center">
              <p className="text-[#909090] text-2xl md:text-[32px] font-medium">Analysis and Recommendation</p>
            </div>
          </div>
  
          <div className="flex items-center justify-center text-center text-white text-base md:text-3xl">
            <p>{result.resText}</p>
          </div>
  
          {/* Video and Form Section */}
          <div className="flex  flex-col-reverse items-center gap-2.5 sm:flex-row justify-center md:gap-[36px]  rounded-[21px] mt-10 w-full">
            <div className="w-full md:w-[475px] aspect-video md:h-[321px] rounded-3xl overflow-hidden">
              <iframe
                src={result.video}
                title={name}
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
  
            {/* Form Section */}
            <div className="max-w-[350px] md:w-[515px] p-6 bg-white rounded-[21px]">
              <p className="text-center text-xs  md:text-[24px] font-medium mb-6">
                For Expert Consultation, enter your mobile number and one of our team will get in touch
              </p>
              
              <form className="w-full"> 
                <input 
                  className="h-8 w-full md:h-14 py-4 pl-5 mb-4 rounded-lg border border-[#A8A8A8] text-gray-700" 
                  placeholder="Enter Mobile Number"
                />
  
                <button className="w-full h-12 bg-[#283618] text-white rounded-2xl">Save</button>
              </form>
            </div>
          </div>
  
          {/* Back Home Button */}
          <div onClick={handleHome} className="mt-[24px]">
            <ResultButton />
          </div>
        </div>
      </div>
  );
};

export default Result;





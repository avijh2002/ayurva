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
    <div className="max-w-[1280px]  mx-auto flex flex-col  h-auto pt-[41px] ">
      <div className="w-auto md:mx-[49px] h-auto rounded-xl bg-[#283618] flex-col items-center justify-center md:p-8 md:pb-[75px] md:mb-[55px]">
        <div className="flex items-center mb-[30px]">
          <button
            onClick={reset}
            className={`w-11 h-11 rounded-full bg-white  flex items-center justify-center mx-auto `}
          >
            <FaAngleLeft
              className={` text-lg font-extralight text-[#283618]`}
            />
          </button>

          <div className="w-full flex justify-center items-center ">
            <div className=" text-[#909090] text-[32px] rounded-full ">
              <p>Analysis and Recommendation</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl text-[24px] text-white mx-auto text-center">
          <p>
            {result.resText}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[61px] w-auto mt-[58px] mx-auto bg-amber-400">
          <div className="flex flex-col md:flex-row items-center justify-start gap-[36px] bg-amber-700">
            <div className="w-1/2 md:h-[321px] md:w-[475px] rounded-3xl bg-gray">
              <iframe
                width="100%"
                height="100%"
                src={result.video}
                title={name}
                allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>

            <div className="w-1/2 md:h-[321px] md:w-[515px] flex flex-col rounded-3xl items-center bg-white">
              <div className=" h-[87px] mx-[35px] mt-[35px] mb-[25px] text-center text-[24px] font-medium leading-none px-1">
                For Expert Consultation, enter your mobile number and one of our
                team will get in Touch
              </div>

              <form className="w-4/5 "> 
                <input className="w-full py-[19px] pl-[21px] mb-[25px] rounded-lg border-1 border-[#A8A8A8]" placeholder="Enter Mobile Number"></input>

                <button className="w-full px-auto py-auto h-[48px] border-[.5px] bg-[#283618] text-white rounded-2xl">Save</button>
              </form>
            </div>
          </div>

          <div onClick={handleHome} className="md:ml-[27px]">
            <ResultButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;





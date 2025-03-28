import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Buttonright = ({ info, bgColor, textColor, arrowBg, arrowColor}) => {

  const path=useNavigate();

  const handleClick=()=>{
    path("/assessment")
  }

  return (
    <button  onClick={handleClick} className={`cursor-pointer md:px-2 w-[190px] md:w-[253px] py-1 bg-[#283618] rounded-full flex md:items-center md:justify-end md:gap-4`}>
      <div className="flex items-center justify-center text-center mx-auto">
        <p className="  text-white text-sm text-start font-semibold">{info}</p>
      </div>
      <div className={`w-[33px] h-[33px] md:w-11 md:h-11 rounded-full ${arrowBg} flex items-center justify-center mr-[3px] md:-mr-[3px]`}>
        <FaAngleRight className={`${arrowColor} text-xs md:text-2xl`} />
      </div>
    </button>
  );
};

export default Buttonright;

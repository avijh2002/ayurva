import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Buttonright = ({ info, bgColor, textColor, arrowBg, arrowColor}) => {

  const path=useNavigate();

  const handleClick=()=>{
    path("/assessment")
  }

  return (
    <button  onClick={handleClick} className={`px-2 w-[253px] py-1 bg-[#283618]  rounded-full flex items-center justify-end gap-4`}>
      <div className="flex items-center justify-center text-center mx-auto">
        <p className="  text-white text-sm text-start font-semibold">{info}</p>
      </div>
      <div className={`w-11 h-11 rounded-full ${arrowBg} flex items-center justify-center -mr-[3px]`}>
        <FaAngleRight className={`${arrowColor} text-2xl`} />
      </div>
    </button>
  );
};

export default Buttonright;

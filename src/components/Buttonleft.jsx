import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Buttonleft = ({ info, bgColor, textColor, arrowBg, arrowColor}) => {
  const path=useNavigate();

  const handleClick=()=>{
    path("/assessment")
  }
  return (
    <button onClick={handleClick} className={`cursor-pointer px-2 w-[253px] py-1 ${bgColor}  rounded-full flex items-center justify-baseline gap-4`}>
      <div className={`w-11 h-11 rounded-full ${arrowBg} flex items-center justify-center`}>
        <FaAngleLeft className={`${arrowColor} text-2xl`} />
      </div>
      <div className="flex items-center justify-center">
        <p className={`${textColor} text-lg text-center font-semibold`}>{info}</p>
      </div>
    </button>
  );
};

export default Buttonleft;

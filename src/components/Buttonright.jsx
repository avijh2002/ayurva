import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Buttonright = ({ info, bgColor, textColor, arrowBg, arrowColor}) => {
  return (
    <button className={`px-2 w-[253px] py-1 bg-[#283618]  rounded-full flex items-center justify-end gap-4`}>
      <div className="flex items-center justify-center">
        <p className="text-white text-lg text-center font-semibold">{info}</p>
      </div>
      <div className={`w-11 h-11 rounded-full ${arrowBg} flex items-center justify-center`}>
        <FaAngleRight className={`${arrowColor} text-2xl`} />
      </div>
    </button>
  );
};

export default Buttonright;

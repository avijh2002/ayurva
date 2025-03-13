import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Buttonleft = () => {
  return (
    <button className="px-2 w-[253px] py-1 bg-white text-[#283618] rounded-full flex items-center gap-4 ">
      <div className="w-11 h-11 rounded-full bg-[#283618] flex items-center justify-center">
        <FaAngleLeft className="text-white" />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-lg text-center font-semibold">Start your Journey</p>
      </div>
    </button>
  );
};

export default Buttonleft;

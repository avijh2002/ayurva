import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const ResultButton = ({ reset }) => {
  return (
     <button onClick={reset} className={`cursor-pointer px-2 w-[253px] py-1 bg-white  rounded-full flex items-center justify-baseline gap-4`}>
      <div className={`w-11 h-11 rounded-full bg-[#283618] flex items-center justify-center`}>
        <FaAngleLeft className={`text-white text-2xl`} />
      </div>
      <div className="flex items-center justify-center">
        <p className={`text-[#283618] text-lg text-center font-semibold`}>Back Home</p>
      </div>
    </button> 
  );
};

export default ResultButton;
{
  
}

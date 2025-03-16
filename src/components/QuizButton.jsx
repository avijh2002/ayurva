import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuizButton = () => {


  const handleClick=()=>{
    
  }

  return (
    <button  onClick={handleClick} className={`px-2 w-[253px] py-1 bg-white  rounded-full flex items-center justify-end gap-4`}>
      <div className="flex items-center justify-center text-center mx-auto">
        <p className="  text-[#283618] text-normal text-start font-semibold">Next Question</p>
      </div>
      <div className={`w-11 h-11 rounded-full bg-[#283618] flex items-center justify-center -mr-[3px]`}>
        <FaAngleRight className={`text-white text-2xl`} />
      </div>
    </button>
  );
};

export default QuizButton;

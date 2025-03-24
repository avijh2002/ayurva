import React from "react";
import { FaAngleRight } from "react-icons/fa";

const QuizButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-2 w-2/3 sm:w-1/3 md:w-[253px] py-2 bg-white rounded-full flex items-center justify-between gap-4"
    >
      <div className="flex items-center justify-center text-center mx-auto">
        <p className="text-[#283618] text-xs sm:text-base md:text-lg text-start font-semibold">
          Next Question
        </p>
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#283618] flex items-center justify-center md:-mr-[3px]">
        <FaAngleRight className="text-white text-xl sm:text-2xl" />
      </div>
    </button>
  );
};

export default QuizButton;

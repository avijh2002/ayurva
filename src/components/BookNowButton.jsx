import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const BookNowButton = () => {
    const path=useNavigate();

    const onClick=()=>{
        path("/assessment")
    }
  return (
    <button
      onClick={onClick}
      className="hidden md:flex items-center justify-between w-[180px] h-[50px] border-2  border-[#283618] rounded-full px-4 "
    >
      <span className="text-[#283618] font-medium text-[15px] text-center mx-auto ">Book Now</span>
      <div className="w-[40px] h-[40px] bg-[#283618] rounded-full flex items-center justify-center -mr-[12px]">
        <FaAngleRight className="text-white text-2xl font-extralight" />
      </div>
    </button>
  );
};

export default BookNowButton;
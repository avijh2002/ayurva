import React from "react";
import { Link } from "react-router-dom";

const SpecialistCard = ({ sno, name, image, heading }) => {
  return (
    <div className="sm:w-1/2 md:w-9/20 flex flex-col md:items-center justify-between px-[12px] md:px-0 md:py-[50px] mx-[25px] md:mx-0 bg-[#fbfbfb] rounded-[8px] md:rounded-[20px] ">
      <img
        src={image}
        alt={name}
        className="h-[113px] w-[113px] md:h-[205px] md:w-[205px]  rounded-full  "
      />
      <h3 className="text-2xl md:text-[32px] font-semibold mb-5">{name}</h3>
      <p className=" md:mx-[55px] text-[14px] md:text-[18px] font-semibold text-[#5c5c5c] mb-4 text-left md:text-center">
        {heading}
        <Link
          to={`/specialists#specialist${sno}`}
          className="md:hidden text-blue-500"
        >
          Learn More
        </Link>
      </p>
      <Link
        to={`/specialists#specialist${sno}`}
        className="hidden md:block text-blue-500"
      >
        Learn More
      </Link>
    </div>
  );
};

export default SpecialistCard;

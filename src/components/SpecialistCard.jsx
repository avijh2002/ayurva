import React from "react";
import star from "../assets/star.png";

const SpecialistCard = ({ name, image, heading, info }) => {
  const midIndex = Math.ceil(info.length / 2);
  const firstHalf = info.slice(0, midIndex);
  const secondHalf = info.slice(midIndex);
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="lg:hidden h-[700px] w-[345px]  bg-[#F8F8F8]  rounded-2xl p-6 flex flex-col items-center text-center  mx-auto">
        <h3 className="text-2xl font-semibold mb-5">{name}</h3>

        <div className="flex items-center gap-4 min-h-42  mb-[12px] ">
          <img
            src={image}
            alt={name}
            className="h-3/4 w-42  rounded-xl  "
          />

          <p className="w-1/2 text-xs font-semibold text-[#5c5c5c] mb-4 text-left ">
            {heading}
          </p>
        </div>

        <p className="text-[12px] mb-[33px] text-[#757575]  ">{info}</p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col mx-auto w-4/5 h-[580px] py-[36px] px-[45px] bg-[#F8F8F8]  rounded-2xl p-8 border border-gray-200 ">
        <div className="flex  items-center h-1/2 ">
          <div className="w-[243px] h-full rounded-xl p-2 mr-8 ">
            <img src={image} alt={name} className="w-full h-full" />
          </div>

          <div className="flex flex-col w-3/4  leading-none">
            <h3 className="text-4xl font-medium mb-3">{name}</h3>
            <p className="text-[#5c5c5c] font-medium mb-4 text-left text-2xl  ">
              {heading}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 ">
          <p className="text-[#757575] text-[15px]">{firstHalf}</p>
          <p className="text-[#757575] text-[15px]">{secondHalf}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;

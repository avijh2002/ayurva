import React from "react";
import outer from "../assets/Ellipse 10.png";

const Overlappingcircle = ({ image }) => {
  return (
    <div className="relative w-32 h-30 lg:w-78 lg:h-72 ">
      <div className="absolute w-full h-full  rounded-full">
        <img src={outer} />
      </div>

      {/* Inner Image Circle */}
      <div className="absolute z-30 w-full h-full bg-[#283618] rounded-full overflow-hidden top-4 left-4">
        <img
          src={image}
          alt="Yoga Pose"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-1 w-full h-full bg-[#283618] rounded-full overflow-hidden top-8 left-8">
        <img
          src={outer}
          alt="Yoga Pose"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Overlappingcircle;

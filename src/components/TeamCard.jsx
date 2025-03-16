import React from "react";

const TeamCard = ({ name, image, description, video }) => {
  return (
    <div className="  relative h-full w-4/5  ">
      <div className="absolute h-[57px] w-auto left-[27px] top-[60px] rounded-3xl bg-white  z-1000 text-[24px] font-medium pt-[10px] pb-[14px] px-[100px]">
        {name}
      </div>
      <div className="absolute  h-[665px]  w-[343px] left-[240px]  rounded-xl  z-5">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-xl object-cover mb-[27px]"
        />
      </div>
      <div className="absolute h-[332px]  w-[308px] top-[257px] rounded-xl text-[20px] font-medium pt-[10px] pb-[46px] px-[32px] text-[#f7f7f7] text-right bg-[#283618] z-109">
        {description}
      </div>
      <div className="absolute h-[321px] w-[475px] rounded-3xl top-[193px] right-[0px] bg-blue-200 z-100">
        <iframe
          width="100%"
          height="100%"
          src={video}
          title={name}
          allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default TeamCard;

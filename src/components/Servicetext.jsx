import React from "react";

const Servicetext = ({para1,para2}) => {
  return (
    <div className="flex-col space-y-2 ">
      <p className="font-semibold text-2xl lg:text-[32px] ">
       {para1}
      </p>
      <p className="text-[15px] lg:text-xl text-[#757575]">
        {para2}
      </p>
    </div>
  );
};

export default Servicetext;

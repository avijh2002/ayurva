import React from "react";
import myImage from "../assets/3cfe1f8fca52198217a3f59e36b7dcd5.png";

const Navbar = () => {
  return (
    <nav className="flex h-[170px] w-full  items-center px-2 py-2  border-b border-[.5px] border-[#cbcbcb]">
      {/* //logo */}
      <div className="w-1/5 ml-12 mt-10">
        <img className="w-[100%]" src={myImage} alt="Image" />
      </div>
      {/* //items */}
      <div className="flex gap-1 text-[#626262] text-xl ml-[175px] ">
        <div className="px-[24px] py-[6px] hover:bg-[#283618] hover:text-white hover:rounded-4xl transition-all duration-150 cursor-pointer">
          Home
        </div>
        <div className="px-[24px] py-[6px] hover:bg-[#283618] hover:text-white hover:rounded-4xl transition-all duration-150 cursor-pointer">
          Services
        </div>
        <div className="px-[24px] py-[6px] hover:bg-[#283618] hover:text-white hover:rounded-4xl transition-all duration-150 cursor-pointer">
          FAQ
        </div>
        <div className="px-[24px] py-[6px] hover:bg-[#283618] hover:text-white hover:rounded-4xl transition-all duration-150 cursor-pointer">
          About
        </div>
        <div className="px-[24px] py-[6px] hover:bg-[#283618] hover:text-white hover:rounded-4xl transition-all duration-150 cursor-pointer">
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

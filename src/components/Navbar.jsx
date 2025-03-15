import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import myImage from "../assets/3cfe1f8fca52198217a3f59e36b7dcd5.png";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  console.log(location);

  return (
    <nav className="flex mx-auto max-w-[1280px] h-[170px] w-full items-center px-2 py-2  border-b-[.5px] border-b-[#cbcbcb]">
      {/* Logo */}
      <div className="w-1/5 ml-12 mt-10">
        <img className="w-[100%]" src={myImage} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-1 text-[#626262] text-xl ml-[175px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-[24px] py-[6px] transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-4xl ${
              isActive ? "bg-[#283618] text-white rounded-4xl" : ""
            }`
          }
        >
          Home
        </NavLink>

        { location.pathname === "/" ? (
          <>
            <button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" }); 
              }}
              className="px-[24px] py-[6px] transition-all duration-150 cursor-pointer 
        hover:bg-[#283618] hover:text-white hover:rounded-4xl"
            >
              Services
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-[24px] py-[6px] transition-all duration-150 cursor-pointer 
        hover:bg-[#283618] hover:text-white hover:rounded-4xl"
            >
              FAQ
            </button>
          </>
        ) : null} 

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-[24px] py-[6px] transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-4xl ${
              isActive ? "bg-[#283618] text-white rounded-4xl" : ""
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-[24px] py-[6px] transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-4xl ${
              isActive ? "bg-[#283618] text-white rounded-4xl" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

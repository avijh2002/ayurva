import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import myImage from "../assets/logo.png";
import BookNowButton from "./BookNowButton";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  useEffect(() => {
    if (scrollTarget) {
      setTimeout(() => {
        scrollToElement(scrollTarget);
        setScrollTarget(null);
      }, 100);
    }
  }, [location.pathname]);

  const handleClick = (name) => {
    if (location.pathname !== "/") {
      setScrollTarget(name);
      navigate("/");
    } else {
      scrollToElement(name);
    }
    setMenuOpen(false); // Close menu on selection
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id '${id}' not found`);
    }
  };

  return (
    <nav className="flex items-center justify-between max-w-full mx-auto px-4 py-4 border-b border-gray-300">
      {/* Logo */}
      <div className="w-full lg:w-1/5 ">
        <img className="w-auto lg:w-full inset-0  " src={myImage} alt="Logo" />
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="lg:hidden ">
        {menuOpen ? (
          <FiX size={32} className="text-[#283618]" onClick={() => setMenuOpen(false)} />
        ) : (
          <FiMenu size={32} className="text-[#283618]" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Navigation Links (Desktop & Mobile) */}
      <div
        className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent   shadow-lg lg:shadow-none 
        flex flex-col lg:flex-row  text-[#626262] text-xl items-center p-6 lg:p-0 sm:gap-0 lg:gap-1 transition-all duration-300 
        ${menuOpen ? "block" : "hidden lg:flex"}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1 transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-full ${
              isActive ? "bg-[#283618] text-white rounded-full" : ""
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <button
          onClick={() => handleClick("services")}
          className="px-4 py-1 transition-all duration-150 cursor-pointer 
          hover:bg-[#283618] hover:text-white hover:rounded-full"
        >
          Services
        </button>

        <button
          onClick={() => handleClick("faq")}
          className="px-4 py-1 transition-all duration-150 cursor-pointer 
          hover:bg-[#283618] hover:text-white hover:rounded-full"
        >
          FAQ
        </button>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-1 transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-full ${
              isActive ? "bg-[#283618] text-white rounded-full" : ""
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-1 transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-full ${
              isActive ? "bg-[#283618] text-white rounded-full" : ""
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>

      <BookNowButton/>
    </nav>
  );
};

export default Navbar;

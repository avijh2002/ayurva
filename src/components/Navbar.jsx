import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import myImage from "../assets/logo.png";

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
    <nav className="flex items-center justify-between max-w-[1280px] mx-auto px-6 py-4 border-b border-gray-300">
      {/* Logo */}
      <div className="w-full md:w-1/5 ">
        <img className="w-auto md:w-full inset-0  " src={myImage} alt="Logo" />
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="md:hidden">
        {menuOpen ? (
          <FiX size={32} className="text-[#283618]" onClick={() => setMenuOpen(false)} />
        ) : (
          <FiMenu size={32} className="text-[#283618]" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Navigation Links (Desktop & Mobile) */}
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none 
        flex flex-col md:flex-row gap-4 text-[#626262] text-xl items-center p-6 md:p-0 transition-all duration-300 
        ${menuOpen ? "block" : "hidden md:flex"}`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-6 py-2 transition-all duration-150 cursor-pointer 
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
          className="px-6 py-2 transition-all duration-150 cursor-pointer 
          hover:bg-[#283618] hover:text-white hover:rounded-full"
        >
          Services
        </button>

        <button
          onClick={() => handleClick("faq")}
          className="px-6 py-2 transition-all duration-150 cursor-pointer 
          hover:bg-[#283618] hover:text-white hover:rounded-full"
        >
          FAQ
        </button>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-6 py-2 transition-all duration-150 cursor-pointer 
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
            `px-6 py-2 transition-all duration-150 cursor-pointer 
            hover:bg-[#283618] hover:text-white hover:rounded-full ${
              isActive ? "bg-[#283618] text-white rounded-full" : ""
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

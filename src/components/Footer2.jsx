import React, { useState, useEffect } from "react";
import myImage from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer2 = () => {
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (scrollTarget) {
      setTimeout(() => {
        scrollToElement(scrollTarget);
        setScrollTarget(null);
      }, 1000);
    }
  }, [location.pathname]);

  const handleClick = (name) => {
    navigate("/", { state: { scrollTo: name } });
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id '${id}' not found. Retrying...`);
      requestAnimationFrame(() => scrollToElement(id));
    }
  };
  

  return (
    <footer className="max-w-full mx-auto h-auto bg-white text-gray-700 py-10 px-7 md:px-16">
      {/* Footer Content */}
      <div className="text-gray-300 h-auto mt-10">
        <div className="flex gap-10 justify-between h-full md:mx-5">
          {/* Navigation Links */}
          <div className="w-1/3 md:w-1/6">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Explore</h3>
            <ul className="text-sm mt-4 md:text-2xl space-y-2 text-[#5d5d5d]">
              <li><Link to="/" className="hover:text-gray-950 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-950 transition-colors">About Us</Link></li>
              <li>
                <button onClick={() => handleClick("services")} className="cursor-pointer hover:text-gray-950 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("faq")} className="cursor-pointer hover:text-gray-950 transition-colors">
                  FAQ
                </button>
              </li>
              <li><Link to="/contact" className="hover:text-gray-950 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-col w-1/3">
            <h3 className="text-2xl md:text-3xl font-semibold text-black">Contact</h3>
            <p className="text-sm mt-4 md:text-2xl text-[#5d5d5d]">care@ayurva.digital</p>
            <p className="text-sm mt-4 md:text-2xl text-[#5d5d5d]">+91 8007968715</p>
            {/* Social Media Icons */}
            <div className="hidden md:flex justify-between w-2/3 text-[#5d5d5d] text-xl mt-20">
              <a href="#" className="hover:text-gray-400" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="hidden md:flex md:w-1/3 items-center justify-end">
            <img className="w-1/2" src={myImage} alt="Ayurva Logo" />
          </div>

          {/* Mobile Social Media and Logo */}
          <div className="flex flex-col w-1/3 items-end md:hidden text-black text-xl">
            <a href="#" className="hover:text-gray-400" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="w-full md:hidden flex items-center justify-center mt-6">
          <img className="w-1/2" src={myImage} alt="Ayurva Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

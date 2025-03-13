import React from "react";
import myImage from "../assets/3cfe1f8fca52198217a3f59e36b7dcd5.png";

const Footer = ({ bannerImage, bgColor }) => {
  return (
    <footer
      className="py-10 px-6 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      {/* Banner Section */}
      <div className="w-full  mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 flex justify-between items-end text-center p-6 m-4">
            <div className="flex-col">
              <h2 className="text-white text-2xl md:text-3xl font-semibold text-left">
                Take the First Step Toward a Pain-Free Life!
              </h2>
              <p className="text-gray-200 text-md mt-2 text-left">
                Natural and Safe | Holistic Approach | Expert Guidance |
                Personalized Plans
              </p>
            </div>

            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full flex items-center space-x-2 hover:bg-green-600 transition">
              <span>Take a 2 minute Test</span>
              <span>➝</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto">
        {/* Explore Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold">Explore</h3>
          <ul className="mt-2 text-gray-300 space-y-1">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Log In
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold">Contact</h3>
          <p className="text-gray-300 mt-2">care@ayurva.digital</p>
          <p className="text-gray-300">+91 8007968715</p>
          <div className="flex space-x-4 text-white text-2xl">
          <a href="#" className="hover:text-gray-300">
            📷
          </a>
          <a href="#" className="hover:text-gray-300">
            ✖
          </a>
          <a href="#" className="hover:text-gray-300">
            🔵
          </a>
          <a href="#" className="hover:text-gray-300">
            ▶
          </a>
        </div>
        </div>

        
      </div>

      <div className="mt-8 text-center">
        <img className="h-12 mx-auto" src={myImage} alt="Image" />
      </div>
    </footer>
  );
};

export default Footer;

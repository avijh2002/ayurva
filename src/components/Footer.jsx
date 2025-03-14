import React from "react";
import myImage from "../assets/3cfe1f8fca52198217a3f59e36b7dcd5.png";
import footerBanner from "../assets/footerBanner.png"
import Buttonright from "./Buttonright";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer
      className=" max-w-[1280px] mx-auto w-full py-10 px-6 md:px-16 h-auto bg-[#283618]"
    >
      {/* Banner Section */}
      <div className="w-full h-[500px]  mx-auto my-6">
          <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={footerBanner}
              alt="Banner"
              className="w-full h-full  my-auto object-fill"
            />
            <div className="absolute inset-0 bg-opacity-30 flex justify-between items-end text-center p-6 m-4 mr-12">
              <div className="flex-col">
                <h2 className="text-white text-3xl md:text-3xl font-semibold text-left">
                  Take the First Step Toward a Pain-Free Life!
                </h2>
                <p className="text-gray-200 text-xl mt-2 text-left">
                  Natural and Safe | Holistic Approach | Expert Guidance |
                  Personalized Plans
                </p>
              </div>

              <div className="flex justify-end">
                {/* button left */}
                <Buttonright
                  info="Take a 2 minute Test"
                  bgColor="bg-[#283618]"
                  textColor="text-white"
                  arrowBg="bg-white"
                  arrowColor="text-[#283618]"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Footer Content */}
      <div className="bg-[#283618] text-gray-300 h-[300px] mt-10 ">
        <div className=" flex gap-10 justify-between h-full mx-5">
          {/* Navigation Links */}
          <div className="w-1/6">
            <h3 className="text-3xl font-semibold text-white">Explore</h3>
            <ul className="text-xl mt-4 space-y-2">
              {["Home", "About Us", "Services", "Contact", "Log In"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-col  w-1/3 ">
            <h3 className="text-3xl font-semibold text-white">Contact</h3>
            <p className="text-xl mt-4 space-y-2">care@ayurva.digital</p>
            <p className="text-xl mt-4 space-y-2">+91 8007968715</p>
            <div className="flex justify-between w-2/3 text-white  text-xl mt-20">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="w-1/3 flex flex-col-reverse items-center md:items-end">
            <img className="w-full" src={myImage} alt="Image" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

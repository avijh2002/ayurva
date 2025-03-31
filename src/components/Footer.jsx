import { useState, useEffect } from "react";
import myImage from "../assets/logo.png";
import footerBanner from "../assets/footerBanner.png";
import Buttonright from "./Buttonright";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (name) => {
    scrollToElement(name);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className=" max-w-full flex-col mx-auto py-17 px-7 md:px-26 md:py-22  bg-[#283618]">
      {/* Banner Section */}
      <div className="w-full h-fit flex-col  mx-auto">
        <div className="flex md:hidden flex-col">
          <h2 className="text-white w-3/4   text-3xl md:text-3xl font-semibold text-left">
            Take the First Step Toward a Pain-Free Life!
          </h2>
          <p className="text-gray-200 text-xl mb-[38px] mt-2 text-left">
            Natural and Safe | Holistic Approach | Expert Guidance |
            Personalized Plans
          </p>
        </div>

        <div className="relative h-full md:h-fit overflow-hidden  rounded-lg shadow-lg">
          <img
            src={footerBanner}
            alt="Banner"
            className="w-full h-[175px] md:h-full  my-auto object-fill"
          />
          <div className="  absolute inset-0 bg-opacity-30  flex justify-between items-end text-center p-6 m-4 md:mr-12">
            <div className="hidden md:flex flex-col">
              <h2 className="text-white text-2xl md:text-xl lg:text-3xl  font-semibold text-left">
                Take the First Step Toward a Pain-Free Life!
              </h2>
              <p className="text-gray-200 text-lg md:text-xs lg:text-xl mt-2 text-left">
                Natural and Safe | Holistic Approach | Expert Guidance |
                Personalized Plans
              </p>
            </div>

            <div className="relative top-6 md:static">
              {"   "}
              <Buttonright
                info="Take a 2 minute Test"
                bgColor="bg-[#283618]"
                textColor="text-white"
                arrowBg="bg-[#F2EFE7]"
                arrowColor="text-[#283618]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className=" text-gray-300 h-auto mt-10 ">
        <div className=" flex gap-10 justify-between h-full md:mx-5 ">
          {/* Navigation Links */}
          <div className="w-1/3 md:w-1/6 ">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Explore
            </h3>
            <ul className="text-sm mt-4 md:text-2xl space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleClick("services")}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleClick("faq")}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex-col  w-1/3 ">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Contact
            </h3>
            <p className="text-sm mt-4 md:text-2xl space-y-2">
              care@ayurva.digital
            </p>
            <p className="text-sm mt-4 md:text-2xl space-y-2">+91 8007968715</p>
            <div className="hidden md:flex justify-between w-2/3 text-white  text-xl mt-20">
              <a
                href="https://www.instagram.com/ayurva.digital/"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* <a href="#" target="_blank" className="hover:text-gray-400">
              <i className="fab fa-x-twitter"></i>
            </a> */}
              <a
                href="https://www.facebook.com/profile.php?id=61574189353169#"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook"></i>
              </a>
              {/* <a href="#" target="_blank" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a> */}
              <a
                href="https://www.linkedin.com/company/ayurvadigital"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="hidden md:flex md:w-1/3 flex-col-reverse items-center md:items-end">
            <img className="w-full" src={myImage} alt="Image" />
          </div>

          <div className="flex flex-col  w-1/3 items-end justify-between md:hidden  text-white  text-xl">
            <a
              href="https://www.instagram.com/ayurva.digital/"
              target="_blank"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="#" target="_blank" className="hover:text-gray-400">
              <i className="fab fa-x-twitter"></i>
            </a> */}
            <a
              href="https://www.facebook.com/profile.php?id=61574189353169#"
              target="_blank"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            {/* <a href="#" target="_blank" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/company/ayurvadigital"
              target="_blank"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:hidden  flex-col-reverse items-center">
          <img className="w-full" src={myImage} alt="Image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import myImage from "../assets/logo.png";
// import footerBanner from "../assets/footerBanner.png";
// import Buttonright from "./Buttonright";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Footer = () => {
//   return (
//     <footer className="max-w-[1280px] mx-auto w-full py-10 px-6 md:px-16 bg-[#283618]">
//       {/* Banner Section */}
//       <div className="w-full mx-auto my-6">
//         <div className="relative rounded-lg overflow-hidden shadow-lg">
//           <img
//             src={footerBanner}
//             alt="Banner"
//             className="w-full h-[280px] md:h-[450px] object-cover"
//           />
//           {/* Banner Content */}
//           <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end text-center md:text-left p-4 md:p-10">
//             <div className="md:w-2/3 text-white">
//               <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
//                 Take the First Step Toward a Pain-Free Life!
//               </h2>
//               <p className="text-gray-200 text-sm md:text-lg mt-2">
//                 Natural and Safe | Holistic Approach | Expert Guidance |
//                 Personalized Plans
//               </p>
//             </div>

//             {/* Button: Moves Below on Small Screens */}
//             <div className="mt-4 md:mt-0 md:ml-auto">
//               <Buttonright
//                 info="Take a 2 Minute Test"
//                 bgColor="bg-[#283618]"
//                 textColor="text-white"
//                 arrowBg="bg-[#F2EFE7]"
//                 arrowColor="text-[#283618]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Content */}
//       <div className="bg-[#283618] text-gray-300 mt-10 text-center md:text-left">
//         <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between px-5">
//           {/* Left & Middle Section (Navigation + Contact) */}
//           <div className="flex flex-col md:flex-row w-full justify-between text-center md:text-left">
//             {/* Navigation Links */}
//             <div className="w-full md:w-1/3">
//               <h3 className="text-xl md:text-2xl font-semibold text-white">Explore</h3>
//               <ul className="text-base md:text-lg mt-4 space-y-2">
//                 {["Home", "About Us", "Services", "Contact", "Log In"].map(
//                   (item, index) => (
//                     <li key={index}>
//                       <a href="#" className="hover:text-white transition-colors">
//                         {item}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div className="w-full md:w-1/3 mt-6 md:mt-0">
//               <h3 className="text-xl md:text-2xl font-semibold text-white">Contact</h3>
//               <p className="text-base md:text-lg mt-2">care@ayurva.digital</p>
//               <p className="text-base md:text-lg mt-2">+91 8007968715</p>
//             </div>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex justify-center md:justify-end w-full md:w-1/3 gap-6 text-white text-xl mt-6 md:mt-0">
//             <a href="#" className="hover:text-gray-400">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               <i className="fab fa-x-twitter"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </div>
//         </div>

//         {/* Logo Section (Centered on Mobile) */}
//         <div className="w-full flex justify-center mt-8">
//           <img className="w-[180px] md:w-[250px]" src={myImage} alt="Logo" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

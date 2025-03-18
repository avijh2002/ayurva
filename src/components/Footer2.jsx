import myImage from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer2 = () => {
  return (
    <footer className="max-w-[1280px] mx-auto h-auto bg-white text-gray-700 py-10 px-7 md:px-16">
      <div className=" text-gray-300 h-auto mt-10 ">
              <div className=" flex gap-10 justify-between h-full md:mx-5 ">
                {/* Navigation Links */}
                <div className="w-1/3 md:w-1/6 ">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black">
                    Explore
                  </h3>
                  <ul className="text-sm mt-4 md:text-2xl space-y-2  text-[#5d5d5d]">
                    {["Home", "About Us", "Services", "Contact", "Log In"].map(
                      (item, index) => (
                        <li key={index}>
                          <a href="#" className="hover:text-gray-950 transition-colors">
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
      
                {/* Contact Section */}
                <div className="flex-col  w-1/3 ">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black">
                    Contact
                  </h3>
                  <p className="text-sm mt-4 md:text-2xl space-y-2 text-[#5d5d5d]">care@ayurva.digital</p>
                  <p className="text-sm mt-4 md:text-2xl space-y-2 text-[#5d5d5d]">+91 8007968715</p>
                  <div className="hidden md:flex justify-between w-2/3 text-[#5d5d5d]  text-xl mt-20">
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
                <div className="hidden md:flex md:w-1/3 flex-col-reverse items-center md:items-end">
                  <img className="w-full" src={myImage} alt="Image" />
                </div>
      
                <div className="flex flex-col  w-1/3 items-end justify-between md:hidden  text-black  text-xl">
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
      
              <div className="w-full md:hidden md:w-1/3 flex-col-reverse items-center md:items-end">
                  <img className="w-full" src={myImage} alt="Image" />
                </div>
            </div>
    </footer>
  );
};

export default Footer2;

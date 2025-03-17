import myImage from "../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer2 = () => {
  return (
    <footer className="max-w-[1280px] mx-auto h-auto bg-white text-gray-700 py-10 px-6 md:px-16">
      <div className="bg-white text-[#5D5D5D]  ">
        <div className=" flex gap-10 justify-between h-full mx-5">
          {/* Navigation Links */}
          <div className="w-1/6">
            <h3 className="text-3xl font-semibold text-black">Explore</h3>
            <ul className="text-xl mt-4 space-y-2">
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
          <div className="flex-col  w-1/3">
            <h3 className="text-3xl font-semibold text-black">Contact</h3>
            <p className="text-xl mt-4 space-y-2">care@ayurva.digital</p>
            <p className="text-xl mt-4 space-y-2">+91 8007968715</p>
            <div className="flex justify-between w-2/3   text-xl mt-20">
              <a href="#" className="hover:text-gray-950">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-950">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-950">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-950">
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

export default Footer2;

import picklogo from "../assets/picklogo.png";

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-3 flex flex-col md:flex-row items-center justify-center  text-center md:text-left py-10 px-6 md:px-1/20">
      {/* Logo Section */}
      <div className="w-2/3 md:w-[491px] md:h-[491px]  flex justify-center">
        <img
          src={picklogo}
          alt="Ayurva Logo"
          className=" md:h-full"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full p-10 md:w-1/2 ">
        <h2 className="text-2xl mb-[23px] sm:text-4xl md:text-5xl font-semibold">
          About Ayurva
        </h2>
        <p className="mt-3 text-sm sm:text-lg md:text-2xl text-gray-600">
          At Ayurva, we're passionate about empowering individuals to overcome
          back pain and spondylitis naturally. Our journey began with a deep
          understanding of the limitations of conventional pain management,
          inspiring us to create a holistic pla orm that combines the wisdom of
          ancient practices with modern technology.
        </p>
      </div>
    </div>
  );
};

export default About;

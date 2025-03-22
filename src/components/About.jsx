import picklogo from "../assets/picklogo.png";

const About = () => {
  return (
    <div className="max-w-full mx-auto p-3 flex flex-col lg:flex-row  items-center justify-center  text-center lg:text-left py-10 px-6 lg:px-1/20">
      {/* Logo Section */}
      <div className="w-2/3 lg:w-[491px] lg:h-[491px]  flex justify-center">
        <img
          src={picklogo}
          alt="Ayurva Logo"
          className=" lg:h-full"
        />
      </div>

      {/* Text Content Section */}
      <div className="  px-10 lg:w-2/5 ">
        <h2 className="text-2xl mb-[23px] sm:text-4xl lg:text-5xl font-semibold">
          About Ayurva
        </h2>
        <p className="mt-3 text-sm sm:text-lg lg:text-[26px] text-[#8c8c8c]">
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

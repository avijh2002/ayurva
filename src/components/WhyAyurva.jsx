import Buttonright from "./Buttonright";
import Leaf from "../assets/leaf.png";
import User from "../assets/sage.png";
import Bowl from "../assets/bowl.png";
import Stethoscope from "../assets/Stethoscope.png";

const services = [
  {
    image: Leaf,
    title: "Natural Healing, Lasting Relief",
    description:
      "Say goodbye to temporary fixes. We focus on healing the root cause with alternative medicine.",
    bgColor: "bg-[#F3F7EE]",
  },
  {
    image: User,
    title: "Personalized Yoga Therapy",
    description:
      "Expertly designed yoga sessions tailored to your specific pain points and flexibility levels.",
    bgColor: "bg-[#E7F8D3]",
  },
  {
    image: Stethoscope,
    title: "Expert Doctor Consultations",
    description:
      "Receive personalized treatment plans from experienced Ayurveda, Homeopathy, and Naturopathy specialists.",
    bgColor: "bg-[#D2E7BA]",
  },
  {
    image: Bowl,
    title: "Customized Ayurvedic Diet Plans",
    description:
      "Nutrition plans designed to reduce inflammation and strengthen your body from within.",
    bgColor: "bg-[#BCD4B7]",
  },
];

const WhyAyurva = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6  text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-black mt-16 mb-12">
        Why Choose Ayurva?
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  mx-auto mb-12 w-full ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 h-[385px] w-full md:p-6 rounded-3xl shadow-sm ${service.bgColor} flex flex-col md:items-start items-center  text-left `}
          >
            <img src={service.image} alt="hero1" className="md:h-30 md:w-30" />

            <h3 className="text-lg md:text-4xl font-semibold text-black mt-4">
              {service.title}
            </h3>
            <p className="text-sm md:text-lg text-center md:text-left  text-[#757575] mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mb-16">
        <Buttonright
          info="Start Your Journey"
          bgColor="bg-[#283618]"
          textColor="text-white"
          arrowBg="bg-[#F2EFE7]"
          arrowColor="text-[#283618]"
        />
      </div>
    </section>
  );
};

export default WhyAyurva;

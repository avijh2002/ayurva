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
    <section className="max-w-[1280px] mx-auto  px-[70px] text-center ">
      <h2 className="text-[40px] font-semibold text-black  mb-[71px] mt-[78px]">
        Why Choose Ayurva?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-[71px]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-sm ${service.bgColor} flex flex-col items-start text-left`}
          >
            <div className="h-30 w-30">
              <img src={service.image} alt="hero1" className="" />
            </div>

            <h3 className="text-xl font-semibold text-black mt-4">
              {service.title}
            </h3>
            <p className="text-[#757575] mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-auto flex justify-center mb-[85px]">
        <Buttonright
          info="Start Your Journey"
          bgColor="bg-[#283618]"
          textColor="text-white"
          arrowBg="bg-white"
          arrowColor="text-[#283618]"
        />
      </div>
    </section>
  );
};

export default WhyAyurva;

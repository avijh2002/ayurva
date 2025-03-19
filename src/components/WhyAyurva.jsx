import Buttonright from "./Buttonright";
import Leaf from "../assets/leaf.png";
import User from "../assets/sage.png";
import Bowl from "../assets/bowl.png";
import Stethoscope from "../assets/Stethoscope.png";

const WhyAyurva = () => {
  return (
    <section className=" max-w-[1280px] mx-auto px-10 pt-[35px] md:pt-[78px] text-center">
      {/* Heading */}
      <h2 className="text-[22px] md:text-[40px]  mb-[29px] font-semibold text-black  md:mb-[71px]">Why Choose Ayurva?</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto mb-12 w-full">
      <div className="lg:col-span-2 px-[38px] py-[54px] h-[385px] w-full md:p-11 rounded-3xl shadow-sm bg-[#F3F7EE] flex flex-col justify-evenly items-center md:items-start  md:text-left">
          <img src={Leaf} alt="Natural Healing" className="md:h-30 md:w-30" />
          <h3 className=" text-2xl md:text-[32px] font-semibold text-black mt-4">Natural Healing, Lasting Relief</h3>
          <p className=" text-sm md:text-lg text-center md:text-left text-[#757575] mt-2">Say goodbye to temporary fixes. We focus on healing the root cause with alternative medicine.</p>
        </div>

        <div className="px-[38px] py-[54px] h-[385px] w-full md:p-6 rounded-3xl shadow-sm bg-[#E7F8D3] flex flex-col justify-evenly items-center md:items-start  md:text-left">
          <img src={User} alt="Yoga Therapy" className="md:h-30 md:w-30" />
          <h3 className=" text-2xl md:text-[32px] font-semibold text-black mt-4">Personalized Yoga Therapy</h3>
          <p className=" text-sm md:text-lg text-center md:text-left text-[#757575] mt-2">Expertly designed yoga sessions tailored to your specific pain points and flexibility levels.</p>
        </div>

        <div className="px-[38px] py-[54px] h-[385px] w-full md:p-6 rounded-3xl shadow-sm  bg-[#D2E7BA] flex flex-col justify-evenly items-center md:items-start  md:text-left">
          <img src={Stethoscope} alt="Doctor Consultations" className="md:h-30 md:w-30" />
          <h3 className=" text-2xl md:text-[32px] font-semibold text-black mt-4">Expert Doctor Consultations</h3>
          <p className=" text-sm md:text-lg text-center md:text-left text-[#757575] mt-2">Receive personalized treatment plans from experienced Ayurveda, Homeopathy, and Naturopathy specialists.</p>
        </div>

        <div className="lg:col-span-2 px-[38px] py-[54px] h-[385px] w-full md:p-6 rounded-3xl shadow-sm bg-[#BCD4B7] flex flex-col justify-evenly items-center md:items-start  md:text-left">
          <img src={Bowl} alt="Ayurvedic Diet Plans" className="md:h-30 md:w-30" />
          <h3 className=" text-2xl md:text-[32px] font-semibold text-black mt-4">Customized Ayurvedic Diet Plans</h3>
          <p className=" mt-[54px]text-sm md:text-lg text-center md:text-left text-[#757575] mt-2">Nutrition plans designed to reduce inflammation and strengthen your body from within.</p>
        </div>
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

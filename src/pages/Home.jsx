import {useEffect} from "react";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Homeinfo from "../components/Homeinfo";
import HeroSection from "../components/HeroSection";
import Reviews from "../components/Reviews";
import Specialists from "../components/Specialists";
import WhyAyurva from "../components/WhyAyurva";
import Faq from "../components/Faq";
import Steps from "../components/Steps";

const Home = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
  return (
    <div>
      <HeroSection />
      <Homeinfo />
      <Specialists />
      <div className="mx-auto max-w-[1280px] h-[#151px] py-16 bg-[url('/bells.jpg')] bg-cover bg-center opacity-7"></div>
      <WhyAyurva />
      <Reviews />
      <Steps/>
      <Service />
      <Faq/>
      <Footer />
    </div>
  );
};

export default Home;

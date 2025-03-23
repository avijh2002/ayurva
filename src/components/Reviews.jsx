import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientImage from "../assets/imagePlaceholder.jpg";

const testimonials =
  [{
    text: "“Fantastic platform for holistic pain management! The personalized recommendations from the quick assessment, expert consultations, and tailored Ayurvedic diet plans have been incredibly helpful. The yoga therapy sessions and progress tracking tools make it easy to stay on track. Highly recommend for anyone looking to manage back pain naturally!”",
    image: clientImage,
    name: "Avtanshu Bhati",
  },
  {
    text: "“This platform is a fantastic resource for learning about Ayurveda and holistic wellness. The personalized dosha insights, Ayurvedic diet plans, and natural remedies are incredibly informative. I especially enjoyed the yoga therapy sessions and lifestyle tips. It’s a must-visit for anyone interested in natural health solutions!”",
    image: clientImage,
    name: "Avinash Jha",
  }];

const ArrowButton = ({ onClick, direction }) => (
  <button
    className={`absolute -top-15 ${
      direction === "left" ? "left-6" : "right-6"
    } z-10 text-gray-400 hover:text-white`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <ChevronLeft size={42} />
    ) : (
      <ChevronRight size={42} />
    )}
  </button>
);

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
  };

  return (
    <div className="max-w-full mx-auto min-h-[500px] relative flex justify-center items-center text-[#a8a8a8] py-16 bg-[url('/reviewBg.jpg')]">
      <div className="absolute inset-0 bg-[#283618]/94"></div>
      <Slider {...settings} className="w-full max-w-6xl px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
              <p className="italic max-w-3xl text-sm text-center lg:text-left lg:text-2xl">
                {testimonial.text}
              </p>
              <div className="flex flex-col items-center lg:w-1/4 m-[12px] ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full shadow-lg"
                />
                <p className="mt-2 font-medium text-sm md:text-2xl">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;

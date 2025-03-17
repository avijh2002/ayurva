import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientImage from "../assets/clientImage.png";

const testimonials = [
  {
    text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”",
    image: clientImage,
    name: "Client Name",
  },
  {
    text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”",
    image: clientImage,
    name: "Client Name",
  },
  {
    text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”",
    image: clientImage,
    name: "Client Name",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute -top-16 left-4 md:left-6 text-gray-300 hover:text-white"
    onClick={onClick}
  >
    <ChevronLeft size={36} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute -top-16 right-4 md:right-6 text-gray-300 hover:text-white"
    onClick={onClick}
  >
    <ChevronRight size={36} />
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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="max-w-[1280px] mx-auto relative flex justify-center items-center text-[#a8a8a8] py-16 px-6 bg-[url('/reviewBg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#283618]/90"></div>
      <Slider {...settings} className="w-full max-w-4xl px-4 relative z-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="italic text-lg md:text-2xl text-center max-w-2xl">{testimonial.text}</p>
            <div className="flex flex-col items-center mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 md:w-40 md:h-40 rounded-full shadow-lg"
              />
              <p className="mt-2 font-medium text-xl md:text-2xl">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;

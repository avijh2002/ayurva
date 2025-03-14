import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clientImage from "../assets/clientImage.png";

const testimonials = [
    {
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”",
      image: clientImage,
      name: "Client Name",
    },
    {
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”",
      image: clientImage,
      name: "Client Name",
    },
    {
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”",
      image: clientImage,
      name: "Client Name",
    },
  ];

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <button
      className="absolute -top-20 left-6 z-10 text-gray-400 hover:text-white"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft size={42} />
    </button>
  );
  
  const CustomNextArrow = ({ className, style, onClick }) => (
    <button
      className="absolute -top-20 right-6 z-10 text-gray-400 hover:text-white"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight size={42} />
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
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div className="max-w-[1280px] mx-auto h-139 relative flex justify-center items-center text-[#a8a8a8]  py-16 bg-[url('/reviewBg.jpg')] ">
        <div className="absolute inset-0 bg-[#283618]/97"></div> 
      <Slider {...settings} className="w-9/10 max-w-6xl px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex justify-evenly h-1/2">
              <p className="italic max-w-2xl text-left text-2xl">{testimonial.text}</p>
              <div className="flex flex-col items-center w-1/4 h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full shadow-lg"
                />
                <p className="mt-2 font-medium text-2xl">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
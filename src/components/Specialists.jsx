import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialistCard from "./SpecialistCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import docpic1 from "../assets/doc1.png";
import docpic2 from "../assets/doc2.png";
import docpic3 from "../assets/doc3.png";

const specialistsData = [
  {
    image: docpic1,
    name: "Dr. Sathyavathi B",
    heading:
      "Dr. Sathyavathi B, with 24 years of experience, blends traditional homeopathy with modern research, contributing to clinical trials in oncology, diabetes, and orthopaedics for holistic patient care.",
    info: "Dr. Sathyavathi B is a seasoned homeopathic consultant with 24 years of dedicated clinical practice. Her extensive experience encompasses a broad spectrum of patient care, establishing her as a respected figure in the field of homeopathy. Beyond her private practice, Dr. Sathyavathi has actively contributed to advancing  medical knowledge through participation in numerous clinical trials. Her involvement in trials focused on  complex conditions like oncology, diabetes, and orthopaedics ailments underscores her commitment to  rigorous scientific inquiry and the exploration of homeopathic applications in challenging medical scenarios. This experience has honed her ability to analyse data, collaborate with multi disciplinary teams, and contribute  to evidence-based homeopathic practice. Her comprehensive understanding of homeopathic principles,  coupled with her exposure to contemporary medical research, enables her to provide holistic and informed  patient care. Dr. Sathyavathi's career reflects a blend of traditional homeopathic wisdom and a progressive  approach to integrating complementary medicine with modern scientific methodologies.",
  },
  {
    image: docpic2,
    name: "Dr. Subramanya Rao",
    heading:
      "Dr. Subramanya Rao, a veteran Ayurvedic practitioner, boasts 34 years of rich experience. His dedication  extends beyond clinical practice to global outreach, promoting Ayurveda through lectures across Moscow, the  Netherlands, Europe, and Canada. ",
    info: "Dr. Rao's commitment to scientific validation is evident in his collaborative clinical trials on Panchakarma treatment conducted in Moscow with the Institute of Traditional Medicine. These trials underscore his efforts to bridge traditional wisdom with modern research. His extensive international engagement highlights his role as a key ambassador for Ayurveda, fostering its understanding and acceptance worldwide. Dr. Subramanya Rao, with 34 years of experience, is a renowned Ayurvedic practitioner and global ambassador, promoting Ayurveda through international lectures and pioneering clinical trials on Panchakarma in collaboration with the Institute of Traditional Medicine in Moscow.",
  },
  // {
  //   image: docpic3,
  //   name: "Dr. Subramanya Rao",
  //   heading:
  //     "Dr. Subramanya Rao, a veteran Ayurvedic practitioner, boasts 34 years of rich experience. His dedication  extends beyond clinical practice to global outreach, promoting Ayurveda through lectures across Moscow, the  Netherlands, Europe, and Canada. ",
  //   info: "Dr. Rao's commitment to scientific validation is evident in his collaborative clinical trials on Panchakarma treatment conducted in Moscow with the Institute of Traditional Medicine. These trials underscore his efforts to bridge traditional wisdom with modern research. His extensive international engagement highlights his role as a key ambassador for Ayurveda, fostering its understanding and acceptance worldwide. Dr. Subramanya Rao, with 34 years of experience, is a renowned Ayurvedic practitioner and global ambassador, promoting Ayurveda through international lectures and pioneering clinical trials on Panchakarma in collaboration with the Institute of Traditional Medicine in Moscow.",
  // },
];

const ArrowButton = ({ onClick, direction }) => (
  <button
    className={`absolute -top-15 ${
      direction === "left" ? "left-0" : "right-0"
    } z-10 text-gray-400 hover:text-white`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <ChevronLeft size={32} />
    ) : (
      <ChevronRight size={32} />
    )}
  </button>
);

const Specialists = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
  };

  return (
    <div className="mx-auto max-w-full flex flex-col items-center mb-16 ">
      {/* Title */}
      <h2 className="text-[22px] md:text-[40px] lg:text-4xl font-medium text-center mt-10 md:mt-16 mb-8 md:mb-12 ">
        Meet the Specialists
      </h2>

      {/* Specialist Cards - Carousel */}
      <div className="w-full md:px-8 mx-auto ">
        <Slider {...settings} className=" mx-auto">
          {specialistsData.map((specialist, index) => (
            <SpecialistCard
              key={index}
              image={specialist.image}
              name={specialist.name}
              heading={specialist.heading}
              info={specialist.info}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Specialists;

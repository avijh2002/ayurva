import React from "react";
import Slider from "react-slick";
import TeamCard from "./TeamCard";
import TeamCardPic1 from "../assets/teampic1.png";
import TeamCardVdo1 from "../assets/teamvdo1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Team = () => {
  const testMembers = [
    {
      name: "John Doe",
      image: TeamCardPic1,
      description:
        "Answer simple questions about your pain levels, lifestyle, and symptoms. This will help us understand your needs better. After completing the test, you will receive an initial pain analysis and personalized recommendations.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Jane Smith",
      image: TeamCardPic1,
      description:
        "We analyze your pain levels and lifestyle through a quick test. Get personalized recommendations instantly.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Alice Johnson",
      image: TeamCardPic1,
      description:
        "Personalized pain analysis based on simple questions. Your journey to pain relief starts here.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    <div className="max-w-[1280px] mx-auto h-auto pt-[104px] bg-[#F3F3F3]">
      <div className="text-[40px] font-medium text-center mb-[56px]">
        Meet our Team
      </div>

      <div className=" h-auto">
        <Slider {...settings}>
          {testMembers.map((member, index) => (
            
            <div key={index} className="  ml-[163px] mr-[96px] h-[665px]  mb-[136px]">
             <TeamCard
                name={member.name}
                image={member.image}
                description={member.description}
                video={member.video}
              />
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;

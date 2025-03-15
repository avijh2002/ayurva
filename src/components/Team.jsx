import TeamCard from "./TeamCard";
import TeamCardPic1 from "../assets/teampic1.png";
import TeamCardVdo1 from "../assets/teamvdo1.png"

const Team = () => {
  const testimonials = [
    {
      text: "Answer simple questions about your pain levels, lifestyle, and symptoms. This will help us  understand your needs better. After completing the test, you will receive an initial pain analysis and personalized recommendations.",
      image: TeamCardPic1,
      name: "John Doe",
    },
    {
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”",
      image: TeamCardPic1,
      name: "Client Name",
    },
    {
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”",
      image: TeamCardPic1,
      name: "Client Name",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto h-auto  bg-[#F3F3F3]">
      <div className="h-[58px] w-[344px] text-[40px] font-medium mx-auto mt-[104px] mb-[56px]">
        Meet our Team
      </div>

      <div className="  ml-[163px] mr-[96px] h-[665px]  mb-[136px]">
        <TeamCard
          name="John Doe"
          image={TeamCardPic1}
          description="Answer simple questions about your pain levels, lifestyle, and symptoms. This will help us  understand your needs better. After completing the test, you will receive an initial pain analysis and personalized recommendations."
          video={TeamCardVdo1}
        />
      </div>
    </div>
  );
};

export default Team;

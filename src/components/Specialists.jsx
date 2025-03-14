import SpecialistCard from "./SpecialistCard";
import cardImage from "../assets/cardImage.png";

const Specialists = () => {
  return (
    <div className="mx-auto max-w-[1280px] flex-col align-middle">
      <div className="h-[48px] w-[389px] mx-auto text-center text-[40px]  mt-[73px] mb-[84px] font-medium">Meet the Specialists</div>

      <div className="h-auto w-full flex gap-[22px]  mb-[103px] justify-center">
        <SpecialistCard
          image={cardImage}
          rating={5}
          name="Micheal"
          description="Ayurva offers a holistic, affordable, and convenient solution that combines Yoga, Diet, and Alternative"
          specialty="Yoga Specialist"
        />

        <SpecialistCard
          image={cardImage}
          rating={5}
          name="Micheal"
          description="Ayurva offers a holistic, affordable, and convenient solution that combines Yoga, Diet, and Alternative"
          specialty="Yoga Specialist"
        />

        <SpecialistCard
          image={cardImage}
          rating={5}
          name="Micheal"
          description="Ayurva offers a holistic, affordable, and convenient solution that combines Yoga, Diet, and Alternative"
          specialty="Yoga Specialist"
        />
      </div>
    </div>
  );
};

export default Specialists;

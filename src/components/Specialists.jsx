import SpecialistCard from "./SpecialistCard";
import cardImage from "../assets/cardImage.png";

const Specialists = () => {
  return (
    <div className="mx-auto max-w-[1280px] flex flex-col items-center mb-16 ">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mt-10 md:mt-16 mb-8 md:mb-12">
        Meet the Specialists
      </h2>

      {/* Specialist Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-1 w-full px-4 md:px-8">
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

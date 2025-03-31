import React from "react";
import SpecialistCard from "./SpecialistCard";
import docpic1 from "../assets/doc1.png";
import docpic2 from "../assets/doc2.png";
import docpic3 from "../assets/doc3.jpeg";

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
      "Dr. Subramanya Rao, a veteran Ayurvedic practitioner, boasts 34 years of rich experience. His dedication has global outreach, promoting Ayurveda through lectures across Moscow, the  Netherlands, Europe, and Canada. ",
    info: "Dr. Rao's commitment to scientific validation is evident in his collaborative clinical trials on Panchakarma treatment conducted in Moscow with the Institute of Traditional Medicine. These trials underscore his efforts to bridge traditional wisdom with modern research. His extensive international engagement highlights his role as a key ambassador for Ayurveda, fostering its understanding and acceptance worldwide. Dr. Subramanya Rao, with 34 years of experience, is a renowned Ayurvedic practitioner and global ambassador, promoting Ayurveda through international lectures and pioneering clinical trials on Panchakarma in collaboration with the Institute of Traditional Medicine in Moscow.",
  },
  {
    image: docpic3,
    name: "Dr. Hithesh A.V.",
    heading:
      "Dr. Hithesh A.V. (Counseling & Psychotherapy), with 15+ years of experience, he specializes in Yoga therapy, Naturopathy, and wellness management, including Hydrotherapy, Nutrition, and stress management.",
    info: "DR. HITHESH A.V., B.N.Y.S., M.S. (Counseling & Psychotherapy) A seasoned Yoga and Holistic Health Consultant, holding a BNYS (Bachelor of Naturopathy and Yogic Sciences ), with 15+ years of experience. Expertise spans Yoga therapy, Naturopathy, and wellness management, including Hydrotherapy, Chiropractic and Osteopathy, and Nutrition. Skilled in diverse Yoga techniques, meditation, and stress management, and adept at delivering both personalized consultations and corporate wellness sessions.",
  },
];



const Specialists = () => {
  

  return (
    <div className="mx-auto  max-w-full flex flex-col items-center mb-16 ">
      {/* Title */}
      <h2 className="text-[22px] md:text-[40px] lg:text-4xl font-medium text-center mt-10 md:mt-16 mb-8 md:mb-12 ">
        Meet the Specialists
      </h2>

      {/* Specialist Cards - Carousel */}
      <div className="w-full  md:px-2 mx-auto ">
        <div  className=" mx-auto  flex flex-col items-center md:flex-row justify-center gap-5 md:gap-5 ">
          {specialistsData.map((specialist, index) => (
            <SpecialistCard
              key={index}
              sno={index}
              image={specialist.image}
              name={specialist.name}
              heading={specialist.heading}
              info={specialist.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialists;

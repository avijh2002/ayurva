import React, { useEffect } from "react";
import Footer2 from "../components/Footer2";
import docpic1 from "../assets/doc1.png";
import docpic2 from "../assets/doc2.png";
import docpic3 from "../assets/doc3.jpeg";

const SpecialistsPage = () => {
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className=" max-w-full mx-auto flex flex-col  ">
      <div
        id="specialist0"
        className=" px-[35px] md:px-[100px] md:py-[100px] py-[118px]  flex flex-col items-center"
      >
        <h3 className="text-2xl text-24px md:text-[48px] font-semibold ">
          Dr. Sathyavathi B
        </h3>
        <img
          src={docpic1}
          alt="doctor"
          className="h-[167px] w-[167px] md:h-[205px] md:w-[205px] my-[37px] sm:my-[45px] md:my-[50px] rounded-xl  "
        />

        <p className=" text-[14px] md:text-[25px] font-normal text-[#757575] mb-4 text-left md:text-center">
          Dr. Sathyavathi B is a seasoned homeopathic consultant with 24 years
          of dedicated clinical practice. Her extensive experience encompasses a
          broad spectrum of patient care, establishing her as a respected figure
          in the field of homeopathy. Beyond her private practice, Dr.
          Sathyavathi has actively contributed to advancing medical knowledge
          through participation in numerous clinical trials. Her involvement in
          trials focused on complex conditions like oncology, diabetes, and
          orthopaedics ailments underscores her commitment to rigorous
          scientific inquiry and the exploration of homeopathic applications in
          challenging medical scenarios. This experience has honed her ability
          to analyse data, collaborate with multi disciplinary teams, and
          contribute to evidence-based homeopathic practice. Her comprehensive
          understanding of homeopathic principles, coupled with her exposure to
          contemporary medical research, enables her to provide holistic and
          informed patient care. Dr. Sathyavathi's career reflects a blend of
          traditional homeopathic wisdom and a progressive approach to
          integrating complementary medicine with modern scientific
          methodologies.
        </p>
      </div>

      <div
        id="specialist1"
        className=" bg-[#fbfbfb] px-[35px] md:px-[100px] md:py-[100px] py-[118px]  flex flex-col items-center"
      >
        <h3 className="text-2xl text-24px md:text-[48px] font-semibold">
          Dr. Subramanya Rao
        </h3>
        <img
          src={docpic2}
          alt="doctor"
          className="h-[113px] w-[113px] md:h-[205px] md:w-[205px] my-[37px] sm:my-[45px] md:my-[50px] rounded-xl  "
        />
        <p className="  text-[14px] md:text-[25px] font-normal text-[#757575] mb-4 text-right md:text-center">
          Dr. Subramanya Rao, a veteran Ayurvedic practitioner, boasts 34 years
          of rich experience. His dedication extends beyond clinical practice to
          global outreach, promoting Ayurveda through lectures across Moscow,
          the Netherlands, Europe, and Canada. Dr. Rao's commitment to
          scientific validation is evident in his collaborative clinical trials
          on Panchakarma treatment conducted in Moscow with the Institute of
          Traditional Medicine. These trials underscore his efforts to bridge
          traditional wisdom with modern research. His extensive international
          engagement highlights his role as a key ambassador for Ayurveda,
          fostering its understanding and acceptance worldwide.
        </p>
      </div>

      <div
        id="specialist2"
        className=" px-[35px] md:px-[100px] md:py-[100px] py-[118px]  flex flex-col items-center"
      >
        <h3 className="text-2xl text-24px md:text-[48px] font-semibold ">
          Dr. Hithesh A.V.
        </h3>
        <img
          src={docpic3}
          alt="doctor"
          className="h-[167px] w-[167px] md:h-[205px] md:w-[205px] my-[37px] sm:my-[45px] md:my-[50px] rounded-xl  "
        />

        <p className=" text-[14px] md:text-[25px] font-normal text-[#757575] mb-4 text-left md:text-center">
          Dr. Hithesh A.V., B.N.Y.S., M.S. (Counseling & Psychotherapy) A
          seasoned Yoga and Holistic Health Consultant, holding a BNYS (Bachelor
          of Naturopathy and Yogic Sciences ), with 15+ years of experience.
          Expertise spans Yoga therapy, Naturopathy, and wellness management,
          including Hydrotherapy, Chiropractic and Osteopathy, and Nutrition.
          Skilled in diverse Yoga techniques, meditation, and stress management,
          and adept at delivering both personalized consultations and corporate
          wellness sessions.
        </p>
      </div>

      <Footer2 />
    </div>
  );
};

export default SpecialistsPage;

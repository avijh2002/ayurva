import { useState } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is this platform about?",
    answer: {
      intro:
        "Our platform offers personalized healing programs for people suffering from back pain, spondylitis, and sciatica through a combination of Yoga, Diet Plans, and Doctor Consultations.",
      points: [],
      followUp: "",
    },
  },
  {
    question: "How does the platform work?",
    answer: {
      intro: "Our process is simple:",
      points: [
        "Take a Free online Back Pain Assessment – Identify your pain type",
        "Get a Personalized Healing Plan – Tailored diet, yoga, and doctor consultation",
        "Subscribe & Heal – Choose a plan that fits your needs.",
      ],
      followUp: "",
    },
  },
  {
    question: "How does the Back Pain & Spondylitis Assessment work?",
    answer: {
      intro:
        "Our interactive online Assessment helps identify whether you have:",
      points: [
        "General Back Pain (Posture or muscle-related)",
        "Spondylitis (Inflammatory spine condition)",
        "Sciatica (Nerve compression or disc issue)",
      ],
      followUp:
        "Based on your responses, we recommend specific mobility tests and a personalized treatment plan.",
    },
  },
  {
    question: "How long does the assessment take?",
    answer: {
      intro: "The assessment takes just 2–3 minutes to complete.",
      points: [],
      followUp: "",
    },
  },
  {
    question: "Do I need any medical tests before taking the assessment?",
    answer: {
      intro:
        "We have scientifically drafted online self-assessment which reduces the chance of any test by 50%.",
      points: [],
      followUp:
        "However, if needed, our doctors may recommend tests for further diagnosis.",
    },
  },
  {
    question: "How does the Yoga plan help with back pain?",
    answer: {
      intro: "Our therapeutic yoga sessions focus on:",
      points: [
        "Improving spinal flexibility & mobility",
        "Strengthening core & back muscles",
        "Reducing inflammation & pain",
      ],
      followUp: "",
    },
  },
  {
    question: "What type of diet plan will I get?",
    answer: {
      intro: "Your diet plan will be personalized based on your condition:",
      points: [
        "Anti-inflammatory diet for Spondylitis",
        "Nerve-healing foods for Sciatica",
        "Spinal bone & muscle supporting nutrition for chronic back pain",
      ],
      followUp: "",
    },
  },
  {
    question: "Is there a free trial?",
    answer: {
      intro: "Yes! We offer a free back pain assessment and trial sessions.",
      points: [],
      followUp: "",
    },
  },
  {
    question: "Do you offer in-person consultations?",
    answer: {
      intro:
        "While our primary consultations are online, if our doctors suggest an in-person visit, we have tie-ups with clinics and wellness centres where you can book a session for case-specific treatments.",
      points: [],
      followUp: "",
    },
  },
];
const nullText =
  "Here you'll find answers to the most common questions you may have on Ayurva. If you still can't find the answer you're looking for, just Contact us! ";

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (faq) => {
    setSelectedQuestion((prev) =>
      prev?.question === faq.question ? null : faq
    );
  };

  return (
    <section id="faq" className="max-w-full mx-auto md:py-15 md:px-10 ">
      {/* Heading */}
      <h2 className="w-auto mx-auto  md:text-[40px] font-semibold text-black text-center mb-[20px] md:mb-[53px]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col items-center mx-3 md:mx-0  ">
        {/* Left: Questions List */}
        <div className="w-auto lg:w-3/4 mx-6 md:mx-0     border-gray-300">
          {faqData.map((faq, index) => (
            <div className=" w-full border-b-[0.5px] border-[#989898]  " key={index}>
              {/* Question Section */}
              <div
                onClick={() => toggleQuestion(faq)}
                className={`cursor-pointer my-2 py-4  rounded-md transition-all duration-300 ${
                  selectedQuestion?.question === faq.question
                    ? "text-black font-semibold"
                    : "text-gray-400"
                } flex justify-between items-center`}
              >
                <div className="w-full text-[15px] md:text-[20px] flex justify-between items-center font-[400] leading-none ">
                  <p className="md:w-[525px] ">{faq.question}</p>

                  <span className=" ">
                  {selectedQuestion?.question === faq.question ? (
                    <Minus size={32} />
                  ) : (
                    <Plus size={32} />
                  )}
                </span>
                </div>
                
                {/* <span className="hidden md:block mr-[63px]">
                  <ChevronRight size={32} />
                </span> */}
              </div>

              {/* Collapsible Answer Section */}
              <div
                className={`overflow-hidden  mb-2 md:mb-[20px] transition-[max-height] rounded-[25px] duration-500 text-[15px]  bg-[#283618] ${
                  selectedQuestion?.question === faq.question
                    ? "max-h-[500px] opacity-100 mt-2 md:py-[10px]"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className=" p-4 rounded-md">
                  <p className="text-[#F2EFE7]">{faq.answer?.intro}</p>
                  {faq.answer?.points?.length > 0 && (
                    <ul className="list-disc pl-5 mt-2">
                      {faq.answer.points.map((point, i) => (
                        <li key={i} className="text-[#F2EFE7]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {faq.answer?.followUp && (
                    <p className="mt-4 text-[#F2EFE7]">{faq.answer.followUp}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-4 p-4 text-black flex gap-1 md:flex-col text-[15px]  md:text-[20px]">
            <p>Need further Assistance? </p>
            <a href="/contact" className="text-blue-500">
              Contact Us →
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Faq;

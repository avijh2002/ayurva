import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "What is the personalized treatment plan?",
    answer:
      "Our personalized treatment plan combines Yoga, Diet, and Alternative Medicine tailored specifically to your health needs. It’s designed based on your unique health data, including progress tracking and a detailed questionnaire, ensuring that you receive a treatment plan suited to your condition and goals.",
  },
  {
    question: "How do I book online sessions with doctors and trainers?",
    answer:
      "You can book online sessions through our platform by selecting a suitable time slot with our certified doctors and trainers.",
  },
  {
    question: "Do I need to visit a hospital to access these services?",
    answer:
      "No, all our services are available online, allowing you to receive professional guidance from the comfort of your home.",
  },
];

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(faqData[0]); // Default to the first question

  return (
    <section id="faq" className="max-w-[1280px] mx-auto ">
      {/* Heading */}
      <h2 className="h-[48px] w-[540px] mx-auto text-[40px] font-semibold text-black text-center mt-[55px] mb-[113px]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row">
        {/* Left: Questions List */}
        <div className="w-auto  ml-[76px] mr-[59px] mb-[106px] border-r border-gray-300">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => setSelectedQuestion(faq)}
              className={`cursor-pointer border-b  ${
                selectedQuestion.question === faq.question
                  ? "text-black font-semibold"
                  : "text-gray-400"
              } flex justify-between items-center`}
            >
              <div
                className="w-[501px] h-[68px] text-[28px] font-[400]
               tracking-normal leading-none my-[31px]"
              >
                {faq.question}
              </div>

              <span className="mr-[63px]">
                <ChevronRight size={32} />
              </span>
            </div>
          ))}
          <div className="mt-4 text-black flex-col text-[20px]">
            <p>Need further Assistance? </p>
            <a href="/contact" className="text-blue-500">
              Contact Us →
            </a>
          </div>
        </div>

        {/* Right: Answer Box */}
        <div className="w-[393px] h-[451px] bg-[#283618] font-light text-[#F2EFE7] text-[24px] px-[47px] 
        py-[39px] rounded-xl mr-[77px] mb-[138px] leading-[100%] tracking-[0]">
          {selectedQuestion.answer}
        </div>
      </div>
    </section>
  );
};

export default Faq;

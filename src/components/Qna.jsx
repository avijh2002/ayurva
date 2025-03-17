import React, { useState,useEffect } from "react";
import Qnabox from "./Qnabox";
import { FaAngleLeft } from "react-icons/fa";
import QuizButton from "./QuizButton";
import fetchQuestions from "../config/fetchQuestions";
import { Loader } from "lucide-react";

// const questions = [
//   {
//     question: "Where do you experience pain or stiffness?",
//     options: ["Shoulder and Neck", "Lower Back", "Knee Pain"],
//   },
//   {
//     question: "How severe is your pain on a scale of 1 to 10?",
//     options: ["Mild (1-3)", "Moderate (4-6)", "Severe (7-10)"],
//   },
//   {
//     question: "How long have you been experiencing this pain?",
//     options: ["Less than a week", "1-3 months", "More than 3 months"],
//   },
// ];

const Qna = ({ onComplete }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function loadQuestions() {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions)
      console.log("Fetched Questions at qna:", fetchedQuestions[0]);
    }

    loadQuestions();
  }, []);

  
 
  const totalQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [bg, setBg] = useState(null);

  const progress = (answered / totalQuestions) * 100;

  const handleNext = () => {
    if (bg === null) {
      alert("Please select an option before proceeding!");
      return;
    }

    if (currentQuestion < totalQuestions - 1)
      {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered((prev) => prev + 1);
      setBg(null);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswered((prev) => prev - 1);
      setBg(null); 
    }
  };
  if (questions.length === 0) return <div className="mt-10 h-full flex justify-center items-center"><Loader/></div>;

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col h-auto pt-[41px]">
      <div className="w-auto flex flex-col gap-2 justify-between items-center text-center mb-[27px] mx-[42px]">
        <p className="text-[40px] text-black font-medium mb-[22px]">
          2-Minute At-Home Pain Assessment
        </p>
        <p className="text-[#858585] text-[20px] font-normal">
          Answer simple questions about your pain levels, lifestyle, and
          symptoms. This will help us understand your needs better. After
          completing the test, you will receive an initial pain analysis and
          personalized recommendations.
        </p>
      </div>
      <div className="w-auto mx-[49px] h-auto rounded-xl bg-[#283618] flex-col items-center justify-center p-8 pb-[75px] mb-[55px]">
        <div className="flex items-center mb-[30px]">
          <button
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center mx-auto"
            onClick={handlePrevious}
            disabled={currentQuestion === 0} // Disable on first question
          >
            <FaAngleLeft className="text-lg font-extralight text-[#283618]" />
          </button>

          {/* Progress Bar */}
          <div className="w-full h-5 rounded-full overflow-hidden flex justify-center items-end">
            <div className="w-2/3 h-1.5 bg-[#616161] rounded-full overflow-hidden">
              <div
                className="bg-white rounded-full transition-all duration-300 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-3xl text-white">
          <p>{questions[currentQuestion].question}</p>
        </div>

        <div className="flex flex-col items-end justify-center gap-[61px]  mt-[58px] w-fit mx-auto">
          <div className="flex  gap-[31px] ">
            {questions[currentQuestion].options.map((text, index) => (
              <Qnabox
                key={index}
                sno={index}
                bg={bg}
                data={text}
                setBg={setBg}
              />
            ))}
          </div>

          <div className="mr-[27px]">
            <QuizButton onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;

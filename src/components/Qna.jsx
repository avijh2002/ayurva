import React, { useState, useEffect } from "react";
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
  const [currentQuestionID, setCurrentQuestionID] = useState("Q1");
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions(currentQuestionID);
      setQuestion(data);
      console.log("qna:", data);
    };
    loadQuestions();
  }, [currentQuestionID]);

  useEffect(() => {
    if (question?.result) {
      onComplete();
    }
  }, [question, onComplete]);
  

  const totalQuestions = 10;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(0);
  const [bg, setBg] = useState(null);

  const progress = (answered / totalQuestions) * 100 || 0;

  const handleNext = () => {
    if (bg === null) {
      alert("Please select an option before proceeding!");
      return;
    }
    console.log(selectedOption);
    setCurrentQuestionID(question?.next?.[selectedOption]);
    setCurrentQuestion((prev) => prev + 1);
      setAnswered((prev) => prev + 1);
      setBg(null);
    
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswered((prev) => prev - 1);
      setBg(null);
    }
  };

  if (!question)
    return (
      <div className="mt-10 h-full flex justify-center items-center">
        <Loader />
      </div>
    );

   
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col h-auto pt-[41px]">
      <div className="w-auto flex flex-col gap-2 justify-between items-center text-center mb-[27px] mx-4 lg:mx-[42px]">
        <p className=" text-[28px] lg:text-[40px]  text-black font-medium mb-[22px]">
          2-Minute At-Home Pain Assessment
        </p>
        <p className="text-[#858585] text-sm md:text-[20px]  md:mx-11 sm:text-[16px] lg:text-[20px] font-normal">
          Answer simple questions about your pain levels, lifestyle, and
          symptoms. This will help us understand your needs better. After
          completing the test, you will receive an initial pain analysis and
          personalized recommendations.
        </p>
      </div>

      <div className="w-auto mx-4 lg:mx-[49px] h-auto rounded-xl bg-[#283618] flex-col items-center justify-center p-8 pb-[75px] mb-[55px]">
        <div className="flex items-center mb-[30px]">
          <button
            className="hidden w-11 h-11 rounded-full bg-white md:flex items-center justify-center"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <FaAngleLeft className="text-lg font-extralight text-[#283618]" />
          </button>

          <div className="w-full mx-5 h-5 rounded-full overflow-hidden">
            <div className="w-full h-1.5 bg-[#616161] rounded-full">
              <div
                className="bg-white rounded-full transition-all duration-300 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-xl text-center sm:text-2xl lg:text-3xl text-white">
          <p>{question.question}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:justify-center sm:bg-pink-400 md:justify-center md:bg-blue-500 sm:gap-[31px] md:gap-1/20 mt-[58px] bg-amber-400">
          {question?.options?.map((option, index) => (
            <Qnabox
              key={option}
              onClickHandler={() => setSelectedOption(option)}
              sno={index}
              bg={bg}
              data={option}
              setBg={setBg}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end md:mr-[27px]">
          <QuizButton onClick={() => handleNext()} />
        </div>
      </div>
    </div>
  );
};

export default Qna;

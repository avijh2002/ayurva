import React, { useState } from "react";
import Qnabox from "./Qnabox";
import { data } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import QuizButton from "./QuizButton";

const Qna = () => {
  const totalQuestions = 3;
  const [answered, setAnswered] = useState(1);

  const progress = (answered / totalQuestions) * 100;

  const boxData = ["Shoulder and Neck", "Lower Back", "Knee Pain"];
  const [bg, setBg] = useState(null);
  return (
    <div className="max-w-[1280px]  mx-auto flex flex-col  h-auto pt-[41px] ">
      <div className="w-auto flex flex-col gap-2 justify-between items-center text-center mb-[27px] mx-[42px] ">
        <p className="text-[40px] text-black font-medium mb-[22px]">
          {" "}
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
          <div
            className={`w-11 h-11 rounded-full bg-white  flex items-center justify-center mx-auto `}
          >
            <FaAngleLeft
              className={` text-lg font-extralight text-[#283618]`}
            />
          </div>

          <div className="w-full h-5  rounded-full overflow-hidden flex justify-center items-end">
            <div className="w-2/3 h-1.5 bg-[#616161] rounded-full overflow-hidden ">
              {/* Dynamic Progress Line */}
              <div
                className="bg-white rounded-full transition-all duration-300 h-full"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl  text-white">
          <p>Where do you experience pain or stiffness?</p>
        </div>
        <div className="flex flex-col items-end justify-center gap-[61px] mt-[58px] mx-auto">
          <div className="flex items-center justify-start gap-[31px]">
            {boxData.map((text, index) => (
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
            <QuizButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;

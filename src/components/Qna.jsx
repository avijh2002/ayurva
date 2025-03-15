import React, { useState } from "react";
import Qnabox from "./Qnabox";
import { data } from "react-router-dom";
import Buttonright from "./Buttonright";

const Qna = () => {
  const boxData = ["Shoulder and Neck", "Lower Back", "Knee Pain"];
  const [bg, setBg] = useState(null);
  return (
    <div className="max-w-[1280px]  mx-auto flex flex-col gap-6 h-auto">
      <div className="w-full flex flex-col gap-2 justify-between items-center text-center">
        <p className="text-3xl text-black font-semibold"> 2-Minute At-Home Pain Assessment</p>
        <p className="text-[#858585] text-xl">
          Answer simple questions about your pain levels, lifestyle, and
          symptoms. This will help us understand your needs better. After
          completing the test, you will receive an initial pain analysis and
          personalized recommendations.
        </p>
      </div>
      <div className="w-full h-[731px] rounded-xl bg-[#283618] flex-col items-center justify-center space-y-22 p-8">
        <div className="flex items-center justify-center text-3xl mt-[158px] text-white">
          <p>Where do you experience pain or stiffness?</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-3 p-">
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
          <div className="flex justify-end w-full mr-[400px]">
            <Buttonright  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;

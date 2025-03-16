import React, { useState } from "react";
import Qna from "../components/Qna";
import Footer2 from "../components/Footer2";
import Result from "../components/Result";
import { useEffect } from "react";

const Assessment = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      {isCompleted? <Result  reset={() => setIsCompleted(false)} /> : <Qna onComplete={() => setIsCompleted(true)} />}
      <Footer2 />
    </div>
  );
};

export default Assessment;

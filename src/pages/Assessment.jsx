import React, { useState, useEffect } from "react";
import Qna from "../components/Qna";
import Footer2 from "../components/Footer2";
import Result from "../components/Result";
import { addResponses,updateResponse } from "../config/addResponses";

const Assessment = () => {
  const [result, setResult] = useState(null);
  const [responses, setResponses] = useState(null);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [docId, setDocId] = useState(null);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getResult = (result, responses) => {
    setResult(result);
    setResponses(responses);
  };

  const handleReset = () => {
    setResult(null);
    setResponses(null);
  };

  const handleEmailSubmit = async (email) => {
    setEmail(email);
    const data = {  email, mobile, result, responses, timestamp: new Date().toISOString() };

    try {
      const id = await addResponses(data);
      setDocId(id);
      console.log("Data saved with ID:", id);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleMobileSubmit = async (mobile) => {
    setMobile(mobile);

    if (!docId) {
      console.error("Document ID not found. Make sure email was submitted first.");
      return;
    }

    try {
      await updateResponse(docId, { mobile });
      console.log("Mobile updated successfully");
    } catch (error) {
      console.error("Error updating mobile:", error);
    }
    handleReset();
  };

  return (
    <div>
      {result ? (
        <Result
          result={result}
          responses={responses}
          reset={handleReset}
          handleEmailSubmit={handleEmailSubmit}
          handleMobileSubmit={handleMobileSubmit}
        />
      ) : (
        <Qna onComplete={getResult} />
      )}
      <Footer2 />
    </div>
  );
};

export default Assessment;

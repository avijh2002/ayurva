import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import ResultButton from "./ResultButton";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EmailInput = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    onEmailSubmit(email);
  };

  return (
    <div className="max-w-[350px] mx-auto md:w-[515px] p-6 bg-white rounded-[21px]">
      <p className="text-center text-xs md:text-[24px] font-medium mb-6">
        Enter Your Email To Get Your Result
      </p>
      <form onSubmit={handleFormSubmit} className="w-full">
        <input
          className="h-8 w-full md:h-14 py-4 pl-5 mb-4 rounded-lg border border-[#A8A8A8] text-gray-700"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className={`w-full h-12 bg-[#283618] text-white rounded-2xl ${
            !email ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!email}
        >
          Save
        </button>
      </form>
    </div>
  );
};

const Result = ({
  result,
  responses,
  reset,
  handleEmailSubmit,
  handleMobileSubmit,
}) => {
  const [showResult, setShowResult] = useState(false);
  const [mobile, setMobile] = useState(" ");
  const path = useNavigate();

  const handleHome = () => {
    path("/");
  };

  const handleEmailSubmitSuccess = (email) => {
    handleEmailSubmit(email);
    setShowResult(true);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobile && mobileRegex.test(String(mobile).trim());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateMobile(mobile)) {
      toast.error("Please enter a valid mobile number.");
      return;
    }
    await handleMobileSubmit(mobile);
    toast.success("Mobile number submitted successfully!");
    handleHome();
  };
  

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col h-auto pt-[41px] px-4 md:px-0">
      <div className="w-full md:mx-[49px] h-auto rounded-xl bg-[#283618] flex-col items-center justify-center p-6 md:p-8 pb-[75px] mb-[55px]">
        <div className="flex items-center mb-[30px]">
          <button
            onClick={reset}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center"
          >
            <FaAngleLeft className="text-lg font-extralight text-[#283618]" />
          </button>
          <div className="w-2/3 mx-auto flex justify-center items-center text-center">
            <p className="text-[#909090] text-2xl md:text-[32px] font-medium">
              Analysis and Recommendation
            </p>
          </div>
        </div>

        {showResult ? (
          <>
            <div className="flex items-center justify-center text-center  text-base md:text-3xl">
              <p className="text-white">{result}</p>
            </div>
            <div className="flex flex-col-reverse items-center gap-2.5 sm:flex-row justify-center md:gap-[36px] rounded-[21px] mt-10 w-full">
              <div className="max-w-[350px] mx-auto md:w-[515px] p-6 bg-white rounded-[21px]">
                <p className="text-center text-xs md:text-[24px] font-medium mb-6">
                  For Expert Consultation, enter your mobile number and one of
                  our team will get in touch
                </p>
                <form onSubmit={handleFormSubmit} className="w-full">
                  <input
                    className="h-8 w-full md:h-14 py-4 pl-5 mb-4 rounded-lg border border-[#A8A8A8] text-gray-700"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <button className="w-full h-12 bg-[#283618] text-white rounded-2xl">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <EmailInput onEmailSubmit={handleEmailSubmitSuccess} />
        )}

        <div onClick={handleHome} className="mt-[24px]">
          <ResultButton />
        </div>
      </div>
    </div>
  );
};

export default Result;

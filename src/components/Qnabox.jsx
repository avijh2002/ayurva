const Qnabox = ({ sno ,data, bg,setBg }) => {
  return (
    <div
      className={`w-[328px] h-[220px] rounded-xl text-xl font-semibold  flex items-center justify-center ${
        bg === sno ? "bg-[#606C38] text-white" : "bg-white text-black"
      }`} onClick={() => bg ===sno ? setBg(null) : setBg(sno)}
    >
      <p>{data}</p>
    </div>
  );
};

export default Qnabox;

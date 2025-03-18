const Qnabox = ({ sno, data, bg, setBg }) => {
  return (
    <div
      className={`w-2/5 aspect-[3/2] p-0.5 md:w-[328px] md:h-[220px] text-xs rounded-xl md:text-xl font-semibold flex items-center justify-center ${
        bg === sno ? "bg-[#606C38] text-white" : "bg-white text-black"
      }`}
      onClick={() => (bg === sno ? setBg(null) : setBg(sno))}
    >
      <p>{data}</p>
    </div>
  );
};

export default Qnabox;

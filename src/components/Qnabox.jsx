const Qnabox = ({ onClickHandler,sno, data, bg, setBg }) => {
  const handleclick=(sno)=>{
    bg === sno ? setBg(null) : setBg(sno);
    onClickHandler()
  }
  return (
    <div
      className={`w-[calc(50%-5px)] text-center whitespace-normal aspect-[3/2] md:w-[328px] md:h-[220px] text-xs rounded-[20px] sm:text-xl font-semibold flex items-center justify-center ${
        bg === sno ? "bg-[#606C38] text-white" : "bg-white text-black"
      }`}
      onClick={() => handleclick(sno)}
    >
      <p>{data}</p>
    </div>
  );
};

export default Qnabox;

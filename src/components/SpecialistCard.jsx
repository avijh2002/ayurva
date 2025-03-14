import star from "../assets/star.png";


const SpecialistCard = ({ image, rating, name, description, specialty }) => {
  const intRating = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const opacity = parseInt((rating - intRating) * 100);

  return (
    <div className="w-[365px] h-[562px] bg-[#F8F8F8] shadow-lg rounded-2xl px-[21px] py-[14px]
     flex flex-col items-center text-center border border-gray-200">
   
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-xl object-cover mb-[27px]"
      />

      <div className="flex justify-center gap-2 text-[#CABD00] h-[22px] w-auto mb-[32px]">
        {[...Array(intRating)].map((_, i) => (
        <img key={i} src={star}alt="Banner" className="w-full h-full  my-auto object-fill" />
        ))}
        {hasHalfStar && (
          
          <img key={i} src={star}alt="Banner" className="w-full h-full  my-auto object-fill"  style={{ opacity: opacity / 100 }}/>
        )}
      </div>


      <h3 className="w-[90px] h-[29px] font-semibold text-black text-2xl">{name}</h3>


      <p className="w-[295px] h-[54px] text-[15px] text-[#757575] mt-[14px] mx-[35px] mb-[76px]">{description}</p>

      <button className="text-[20px] text-[#283618] px-6 py-2 border border-gray-400 rounded-full font-medium hover:bg-gray-100 transition">
        {specialty}
      </button>
    </div>
  );
};

export default SpecialistCard;

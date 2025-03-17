import star from "../assets/star.png";

const SpecialistCard = ({ image, rating, name, description, specialty }) => {
  const intRating = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const opacity = parseInt((rating - intRating) * 100);

  return (
    <div className="max-w-[365px] w-full bg-[#F8F8F8] shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-200">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full aspect-[4/3] rounded-xl object-cover mb-6"
      />

      {/* Star Rating */}
      <div className="flex justify-center gap-1 text-[#CABD00] mb-6">
        {[...Array(intRating)].map((_, i) => (
          <img key={i} src={star} alt="star" className="w-5 h-5" />
        ))}
        {hasHalfStar && (
          <img src={star} alt="half-star" className="w-5 h-5 opacity-50" />
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-black">{name}</h3>

      {/* Description */}
      <p className="text-sm text-[#757575] mt-4 mb-6">{description}</p>

      {/* Specialty Button */}
      <button className="text-lg px-6 py-2 border border-gray-400 rounded-full font-medium hover:bg-gray-100 transition">
        {specialty}
      </button>
    </div>
  );
};

export default SpecialistCard;

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ image, name, graduation, description }) => {
  return (
    <div className="text-black p-8 h-[446px] w-[400px] bg-white1 rounded-2xl max-sm:h-[250px] max-sm:w-[200px] max-sm:p-4">
      {/* Image */}
      <div className="flex gap-6 flex-col">
        <div className="flex gap-4 items-center">
          <img
            src={image}
            alt="profile"
            className="h-[130px] w-[130px] rounded-full max-sm:h-[40px] max-sm:w-[40px]"
          />
          <div className="font-semibold text-[20px] max-sm:text-[10px]">
            <p>{name}</p>
            <p>{graduation}</p>
          </div>
        </div>
        <p className="text-[20px] leading-[24px] font-light max-sm:text-[10px] max-sm:leading-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

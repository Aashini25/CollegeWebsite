import Scholarship_1 from "../assets/images/Scholarship_1.jpg";

const Scholarship = () => {
  return (
    <div className="mx-16 max-lg:max py-14 max-sm:py-12">
      <div className="m-6 max-lg:text-center max-lg:flex-center max-lg:flex-col">
        <p className="text-[56px] max-lg:text-[42px] max-sm:text-[30px] leading-[35px] max-lg:leading-[28px] max-sm:leading-[20px] font-semibold border-b-[10px] max-sm:border-b-[6px] border-yellow w-max">
          Scholarship program
        </p>
        <p className="text-[22px] max-lg:text-[18px] max-sm:text-[12px] font-medium py-3">
          Where Passion Meets Purpose: Secure Your Future with Our Scholarships.
        </p>
      </div>

      <img
        src={Scholarship_1}
        alt=""
        className="bg-blue h-[580px] max-lg:h-[450px] max-sm:h-[150px] border-1 border-blue my-8 max-sm:my-2 w-full"
      />

      <div className="flex-center flex-col gap-10 max-lg:gap-4 max-sm:gap-0">
        <p className="font-medium text-center text-[20px] max-lg:text-[14px] max-sm:text-[10px] w-[70%] max-sm:w-full">
          The college will provide around 30% of scholarships to some brilliant
          <br />
          students on all courses offered by the college
        </p>
        <button className="w-[180px] h-[43px] rounded-2xl shadow-xl bg-orange font-semibold text-white text-center max-lg:scale-75 max-sm:scale-50">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Scholarship;

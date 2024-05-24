import rightArrow from "../assets/icons/right-arrow.svg";
import img from "../assets/images/Hero_img.png";

const Hero = ({ onApplyNowClick }) => {
  return (
    <div className="flex justify-between items-center px-14 pt-10 max-md:px-0 max-md:block">
      {/**Hero Left */}
      <div className="pl-12  max-md:pl-0  max-md:px-2 max-md:flex-center max-md:flex-col">
        <div className="tracking-tight text-[64px] max-lg:text-[48px] max-sm:text-[40px] font-[600] leading-[74px] max-lg:leading-[60px] max-sm:leading-[50px] mb-4">
          <p className="w-full max-md:text-center">
            Let’s start your <br />
            education journey at
          </p>
          <div className="py-2">
            <p className="tracking-wide max-sm:tracking-normal border-b-[10px] w-max max-lg:border-b-[9px] max-sm:border-b-[8px]  border-b-yellow leading-[42px] max-lg:leading-[35px] max-sm:leading-[25px]">
              Presidency College
            </p>
          </div>
        </div>
        <div>
          <p className="text-[16px] max-md:text-[14px] max-sm:text-[12px] leading-[19.5px] max-sm:leading-[15px] font-[500] max-sm:font-normal max-md:text-center max-md:mx-14 tex-wrap ">
          Presidency College Bangalore is an autonomous college ranked among the best in India.
            <br />It offers undergraduate, postgraduate and research programs in commerce, business administration<br />computer applications and humanities.The college has a green campus with well-equipped labs,
            <br/>a vast library and student hostels.The college focuses on providing <br/>a holistic learning experience to its students.
          </p>
        </div>
        <div className="p-2 h-12 flex justify-between bg-orange w-48 mt-14 rounded-full max-md:hidden">
          <button className="text-center w-full text-white font-semibold"onClick={onApplyNowClick}>
            Get started
          </button>
          <img src={rightArrow} alt="" />
        </div>
        <div className="p-2 h-9 max-md:flex items-center justify-between bg-orange w-32 my-6 rounded-full hidden">
          <button
            className="text-[12px] text-center w-full text-white font-semibold"
            onClick={onApplyNowClick}
          >
            Apply now
          </button>
          <img src={rightArrow} alt="" className="h-6 w-6" />
        </div>
      </div>
      {/* Hero Right */}
      <div className="max-lg:hidden">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;

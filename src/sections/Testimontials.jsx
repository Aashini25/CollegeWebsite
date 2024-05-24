import TestimonialCard from "../components/TestimonialCard";
import { profile, recruiters } from "../constants/content";
import recruitImg from "../assets/images/recruiters.png";

const Testimontials = () => {
  return (
    <div className="mx-16 py-14 max-sm:mx-6 max-sm:py-6">
      <div className="ml-12 max-sm:ml- max-sm:w-full">
        <p className="text-[56px] leading-[35px] font-semibold border-b-[10px] max-sm:border-b-[6px] border-yellow w-max max-sm:text-[30px] max-sm:leading-[20px] max-sm:text-center">
          What graduates
        </p>
        <p className="mt-4 text-[56px] leading-[35px] font-semibold max-sm:text-[30px] max-sm:leading-[0px] max-sm:w-[330px]">
          say about us
        </p>
      </div>

      <div className="flex overflow-x-scroll hide-scroll-bar gap-2 my-16 p-8 pt-14 bg-blue text-white rounded-2xl max-sm:my-9 max-sm:p-4 max-sm:py-10 ">
        <div className="flex flex-nowrap gap-6 max-sm:gap-3">
          {profile.map((item) => (
            <TestimonialCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      <p className="mt-16 p-8 text-[60px] font-semibold text-center max-sm:text-[26px]">
        Top recruiters
      </p>
      <div className="py-[70px] h-[80px] flex items-center justify-around border-y-[#B2B2B2] border-y-[1px] max-sm:py-10">
        {recruiters.map((src) => (
          <img
            src={src}
            alt="Top recruiters"
            className="h-[50px] max-sm:h-[20px]"
            key={src}
          />
        ))}
      </div>
      <img src={recruitImg} alt="Top recruiters" />
    </div>
  );
};

export default Testimontials;

/* eslint-disable react/no-unknown-property */
import rank from "../assets/images/ranked.png";
import { milestones, ranked,} from "../constants/content";

const Rank = () => {
  return (
    <div className="p-14 max-lg:p-12 px-16 max-lg:px-10 max-sm:px-8 pb-[40px] mt-16 max-lg:mt-8 max-sm:mt-0">
      {/* 11 Rank */}
      <div className="p-10 max-lg:p-8  max-sm:p-0 py-16 max-lg:py-10 max-sm:py-6 flex flex-col max-lg:flex-center text-white  w-full bg-yellow rounded-2xl">
        <div className="flex gap-2 items-baseline">
          <p className="text-[150px] max-lg:text-[100px] max-sm:text-[60px] leading-[80px] max-sm:leading-[60px] font-[600] ">
            Ranked#11
          </p>
          <img src={rank} alt="" className="max-lg:h-[100px] max-lg:hidden" />
        </div>
        <p className=" p-2 max-lg:text-center text-[36px] max-lg:text-[28px] max-sm:text-[16px] font-[500] leading-[50px] max-lg:leading-[30px] max-sm:leading-[20px]">
          India’s Top-ranked private autonomous ASC colleges (2024)
        </p>
      </div>
      {/* Ranked Marquee */}
      <div className="bg-blue text-white my-8 max-lg:my-4 max-sm:my-2 rounded-2xl">
        <marquee direction="right" scrollamount="30">
          <div className="flex gap-14 py-5 max-lg:py-3 max-sm:py-0 pt-10">
            {ranked.map((rank) => (
              <div key={rank.rank} className="m-2">
                <h2 className="text-[64px] max-lg:text-[40px] max-sm:text-[30px] font-bold leading-[50px] max-lg:leading-[40px]">
                  {rank.rank}
                </h2>
                <p className="text-[24px] max-lg:text-[20px] max-sm:text-[18px] font-normal w-[350px] leading-[30px] max-lg:leading-[25px] max-sm:leading-[20px] text-wrap">
                  {rank.desc}
                </p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
      {/* Milestones */}
      <div className="flex justify-center gap-4 py-10">
        {milestones.map((milestone) => (
          <div key={milestone}>
            <img src={milestone.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rank;

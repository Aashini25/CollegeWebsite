import { post } from "../constants/content";
import insta from "../assets/icons/instagram.svg";

const CampusLife = () => {
  const handleSeeMoreClick = () => {
    window.open("https://www.instagram.com/life_at_presidency?igsh=cWdjNnV3aGlpbW50");
  };

  return (
    <div className="mt-[100px] p-4 max-sm:p-4 md:p-16 max-sm:text-center">
      <div className="max-sm:w-full max-sm:flex-center max-sm:flex-col">
        <p className="text-[32px] sm:text-[40px] md:text-[56px] leading-[35px] font-semibold border-b-[10px] border-yellow w-max max-sm:border-b-[6px]">
          Campus Life
        </p>
        <p className="py-2 text-[24px] max-sm:text-[40px] max-md:text-[56px] font-medium w-full max-sm:w-[400px]">
          An international community in the heart of Bengaluru
        </p>
      </div>
      <p className="text-[20px] max-sm:text-[12px] max-md:text-[36px] mb-10 leading-[28px] max-sm:leading-[20px]  font-normal w-full sm:w-[998px]">
        Presidency College (Autonomous) <br /> (Re-Accredited by NAAC with A+
        Grade) boast of its green and clean campus which infuses positive vibes
        throughout.
      </p>

      {/* Posts */}
      <div className="py-8 sm:py-12 md:py-16 w-full">
        <div className="flex justify-center flex-wrap ">
          {post.map((item) => (
            <div
              key={item.id}
              className="m-2 relative w-[90%] sm:w-[45%] md:w-[350px] h-[250px] sm:h-[300px] md:h-[378px] "
            >
              <img
                src={item.image}
                alt="post"
                className="m-2 h-full w-full z-10 overflow-hidden"
              />
              <div className="absolute bottom-2 left-6 z-0 flex gap-2 items-center">
                <img className="" src={insta} alt="username" />
                <p className="text-[#00000080]">@presidency</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full p-6">
          <button
            className="h-12 w-32 text-center p-2 rounded-full text-white font-semibold bg-orange"
            onClick={handleSeeMoreClick}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;

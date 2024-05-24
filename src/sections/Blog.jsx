import rightArrow from "../assets/icons/right-arrow-outline.svg";
import leftArrow from "../assets/icons/left-arrow-outline.svg";
import { blog } from "../constants/content";

const Blog = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 px-4 sm:px-8 md:px-14">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-0">
        {/* Title */}
        <div className="mb-4 sm:mb-0">
          <p className="text-[24px] sm:text-[32px] md:text-[40px] font-medium">
            Read Our Blog{" "}
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur..
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2 sm:gap-3 max-sm:hidden">
          <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] flex-center rounded-full border-[1px] border-[#B2B2B2] flex items-center justify-center">
            <img src={leftArrow} alt="Left Arrow" />
          </button>
          <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] flex-center rounded-full bg-blue flex items-center justify-center">
            <img src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>

      {/* Blogs */}
      <div className="overflow-x-scroll hide-scroll-bar gap-2 my-8 sm:my-12 md:my-16 p-4 sm:p-6 md:p-8 pt-8 sm:pt-12 md:pt-14">
        <div className="flex flex-nowrap gap-4 sm:gap-6 max-sm:flex-col max-sm:items-center">
          {blog.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[350px] md:w-[400px] flex flex-col gap-2 m-2"
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="rounded-2xl h-[150px] sm:h-[180px] md:h-[200px]"
                />
              </div>
              <div>
                <p className="text-[18px] max-sm:text-[20px] md:text-[24px] font-medium">
                  {item.heading}
                </p>
                <div className="flex justify-between items-center">
                  <p className="w-[220px] sm:w-[280px] md:w-[320px] text-[14px] sm:text-[16px] md:text-[18px]">
                    {item.desc}
                  </p>
                  <button className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] flex-center rounded-full bg-blue flex items-center justify-center">
                    <img src={rightArrow} alt="Right Arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* BlogCard */}
        </div>
      </div>
    </div>
  );
};

export default Blog;

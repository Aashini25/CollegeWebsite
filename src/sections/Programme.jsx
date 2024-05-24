import posterACCA from "../assets/images/posterACCA.jpg";
import posterBBA from "../assets/images/posterBBA.jpg";
import posterAIML from "../assets/images/posterAIML.jpg";
import posterMCA from "../assets/images/posterMCA.jpg";
import posterBA from "../assets/images/posterBA.jpg";

import arrow from "../assets/icons/right-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";

const Programme = ({onApplyNowClick}) => {
  return (
    <div className="mx-16 py-14">
      <div className="m-6 max-lg:text-center max-lg:flex-center max-lg:flex-col">
        <p className="text-[56px] max-lg:text-[42px] max-sm:text-[30px] leading-[35px] max-lg:leading-[28px] max-sm:leading-[20px] font-semibold border-b-[10px] max-sm:border-b-[6px] border-yellow w-max">
          Programme we offer
        </p>
        <p className="text-[22px] max-lg:text-[18px] max-sm:text-[12px] font-medium py-3">
          Our pragmatic approach teach you advanced skills with lots of personal
          support.
        </p>
      </div>

      <div className="max-lg:flex-center max-lg:flex-col">
        {/* Posters 1*/}
        <div className="flex gap-12 items-end my-10 max-lg:my-8 max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <div className="w-[720px] h-[730px] max-lg:w-[600px] max-lg:h-[650px]  rounded-2xl p-6 bg-[#FFDD81] mt-16 ml-8 max-lg:mt-0 max-lg:ml-0 max-sm:h-[400px] max-sm:w-[360px] max-sm:p-3">
            <img
              src={posterACCA}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4 max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold  ">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
            <p className="text-[48px]">B.com ACCA</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" onClick={onApplyNowClick} />
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="hidden max-lg:block max-sm:w-full ">
            <p className="text-[24px] text-red font-semibold md:w-[600px] leading-[30px] max-sm:text-[15px] max-sm:w-[350px] max-sm:leading-[20px] ">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>

            <div className="flex w-[600px] justify-between items-center max-sm:w-[350px] max-sm:mt-8">
              <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[20px]">
                B.Com ACCA+
              </p>
              <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full max-sm:w-32 max-sm:h-8">
                <button className="text-center w-full text-white font-semibold max-sm:flex-center" onClick={onApplyNowClick}>
                  Apply now
                </button>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Posters 2*/}
        <div className="flex  flex-row-reverse  max-lg:flex-col max-lg:items-center gap-12 max-lg:gap-6 items-end my-10 max-lg:my-8">
          <div className="w-[720px] h-[730px]  rounded-2xl p-6 bg-red mt-16 ml-10 max-lg:mt-0 max-lg:ml-0 max-lg:w-[600px] max-lg:h-[650px] max-sm:h-[400px] max-sm:w-[360px] max-sm:p-3">
            <img
              src={posterBBA}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-[400px] h-[550px] font-semibold text-white bg-yellow rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Business Administration Aviation & Logistics
            </p>
            <p className="text-[48px]">BBA A&L</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" 
                className="w-[70px]" 
                onClick={onApplyNowClick}
                />
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="hidden max-lg:block ">
            <p className="text-[24px] text-red font-semibold md:w-[600px] leading-[30px] max-sm:text-[15px] max-sm:w-[350px] max-sm:leading-[20px] ">
              Bachelor of Business Administration Aviation & Logistics
            </p>

            <div className="flex w-[600px] justify-between items-center  max-sm:w-[350px] max-sm:mt-8">
              <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[20px]">
                BBA A&L
              </p>
              <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full max-sm:w-32 max-sm:h-8">
                <button className="text-center w-full text-white font-semibold max-sm:flex-center"onClick={onApplyNowClick}>
                  Apply now
                </button>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Poster 3 */}
        <div className="flex gap-12 items-end my-10 max-lg:flex-col max-lg:my-8  max-lg:items-center max-lg:gap-6">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-blue mt-16 ml-10 max-lg:mt-0 max-lg:ml-0 max-lg:w-[600px] max-lg:h-[650px] max-sm:h-[400px] max-sm:w-[360px] max-sm:p-3">
            <img
              src={posterAIML}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Computer Application artificial intelligence & machine
              learning
            </p>
            <p className="text-[48px]">BCA AI&ML</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" onClick={onApplyNowClick}/>
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="hidden max-lg:block ">
            <p className="text-[24px] text-red font-semibold md:w-[600px] leading-[30px] max-sm:text-[15px] max-sm:w-[350px] max-sm:leading-[20px] ">
              Bachelor of Computer Application artificial intelligence & machine
              learning
            </p>

            <div className="flex w-[600px] justify-between items-center max-sm:w-[350px] max-sm:mt-8">
              <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[20px]">
                BCA AI&ML
              </p>
              <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full max-sm:w-32 max-sm:h-8">
                <button className="text-center w-full text-white font-semibold max-sm:flex-center"onClick={onApplyNowClick}>
                  Apply now
                </button>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Poster 4 */}
        <div className="flex flex-row-reverse items-end my-10 max-lg:my-8 max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <div className="w-[1720px] h-[730px] rounded-2xl p-6 bg-blue mt-16 ml-10 max-lg:mt-0 max-lg:ml-0 max-lg:w-[600px] max-lg:h-[650px] max-sm:h-[400px] max-sm:w-[360px] max-sm:p-3">
            <img
              src={posterMCA}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="max-lg:hidden">
            <div className="w-[350px] h-[350px] font-semibold text-white bg-yellow rounded-2xl flex flex-col justify-between py-8 p-8 m-4">
              <p className="text-[28px] leading-[38px] font-semibold">
                Master of Computer Application
              </p>
              <p className="text-[45px]">MCA</p>
              <div className="flex items-center justify-around gap-4">
                <p className="text-[28px]">Apply now</p>
                <button>
                  <img src={arrow} alt="" className="w-[70px]" onClick={onApplyNowClick} />
                </button>
              </div>
            </div>

            <div className="w-[350px] h-[350px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4">
              <p className="text-[28px] leading-[38px] font-semibold">
                Master of Business Administration
              </p>
              <p className="text-[45px]">MBA</p>
              <div className="flex items-center justify-around gap-4">
                <p className="text-[28px]">Apply now</p>
                <button>
                  <img src={arrow} alt="" className="w-[70px]" onClick={onApplyNowClick}/>
                </button>
              </div>
            </div>
          </div>

          {/* mobile */}

          <div className="flex justify-between w-[580px] max-sm:w-[350px]">
            <div className="hidden max-lg:block ">
              <p className="text-[24px] text-red font-semibold md:w-[80px] leading-[30px]  max-sm:text-[15px] max-sm:w-[50px] max-sm:leading-[20px]">
                Masters of Computer Application
              </p>

              <div className="flex flex-col mt-8">
                <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[24px]">
                  MCA
                </p>
                <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full max-sm:w-28 max-sm:h-8">
                  <button className="text-center w-full text-white font-semibold max-sm:flex-center max-sm:text-[10px]"onClick={onApplyNowClick}>
                    Apply now
                  </button>
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="hidden max-lg:block ">
              <p className="text-[24px] text-red font-semibold md:w-[80px]  leading-[30px] max-sm:text-[15px] max-sm:w-[50px] max-sm:leading-[20px]">
                Master of Business Administration
              </p>

              <div className="flex flex-col mt-8">
                <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[20px]">
                  MBA
                </p>
                <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full max-sm:w-28 max-sm:h-8">
                  <button className="text-center w-full text-white font-semibold max-sm:flex-center max-sm:text-[10px]"onClick={onApplyNowClick}>
                    Apply now
                  </button>
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Poster 5 */}
        <div className="flex gap-12 items-end my-10 max-lg:my-8 max-lg:flex-col max-lg:items-center max-lg:gap-6">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-yellow mt-16 ml-10 max-lg:mt-0 max-lg:ml-0 max-lg:w-[600px] max-lg:h-[650px] max-sm:h-[400px] max-sm:w-[360px] max-sm:p-3">
            <img
              src={posterBA}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Arts Psychology with journalism & Functional English
            </p>
            <p className="text-[48px]">BA Psychology</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]"onClick={onApplyNowClick} />
              </button>
            </div>
          </div>
          {/* mobile */}
          <div className="hidden max-lg:block ">
            <p className="text-[24px] text-red font-semibold md:w-[600px] leading-[30px] max-sm:text-[15px] max-sm:w-[350px] max-sm:leading-[20px] ">
              Bachelor of Arts Psychology with journalism & Functional English
            </p>

            <div className="flex w-[600px] justify-between items-center  max-sm:w-[350px] max-sm:mt-8">
              <p className="text-[35px] text-[#037F51] font-semibold max-sm:text-[20px]">
                BA Psychology
              </p>
              <div className="h-10 flex justify-between bg-orange w-40 p-2 rounded-full  max-sm:w-32 max-sm:h-8">
                <button className="text-center w-full text-white font-semibold max-sm:flex-center"onClick={onApplyNowClick}>
                  Apply now
                </button>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;

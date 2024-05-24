import logo from "../assets/images/logo-white.png";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import location from "../assets/icons/map-marker.svg";
import rightArrowoutline from "../assets/icons/right-arrow-outline.svg";

const Footer = () => {
  return (
    <div className="bg-orange w-full h-auto rounded-t-[40px] p-4 ">
      <div className="flex flex-col md:flex-row justify-around mt-[20px] max-sm:mt-[40px] max-md:mt-[68px]">
        <div className="text-white mb-8 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-[150px] sm:w-[200px] md:w-[291px] h-auto mt-2 mb-3"
          />
          <p className="text-[14px] sm:text-[16px]">
          Presidency College fosters excellence, equipping students with 
          <br/>honesty, competence, and creativity to break the mold.
          </p>
          <p className="text-[24px] sm:text-[36px] md:text-[48px] mt-10 sm:mt-14 md:mt-20 font-medium">
            Ask Us Anything
          </p>
          <div className="flex mt-6 sm:mt-8 items-center justify-between">
            <div className="w-full sm:w-[450px] md:w-[550px] border-b-[2px] border-b-white1 flex justify-between">
              <input
                type="text"
                className="bg-orange text-[16px] sm:text-[20px] md:text-[24px] placeholder-white flex-grow"
                placeholder="Your Message"
              />
              <button className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center bg-blue p-2 rounded-full">
                <img src={rightArrowoutline} alt="Submit" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-white text-[14px] sm:text-[16px] flex flex-col gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-0">
          <h1>Admissions</h1>
          <h1>Placements</h1>
          <h1>Life@Presidency College</h1>
          <h1>Contact</h1>
          <h1>About</h1>
          <h1>Blogs</h1>
          <h1>Careers</h1>
        </div>

        <div className="text-white text-[14px] sm:text-[16px] flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex gap-2 sm:gap-4">
            <img src={phone} alt="phone" />
            <p className="underline">+91-9844395770</p>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <img src={mail} alt="mail" />
            <p className="underline">contact@presidency.edu.in</p>
          </div>
          <div className="flex gap-2 sm:gap-4 items-start">
            <img src={location} alt="location" />
            <p className="text-start">
              33/2C and 33/2D, Vinayakanagar,
              <br /> Hebbal Kempapura, Bangalore – <br /> 560024, Karnataka,
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

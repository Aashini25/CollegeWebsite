import logo from "../assets/images/logo.png";
import rightArrow from "../assets/icons/right-arrow.svg";
import hammenu from "../assets/icons/ham-menu.svg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onApplyNowClick }) => {
  const navLinks = [
    { name: "Life@" },
    { name: "Placements" },
    { name: "About" },
  ];

  return (
    <div className="flex justify-between items-center p-4 mx-16 max-lg:mx-10 max-md:mx-8 m-2 max-md:m-1 border-b-[#DDDDED] border-b-2">
      <Link to="/">
        <img src={logo} alt="logo" className="lg:pl-7 max-md:h-[44px]" />
      </Link>

      <ul className="flex gap-16 items-center max-lg:gap-8 max-md:hidden">
        {navLinks.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>

      <div className="h-12 flex justify-between bg-orange w-48 p-2 rounded-full max-md:hidden">
        <button
          className="text-center w-full text-white font-semibold"
          onClick={onApplyNowClick}
        >
          Apply now
        </button>
        <img src={rightArrow} alt="" />
      </div>

      <button className="hidden max-md:block">
        <img src={hammenu} alt="" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Navbar;

import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
import { FaBell } from "react-icons/fa";


const Navbar = ({ setSidebar, sidebar }) => {
  return (
    <div className="h-[70px] md:h-[90px] flex justify-between items-center shadow-md">
      <div className="flex items-center gap-[16px] ml-[16px]">
        <img
          src="navicon.png"
          alt="profileicon"
          className=" w-[30px] md:w-[45px] md:h-[45px] cursor-pointer "
        />

        <div className="flex items-center relative cursor-pointer">
          <FaBell className="w-[18px] md:w-[23px] h-[25px] md:h-[30px] text-[#B9B9B9] transition ease-in-out  hover:text-[#007BFF]" />
          <p
            className="absolute -top-1 left-3 w-[15px] h-[15px] bg-[#FF0202] text-[10px]
             flex justify-center items-center text-white rounded-full "
          >
            5
          </p>
        </div>

        <IoMdPricetags className="text-[#B9B9B9] w-[22px]  md:w-[30px] h-[23px] md:h-[31px] cursor-pointer transition ease-in-out  hover:text-[#007BFF]" />
        <img
          src="robo.png"
          className="w-[24px] md:w-[34px] h-[24px] md:h-[34px] cursor-pointer "
          alt=""
        />
      </div>

      <div className="flex items-center gap-[16px] mr-[16px]">
        {/*  Toggle sidebar here */}
        <TbGridDots
          onClick={() => setSidebar((prev) => !prev)}
          className={`h-[30px] md:h-[36px] w-[30px] md:w-[40px] ${
            sidebar ? "text-[#007BFF]" : "text-gray-400"
          } cursor-pointer transition ease-in-out  hover:text-[#007BFF]`}
        />

        <Link to="/">
          <img
            src="right.svg"
            className="h-[27px] md:h-[36px] w-[25px] md:w-[30px]"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

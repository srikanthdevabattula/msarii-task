import React from "react";
import { BiMessageRoundedAdd } from "react-icons/bi";

const IconCell = ({ icon }) => {
  return (
    <div className=" flex items-center justify-center">
      <BiMessageRoundedAdd className="text-[30px] text-[#007BFF]"/>
    </div>
  );
};

export default IconCell;

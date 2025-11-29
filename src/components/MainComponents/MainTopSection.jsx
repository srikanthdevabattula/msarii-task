import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdTableChart,
  MdViewKanban,
} from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { RiBarcodeBoxFill } from "react-icons/ri";
import { LuPaintBucket } from "react-icons/lu";
import { SiProbot } from "react-icons/si";
import { RiSortDesc } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";



export default function MainTopSection() {
  return (
    <div className="w-full  pb-3 " >

      <div className="flex flex-col items-end text-sm">

        <h2 className="flex text-xl my-2  text-[#121212]  font-semibold flex items-center gap-1">
          Test Folder <FaBookOpen className="text-[#007BFF]"/>

        </h2>
        
<div className="flex pb-2 gap-4 text-[#595959]" dir="rtl">
        <p className="cursor-pointer flex items-center gap-1 ">
     <MdTableChart size={16} className="text-[#007BFF]" />     الجدول الرئيسي 
        </p>

        <p className="cursor-pointer flex items-center gap-1">
         <MdViewKanban size={16} className="text-[#007BFF]" /> كانبان 
        </p>

        <p className="cursor-pointer flex items-center gap-1">
               <FiPieChart size={16} className="text-[#007BFF]"/> 
  جدول 
   <span className="text-[#007BFF]">+</span> </p>
</div>
      </div>
      <hr />

      <div className="flex items-center justify-start gap-8 mt-3 text-[#595959] text-sm" dir="rtl">

        <span className="cursor-pointer flex items-center gap-1 ">
            <CiFilter size={16} className="text-[#007BFF]"/>

          فلتر         </span>

        <span className="cursor-pointer flex items-center gap-1 ">
            <CgProfile size={16} className="text-[#007BFF]"/>

          نوع 
        </span>

        <span className="cursor-pointer flex items-center gap-1 ">
            <RiSortDesc size={16} className="text-[#007BFF]"/>

          المستخدمين 
        </span>

        <span className="cursor-pointer flex items-center gap-1 ">
            <SiProbot size={16} className="text-[#007BFF]"/>

          الأتمتة 
        </span>

        <span className="cursor-pointer flex items-center gap-1 ">
            <LuPaintBucket size={16} className="text-[#007BFF]"/>

          لون 
        </span>

        <span className="cursor-pointer flex items-center gap-1 ">
            <RiBarcodeBoxFill size={16} className="text-[#007BFF]"/>

          مجموعة 
        </span>

        <div className="relative">
          <input
            type="text"
            placeholder="إبحث في هذا المنتدى"
            className="border rounded-full px-4 py-1 w-64 text-sm pr-10"
          />
          <AiOutlineSearch
            size={18}
            className="absolute right-3 top-1.5 text-gray-500"
          />
        </div>

      </div>
    </div>
  );
}

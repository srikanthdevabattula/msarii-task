import WorkspaceSelector from "./WorkspaceSelector";
import { RiGalleryView2 } from "react-icons/ri";
import { LuFileSpreadsheet } from "react-icons/lu";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";

const Workspaces = () => {
  const iconList = [
    { icon: <RiGalleryView2 />, bg: "#FFC500" },
    { icon: <LuFileSpreadsheet />, bg: "#41B221" },
    { icon: <AiOutlineFileAdd />, bg: "#007BFF" },
    { icon: <FaChartPie />, bg: "#8D4FBA" },
  ];

  return (
    <div className="sticky top-0 bg-white z-20 ">
      <div className="p-2">
        <div className="flex justify-end items-center gap-4 mr-3">
          <h2 className="text-xl font-semibold text-[#00C9A7]">
            Test Department
          </h2>

          <div
            className="flex items-center justify-center w-[39px] h-[39px] 
                          border border-[#00000084] rounded-full"
          >
            <img src="/sidebarlogo.svg" alt="logo" />
          </div>
        </div>

        <hr className="my-2 text-[#B2B2B2]" />

        <WorkspaceSelector />

        <div className="flex justify-center gap-4 mb-4 text-white">
          {iconList.map((item, index) => (
            <div
              key={index}
              className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workspaces;

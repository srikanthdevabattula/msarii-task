// src/components/sidebar/Sidebar.jsx

import FolderItem from "./SidebarComponents/FolderItem";
import FileItem from "./SidebarComponents/FileItem";
import { folderData } from "../folderData";
import Workspaces from "./SidebarComponents/Workspaces";
import { GoSun } from "react-icons/go";
import { BsInfoLg } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-full bg-white md:h-full h-[100svh] p-4 flex flex-col">
      <Workspaces />

      <div className="space-y-2 overflow-y-auto flex-1 pr-2 pb-4 scrollbar-hide scrollbar-hide">
        {folderData.map((item, key) =>
          item.type === "folder" ? (
            <FolderItem key={key} name={item.name} children={item.children} />
          ) : (
            <FileItem key={key} name={item.name} />
          )
        )}
      </div>

      <div className="flex sidbarend justify-between mt-auto  p-4 border-t">
        <GoSun className="w-[30px] h-[36px]" />
        <BsInfoLg className="w-[30px] h-[36px]" />
        <img src="right.svg" className="w-[30px] h-[36px]" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdPlayArrow } from "react-icons/md";

import FileItem from "./FileItem";

const FolderItem = ({ name, children, childClass }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between pr-2 py-1  relative top-0 ${childClass}  cursor-pointer  rounded-md`}
      >
        <div className="flex w-full items-center justify-between hover:bg-gray-100 relative rounded-lg  top-3 bg-white">
          <HiDotsVertical size={15} className="text-gray-700 " />

          <div className="flex justify-end items-center gap-2 flex-1 ">
            <span className="text-sm text-gray-700">{name}</span>
            <FaFolder className="text-yellow-500 " />
          </div>

          {open ? (
            <TiArrowSortedDown size={18} className="text-gray-600 " />
          ) : (
            <MdPlayArrow size={18} className="text-gray-600 " />
          )}
        </div>
      </div>

      {open && children && (
        <div
          className={`mr-4 border-r rounded-br-lg border-[#C4C4C4] mt-1 space-y-1 `}
        >
          {children.map((item, index) =>
            item.type === "folder" ? (
              <FolderItem
                key={index}
                name={item.name}
                children={item.children}
                childClass="rounded-md border-b-1 border-[#C4C4C4]"
              />
            ) : (
              <FileItem key={index} name={item.name} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FolderItem;

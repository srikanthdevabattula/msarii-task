
import { HiDotsVertical } from "react-icons/hi";
import { FaRegFileAlt  } from "react-icons/fa";

const FileItem = ({ name }) => (
  <div className="flex items-center justify-between pr-2 py-1  rounded-md cursor-pointer  border-b-1 border-[#C4C4C4] ">
    <HiDotsVertical size={16} className="text-gray-700 relative bg-white top-3" />

    <div className="flex items-center gap-1 flex-1 justify-end relative bg-white top-3 ">
      <span className="text-sm text-[#474747]">{name}</span>
      <FaRegFileAlt  className="text-[#007BFF]" />
    </div>
  </div>
);

export default FileItem;

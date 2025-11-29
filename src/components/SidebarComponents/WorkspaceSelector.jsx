import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function WorkspaceSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    name: "Workspace 1",
    icon: "/workspace.svg",
  });

  const workspaces = [
    { name: "Workspace 1", icon: "workspace.svg" },
    { name: "Workspace 2", icon: "/workspace.svg" },
    { name: "Workspace 3", icon: "/workspace.svg" },
  ];

  return (
    <div className="flex items-center gap-3 mb-4 relative mt-4 ">
      <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex justify-center text-xl">
        +
      </button>

      <div
        className="flex-1 border border-[#007BFF] rounded-lg px-4 py-[6px] flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <IoIosArrowDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />

        <div className="flex items-center gap-2">
          <span className="text-sm">{selected.name}</span>
          <img src={selected.icon} className="w-6 h-6" alt="" />
        </div>
      </div>

      {open && (
        <div className="absolute  top-12 left-12 w-[80%] bg-white shadow-md border rounded-lg z-20">
          {workspaces.map((ws, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(ws);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-end gap-5 items-center"
            >
              <span className="text-sm  ">{ws.name}</span>

              <img src={ws.icon} className="w-6 h-6" alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

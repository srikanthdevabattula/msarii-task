import React, { useState, useRef, useEffect } from "react";

const StatusBadge = ({ status, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const map = {
    "in-progress": "bg-[#FECF2E] ",
    blocked: "bg-[#FF5C5C] ",
    demo: "bg-[#5EC26E] ",
  };

  const labels = {
    "in-progress": "العمل قيد التقدم",
    blocked: "عالق",
    demo: "تجريبي",
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center text-[white] rounded-full w-[107px] h-[26px] text-xs cursor-pointer ${map[status]}`}
      >
        {labels[status]}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 z-[9999] bg-white shadow-md border rounded-md w-32  text-sm">
          {Object.keys(labels).map((key) => (
            <div
              key={key}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(key); 
                setOpen(false);
              }}
            >
              {labels[key]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusBadge;

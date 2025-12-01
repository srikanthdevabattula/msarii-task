import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const StatusBadge = ({ status, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 120,
  });

  const options = [
    { key: "new", label: "جديد", color: "bg-black text-white" },
    {
      key: "in-progress",
      label: "قيد التنفيذ",
      color: "bg-[#FECF2E] text-black",
    },
    { key: "blocked", label: "معلق", color: "bg-[#FF5C5C] text-white" },
    { key: "completed", label: "مكتمل", color: "bg-[#1A8600] text-white" },
  ];

  const selected = options.find((o) => o.key === status);

  const updatePosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + 5,
      left: rect.left,
      width: rect.width,
    });
  };

  useEffect(() => {
    if (open) updatePosition();
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      if (open) updatePosition();
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`rounded-full w-full h-[28px]  text-xs flex items-center justify-center cursor-pointer
           ${selected ? selected.color : "bg-black text-white"}
        `}
      >
        {selected?.label}
      </button>

      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute z-[99999] bg-white w-[155px] flex flex-col items-center shadow-md border rounded-md text-sm"
            style={{
              top: position.top,
              left: position.left,

              position: "fixed",
            }}
          >
            <div className="px-2 py-2  w-[150px] bg-white text-right">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border px-2 py-1  w-[150px]  text-right rounded text-xs"
                placeholder="بحث الخيارات..."
              />
            </div>

            <div className="max-h-[160px] w-[150px] text-right overflow-y-auto">
              {options
                .filter((o) =>
                  o.label.toLowerCase().includes(search.toLowerCase())
                )
                .map((opt) => (
                  <div
                    key={opt.key}
                    onClick={() => {
                      onChange(opt.key);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`px-3 py-2 mb-1 cursor-pointer rounded ${opt.color}`}
                  >
                    {opt.label}
                  </div>
                ))}
            </div>

            <div className="px-3 py-2 text-blue-600 text-xs  w-[150px] text-right cursor-pointer border-t">
              ✎ تحرير التسميات
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default StatusBadge;

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { AVAILABLE_PEOPLE } from "../../data";

const PeopleCell = ({ people, groupId, rowId, updatePeople }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const selected = people;

 
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 6, 
        left: rect.left,
      });
    }
  }, [open]);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      const trigger = triggerRef.current;
      const dropdown = dropdownRef.current;

      
      if (
        trigger &&
        !trigger.contains(e.target) &&
        dropdown &&
        !dropdown.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
     
      <div className="relative flex items-center justify-center" ref={triggerRef}>
        <img
          src={selected?.avatar}
          alt={selected?.name}
          className="w-9 h-9 rounded-full cursor-pointer border"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

     
      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="bg-white border shadow-md rounded-lg p-2 z-[9999] w-40 
            max-h-[200px] overflow-y-auto"
            style={{
              position: "fixed",
              top: dropdownPos.top,
              left: dropdownPos.left,
            }}
          >
            <p className="text-xs text-gray-400 px-2 mb-1">Select Person</p>

            {AVAILABLE_PEOPLE.map((p, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => {
                  updatePeople(groupId, rowId, p);
                  setOpen(false);
                }}
              >
                <img src={p.avatar} className="w-7 h-7 rounded-full" />
                <span className="text-sm">{p.name}</span>
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default PeopleCell;

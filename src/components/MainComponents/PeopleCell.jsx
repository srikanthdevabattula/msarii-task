import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { AVAILABLE_PEOPLE } from "../../data";

const PeopleCell = ({ people = [], groupId, rowId, updatePeople,remainingCount }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const selectedPeople = Array.isArray(people) ? people : [people];

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
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePerson = (person) => {
    let updated;

    const exists = selectedPeople.find((p) => p.name === person.name);

    if (exists) {
      updated = selectedPeople.filter((p) => p.name !== person.name);
    } else {
      updated = [...selectedPeople, person];
    }

    updatePeople(groupId, rowId, updated);
  };

  return (
    <>
     
      <div className="relative flex items-center justify-center" ref={triggerRef}>
        {selectedPeople[0] ? (
         <><img
            src={selectedPeople[0].avatar}
            alt={selectedPeople[0].name}
            className="w-9 h-9 rounded-full cursor-pointer border"
            onClick={() => setOpen((prev) => !prev)}
          /> {remainingCount > 0 && (
      <span className="text-xs relative cursor-pointer right-2 bg-gray-200 p-2 rounded-full"
       onClick={() => setOpen((prev) => !prev)}
      >
        +{remainingCount}
      </span>
    )}</> 
        ) : (
          <div
            className="w-9 h-9 flex items-center jus rounded-full bg-gray-200 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          ></div>
        )}
      </div>

     
      {open &&
        createPortal(
          <div
            ref={dropdownRef}
            className="bg-white border shadow-md rounded-lg p-2 z-[9999] w-40 max-h-[200px] overflow-y-auto"
            style={{
              position: "fixed",
              top: dropdownPos.top,
              left: dropdownPos.left,
            }}
          >
            <p className="text-xs text-gray-400 px-2 mb-1">Select People</p>

            {AVAILABLE_PEOPLE.map((p, index) => {
              const isSelected = selectedPeople.some((s) => s.name === p.name);

              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => togglePerson(p)}
                >
                  <img src={p.avatar} className="w-7 h-7 rounded-full" />
                  <span className="text-sm flex-1">{p.name}</span>

                  {isSelected && (
                    <span className="text-blue-600 text-xs font-bold">✓</span>
                  )}
                </div>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
};

export default PeopleCell;

import React from "react";

const PeopleCell = ({ people = [],groupId, setHoverPeople, hoverPeople, rowId }) => {
  const count = people.length;
const uniqueId = `${groupId}-${rowId}`;
  return (
    <div className="flex items-center justify-center gap-2">
      {count === 0 && <div className="text-gray-400 text-xs">—</div>}

      {count === 1 && (
        <img src={people[0].avatar} alt={people[0].name} className="w-8 h-8 rounded-full" />
      )}

      {count > 1 && (
        <div className="flex items-center relative">
          <img src={people[0].avatar} alt={people[0].name} className="w-8 h-8 z-10 rounded-full border" />
          <div
            className="relative right-2 z-1 text-xs px-2 py-2 border rounded-full cursor-pointer select-none"
            onMouseEnter={() => setHoverPeople(uniqueId )}
            onMouseLeave={() => setHoverPeople(null)}
          >
            +{count - 1}
          </div>

          {hoverPeople === uniqueId  && (
            <div className="absolute z-30 mt-16 right-0  p-2 ">
              <div className="flex gap-2">
                {people.map((p, idx) => (
                  <img key={idx} src={p.avatar} alt={p.name} title={p.name} className="w-8 h-8 rounded-full" />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PeopleCell;

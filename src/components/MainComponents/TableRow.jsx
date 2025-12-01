import React, { useRef, useState } from "react";
import PdfIcon from "./PdfIcon";
import StatusBadge from "./StatusBadge";
import PeopleCell from "./PeopleCell";
import IconCell from "./IconCell";

const TableRow = ({
  row,
  groupId,
  openPdf,
  updateStartDate,
  toggleCheck,
  updatePeople,
  setHoverPeople,
  updateStatus,
  updateCell,
  columnWidths,
}) => {
  const [editing, setEditing] = useState({
    location: false,
    email: false,
    phone: false,
    schedule: false,
    mission: false,
  });

  const hiddenDateInput = useRef(null);

  const convertToInput = (d) => (d ? d.replace(/\//g, "-") : "");
  const convertToDisplay = (d) => (d ? d.replace(/-/g, "/") : "");

  return (
    <tr className="border-t text-sm align-middle">

     
      <td
        style={{ width: columnWidths.col1, maxWidth: columnWidths.col1 }}
        className=" py-2 text-center align-middle"
      >
        <button onClick={() => openPdf(row.pdf)} className="inline-flex  items-center gap-2">
          <PdfIcon className=''/>
        </button>
      </td>

     
      <td
        style={{ width: columnWidths.col2, maxWidth: columnWidths.col2 }}
        className= " cursor-pointer text-center truncate  py-2 align-middle"
        onClick={() => setEditing({ ...editing, location: true })}
      >
        {editing.location ? (
          <input
            autoFocus
            className="border px-2 py-1 w-[calc(100%-4px)] text-center"
            defaultValue={row.location}
            onBlur={(e) => {
              updateCell(groupId, row.id, "location", e.target.value);
              setEditing({ ...editing, location: false });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "location", e.target.value);
                setEditing({ ...editing, location: false });
              }
            }}
          />
        ) : (
          row.location
        )}
      </td>

    
      <td
        style={{ width: columnWidths.col3, maxWidth: columnWidths.col3 }}
        className="cursor-pointer text-center truncate px-3 py-2 align-middle"
        onClick={() => setEditing({ ...editing, email: true })}
      >
        {editing.email ? (
          <input
            autoFocus
            className="border px-2 py-1 w-[calc(100%-4px)] text-center"
            defaultValue={row.email}
            onBlur={(e) => {
              updateCell(groupId, row.id, "email", e.target.value);
              setEditing({ ...editing, email: false });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "email", e.target.value);
                setEditing({ ...editing, email: false });
              }
            }}
          />
        ) : (
          row.email
        )}
      </td>

    
      <td
        style={{ width: columnWidths.col4, maxWidth: columnWidths.col4 }}
        className="cursor-pointer text-center truncate px-3 py-2 align-middle"
        onClick={() => setEditing({ ...editing, phone: true })}
      >
        {editing.phone ? (
          <input
            autoFocus
            className="border px-2 py-1 w-[calc(100%-4px)] text-center"
            defaultValue={row.phone}
            onBlur={(e) => {
              updateCell(groupId, row.id, "phone", e.target.value);
              setEditing({ ...editing, phone: false });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "phone", e.target.value);
                setEditing({ ...editing, phone: false });
              }
            }}
          />
        ) : (
          row.phone
        )}
      </td>

     
      <td
        style={{ width: columnWidths.col5, maxWidth: columnWidths.col5 }}
        className="cursor-pointer text-center truncate px-3 py-2 align-middle"
        onClick={() => setEditing({ ...editing, schedule: true })}
      >
        {editing.schedule ? (
          <input
            autoFocus
            className="border px-2 py-1 w-[calc(100%-4px)] text-center"
            defaultValue={row.schedule}
            onBlur={(e) => {
              updateCell(groupId, row.id, "schedule", e.target.value);
              setEditing({ ...editing, schedule: false });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "schedule", e.target.value);
                setEditing({ ...editing, schedule: false });
              }
            }}
          />
        ) : (
          row.schedule
        )}
      </td>

     
      <td
        style={{ width: columnWidths.col6, maxWidth: columnWidths.col6 }}
        className="px-3 py-2 align-middle relative"
      >
        <div
          className="cursor-pointer truncate flex items-center justify-center h-full w-full py-2"
          onClick={() => hiddenDateInput.current.showPicker()}
        >
          {row.startDate || "Select date"}
        </div>

        <input
          ref={hiddenDateInput}
          type="date"
          className="absolute inset-0 opacity-0 pointer-events-none"
          value={convertToInput(row.startDate)}
          onChange={(e) => {
            updateStartDate(groupId, row.id, convertToDisplay(e.target.value));
          }}
        />
      </td>

     
      <td
        style={{ width: columnWidths.col7, maxWidth: columnWidths.col7 }}
        className="px-3 py-2 align-middle"
      >
        <StatusBadge
          status={row.status}
          onChange={(newStatus) => updateStatus(groupId, row.id, newStatus)}
        />
      </td>

     
      <td
        style={{ width: columnWidths.col8, maxWidth: columnWidths.col8 }}
        className="px-3 py-2 align-middle"
      >
        <PeopleCell
          people={row.people}
          groupId={groupId}
          rowId={row.id}
          updatePeople={updatePeople}
        />
      </td>

    
      <td
        style={{ width: columnWidths.col9, maxWidth: columnWidths.col9 }}
        className="px-3 py-2 align-middle"
      >
        <IconCell icon={row.icon} />
      </td>

     
      <td
        style={{ width: columnWidths.col10, maxWidth: columnWidths.col10 }}
        className="cursor-pointer text-center truncate px-3 py-2 align-middle"
        onClick={() => setEditing({ ...editing, mission: true })}
      >
        {editing.mission ? (
          <input
            autoFocus
            className="border px-2 py-1 w-[calc(100%-4px)] text-center"
            defaultValue={row.mission}
            onBlur={(e) => {
              updateCell(groupId, row.id, "mission", e.target.value);
              setEditing({ ...editing, mission: false });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "mission", e.target.value);
                setEditing({ ...editing, mission: false });
              }
            }}
          />
        ) : (
          row.mission
        )}
      </td>

     
      <td
        style={{ width: columnWidths.col11, maxWidth: columnWidths.col11 }}
        className="text-center px-3 py-2 align-middle"
      >
        <label className="relative cursor-pointer inline-flex items-center">
          <input
            type="checkbox"
            checked={!!row.checked}
            onChange={() => toggleCheck(groupId, row.id)}
            className="peer sr-only"
          />
          <span className="w-4 h-4 rounded-full border-2 border-gray-400 
            peer-checked:border-gray-500 peer-checked:bg-blue-500
            transition-all block"></span>
        </label>
      </td>

    </tr>
  );
};

export default TableRow;

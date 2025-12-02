import React, { useRef, useState, useEffect } from "react";
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
  updateStatus,
  updateCell,
  columnWidths,
  extraColumns = [],
}) => {
  const [editing, setEditing] = useState({});
  const hiddenDateInput = useRef(null);

  
  useEffect(() => {
    setEditing((prev) => {
      const newState = { ...prev };
      extraColumns.forEach((col) => {
        if (!(col.key in newState)) newState[col.key] = false;
      });
      return newState;
    });
  }, [extraColumns]);

  const convertToInput = (d) => (d ? d.replace(/\//g, "-") : "");
  const convertToDisplay = (d) => (d ? d.replace(/-/g, "/") : "");

  const handleDynamicBlur = (colKey, e) => {
    updateCell(groupId, row.id, colKey, e.target.value);
    setEditing((prev) => ({ ...prev, [colKey]: false }));
  };

  const people = row.people || [];
  const remainingCount = people.length > 1 ? people.length - 1 : 0;

  return (
    <tr className="border-t text-sm align-middle">

      {extraColumns.map((col) => (
        <td
          key={col.key}
          style={{
            width: columnWidths[col.key],
            maxWidth: columnWidths[col.key],
          }}
          className="cursor-pointer text-center truncate px-3 py-2"
          onClick={() => setEditing((p) => ({ ...p, [col.key]: true }))}
        >
          {editing[col.key] ? (
            <input
              autoFocus
              defaultValue={row[col.key] || ""}
              className="border px-2 py-1 w-full text-center"
              onBlur={(e) => handleDynamicBlur(col.key, e)}
              onKeyDown={(e) => e.key === "Enter" && handleDynamicBlur(col.key, e)}
            />
          ) : (
            row[col.key] || ""
          )}
        </td>
      ))}

      <td
        style={{ width: columnWidths.col1 }}
        className="py-2 text-center align-middle"
      >
        <button onClick={() => openPdf(row.pdf)} className="inline-flex items-center">
          <PdfIcon />
        </button>
      </td>

      <td
        style={{ width: columnWidths.col2 }}
        className="cursor-pointer text-center truncate py-2"
        onClick={() => setEditing((p) => ({ ...p, location: true }))}
      >
        {editing.location ? (
          <input
            autoFocus
            defaultValue={row.location}
            className="border px-2 py-1 w-full text-center"
            onBlur={(e) => {
              updateCell(groupId, row.id, "location", e.target.value);
              setEditing((p) => ({ ...p, location: false }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "location", e.target.value);
                setEditing((p) => ({ ...p, location: false }));
              }
            }}
          />
        ) : (
          row.location
        )}
      </td>

      <td
        style={{ width: columnWidths.col3 }}
        className="cursor-pointer text-center truncate px-3 py-2"
        onClick={() => setEditing((p) => ({ ...p, email: true }))}
      >
        {editing.email ? (
          <input
            autoFocus
            defaultValue={row.email}
            className="border px-2 py-1 w-full text-center"
            onBlur={(e) => {
              updateCell(groupId, row.id, "email", e.target.value);
              setEditing((p) => ({ ...p, email: false }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "email", e.target.value);
                setEditing((p) => ({ ...p, email: false }));
              }
            }}
          />
        ) : (
          row.email
        )}
      </td>

      <td
        style={{ width: columnWidths.col4 }}
        className="cursor-pointer text-center truncate px-3 py-2"
        onClick={() => setEditing((p) => ({ ...p, phone: true }))}
      >
        {editing.phone ? (
          <input
            autoFocus
            defaultValue={row.phone}
            className="border px-2 py-1 w-full text-center"
            onBlur={(e) => {
              updateCell(groupId, row.id, "phone", e.target.value);
              setEditing((p) => ({ ...p, phone: false }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "phone", e.target.value);
                setEditing((p) => ({ ...p, phone: false }));
              }
            }}
          />
        ) : (
          row.phone
        )}
      </td>

      <td
        style={{ width: columnWidths.col5 }}
        className="cursor-pointer text-center truncate px-3 py-2"
        onClick={() => setEditing((p) => ({ ...p, schedule: true }))}
      >
        {editing.schedule ? (
          <input
            autoFocus
            defaultValue={row.schedule}
            className="border px-2 py-1 w-full text-center"
            onBlur={(e) => {
              updateCell(groupId, row.id, "schedule", e.target.value);
              setEditing((p) => ({ ...p, schedule: false }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "schedule", e.target.value);
                setEditing((p) => ({ ...p, schedule: false }));
              }
            }}
          />
        ) : (
          row.schedule
        )}
      </td>

   
      <td
        style={{ width: columnWidths.col6 }}
        className="px-3 py-2 relative text-center"
      >
        <div
          className="cursor-pointer"
          onClick={() => hiddenDateInput.current && hiddenDateInput.current.showPicker && hiddenDateInput.current.showPicker()}
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

     
      <td style={{ width: columnWidths.col7 }} className="text-center px-3 py-2">
        <StatusBadge
          status={row.status}
          onChange={(value) => updateStatus(groupId, row.id, value)}
        />
      </td>

     
      <td style={{ width: columnWidths.col8 }} className="text-center px-3 py-2">
        <PeopleCell
          people={row.people}
          groupId={groupId}
          rowId={row.id}
          updatePeople={updatePeople}
          remainingCount={remainingCount}
        />
      </td>

      {/* Icon */}
      <td style={{ width: columnWidths.col9 }} className="text-center px-3 py-2">
        <IconCell icon={row.icon} />
      </td>

     
      <td
        style={{ width: columnWidths.col10 }}
        className="cursor-pointer text-center px-3 py-2"
        onClick={() => setEditing((p) => ({ ...p, mission: true }))}
      >
        {editing.mission ? (
          <input
            autoFocus
            defaultValue={row.mission}
            className="border px-2 py-1 w-full text-center"
            onBlur={(e) => {
              updateCell(groupId, row.id, "mission", e.target.value);
              setEditing((p) => ({ ...p, mission: false }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateCell(groupId, row.id, "mission", e.target.value);
                setEditing((p) => ({ ...p, mission: false }));
              }
            }}
          />
        ) : (
          row.mission
        )}
      </td>

    
      <td style={{ width: columnWidths.col11 }} className="text-center px-3 py-2">
        <label className="relative cursor-pointer inline-flex items-center">
          <input
            type="checkbox"
            checked={!!row.checked}
            onChange={() => toggleCheck(groupId, row.id)}
            className="peer sr-only"
          />
          <span
            className="w-4 h-4 rounded-full border-2 border-gray-400 
            peer-checked:border-gray-500 peer-checked:bg-blue-500
            transition-all block"
          ></span>
        </label>
      </td>
    </tr>
  );
};

export default TableRow;

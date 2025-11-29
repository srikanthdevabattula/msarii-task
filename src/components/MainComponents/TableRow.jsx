import React, { useState } from "react";
import PdfIcon from "./PdfIcon";
import StatusBadge from "./StatusBadge";
import PeopleCell from "./PeopleCell";
import IconCell from "./IconCell";

const TableRow = ({ row, groupId, openPdf, updateStartDate, toggleCheck, hoverPeople, setHoverPeople,updateStatus }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
  if (!date) return "";
  return date.replace(/-/g, "/"); // converts 2025-08-22 → 2025/08/22
};

  return (
    <tr className="border-t text-[#121212] text-sm align-top h-[30px]">
      <td className="px-4 py-4">
        <button onClick={() => openPdf(row.pdf)} className="inline-flex items-center gap-2">
          <PdfIcon />
        </button>
      </td>

      <td className="px-4 py-4">{row.location}</td>
      <td className="px-4 py-4 text-center">{row.email}</td>
      <td className="px-4 py-4 text-center">{row.phone}</td>
      <td className="px-4 py-4 text-center">{row.schedule}</td>

      <td className="px-4  py-4 text-center relative">
        <div>
          <button
  className="px-3 py-1 text-xs"
  onClick={() => setShowDatePicker((s) => !s)}
>
  {row.startDate ? formatDate(row.startDate) : "Select date"}
</button>
        </div>
        {showDatePicker && (
          <div className="absolute z-20 right-0 mt-2 p-3 bg-white border rounded shadow">
            <input
              type="date"
              value={row.startDate}
              onChange={(e) => updateStartDate(groupId, row.id, e.target.value)}
              
            />
            <div className="mt-2 text-right">
              <button className="px-2 py-1 text-xs border rounded" onClick={() => setShowDatePicker(false)}>
                إغلاق
              </button>
            </div>
          </div>
        )}
      </td>

      <td className="px-4 py-4">
       <StatusBadge 
  status={row.status} 
  onChange={(newStatus) => updateStatus(groupId, row.id, newStatus)}
/>
      </td>

      <td className="px-4 py-4 relative">
<PeopleCell
  people={row.people}
  groupId={groupId}
  rowId={row.id}
  hoverPeople={hoverPeople}
  setHoverPeople={setHoverPeople}
/>      </td> 

      <td className="px-4 py-4">
        <IconCell icon={row.icon} />
      </td>

      <td className="px-4 py-4 text-center">{row.mission}</td>

      <td className="px-4 py-4 text-center">
        <input type="radio" checked={!!row.checked} onChange={() => toggleCheck(groupId, row.id)} />
      </td>
    </tr>
  );
};

export default TableRow;

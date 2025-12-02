import React, { useState } from "react";

const AddRow = ({ groupId, onAddRow, columnWidths, extraColumns = [] }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const handleSave = () => {
    if (!value.trim()) return setIsEditing(false);

    onAddRow(groupId, value);
    setValue("");
    setIsEditing(false);
  };

  return (
    <tr className="border-t h-[30px]">

    
      {extraColumns.map((col) => (
        <td
          key={col.key}
          style={{
            width: columnWidths[col.key],
            maxWidth: columnWidths[col.key],
          }}
          className="px-4 py-4"
        ></td>
      ))}

      <td
        style={{ width: columnWidths.col1 }}
        className="px-4 py-4"
      ></td>

      <td style={{ width: columnWidths.col2 }}></td>
      <td style={{ width: columnWidths.col3 }}></td>
      <td style={{ width: columnWidths.col4 }}></td>
      <td style={{ width: columnWidths.col5 }}></td>
      <td style={{ width: columnWidths.col6 }}></td>
      <td style={{ width: columnWidths.col7 }}></td>
      <td style={{ width: columnWidths.col8 }}></td>
      <td style={{ width: columnWidths.col9 }}></td>

      <td
        style={{ width: columnWidths.col10 }}
        className="text-center px-4 py-4"
      >
        {isEditing ? (
          <input
            autoFocus
            value={value}
            className="border px-2 py-1 text-center w-full"
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex text-center items-center gap-2 px-3 text-black"
          >
            إضافة صف <span className="text-xl">+</span>
          </button>
        )}
      </td>

      <td
        style={{ width: columnWidths.col11 }}
        className="px-4 py-4"
      ></td>
    </tr>
  );
};

export default AddRow;

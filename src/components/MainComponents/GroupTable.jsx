import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import ResizableTH from "./ResizableTH";
import { GoChevronDown } from "react-icons/go";
import AddRow from "./AddRow";

const EditableColumnHeader = ({ col, updateColumnName }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(col.name);

  return editing ? (
    <input
      autoFocus
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => {
        updateColumnName(col.key, value.trim() || "Untitled");
        setEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          updateColumnName(col.key, value.trim() || "Untitled");
          setEditing(false);
        } else if (e.key === "Escape") {
          setValue(col.name);
          setEditing(false);
        }
      }}
      className="border px-2 py-1 w-full text-center"
    />
  ) : (
    <span className="cursor-pointer" onClick={() => setEditing(true)}>
      {col.name}
    </span>
  );
};

const GroupTable = ({
  group,
  index,
  registerScrollRef,
  syncScroll,
  columnWidths,
  setColumnWidths,
  openPdf,
  updateStartDate,
  toggleCheck,
  updateStatus,
  updatePeople,
  updateCell,
  onAddRow,
  extraColumns,
  addColumn,
  updateColumnName,
}) => {
  const colors = ["#FF5C5C", "#55A5FB", "#4EBA30", "#FF5CDC"];
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) registerScrollRef(scrollRef.current);
  }, [registerScrollRef]);

  return (
    <div className="w-full mb-4 mx-4">
      <div
        className="flex items-center justify-end gap-2 px-4 py-2 bg-white sticky top-0"
        style={{ color: colors[index] }}
      >
        <GoChevronDown />
        <h3 className="font-semibold whitespace-nowrap">{group.groupName}</h3>
        <div>⋮</div>
         
      </div>
      

      <div
        ref={scrollRef}
        onScroll={syncScroll}
        className="overflow-x-auto scrollbar-hide"
        style={{ direction: "rtl" }}
      >
        <table
          className="border-collapse w-max min-w-full mx-3"
          style={{
            direction: "ltr",
            borderRight: `5px solid ${colors[index]}`,
          }}
        >
          
         <thead>
  <tr>
    {extraColumns.map((col) => (
      <ResizableTH
        key={col.key}
        colKey={col.key}
        columnWidths={columnWidths}
        setColumnWidths={setColumnWidths}
        scrollRef={scrollRef}
      >
        <EditableColumnHeader
          col={col}
          updateColumnName={updateColumnName}
        />
      </ResizableTH>
    ))}

    <ResizableTH
      colKey="col1"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      <div className="flex items-center justify-center gap-2">ملف</div>
    </ResizableTH>

    <ResizableTH
      colKey="col2"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      موقع
    </ResizableTH>

    <ResizableTH
      colKey="col3"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      بريد
    </ResizableTH>

    <ResizableTH
      colKey="col4"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      هاتف
    </ResizableTH>

    <ResizableTH
      colKey="col5"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      جدول
    </ResizableTH>

    <ResizableTH
      colKey="col6"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      تاريخ
    </ResizableTH>

    <ResizableTH
      colKey="col7"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      حالة
    </ResizableTH>

    <ResizableTH
      colKey="col8"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      أشخاص
    </ResizableTH>

    <ResizableTH
      colKey="col9"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    />

    <ResizableTH
      colKey="col10"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    >
      مهمة
    </ResizableTH>

    <ResizableTH
      colKey="col11"
      columnWidths={columnWidths}
      setColumnWidths={setColumnWidths}
      scrollRef={scrollRef}
    />
  </tr>
</thead>


          <tbody>
            {group.rows.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                groupId={group.groupId}
                openPdf={openPdf}
                updateStartDate={updateStartDate}
                toggleCheck={toggleCheck}
                updateStatus={updateStatus}
                updatePeople={updatePeople}
                updateCell={updateCell}
                columnWidths={columnWidths}
                extraColumns={extraColumns}
              />
            ))}

            <AddRow
              groupId={group.groupId}
              onAddRow={onAddRow}
              columnWidths={columnWidths}
              extraColumns={extraColumns}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupTable;

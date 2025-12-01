import React, { useEffect, useRef } from "react";
import TableRow from "./TableRow";
import ResizableTH from "./ResizableTH";
import { GoChevronDown } from "react-icons/go";
import AddRow from "./AddRow";

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
}) => {
  const colors = ["#FF5C5C", "#55A5FB", "#4EBA30", "#FF5CDC"];
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      registerScrollRef(scrollRef.current);
    }
  }, [registerScrollRef]);

  return (
    <div className="w-full mb-4 mx-4 ">
     
      <div className="flex items-center justify-end gap-2 px-4 py-2 bg-white sticky top-0"
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
        <table className="border-collapse w-max min-w-full mx-3" 
         style={{
     
      direction: "ltr", 
      borderRight: `5px solid ${colors[index]}`,
    }}
    
        >
          <thead>
            <tr>
              <ResizableTH
                colKey="col1"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                ملف
              </ResizableTH>
              <ResizableTH
                colKey="col2"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                موقع
              </ResizableTH>
              <ResizableTH
                colKey="col3"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                بريد
              </ResizableTH>
              <ResizableTH
                colKey="col4"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                هاتف
              </ResizableTH>
              <ResizableTH
                colKey="col5"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                جدول
              </ResizableTH>
              <ResizableTH
                colKey="col6"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                تاريخ
              </ResizableTH>
              <ResizableTH
                colKey="col7"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                حالة
              </ResizableTH>
              <ResizableTH
                colKey="col8"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                أشخاص
              </ResizableTH>
              <ResizableTH
                colKey="col9"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              ></ResizableTH>
              <ResizableTH
                colKey="col10"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              >
                مهمة
              </ResizableTH>
              <ResizableTH
                colKey="col11"
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
              ></ResizableTH>
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
              />
            ))}
            <AddRow columnWidths={columnWidths} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupTable;
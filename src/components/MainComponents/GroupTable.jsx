import React from "react";
import TableRow from "./TableRow";
import AddRow from "./AddRow";
import { GoChevronDown } from "react-icons/go";

const GroupTable = ({
  index,
  group,
  openPdf,
  updateStartDate,
  toggleCheck,
  hoverPeople,
  setHoverPeople,
  updateStatus
}) => {
  const colors = ["#FF5C5C", "#55A5FB", "#4EBA30", "#FF5CDC"];
  return (
    <div className="mb-8  p-4 ">
      <div
        className="flex items-center min-w-[1339px] w-full justify-end gap-2 mb-4 px-2"
        style={{ color: colors[index] }} 
      >
        <GoChevronDown />
        <h3 className={`  right-0 font-semibold`}>{group.groupName}</h3>
        <div className="">⋮</div>
      </div>

      <div className="w-full ">
        <table className=" w-full min-w-[1339px] text-center table-auto "
        style={{
      borderCollapse: "separate",
      borderSpacing: 0,
      border: "1px solid #adc8e4",
      borderRadius: "5px",
      
      borderRight: `5px solid ${colors[index]}`,
    }}
        >
          <thead>
            <tr className="text-sm text-[#002145]">
              <th className="px-4 py-3 w-[5%]">ملف</th>
              <th className="px-4 py-3 w-[8%]">موقع</th>
              <th className="px-4 py-3 w-[13%]">بريد إلكتروني</th>
              <th className="px-4 py-3 w-[11%]">هاتف</th>
              <th className="px-4 py-3 w-[12%]">الجدول الزمني</th>
              <th className="px-4 py-3 w-[10%]">تاريخ البدء</th>
              <th className="px-4 py-3 w-[12%]">حالة</th>
              <th className="px-4 py-3 w-[6%]">الناس</th>
              <th className="px-4 py-3 w-[5%]"> </th>
              <th className="px-4 py-3 w-[13%]">مهمة</th>
              <th className="px-4 py-3 w-[5%]"> </th>
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
                hoverPeople={hoverPeople}
                setHoverPeople={setHoverPeople}
                updateStatus={updateStatus}
              />
            ))}

            {<AddRow />}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupTable;

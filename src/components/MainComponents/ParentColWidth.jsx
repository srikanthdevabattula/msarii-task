import React, { useState } from "react";
import GroupTable from "./GroupTable";

const Parent = ({ groups }) => {
  const [columnWidths, setColumnWidths] = useState({
    col1: 90,
    col2: 120,
    col3: 200,
    col4: 200,
    col5: 200,
    col6: 160,
    col7: 180,
    col8: 120,
    col9: 60,
    col10: 300,
    col11: 80,
  });

  return (
    <div>
      {groups.map((group) => (
        <GroupTable
          key={group.groupId}
          group={group}
          columnWidths={columnWidths}
          setColumnWidths={setColumnWidths}
        />
      ))}
    </div>
  );
};

export default Parent;

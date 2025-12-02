import React, { useEffect, useRef, useState } from "react";
import { DATA } from "../data";
import GroupTable from "./MainComponents/GroupTable";
import PdfModal from "./MainComponents/PdfModal";
import MainTopSection from "./MainComponents/MainTopSection";
import GroupTableSkeleton from "./MainComponents/GroupTableSkeleton";

const Main = () => {

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("table-data");
    return saved ? JSON.parse(saved) : DATA;
  });

  const [extraColumns, setExtraColumns] = useState(() => {
    const saved = localStorage.getItem("extra-columns");
    return saved ? JSON.parse(saved) : [];
  });

  const [columnWidths, setColumnWidths] = useState(() => {
    const saved = localStorage.getItem("column-widths");
    return saved
      ? JSON.parse(saved)
      : {
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
        };
  });

  const [pdfModal, setPdfModal] = useState({ open: false, url: "" });
  const [loading, setLoading] = useState(true);

  const tableScrollRefs = useRef([]);
  const bottomScrollRef = useRef(null);

  const totalTableWidth = Object.values(columnWidths).reduce(
    (t, w) => t + w,
    0
  );


  useEffect(() => {
    localStorage.setItem("table-data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("extra-columns", JSON.stringify(extraColumns));
  }, [extraColumns]);

  useEffect(() => {
    localStorage.setItem("column-widths", JSON.stringify(columnWidths));
  }, [columnWidths]);

 
  const syncFromTable = (index) => (e) => {
    const left = e.target.scrollLeft;

    if (bottomScrollRef.current) {
      bottomScrollRef.current.scrollLeft = left;
    }

    tableScrollRefs.current.forEach((ref, i) => {
      if (ref && i !== index) {
        ref.scrollLeft = left;
      }
    });
  };

  const syncFromBottom = (e) => {
    const left = e.target.scrollLeft;

    tableScrollRefs.current.forEach((ref) => {
      if (ref) ref.scrollLeft = left;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const openPdf = (url) => setPdfModal({ open: true, url });
  const closePdf = () => setPdfModal({ open: false, url: "" });

  
  const updateStartDate = (groupId, rowId, newDate) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, startDate: newDate } : r
              ),
            }
          : g
      ),
    }));
  };

  const toggleCheck = (groupId, rowId) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, checked: !r.checked } : r
              ),
            }
          : g
      ),
    }));
  };

  const updateStatus = (groupId, rowId, newStatus) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, status: newStatus } : r
              ),
            }
          : g
      ),
    }));
  };

  const updatePeople = (groupId, rowId, person) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, people: person } : r
              ),
            }
          : g
      ),
    }));
  };

  const updateCell = (groupId, rowId, key, value) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, [key]: value } : r
              ),
            }
          : g
      ),
    }));
  };

  const addRow = (groupId, missionText) => {
    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) => {
        if (g.groupId !== groupId) return g;

        const maxId =
          g.rows.reduce((m, r) => (r.id > m ? r.id : m), 0) || g.rows.length;

        const newRow = {
          id: maxId + 1,
          pdf: "/dummy.pdf",
          location: "",
          email: "",
          phone: "",
          schedule: "",
          startDate: "",
          status: "new",
          people: [],
          icon: "more",
          mission: missionText || "",
          checked: false,
        };

        extraColumns.forEach((col) => {
          newRow[col.key] = "";
        });

        return {
          ...g,
          rows: [...g.rows, newRow],
        };
      }),
    }));
  };

  const addColumn = () => {
    const idx = extraColumns.length + 1;
    const newKey = `colExtra${Date.now().toString(36)}${idx}`;
    const newCol = { key: newKey, name: `New Column ${idx}` };

    setColumnWidths((prev) => ({ ...prev, [newKey]: 150 }));
    setExtraColumns((prev) => [newCol, ...prev]);

    setData((prev) => ({
      ...prev,
      groups: prev.groups.map((g) => ({
        ...g,
        rows: g.rows.map((r) => ({
          ...r,
          [newKey]: "",
        })),
      })),
    }));
  };

  const updateColumnName = (key, newName) => {
    setExtraColumns((prev) =>
      prev.map((c) => (c.key === key ? { ...c, name: newName } : c))
    );
  };

 
  return (
    <div className="relative h-[calc(100vh-100px)] bg-white ">
      <div className="overflow-y-scroll h-full pb-34 scrollbar-left">
        <div className="sticky top-0 left-0 bg-white z-30 w-full p-4">
          <MainTopSection addColumn={addColumn} />
        </div>

        <div className="mr-3">
          {loading ? (
            <GroupTableSkeleton />
          ) : (
            data.groups.map((group, index) => (
              <GroupTable
                key={group.groupId}
                group={group}
                index={index}
                registerScrollRef={(el) =>
                  (tableScrollRefs.current[index] = el)
                }
                syncScroll={syncFromTable(index)}
                columnWidths={columnWidths}
                setColumnWidths={setColumnWidths}
                openPdf={openPdf}
                updateStartDate={updateStartDate}
                toggleCheck={toggleCheck}
                updateStatus={updateStatus}
                updatePeople={updatePeople}
                updateCell={updateCell}
                onAddRow={addRow}
                extraColumns={extraColumns}
                updateColumnName={updateColumnName}
              />
            ))
          )}
        </div>
      </div>

      <div
        ref={bottomScrollRef}
        className="sticky bottom-0 left-0 w-full h-2 bg-white scrollbar-bottom overflow-x-auto z-50"
        onScroll={syncFromBottom}
        style={{ direction: "rtl" }}
      >
        <div style={{ width: totalTableWidth + 70, height: 1 }} />
      </div>

      {pdfModal.open && <PdfModal url={pdfModal.url} onClose={closePdf} />}
    </div>
  );
};

export default Main;

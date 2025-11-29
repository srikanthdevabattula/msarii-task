import React, { useEffect, useRef, useState } from "react";
import { DATA } from "../data";
import GroupTable from "./MainComponents/GroupTable";
import PdfModal from "./MainComponents/PdfModal";
import MainTopSection from "./MainComponents/MainTopSection";
import GroupTableSkeleton from "./MainComponents/GroupTableSkeleton";

const Main = () => {
  const [data, setData] = useState(DATA);
  const [pdfModal, setPdfModal] = useState({ open: false, url: "" });
  const [hoverPeople, setHoverPeople] = useState(null);

  const [loading, setLoading] = useState(true); // 🌟 NEW

  const scrollRef = useRef(null);

  // Auto scroll to right on mount
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft = container.scrollWidth;
    }
  }, []);

  // Manual 3-second delay for skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openPdf = (url) => setPdfModal({ open: true, url });
  const closePdf = () => setPdfModal({ open: false, url: "" });

  const updateStartDate = (groupId, rowId, newDate) => {
    setData((prev) => {
      const next = { ...prev };
      next.groups = next.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, startDate: newDate } : r
              ),
            }
          : g
      );
      return next;
    });
  };

  const toggleCheck = (groupId, rowId) => {
    setData((prev) => {
      const next = { ...prev };
      next.groups = next.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, checked: !r.checked } : r
              ),
            }
          : g
      );
      return next;
    });
  };

  const updateStatus = (groupId, rowId, newStatus) => {
    setData((prev) => {
      const next = { ...prev };
      next.groups = next.groups.map((g) =>
        g.groupId === groupId
          ? {
              ...g,
              rows: g.rows.map((r) =>
                r.id === rowId ? { ...r, status: newStatus } : r
              ),
            }
          : g
      );
      return next;
    });
  };

  return (
    <div
      ref={scrollRef}
      className="h-[calc(100vh-100px)] overflow-y-scroll overflow-x-scroll scrollbar-hide bg-white px-6"
    >
      <div className="w-full min-w-[1339px]">
        <MainTopSection />
      </div>

      <div className="mx-auto">
        {loading ? (
          <GroupTableSkeleton />
        ) : (
          data.groups.map((group, index) => (
            <GroupTable
              key={group.groupId}
              index={index}
              group={group}
              openPdf={openPdf}
              updateStartDate={updateStartDate}
              toggleCheck={toggleCheck}
              updateStatus={updateStatus}
              hoverPeople={hoverPeople}
              setHoverPeople={setHoverPeople}
            />
          ))
        )}
      </div>

      {pdfModal.open && <PdfModal url={pdfModal.url} onClose={closePdf} />}
    </div>
  );
};

export default Main;

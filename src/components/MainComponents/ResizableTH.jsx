import React, { useRef } from "react";

const ResizableTH = ({
  children,
  colKey,
  columnWidths = {},
  setColumnWidths,
  minWidth = 80,
}) => {
  const width = columnWidths[colKey] ?? minWidth;
  const rafRef = useRef(null);

  const startResizing = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = columnWidths[colKey] ?? minWidth;

    document.body.style.userSelect = "none";

    const handleMouseMove = (event) => {
      
      const moved = startX - event.clientX;

      const newWidth = Math.max(minWidth, Math.round(startWidth + moved));

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setColumnWidths((prev = {}) => ({
          ...prev,
          [colKey]: newWidth,
        }));
      });
    };

    const stopResizing = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.body.style.userSelect = "auto";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResizing);
  };

  return (
    <th
      style={{
        width: `${width}px`,
        minWidth: `${minWidth}px`,
        position: "relative",
      }}
      className="border-r"
    >
      <div className="px-4 py-3 text-sm whitespace-nowrap">{children}</div>

    
      <div
        onMouseDown={startResizing}
        className="absolute top-0 left-0 h-full w-2 cursor-col-resize"
      />
    </th>
  );
};

export default ResizableTH;

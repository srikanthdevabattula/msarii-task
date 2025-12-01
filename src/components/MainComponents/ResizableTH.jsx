import React from "react";

const ResizableTH = ({
  children,
  colKey,
  columnWidths,
  setColumnWidths,
  minWidth = 80,
}) => {
  const width = columnWidths[colKey] ?? minWidth;

  const startResizing = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = width;

    document.body.style.userSelect = "none";

    const handleMouseMove = (event) => {
      const delta = event.clientX - startX;
      const newWidth = Math.max(minWidth, Math.round(startWidth + delta));

      setColumnWidths((prev) => ({ ...prev, [colKey]: newWidth }));
    };

    const stopResizing = () => {
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
        width: typeof width === "number" ? `${width}px` : width,
        minWidth: `${minWidth}px`,
        position: "relative",
      }}
      className="border-r"
    >
      <div className="px-4 py-3 text-sm whitespace-nowrap">{children}</div>

      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
        aria-hidden
      />
    </th>
  );
};

export default ResizableTH;

import React from "react";

const ResizableTH = ({
  children,
  colKey,
  columnWidths,
  setColumnWidths,
  minWidth = 80,
  scrollRef, 
}) => {
  const width = columnWidths[colKey] ?? minWidth;

  const startResizing = (e) => {
    e.preventDefault();
    const startX = e.clientX;

    document.body.style.userSelect = "none";

    const handleMouseMove = (event) => {
      const delta = startX - event.clientX;

      const sensitivity = 0.1;
      const adjustedDelta = delta * sensitivity;

      setColumnWidths((prev) => {
        const keys = Object.keys(prev);
        const index = keys.indexOf(colKey);
        const nextKey = keys[index + 1];

        if (!nextKey) return prev;

        const startWidthRight = prev[nextKey];
        const newWidthRight = Math.max(
          minWidth,
          Math.round(startWidthRight + adjustedDelta)
        );

        return { ...prev, [nextKey]: newWidthRight };
      });

     if (scrollRef?.current) {
        scrollRef.current.scrollLeft += adjustedDelta;
      }
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
        width: `${width}px`,
        minWidth: `${minWidth}px`,
        position: "relative",
      }}
      className="border-r"
    >
      <div className="px-4 py-3 text-sm whitespace-nowrap">{children}</div>

      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 h-full w-2 cursor-col-resize"
      />
    </th>
  );
};

export default ResizableTH;

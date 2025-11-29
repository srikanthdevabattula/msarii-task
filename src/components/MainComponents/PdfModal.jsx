import React from "react";

const PdfModal = ({ url, onClose }) => {
  if (!url) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[95%] h-[90%] rounded shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-2">
            <h4 className="font-medium">PDF Preview</h4>
          </div>
          <div className="flex items-center gap-2">
            <a href={url} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm">
              Open full page
            </a>
            <button onClick={onClose} className="px-3 py-1 border rounded">
              Close
            </button>
          </div>
        </div>
        <iframe src='dummy.pdf' title="pdf-view" className="w-full h-full" />
      </div>
    </div>
  );
};

export default PdfModal;

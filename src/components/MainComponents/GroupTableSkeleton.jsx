import React from "react";

export default function GroupTableSkeleton() {
  return (
    <div
      className="border rounded-xl min-w-[1339px] w-full overflow-hidden"
      dir="rtl"
    >
      <div className="grid grid-cols-8 bg-gray-100 text-sm font-medium text-gray-500 border-b">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-3">
            <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {[...Array(3)].map((_, row) => (
        <div key={row} className="grid grid-cols-8 border-b">
          <div className="p-4 flex justify-center">
            <div className="h-6 w-5 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4">
            <div className="h-4 w-14 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4">
            <div className="h-4 w-28 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4">
            <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="p-4 flex justify-center">
            <div className="h-6 w-24 bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          <div className="p-4 flex items-center gap-2 justify-center">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-8 p-4">
        <div className="col-span-8 flex justify-center">
          <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

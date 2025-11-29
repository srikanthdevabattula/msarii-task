import React from "react";

export default function GroupTableSkeleton() {
  return (
    <div className="border rounded-xl min-w-[1339px] w-full overflow-hidden" dir="rtl">
      {/* Header Skeleton */}
      <div className="grid grid-cols-8 bg-gray-100 text-sm font-medium text-gray-500 border-b">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="p-3"
          >
            <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Rows Skeleton */}
      {[...Array(3)].map((_, row) => (
        <div
          key={row}
          className="grid grid-cols-8 border-b"
        >
          {/* PDF Icon */}
          <div className="p-4 flex justify-center">
            <div className="h-6 w-5 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Location */}
          <div className="p-4">
            <div className="h-4 w-14 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Email */}
          <div className="p-4">
            <div className="h-4 w-28 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Phone */}
          <div className="p-4">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Timeline */}
          <div className="p-4">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Start Date */}
          <div className="p-4">
            <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Status Badge */}
          <div className="p-4 flex justify-center">
            <div className="h-6 w-24 bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          {/* People Avatars */}
          <div className="p-4 flex items-center gap-2 justify-center">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}

      {/* Add Row Skeleton */}
      <div className="grid grid-cols-8 p-4">
        <div className="col-span-8 flex justify-center">
          <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

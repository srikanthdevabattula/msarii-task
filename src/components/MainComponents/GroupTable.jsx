import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

const data = [
  {
    file: true,
    location: "الهند",
    email: "Arun@gmail.com",
    phone: "+94 885662623",
    schedule: "Aug 22 - Aug 22",
    start: "22/08/2025",
    status: { text: "العمل قيد التقدم", color: "bg-yellow-400/70 text-gray-700" },
    people: [
      "https://i.pravatar.cc/35?img=1"
    ],
    task: "الحرب 1983",
  },
  {
    file: true,
    location: "دبي",
    email: "Aman22@gmail.com",
    phone: "+91 6253485225",
    schedule: "Aug 22 - Aug 22",
    start: "22/08/2025",
    status: { text: "عالق", color: "bg-red-400 text-white" },
    people: [
      "https://i.pravatar.cc/35?img=5"
    ],
    task: "العظيم غاندي",
  },
  {
    file: true,
    location: "أمريكا",
    email: "Nitin34@gmail.com",
    phone: "+94 885662623",
    schedule: "Aug 22 - Aug 22",
    start: "22/08/2025",
    status: { text: "العمل قيد التقدم", color: "bg-yellow-400/70 text-gray-700" },
    people: [
      "https://i.pravatar.cc/35?img=20"
    ],
    task: "عالم شجاع جديد",
  },
];

const GroupTable = () => {
  return (
    <div className="w-full border rounded-xl overflow-hidden">
      {/* Group Title Row */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b text-lg font-semibold text-red-500">
        <div className="flex items-center gap-2">
          <span>▼</span>
          <span>Group 1</span>
        </div>
        <div className="flex gap-2">
          <FiPlus className="text-xl" />
          <FaRegCircle />
        </div>
      </div>

      <table className="w-full text-right border-collapse">
        <thead className="bg-[#F5F7FB] text-gray-700 text-sm">
          <tr>
            <th className="py-3 px-2 border">ملف</th>
            <th className="py-3 px-2 border">موقع</th>
            <th className="py-3 px-2 border">بريد إلكتروني</th>
            <th className="py-3 px-2 border">هاتف</th>
            <th className="py-3 px-2 border">الجدول الزمني</th>
            <th className="py-3 px-2 border">تاريخ البدء</th>
            <th className="py-3 px-2 border">حالة</th>
            <th className="py-3 px-2 border">الناس</th>
            <th className="py-3 px-2 border">مهمة</th>
            <th className="py-3 px-2 border"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="text-sm">
              <td className="border py-3 px-4 text-center">
                {row.file && <IoMdDocument className="text-red-500 text-2xl mx-auto" />}
              </td>

              <td className="border py-3 px-4">{row.location}</td>
              <td className="border py-3 px-4">{row.email}</td>
              <td className="border py-3 px-4">{row.phone}</td>
              <td className="border py-3 px-4">{row.schedule}</td>
              <td className="border py-3 px-4">{row.start}</td>

              <td className="border py-3 px-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm ${row.status.color}`}
                >
                  {row.status.text}
                </span>
              </td>

              <td className="border py-3 px-4">
                <div className="flex justify-end">
                  {row.people.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-9 h-9 rounded-full border-2 border-white -ml-3"
                      alt="user"
                    />
                  ))}
                </div>
              </td>

              <td className="border py-3 px-4">{row.task}</td>

              <td className="border py-3 px-4 text-center">
                <FaRegCircle className="text-gray-600" />
              </td>
            </tr>
          ))}

          {/* Add Row */}
          <tr className="text-gray-600 hover:bg-gray-50 cursor-pointer">
            <td colSpan={10} className="py-4 px-6 border text-right flex justify-end gap-2">
              <FiPlus className="text-lg" />
              <span>إضافة صف</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;

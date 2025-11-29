import React from "react";

const AddRow = ({ groupId, addRow }) => {
  return (
    <tr className="border-t h-[30px]">
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4"></td>
      <td className="px-4 py-4">
        <button
          className="inline-flex items-center gap-2 px-3   text-black "
          
        > إضافة صف
       
       <span className="text-xl">+</span> </button>
      </td>
      <td className="px-4 py-4"></td>
    </tr>
  );
};

export default AddRow;

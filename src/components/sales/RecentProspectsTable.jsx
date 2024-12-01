import React from "react";
import { Link } from "react-router-dom";

const RecentProspectsTable = () => {
  const prospects = [
    { id: "01", name: "Home Decor Range", dropOff: "Popularity" },
    { id: "02", name: "Disney Princess Pink", dropOff: "Popularity" },
    { id: "03", name: "Bathroom Essentials", dropOff: "Popularity" },
    { id: "04", name: "Apple Smartwatches", dropOff: "Popularity" },
  ];

  return (
    <div className="w-[45%] ml-[54%] h-80 -mt-[30.1%] bg-white border border-[#EDF2F6] shadow-lg rounded-[5px] p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-product-sans font-bold text-[17px] text-[#222B45]">Recent Prospects</h2>
        <Link to="/SalesDashboard/prospects">
        <button className="w-[62px] h-[25px] text-[#C61531] text-[10px] rounded-[3px] font-[Lato] bg-red-200 border border-[#C61531]">
          View All
        </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead>
            <tr className="text-[#96A5B8] text-[13px]">
              <th className="w-[10%] py-2">#</th>
              <th className="w-[50%] py-2">Name</th>
              <th className="w-[40%] py-2 text-right">DropOff</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {prospects.map((prospect, index) => (
              <tr key={index} className="border-t border-[#EDF2F6]">
                <td className="py-2 text-[#222B45]">{prospect.id}</td>
                <td className="py-2 text-[#222B45]">{prospect.name}</td>
                <td className="py-2 text-[#96A5B8] text-right">{prospect.dropOff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProspectsTable;

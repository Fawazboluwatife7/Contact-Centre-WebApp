import React from "react";
import { useNavigate } from "react-router-dom";

const Workbench1 = () => {

  const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  const tasks = [
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
      statusColor: "text-[#FFCD28]",
    },
    {
      task: "Create proposal for Smiths Hospital",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Completed",
      statusColor: "text-[#82C659]",
    },
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
      statusColor: "text-[#FFCD28]",
    },
    // Add more tasks as needed
  ];

  return (
    <div className="w-[99%] mt-14 mx-auto p-8 bg-white border border-[#EDF2F6] shadow-lg rounded-[5px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="ml-9 text-[#353535] font-bold text-[25px] leading-[23px]">Workbench</h2>
        <button onClick={() => handleNavigate("/SalesDashboard/pending-task")} className="mr-[8%] w-[62px] h-[25px] text-[#C61531] text-[10px] rounded-[3px] font-[Lato] bg-red-200 border border-[#C61531]">
          View All
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#F0F0F0] mb-4"></div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#F8F9FA] text-[#1F4173] text-[12px] font-bold leading-[14px]">
              <th className="py-2 text-left pl-4">Task</th>
              <th className="py-2 text-center">Assigned to</th>
              <th className="py-2 text-center">Date</th>
              <th className="py-2 text-center">Source</th>
              <th className="py-2 text-center">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t border-[#EDF2F6]">
                <td className="py-3 px-4 text-[#353535] text-[13px] font-[Product Sans]">{task.task}</td>
                <td className="py-3 text-center text-[#353535] text-[12px] font-[Product Sans]">{task.assignedTo}</td>
                <td className="py-3 text-center text-[#353535] text-[12px] font-[Product Sans]">{task.date}</td>
                <td className="py-3 text-center text-[#353535] text-[12px] font-[Product Sans]">{task.source}</td>
                <td className={`py-3 text-center text-[12px] font-[Product Sans] ${task.statusColor}`}>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workbench1;

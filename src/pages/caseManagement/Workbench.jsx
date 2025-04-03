import React from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const data = [
    {
        task: "Follow up on in-patient at Zion Hospital.",
        assignedTo: "Salau Kemi",
        date: "9:27am 29/10/2022",
        source: "Case Management",
        status: "Pending",
    },
    {
        task: "Request for Mr Ife’s medical report from Fidelity Hospital.",
        assignedTo: "Olawale Adeola",
        date: "9:27am 29/10/2022",
        source: "Pharmacy benefit",
        status: "Completed",
    },
    {
        task: "Send proposal to Smith Hospitals",
        assignedTo: "Bisi Adewale",
        date: "9:27am 29/10/2022",
        source: "Customer Service",
        status: "Pending",
    },
    {
        task: "Send proposal to Smith Hospitals",
        assignedTo: "Temitope Ajayi",
        date: "9:27am 29/10/2022",
        source: "Customer Service",
        status: "Pending",
    },
    {
        task: "Request for Mr Ife’s medical report from Fidelity Hospital.",
        assignedTo: "Olawale Adeola",
        date: "9:27am 29/10/2022",
        source: "Pharmacy benefit",
        status: "Completed",
    },
];

const Workbench = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <div>
                        <span className="text-[1.5rem] text-[#353535]">
                            Workbench
                        </span>

                        <div className="justify-items-end">
                            <h1
                                className="flex items-center space-x-2 text-[1.3rem] font-semibold text-red-600 cursor-pointer"
                                onClick={() => handleNavigate("/dashboard")}
                            >
                                <IoArrowBackSharp className="h-6 w-6 text-red-600 mt-1" />
                                <span>Back to Dashboard</span>
                            </h1>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
                            <thead className="bg-[#F9FAFB] border-b-2 border-gray-300">
                                <tr className=" border-b-gray-400">
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Task
                                    </th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Assigned to
                                    </th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Date
                                    </th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Source
                                    </th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Status
                                    </th>
                                    <th className="text-left px-6 py-3 font-semibold text-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="px-6 py-4 text-gray-700">
                                            {row.task}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {row.assignedTo}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {row.date}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {row.source}
                                        </td>
                                        <td
                                            className={`px-6 py-4 font-semibold ${
                                                row.status === "Pending"
                                                    ? "text-yellow-500"
                                                    : "text-green-500"
                                            }`}
                                        >
                                            {row.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="p-2 ">
                                                •••
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workbench;

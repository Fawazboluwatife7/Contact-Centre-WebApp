import React from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const data = [
    {
        notificationTitle: "Repeated Services",
        memberName: "Kofo Judith",
        description: "4th visit to St Judes Hospital for swollen lymph nodes.",
        hospital: "St Judes Hospital",
        location: "Lagos",
        date: "3 minutes",
    },
    {
        notificationTitle: "Ambulance Services",
        memberName: "Umar Aliyu",
        description: "Ambulance service to Monty Hospital.",
        hospital: "Monty Hospital",
        location: "Imo",
        date: "5 minutes",
    },
    {
        notificationTitle: "Ambulance Services",
        memberName: "Umar Aliyu",
        description: "Ambulance service to Monty Hospital.",
        hospital: "Monty Hospital",
        location: "Imo",
        date: "5 minutes",
    },
    {
        notificationTitle: "Ambulance Services",
        memberName: "Umar Aliyu",
        description: "Ambulance service to Monty Hospital.",
        hospital: "Monty Hospital",
        location: "Imo",
        date: "5 minutes",
    },
    {
        notificationTitle: "Ambulance Services",
        memberName: "Umar Aliyu",
        description: "Ambulance service to Monty Hospital.",
        hospital: "Monty Hospital",
        location: "Imo",
        date: "5 minutes",
    },
    {
        notificationTitle: "Ambulance Services",
        memberName: "Umar Aliyu",
        description: "Ambulance service to Monty Hospital.",
        hospital: "Monty Hospital",
        location: "Imo",
        date: "5 minutes",
    },
];

const Notification = () => {
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
                        <div className="flex justify-between">
                            <div className="flex">
                                <span className="text-[1.5rem] flex">
                                    Dashboard/
                                </span>
                                <span className="text-[1.5rem] text-red-600">
                                    Notifications
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span>Showing data from:</span>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="date"
                                        className="border rounded-md p-2"
                                        defaultValue="2020-03-29"
                                    />
                                    <input
                                        type="date"
                                        className="border rounded-md p-2"
                                        defaultValue="2023-11-26"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="justify-items-end">
                            <h1
                                className="flex items-center space-x-2 text-[1.3rem] font-semibold text-red-600 cursor-pointer"
                                onClick={() => handleNavigate("/dashboard")}
                            >
                                <IoArrowBackSharp className="h-6 w-6 text-red-600 mt-1" />
                                <span>Back to Dashboard</span>
                            </h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto ">
                                <thead className="bg-white text-gray-600 w-full">
                                    <tr>
                                        <th className="px-4 py-2 text-left">
                                            Notification Title
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Member Name
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Description
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Hospital
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Location
                                        </th>
                                        <th className="px-4 py-2 text-left">
                                            Date
                                        </th>
                                        <th className="px-4 py-2 text-left"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-200 w-full">
                                    {data.map((row, index) => (
                                        <tr
                                            key={index}
                                            className="border-b bg-gray-100  mb-10 rounded-md" // Adds space and rounded corners to rows
                                        >
                                            <td className="px-4 py-3">
                                                {row.notificationTitle}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.memberName}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.description}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.hospital}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.location}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.date}
                                            </td>
                                            <td className="flex space-x-2 px-3 mt-2">
                                                <button className="bg-[#F4E4E9] border-[#D32F2F] text-[#C61531] font-bold w-[7rem] h-[2rem] border-[2px] rounded-md hover:bg-[#D32F2F] hover:text-white transition-all duration-200">
                                                    Escalate
                                                </button>

                                                <button className="bg-[#C61531] text-white rounded-md w-[7rem] h-[2rem] border-[2px] font-normal hover:bg-white hover:text-red-600 transition-all duration-200">
                                                    Assign Task
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
        </div>
    );
};

export default Notification;

import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BiSolidFileExport } from "react-icons/bi";
import { IoPrintSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const enrolleeInfo = {
    name: "Tunde Bakare",
    enrolleeId: "LH09980/0",
    group: "Sterling",
    scheme: "NGPRO",
    age: 62,
    sex: "Male",
    policyDate: "02/10/2021 - 02/10/2024",
    dob: "01 October 1960",
    phoneNumber: "+2348035911412",
    address: "122/123 Funsho Williams Avenue, Surulere, Lagos",
    email: "tundebakare@gmail.com",
    status: "Active",
    nextOfKin: "Shade Bakare",
    nokPhoneNumber: "+2349030302321",
    profileImage: "profile-image-url-here",
    id: "977735",
};

const data = [
    {
        code: "R59.9",
        diagnosis: "Resistant headaches",
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        drugs: "Paracetamol",
        investigation: "X-Ray and scan",
        treatment: "Headache and stitches",
        status: "Approved",
        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        endDate: "29/10/2024",
        plan: "Magnum",
        issuer: "Ode P.",
        name: "Tunde Bakare",
        planName: "PRO2024",
        serviceName: "Outpatient",
        benefits: "Outpatients",
        aggregatelimit: "0",
        serviceTypeLimit: "Individual Limit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
        concessionDate: "02/02/2022",
        concession: "Permitted to use grade A hospitals",
        approval: "Ajibade Omowunmi",
        preauthCode: "WXCL/LH/RAD/248225",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo",
        agent: "Adebiyi Johnson",
        flagReason: "Patient can access all care plus exclusions",
        id: "977734",
    },
    {
        code: "R59.9",
        diagnosis: "Resistant headaches",
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        drugs: "Paracetamol",
        investigation: "X-Ray and scan",
        treatment: "Headache and stitches",
        status: "Approved",
        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        endDate: "29/10/2024",
        plan: "Magnum",
        issuer: "Ode P.",
        name: "Tunde Bakare",
        planName: "PRO2024",
        serviceName: "Outpatient",
        benefits: "Outpatients",
        aggregatelimit: "0",
        serviceTypeLimit: "Individual Limit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
        concessionDate: "02/02/2022",
        Concession: "Permitted to use grade A hospitals",
        approval: "Ajibade Omowunmi",
        preauthCode: "WXCL/LH/RAD/248225",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo",
        agent: "Adebiyi Johnson",
        flagReason: "Patient can access all care plus exclusions",
        id: "977736",
    },

    // Add more rows if needed
];

// Tabs for table filters
const tabs = ["All", "Open", "Closed", "Escalation"];

const headers = {
    All: [
        "Code",
        "Diagnosis",
        "Date",
        "Provider",
        "Drugs",
        "Investigation",
        "Treatment",
        "Status",
    ],
    Open: [
        "Date",
        "Provider",
        "Diagnosis",
        "Description",
        "Charge Amount",
        "Quantity",
        "Preauth code",
        "Visit Type",

        "Status",
    ],
    Closed: [
        "#ID",
        "Name",
        "Start Date",
        "End Date",
        "Plan",
        "Diagnosis",
        "Provider",
        "State",
        "Issuer",
    ],
    Escalation: ["Date", "Provider"],
};

const filterData = (activeTab) => {
    const relevantHeaders = headers[activeTab] || [];
    return data.map((item) => {
        // Return only the fields matching relevant headers
        const filteredItem = {};
        relevantHeaders.forEach((header) => {
            // Map header to the corresponding key in the data object
            const key = header
                .replace(/ /g, "")
                .replace(/#/, "") // Remove spaces and "#" for key matching
                .toLowerCase();
            filteredItem[header] = item[key] || "-"; // Fallback to "-" if no matching field
        });
        return filteredItem;
    });
};

const AllTicket = () => {
    const [activeTab, setActiveTab] = useState("All");
    const filteredData = filterData(activeTab);
    const currentHeaders = headers[activeTab];

    const navigate = useNavigate();

    const handleCLick = (item) => {
        setouterSideBar(item);
    };

    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <div className=" flex justify-between">
                        <span className="text-xl  text-[2.2rem]">Tickets</span>
                        <div className=" flex gap-3">
                            <button
                                className="flex items-center justify-center gap-2 bg-[#C61531] py-2 px-4 rounded-md text-white"
                                onClick={() => handleNavigate("/cmticket")}
                            >
                                <FaPlus className="h-6" />
                                Create New Ticket
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center w-1/2 mt-7">
                        <div className="relative w-full">
                            <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-red-600" />

                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-2 pl-10 pr-4 border rounded-md bg-white placeholder-red-600 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className=" mt-7 bg-white h-[20rem] py-2 rounded-md ">
                        <div className="flex space-x-2 mb-4 border-b px-4 pt-2 justify-between">
                            <div className="flex mt-6 border-b space-x-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-2 text-sm font-medium w-[8rem] ${
                                            activeTab === tab
                                                ? "text-red-500 bg-white border-b-4 border-red-500 border"
                                                : "text-white bg-red-500"
                                        } rounded-t-md`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className=" flex justify-end space-x-2 py-2 mt-3">
                                <button className="bg-[#FFFFFF] border border-red-500 rounded-md   text-red-600 flex items-center gap-1 px-4">
                                    <BiSolidFileExport className=" text-red-600 h-5 w-5" />
                                    Export
                                </button>
                                <button className="bg-[#FFFFFF] border border-red-500 rounded-md   text-red-600 flex items-center gap-1 px-4">
                                    <IoPrintSharp className=" text-red-600 h-5 w-5" />
                                    Export
                                </button>
                                <button className="bg-[#FFFFFF] border border-red-500 rounded-md  text-red-600 flex items-center  gap-1 px-4">
                                    <FaFilter className=" text-red-600 h-5 w-5" />
                                    Export
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto bg-white px-4 ">
                            <table className="table-auto w-full border-collapse border border-gray-300 overflow-x-scroll">
                                <thead className=" overflow-x-scroll">
                                    <tr className="bg-gray-50 overflow-x-scroll ">
                                        {currentHeaders.map((header, index) => (
                                            <th
                                                key={index}
                                                className="border px-4 py-2 text-left"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            className="hover:bg-gray-100 "
                                            onClick={() =>
                                                handleNavigate("/viewticket")
                                            }
                                        >
                                            {currentHeaders.map(
                                                (header, colIndex) => (
                                                    <td
                                                        key={colIndex}
                                                        className="border px-4 py-2"
                                                    >
                                                        {item[header]}
                                                    </td>
                                                ),
                                            )}
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

export default AllTicket;

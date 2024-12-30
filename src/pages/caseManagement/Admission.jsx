import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

// Mock data for the table
const data = [
    {
        id: "947736",
        name: "Salau Kemi",
        startDate: "29/10/2024",
        endDate: "-",
        plan: "Magnum",
        diagnosis: "Swollen lymph nodes",
        provider: "Rexxon Healthcare",
        state: "Lagos",
        issuer: "Ode P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },
    {
        id: "947737",
        name: "John Doe",
        startDate: "22/08/2022",
        endDate: "29/10/2024",
        plan: "Platinum",
        diagnosis: "Flu symptoms",
        provider: "Care Health",
        state: "Ogun",
        issuer: "Jane P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },
    {
        id: "947738",
        name: "Salau Kemi",
        startDate: "22 Aug 2022",
        endDate: "-",
        plan: "Magnum",
        diagnosis: "Swollen lymph nodes",
        provider: "Rexxon Healthcare",
        state: "Lagos",
        issuer: "Ode P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },
    {
        id: "947739",
        name: "Salau Kemi",
        startDate: "22 Aug 2022",
        endDate: "-",
        plan: "Magnum",
        diagnosis: "Swollen lymph nodes",
        provider: "Rexxon Healthcare",
        state: "Lagos",
        issuer: "Ode P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },
    {
        id: "947740",
        name: "Salau Kemi",
        startDate: "22 Aug 2022",
        endDate: "-",
        plan: "Magnum",
        diagnosis: "Swollen lymph nodes",
        provider: "Rexxon Healthcare",
        state: "Lagos",
        issuer: "Ode P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },
    {
        id: "947738",
        name: "Salau Kemi",
        startDate: "22 Aug 2022",
        endDate: "-",
        plan: "Magnum",
        diagnosis: "Swollen lymph nodes",
        provider: "Rexxon Healthcare",
        state: "Lagos",
        issuer: "Ode P.",
        caseManager: " Valery O",
        NoOfDays: "3",
        Status: "Referred",
    },

    // Add more rows if needed
];

// Tabs for table filters
const tabs = [
    "All",
    "On Admission",
    "Discharged",
    "Referred",
    "Demise",
    "Expired",
];

const badgeColors = {
    Admission: "bg-yellow-400 text-black",
    Discharged: "bg-green-500 text-white",
    Referred: "bg-orange-400 text-white",
    Demise: "bg-red-600 text-white",
    Expired: "bg-gray-500 text-white",
};

// Function to filter data based on active tab
const filterData = (activeTab) => {
    switch (activeTab) {
        case "On Admission":
            return data.filter((item) => item.endDate === "-");
        case "Discharged":
            return data.filter((item) => item.endDate !== "-");
        // Add other conditions as needed
        default:
            return data;
    }
};

const Admission = () => {
    const [enrolleeName, setEnrolleeName] = useState("");
    const [enrolleeId, setEnrolleeId] = useState("");
    const [provider, setProvider] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [activeTab, setActiveTab] = useState("All");

    const handleSearch = () => {
        console.log({ enrolleeId, enrolleeName, provider, dateFrom, dateTo });
    };

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const filteredData = filterData(activeTab);

    const [currentPage, setCurrentPage] = useState(1); // Active page
    const itemsPerPage = 3; // Number of items per page
    const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Total pages

    // Function to calculate the data for the current page
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    // Handler to change pages
    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <span className="text-xl  text-[2rem]">Admissions</span>

                    {/* Search Filters */}
                    <div className="flex w-full bg-white p-6 mt-6 rounded-md ">
                        <div
                            style={{
                                display: "flex",
                                gap: "16px",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            {/* Enrollee ID */}
                            <div>
                                <label className=" text-sm  mb-1">
                                    Enrollee ID
                                </label>
                                <div className="relative w-full">
                                    <img
                                        src="searchBar.svg"
                                        alt="Search Icon"
                                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5"
                                    />
                                    <input
                                        type="text"
                                        className="w-full py-1 pl-10 pr-4 border-gray-300 border bg-white placeholder-gray-400 rounded-lg focus:outline-none"
                                        value={enrolleeId}
                                        onChange={(e) =>
                                            setEnrolleeId(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Enrollee Name */}
                            <div>
                                <label className=" text-sm block mb-1">
                                    Enrollee Name
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 px-2 py-1 w-full rounded-lg focus:outline-none"
                                    value={enrolleeName}
                                    onChange={(e) =>
                                        setEnrolleeName(e.target.value)
                                    }
                                />
                            </div>

                            {/* Provider */}
                            <div>
                                <label className=" text-sm block mb-1">
                                    Provider
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 px-2 py-1 w-full rounded-lg focus:outline-none"
                                    value={provider}
                                    onChange={(e) =>
                                        setProvider(e.target.value)
                                    }
                                />
                            </div>

                            {/* Date From */}
                            <div>
                                <label className=" text-sm  mb-1">
                                    Date From
                                </label>
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-lg focus:outline-none px-2 py-1 w-full"
                                    value={dateFrom}
                                    onChange={(e) =>
                                        setDateFrom(e.target.value)
                                    }
                                />
                            </div>

                            {/* Date To */}
                            <div>
                                <label className=" text-sm  mb-1">
                                    Date To
                                </label>
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-lg focus:outline-none px-2 py-1 w-full"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                />
                            </div>

                            {/* Search Button */}
                            <div>
                                <button
                                    className="bg-white flex items-center justify-center rounded text-red-500 border px-2 py-1 border-[#C61531] w-[7rem] mt-6 gap-2"
                                    onClick={handleSearch}
                                >
                                    <img
                                        src="redSearch.svg"
                                        alt="Search Icon"
                                        className="h-5 w-5"
                                    />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-between">
                        {/* Tabs Section */}
                        <div className="flex mt-6 border-b space-x-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-4 py-2 text-sm font-medium w-[8rem] ${
                                        activeTab === tab
                                            ? "text-red-500 bg-white border-b-4 border-red-500"
                                            : "text-white bg-red-500"
                                    } rounded-t-md`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Filter Section */}
                        <div className="rounded-md bg-white cursor-pointer flex items-center space-x-2 px-4 mt-6 border  border-[#AB111157]">
                            <img
                                src="funnel.svg"
                                className=""
                                alt="Filter Icon"
                            />
                            <span className="text-gray-700">Filter</span>
                        </div>
                    </div>

                    {/* Table */}
                    {/* Table */}
                    <div
                        className="overflow-x-auto bg-white p-4 rounded-md"
                        onClick={() => handleNavigate("/patienthistory")}
                    >
                        <table className="table-auto w-full">
                            <thead className="bg-white text-[#2F2F2F]">
                                <tr className=" ">
                                    <th className="px-4 py-2">#ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Start Date</th>
                                    <th className="px-4 py-2">End Date</th>
                                    <th className="px-4 py-2">Plan</th>
                                    <th className="px-4 py-2">Diagnosis</th>
                                    <th className="px-4 py-2">Provider</th>
                                    <th className="px-4 py-2">State</th>
                                    <th className="px-4 py-2">Issuer</th>
                                    <th className="px-4 py-2">Case Manager</th>
                                    <th className="px-4 py-2">No of Days</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-100 border "
                                    >
                                        <td className="px-4 py-2">{item.id}</td>
                                        <td className="px-4 py-2">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.startDate}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.endDate}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.plan}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.diagnosis}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.provider}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.state}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.issuer}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.caseManager}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.NoOfDays}
                                        </td>
                                        <td className="px-4 py-2">
                                            {item.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            className="px-2 py-1 border rounded-l-md"
                            onClick={() => changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`px-3 py-1 ${
                                    index + 1 === currentPage
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-200"
                                }`}
                                onClick={() => changePage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="px-2 py-1 border rounded-r-md"
                            onClick={() => changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;

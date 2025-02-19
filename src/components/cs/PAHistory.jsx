import print from "../../assets/csImages/print.svg";
import search from "../../assets/csImages/Search.svg";
import plus from "../../assets/csImages/plusSign.svg";
import filter from "../../assets/csImages/filter.svg";
import exportIcon from "../../assets/csImages/export.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";

const PaHistory = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("All");
    const [allPA, setAllPA] = useState([]);
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [currentDate, setCurrentDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const tabs = [
        { name: "All", status: "All" },
        {
            name: "Pending",
            status: ["Authorization Pending", "Authorisation Pending"],
        },
        { name: "Approved", status: "Authorisation approved claim pending" },
        { name: "Declined", status: "Declined" },
    ];

    function formatISOToCustom(dateString) {
        if (!dateString) return ""; // Handle cases where DateIssued might be undefined/null

        const date = new Date(dateString);

        // Extract components
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");

        // Convert to 12-hour format with AM/PM
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 0 to 12 for midnight

        return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
    }

    const filteredData = allPA.filter((item) => {
        if (selectedTab === "All") return true; // Show all data when 'All' is selected
        if (Array.isArray(selectedTab)) {
            return selectedTab.includes(item.PAStatus); // Check if PAStatus is in the array
        }
        return item.PAStatus === selectedTab; // Direct match for single status
    });

    const handleGenerateClick = () => {
        navigate("/generatePaCode");
    };

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Gets YYYY-MM-DD
        setCurrentDate(today);
    }, []); // This runs only once to set the date

    // Run getDailyPA only when currentDate updates
    useEffect(() => {
        if (currentDate) {
            GetAllPA();
        }
    }, [currentDate]);

    console.log(
        "xxx",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
            {
                method: "GET",
            },
        ),
    );

    async function GetAllPA() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("xp", data.result);

            setAllPA(data.result);
        } catch (error) {
            console.error("Error fetching PA:", error);
            setAllPA([]);
        } finally {
            setIsLoading(false);
        }
    }

    const getStatusColor = (PAStatus) => {
        if (!PAStatus) return ""; // Handle null/undefined cases

        const lowerStatus = PAStatus.toLowerCase(); // Make it case-insensitive

        if (lowerStatus === "authorisation approved claim pending")
            return "text-green-500";

        if (
            lowerStatus === "authorisation pending" ||
            lowerStatus === "authorization pending"
        )
            return "text-orange-500";

        if (lowerStatus === "declined") return "text-red-500";

        return "";
    };

    const handleTabClick = (status) => {
        setSelectedTab(status);
        setCurrentPage(1); // Reset to first page when switching tabs
    };

    const handleRowClick = () => {
        //its not getting the userID yet
        navigate("/enrolleeInformations");
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedResults = filteredData.slice(startIndex, endIndex);
    return (
        <div className="bg-lightblue w-full h-[100vh]">
            <div className=" mx-3 p-1 pt-3 bg-lightblue  flex justify-between">
                <h3 className="font-bold text-lg font-sans">PA Requests</h3>

                <button
                    onClick={handleGenerateClick}
                    className="   ml-auto w-[182px] h-[44px] bg-red-700 text-white rounded flex items-center justify-center"
                >
                    <img src={plus} alt="icon" className="mr-1" />
                    <span>Generate PA Code</span>
                </button>
            </div>

            <div className=" flex bg-white-500 mx-2 gap-10">
                <div className=" h-[37px] mt-[1rem] flex gap-3">
                    <button className="w-full h-full flex items-center px-2 border border-gray-300 rounded outline-none bg-white">
                        <img src={search} alt="icon" className="mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full border-none outline-none placeholder-gray-500 bg-white"
                        />
                    </button>
                </div>

                <div className="  ">
                    <p>Date From</p>
                    <input
                        type="date"
                        className=" rounded-md w-[10rem] h-[2rem]"
                    />
                </div>

                <div className=" mb-5">
                    <p>Date To</p>
                    <input
                        type="date"
                        className=" rounded-md w-[10rem] h-[2rem]"
                    />
                </div>
            </div>

            <div className="w-full bg-lightgray flex justify-between">
                <div className="flex gap-x-1  w-[520px] h-[43px] bg-white ml-2 rounded-t-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.status}
                            className={`px-4 py-2 text-sm font-medium w-[8rem] rounded-t-md ${
                                selectedTab === tab.status
                                    ? "text-red-500 bg-white border border-b-4 border-red-500"
                                    : "text-white bg-red-500"
                            }`}
                            onClick={() => handleTabClick(tab.status)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md  rounded-md mx-2">
                <div className=" max-h-[500px] overflow-y-auto">
                    <table className="w-full bg-white text-3xl ">
                        <thead className="text-base uppercase bg-white border-b border-gray-200 sticky top-0 z-10 rounded-t-md">
                            <tr className="text-sm text-left">
                                <th className="px-4 py-2 border">S/N</th>
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Enrollee</th>
                                <th className="px-4 py-2 border">Provider</th>
                                <th className="px-4 py-2 border">EnrolleeID</th>
                                <th className="px-4 py-2 border">Diagnosis</th>
                                <th className="px-4 py-2 border">Request</th>
                                <th className="px-4 py-2 border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="h-64 text-center"
                                    >
                                        <div className="flex flex-col items-center justify-center h-full space-y-2">
                                            <img
                                                src="public/loaderx.gif"
                                                alt="Loading animation"
                                                className="w-40 h-40" /* Adjust size as needed */
                                            />
                                            <h3 className="text-gray-600 text-lg font-semibold">
                                                Please Wait, Fetching PA...
                                            </h3>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredData.length > 0 ? (
                                paginatedResults.map((request, index) => (
                                    <tr
                                        key={index}
                                        className=" cursor-pointer text-sm"
                                        onClick={() =>
                                            handleRowClick(request.enrolleeID)
                                        }
                                    >
                                        <td className="px-4 border">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="px-4  border">
                                            {formatISOToCustom(
                                                request.Visitdate,
                                            )}
                                        </td>
                                        <td className="px-4 border">
                                            {request.surname} {""}
                                            {request.firstname}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.provider}
                                        </td>
                                        <td className="px-4 border whitespace-nowrap">
                                            {request.enrolleeID}
                                        </td>
                                        <td className="px-4 border">
                                            {request.diagcode
                                                .split(" ")
                                                .slice(1)
                                                .join(" ")}
                                        </td>
                                        <td className="px-4 border">
                                            {request.ProcedureDescription}
                                        </td>
                                        <td
                                            className={`px-4 border ${getStatusColor(
                                                request.PAStatus,
                                            )}`}
                                        >
                                            {request.PAStatus}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="h-64 text-center"
                                    >
                                        <div className="flex justify-center items-center h-full">
                                            <img
                                                src="/noRecordFound.svg"
                                                alt="No records found"
                                                className="py-5 px-20"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {allPA.length > itemsPerPage && (
                <div className="flex justify-center mt-3 items-center gap-4">
                    <button
                        className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                        disabled={currentPage === 1}
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                    >
                        <MdSkipPrevious className="w-7 h-7 mr-2" />
                        Previous
                    </button>

                    {/* Show "Pages Left: X" */}
                    <span className="text-gray-700 text-lg font-semibold">
                        Page {currentPage} of {totalPages} Pages
                    </span>

                    <button
                        className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                        disabled={currentPage >= totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        <CgPlayTrackNext className="w-7 h-7 mr-2" />
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default PaHistory;

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";
import Sidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { BiSearchAlt2 } from "react-icons/bi";

const PaHistory = () => {
    const navigate = useNavigate();

    const handleNavigate = (enrollee) => {
        const enrolleeRequests = allPA.filter(
            (req) => req.enrolleeID === enrollee.enrolleeID,
        );

        navigate("/csenrolleepage", { state: { enrollee, enrolleeRequests } });
    };

    const [selectedTab, setSelectedTab] = useState("All");
    const [allPA, setAllPA] = useState([]);
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [currentDate, setCurrentDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [visitId, setVisitId] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const tabs = [
        { name: "All", status: "All" },
        { name: "Declined", status: "Declined" },
        {
            name: "Pending",
            status: "Authorization Pending",
        },
        { name: "Approved", status: "Approved" },
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

    const filteredData = allPA.filter((request) => {
        if (selectedTab === "All") return true;

        if (Array.isArray(selectedTab)) {
            return selectedTab.some(
                (status) =>
                    status.trim().toLowerCase() ===
                    request.PAStatus.trim().toLowerCase(),
            );
        }

        return (
            selectedTab.trim().toLowerCase() ===
            request.PAStatus.trim().toLowerCase()
        );
    });

    const handleGenerateClick = () => {
        navigate("/createpaenrolleesearch");
    };

    const GetAllPA = async (from, to, visit = "", cifno = 0, status = "") => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${from}&Todate=${to}&cifno=${cifno}&PAStatus=${status}&visitid=${visit}`,
            );
            const data = await response.json();
            console.log("API Response:", data.result);
            setAllPA(data.result || []);
        } catch (error) {
            console.error("Error fetching PA:", error);
            setAllPA([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setFromDate(today);
        setToDate(today);

        // Fetch data after state is updated
        GetAllPA(today, today);
    }, []);

    const getStatusColor = (PAStatus) => {
        if (!PAStatus) return ""; // Handle null/undefined cases

        const lowerStatus = PAStatus.toLowerCase(); // Make it case-insensitive

        if (lowerStatus === "approved") return "text-green-500";

        if (lowerStatus === "authorization pending") return "text-orange-500";

        if (lowerStatus === "declined") return "text-red-500";

        return "";
    };

    const handleSearch = (e) => {
        e.preventDefault();
        GetAllPA(fromDate, toDate, visitId);
    };

    const handleTabClick = (status) => {
        setSelectedTab(status);
        setCurrentPage(1); // Reset to first page when switching tabs
    };

    // const uniqueFilteredData = useMemo(() => {
    //     const seenIDs = new Set();
    //     return filteredData.filter((item) => {
    //         if (!seenIDs.has(item.enrolleeID)) {
    //             seenIDs.add(item.enrolleeID);
    //             return true;
    //         }
    //         return false;
    //     });
    // }, [filteredData]);

    // const totalPages = Math.ceil(uniqueFilteredData.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const paginatedResults = uniqueFilteredData.slice(
    //     startIndex,
    //     startIndex + itemsPerPage,
    // );

    const uniqueFilteredData = useMemo(() => {
        const seenIDs = new Set();
        return filteredData.filter((item) => {
            if (!seenIDs.has(item.enrolleeID)) {
                seenIDs.add(item.enrolleeID);
                return true;
            }
            return false;
        });
    }, [filteredData]);

    // Sort uniqueFilteredData by Visitdate
    const sortedUniqueData = useMemo(() => {
        return [...uniqueFilteredData].sort((a, b) => {
            // Convert dates to timestamps for comparison
            const dateA = new Date(a.Visitdate).getTime();
            const dateB = new Date(b.Visitdate).getTime();

            // Sort in ascending order (earliest first)
            return dateA - dateB;
        });
    }, [uniqueFilteredData]);

    const totalPages = Math.ceil(sortedUniqueData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedResults = sortedUniqueData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-y-auto">
                <Header className="sticky top-0 z-50 bg-white shadow-md" />
                <div className="bg-lightblue w-full p-3">
                    <div className=" mx-3 p-1 pt-3 bg-lightblue  flex justify-between">
                        <h3 className="font-bold text-lg font-sans">
                            PA Requests
                        </h3>
                    </div>

                    <form
                        onSubmit={handleSearch}
                        className=" flex gap-6 mb-3 px-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                From Date
                            </label>
                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                className="mt-1 block w-[8rem] h-[2rem] px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                To Date
                            </label>
                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                className="mt-1 block w-[8rem] h-[2rem] px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Visit ID
                            </label>
                            <input
                                type="text"
                                value={visitId}
                                onChange={(e) => setVisitId(e.target.value)}
                                placeholder="Enter Visit ID"
                                className="mt-1 block w-[8rem] h-[2rem] px-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="  flex ml-[33rem] mt-4 px-4 w-[7rem] h-[2.5rem] gap-2 font-medium  rounded-md  text-white bg-red-600 hover:bg-white  cursor-pointer hover:text-red-600">
                            <BiSearchAlt2 className=" mt-3 text-[20px]" />

                            <button type="submit" className=" font-medium ">
                                Search
                            </button>
                        </div>
                    </form>

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
                                        <th className="px-4 py-2 border">
                                            S/N
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Date
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Enrollee
                                        </th>
                                        <th className="px-4 py-2 border">
                                            VisitId
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Provider
                                        </th>
                                        <th className="px-4 py-2 border">
                                            EnrolleeID
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Diagnosis
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Request
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Status
                                        </th>
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
                                                        src="./loaderx.gif"
                                                        alt="Loading animation"
                                                        className="w-40 h-40" /* Adjust size as needed */
                                                    />
                                                    <h3 className="text-gray-600 text-lg font-semibold">
                                                        Please Wait, Fetching
                                                        PA...
                                                    </h3>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : filteredData.length > 0 ? (
                                        paginatedResults.map(
                                            (request, index) => (
                                                <tr
                                                    key={index}
                                                    className=" cursor-pointer text-sm hover:bg-gray-100"
                                                    onClick={() =>
                                                        handleNavigate(request)
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
                                                    <td className="px-4 border">
                                                        {request.visitid}
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
                                                        {
                                                            request.visitType
                                                        }
                                                    </td>
                                                    <td
                                                        className={`px-4 border ${getStatusColor(
                                                            request.PAStatus,
                                                        )}`}
                                                    >
                                                        {request.PAStatus}
                                                    </td>
                                                </tr>
                                            ),
                                        )
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
                    {uniqueFilteredData.length > itemsPerPage && (
                        <div className="flex justify-center mt-3 items-center gap-4">
                            <button
                                className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1),
                                    )
                                }
                            >
                                Previous
                            </button>

                            <span className="text-gray-700 text-lg font-semibold">
                                Page {currentPage} of {totalPages} Pages
                            </span>

                            <button
                                className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                disabled={currentPage >= totalPages}
                                onClick={() =>
                                    setCurrentPage((prev) => prev + 1)
                                }
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaHistory;

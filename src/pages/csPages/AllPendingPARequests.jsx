import React, { useEffect, useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";

const AllPendingPARequests = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        const enrolleeRequests = pendingPA.filter(
            (req) => req.enrolleeID === enrollee.enrolleeID,
        );

        navigate("/csenrolleepage", { state: { enrollee, enrolleeRequests } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [results, setResults] = useState([]); // Stores the fetched results
    const [providers, SetProvider] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [currentDate, setCurrentDate] = useState("");
    const [pendingPA, setPendingPA] = useState([]);
    const [pendingPAOne, setPAOne] = useState([]);
    const [pendingPATwo, setPATwo] = useState([]);
    const allPendingPA = [...pendingPAOne, ...pendingPATwo];
    const [isLoading, setLoading] = useState(false);

    const totalPages = Math.ceil(pendingPA.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedResults = pendingPA.slice(startIndex, endIndex);

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

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Gets YYYY-MM-DD
        setCurrentDate(today);
    }, []); // This runs only once to set the date

    // Run getDailyPA only when currentDate updates
    useEffect(() => {
        if (currentDate) {
            getDailyPA();
        }
    }, [currentDate]);

    async function getDailyPA() {
        setLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("xp", data.result);

            if (data.status === 200) {
                const validStatuses = [
                    "Authorization Pending",
                    "Authorisation pending",
                ];

                const filteredData = data.result.filter((item) =>
                    validStatuses.includes(item.PAStatus),
                );

                const PendingPA = filteredData.filter(
                    (item) =>
                        item.PAStatus.toLowerCase() === "authorization pending",
                );
                const PendingPATwo = filteredData.filter(
                    (item) =>
                        item.PAStatus.toLowerCase() === "authorisation pending",
                );

                const allPendingPa = [...PendingPA, ...PendingPATwo];
                setPendingPA(allPendingPa);

                setPAOne(PendingPA);
                setPATwo(PendingPATwo);
            } else {
                console.error(
                    "Failed to fetch data or unexpected response format.",
                );
            }
        } catch (error) {
            console.error("get pa:", error);
            setDailyPA([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex bg-white-500">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto ">
                <Header className="sticky top-0 z-50 bg-white shadow-md" />

                <div className="mx-3 ">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#353535]  text-[25px] font-bold">
                            Pending PA
                        </h1>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md mt-3 rounded-md mx-3">
                    <div className="max-h-[550px] overflow-y-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-black rounded-md border-collapse">
                            {/* Table Header */}
                            <thead className="text-base uppercase bg-white border-b border-gray-200 sticky top-0 z-10 rounded-t-md">
                                <tr className="border-b border-gray-200 bg-white">
                                    <th className="py-3 px-4 text-left">S/N</th>
                                    <th className="py-3 px-4 text-left">
                                        Name
                                    </th>
                                    <th className="py-3 px-4  text-left whitespace-nowrap">
                                        Enrollee ID
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Date
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Hospital
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Diagnosis
                                    </th>
                                    <th className="py-3 px-4 text-left">
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
                                                    src="public/loaderx.gif"
                                                    alt="Loading animation"
                                                    className="w-40 h-40" /* Adjust size as needed */
                                                />
                                                <h3 className="text-gray-600 text-lg font-semibold">
                                                    Please Wait, Fetching
                                                    Providers...
                                                </h3>
                                            </div>
                                        </td>
                                    </tr>
                                ) : allPendingPA && allPendingPA.length > 0 ? (
                                    paginatedResults.map((enrollee, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border border-gray-200 hover:bg-gray-200 cursor-pointer"
                                            onClick={() =>
                                                handleNavigate(enrollee)
                                            }
                                        >
                                            <td className="px-6 py-3">
                                                {startIndex + index + 1}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.surname} {""}
                                                {enrollee.firstname}
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                {enrollee.enrolleeID}
                                            </td>
                                            <td className="px-6 py-3">
                                                {formatISOToCustom(
                                                    enrollee.Visitdate,
                                                )}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.provider}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.diagcode
                                                    .split(" ")
                                                    .slice(1)
                                                    .join(" ")}
                                            </td>

                                            <td className="px-1 py-3 text-orange-500">
                                                {enrollee.PAStatus}
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

                    {/* Pagination */}
                    {pendingPA.length > itemsPerPage && (
                        <div className="flex justify-center mt-2 items-center gap-4 pb-2">
                            <button
                                className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1),
                                    )
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
                                onClick={() =>
                                    setCurrentPage((prev) => prev + 1)
                                }
                            >
                                <CgPlayTrackNext className="w-7 h-7 mr-2" />
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllPendingPARequests;

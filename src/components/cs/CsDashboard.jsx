import React, { useState, useEffect, useMemo } from "react";

import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";

import Sidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";

import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";

function CsDashboard() {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleNavigatee = (enrollee) => {
        navigate("/createpacode", {
            state: {
                enrollee,
                enrolleeID: enrollee.enrolleeID, // Pass the ID
            },
        });
        localStorage.setItem("enrolleeId", enrollee.enrolleeID);
        navigate("/createpacode");
    };

    const user = JSON.parse(localStorage.getItem("user"));
    // const [data, setData] = useState([]);
    const [declined, setDeclinedPA] = useState([]);
    const [
        authorizationApprovedClaimPending,
        setAuthorizationApprovedClaimPending,
    ] = useState([]);
    const [AuthorizationPending, setAuthorizationPending] = useState([]);
    const [AuthorisationPending, setAuthorisationPending] = useState([]);
    const [openPAOne, setOpenPAOne] = useState([]);
    const [openPATwo, setOpenPATwo] = useState([]);
    const combinedOpenPA = [...openPAOne, ...openPATwo];
    const [totalPA, TotalPA] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [todayDate, setTodayDate] = useState("");
    const [dailyPA, setDailyPA] = useState("");
    const [date, setTodaysDate] = useState("");
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [currentDate, setCurrentDate] = useState("");

    const [pendingPA, setPendingPA] = useState([]);
    const [peopleWaiting, setPeopleWaiting] = useState("");
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10;

    // const totalPages = Math.ceil(pendingPA.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;

    // const paginatedResults = pendingPA.slice(startIndex, endIndex);

    const [currentPage, setCurrentPage] = useState(1);

    const seenIDs = new Set();

    // Use useMemo to create and sort uniqueResults efficiently

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

    // console.log(
    //     "paaa",
    //     fetch(
    //         `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Gets YYYY-MM-DD
        setCurrentDate(today);
    }, []); // This runs only once to set the date

    // Run getDailyPA only when currentDate updates
    useEffect(() => {
        if (currentDate) {
        }
    }, [currentDate]); // Dependency on currentDate

    // async function getDailyPA() {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(
    //             `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
    //             {
    //                 method: "GET",
    //             },
    //         );

    //         const data = await response.json();
    //         console.log("xp", data.result);

    //         TotalPA(data.result.length);

    //         if (data.status === 200) {
    //             const validStatuses = [
    //                 "Authorization Pending",
    //                 "Authorisation pending",
    //                 "Approved",
    //                 "Declined",
    //             ];

    //             const filteredData = data.result.filter((item) =>
    //                 validStatuses.includes(item.PAStatus),
    //             );

    //             const PendingPA = filteredData.filter(
    //                 (item) =>
    //                     item.PAStatus.toLowerCase() === "authorization pending",
    //             );

    //             const uniqueMemberNumbers = new Set(
    //                 PendingPA.map((item) => item.MemberNumber),
    //             );

    //             const uniqueMemberCount = uniqueMemberNumbers.size;

    //             console.log("count", uniqueMemberCount);

    //             const PendingPATwo = filteredData.filter(
    //                 (item) =>
    //                     item.PAStatus.toLowerCase() === "authorisation pending",
    //             );

    //             const uniqueMember = new Set(
    //                 PendingPATwo.map((item) => item.MemberNumber),
    //             );

    //             const uniqueMembercc = uniqueMember.size;

    //             console.log("counttwo", uniqueMembercc);

    //             setPeopleWaiting(uniqueMembercc + uniqueMemberCount);

    //             const ClaimPending = filteredData.filter(
    //                 (item) => item.PAStatus.toLowerCase() === "approved",
    //             );
    //             const DeclinedPA = filteredData.filter(
    //                 (item) => item.PAStatus.toLowerCase() === "declined",
    //             );

    //             const allPendingPa = [...PendingPA, ...PendingPATwo];
    //             setPendingPA(allPendingPa);
    //             setOpenPAOne(PendingPA);
    //             setOpenPATwo(PendingPATwo);

    //             setAuthorizationPending(PendingPA.length);
    //             setAuthorisationPending(PendingPATwo.length);
    //             setAuthorizationApprovedClaimPending(ClaimPending.length);
    //             setDeclinedPA(DeclinedPA.length);

    //             setAdjudicated(filteredData.length); // Fix: adjudicatedItems wasn't defined
    //         } else {
    //             console.error(
    //                 "Failed to fetch data or unexpected response format.",
    //             );
    //         }
    //     } catch (error) {
    //         console.error("get pa:", error);
    //         setDailyPA([]);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    const fetchDailyPA = async ({ queryKey }) => {
        const [_, apiUrl, currentDate] = queryKey;

        const responses = fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
        );

        console.log("daignosis:", JSON.stringify(responses, null, 2));

        const response = await fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
        );
        const data = await response.json();

        console.log("data", data);

        if (data.status !== 200) {
            throw new Error("API Error: Failed to fetch preauthorizations.");
        }

        if (!data.result || data.result.length === 0) {
            return undefined;
        }

        const validStatuses = [
            "Authorization Pending",
            "Authorisation pending",
            "Approved",
            "Declined",
        ];

        const filteredData = data.result.filter((item) =>
            validStatuses.includes(item.PAStatus),
        );

        const PendingPA = filteredData.filter(
            (item) => item.PAStatus.toLowerCase() === "authorization pending",
        );
        const uniqueMemberNumbers = new Set(
            PendingPA.map((i) => i.MemberNumber),
        );

        const PendingPATwo = filteredData.filter(
            (item) => item.PAStatus.toLowerCase() === "authorisation pending",
        );
        const uniqueMemberTwo = new Set(
            PendingPATwo.map((i) => i.MemberNumber),
        );

        const ClaimPending = filteredData.filter(
            (item) => item.PAStatus.toLowerCase() === "approved",
        );

        const approvedMembers = new Set(
            ClaimPending.map((i) => i.MemberNumber),
        );
        const DeclinedPA = filteredData.filter(
            (item) => item.PAStatus.toLowerCase() === "declined",
        );

        const declinedMembers = new Set(DeclinedPA.map((i) => i.MemberNumber));

        return {
            all: data.result,
            valid: filteredData,
            pendingPA: PendingPA,
            pendingPATwo: PendingPATwo,
            combinedPending: [...PendingPA, ...PendingPATwo],
            approved: ClaimPending,
            declined: DeclinedPA,
            approvedMember: approvedMembers,
            declinedMember: declinedMembers,
            stats: {
                authorizationPending: PendingPA.length,
                authorisationPending: PendingPATwo.length,
                approvedClaimPending: ClaimPending.length,
                declinedPA: DeclinedPA.length,
                peopleWaiting: uniqueMemberNumbers.size + uniqueMemberTwo.size,
                adjudicated: filteredData.length,
                totalPA: data.result.length,
                approvedEnrolles: approvedMembers.size,
                declinedEnrolles: declinedMembers.size,
            },
        };
    };

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["dailyPa", apiUrl, currentDate], // make it dynamic
        queryFn: fetchDailyPA,
        refetchInterval: 2 * 60 * 1000,
        staleTime: 5 * 60 * 1000,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Gets YYYY-MM-DD
        setCurrentDate(today);
    }, []);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSeeAll = () => {
        navigate("/ticket", { state: { filter: "Escalation" } });
    };

    function getTodayDate() {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, "0"); // Ensure two-digit format
        const month = today.toLocaleString("en-US", { month: "short" }); // Get three-letter month
        const year = today.getFullYear();

        setTodaysDate(today);

        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        setTodayDate(getTodayDate());
    }, []);

    const uniqueResults = useMemo(() => {
        if (!data?.combinedPending || data.combinedPending.length === 0) {
            return [];
        }

        // First, sort entire array by Visitdate
        const sortedData = [...data.combinedPending].sort((a, b) => {
            const dateA = new Date(a.Visitdate).getTime();
            const dateB = new Date(b.Visitdate).getTime();
            return dateA - dateB; // Earliest first
        });

        // Then get first (earliest) occurrence of each enrolleeID
        const seenIDs = new Set();
        const uniqueArray = [];

        for (const item of sortedData) {
            if (!seenIDs.has(item.enrolleeID)) {
                seenIDs.add(item.enrolleeID);
                uniqueArray.push(item);
            }
        }

        return uniqueArray;
    }, [data?.combinedPending]); // Only recalculate when combinedOpenPA changes

    // Pagination logic
    const itemsPerPage = 10; // Adjust to your actual value
    const totalPages = Math.ceil(uniqueResults.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUniqueResults = uniqueResults.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

    useEffect(() => {
        getLabel();
    }, []);

    async function getLabel() {
        const response = await fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=${currentDate}&Todate=${currentDate}&cifno=0&PAStatus&visitid`,
        );

        console.log("daignosis:", JSON.stringify(response, null, 2));
    }

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[120vh]">
                <Header />

                <div className=" px-3 ">
                    <div className=" px-2  ">
                        <div className="flex justify-between w-full mt-3 ">
                            <span className="font-bold">
                                Hi, {user?.result[0]?.UserName}
                            </span>

                            <div className="bg-white rounded-md w-[10rem] py-2 flex gap-2">
                                <CiCalendar className=" text-[20px] mt-0.5 ml-1" />
                                <h1 className=" font-medium">{todayDate}</h1>
                            </div>
                        </div>
                        <h4 className=" mb-2 ">Your Dashboard</h4>
                    </div>

                    {data && data.stats && (
                        <>
                            <div className="flex w-full bg-lightblue overflow-y-visible ">
                                <div className="w-full flex gap-2 mr-1">
                                    <div className="flex-1 bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                                        <img src="./barchat.svg" />
                                        <p className="text-[#7E7E7E]">
                                            Total PA Request
                                        </p>
                                        <span className="text-[2.3rem] font-bold">
                                            {data.stats.totalPA}
                                        </span>
                                    </div>

                                    <div className="flex-1 bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                                        <img src="./bluechat.svg" />
                                        <p className="text-[#7E7E7E]">
                                            Open Tickets/ number of enrollees
                                        </p>
                                        <h1 className="text-[2.3rem] font-bold">
                                            {data.stats.authorizationPending +
                                                data.stats
                                                    .authorisationPending}{" "}
                                            / {data.stats.peopleWaiting}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex gap-2 mt-2">
                                <div className="w-full flex gap-2 mr-1">
                                    <div className="flex-1 bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                                        <img src="./skybluechat.svg" />
                                        <p className="text-[#7E7E7E]">
                                            Approved PA Requests
                                        </p>
                                        <span className="text-[2.3rem] font-bold">
                                            {data.stats.approvedClaimPending}/{" "}
                                            {data.stats.approvedEnrolles}
                                        </span>
                                    </div>

                                    <div className="flex-1 bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                                        <img src="./orangechat.svg" />
                                        <p className="text-[#7E7E7E]">
                                            Declined PA
                                        </p>
                                        <span className="text-[2.3rem] font-bold">
                                            {data.stats.declinedPA} /{" "}
                                            {data.stats.declinedEnrolles}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Buttons Section */}
                    <div className=" flex justify-between">
                        <div className="mt-3 flex justify-start space-x-4">
                            {/* Search Enrollee Button */}
                            <button
                                onClick={() => handleNavigate("/enrollees")}
                                className="flex items-center justify-center bg-red-500 px-4 text-white py-2  mt-3 rounded-md "
                            >
                                Search Enrollee
                            </button>

                            {/* Manage PA Button */}
                            <button
                                onClick={() => handleNavigate("/managePa")}
                                className="flex items-center justify-center bg-red-500 text-white py-2 px-4 mt-3 rounded-md "
                            >
                                Manage PA
                            </button>

                            {/* Create Ticket Button with Image */}
                        </div>
                        {/* <div className=" cursor-pointer ">
                            <h2
                                className=" text-white px-4 rounded-md  mt-6 py-2 border bg-red-500 border-white"
                                onClick={() => handleNavigate("/pendingpa")}
                            >
                                See all pending PA
                            </h2>
                        </div> */}
                    </div>
                    {/* Data Table Section */}
                    <div className="relative overflow-x-auto shadow-md mt-3 rounded-md">
                        <div className="max-h-[400px] overflow-y-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-black rounded-md border-collapse">
                                {/* Table Header */}
                                <thead className="text-base uppercase bg-white border-b border-gray-200 sticky top-0 z-10 rounded-t-md">
                                    <tr className="border-b border-gray-200 bg-white">
                                        <th className="py-3 px-4 text-left">
                                            S/N
                                        </th>
                                        <th className>Name</th>
                                        <th className="whitespace-nowrap">
                                            Enrollee ID
                                        </th>
                                        <th className>Date / Time</th>

                                        <th className>VisitId</th>
                                        <th className>Provider</th>
                                        <th className=" ">visit Type</th>
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
                                                        Please Wait, Fetching PA
                                                        Request...
                                                    </h3>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : data &&
                                      data.combinedPending.length > 0 ? (
                                        paginatedUniqueResults.map(
                                            (enrollee, index) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border border-gray-200 hover:bg-gray-200 cursor-pointer"
                                                    onClick={
                                                        () =>
                                                            handleNavigatee(
                                                                enrollee,
                                                            )
                                                        // navigate(
                                                        //     `/createpacode/${enrollee.enrolleeID}`,
                                                        // )
                                                    }
                                                >
                                                    <td className="px-6 py-3">
                                                        {startIndex + index + 1}
                                                    </td>
                                                    <td className=" py-3">
                                                        {enrollee.surname}{" "}
                                                        {enrollee.firstname}
                                                    </td>
                                                    <td className=" py-3 whitespace-nowrap">
                                                        {enrollee.enrolleeID}
                                                    </td>
                                                    <td className=" py-3">
                                                        {formatISOToCustom(
                                                            enrollee.Visitdate,
                                                        )}
                                                    </td>

                                                    <td className=" py-3">
                                                        {enrollee.visitid}
                                                    </td>
                                                    <td className=" py-3">
                                                        {enrollee.provider}
                                                    </td>

                                                    <td className=" py-3">
                                                        {enrollee.visitType}
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

                        {/* Pagination */}
                        {uniqueResults.length > itemsPerPage && (
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
        </div>
    );
}

export default CsDashboard;

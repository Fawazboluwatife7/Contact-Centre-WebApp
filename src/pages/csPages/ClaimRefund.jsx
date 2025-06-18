import React, { useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";

const ClaimRefund = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        navigate("/cspatienthistory", { state: { enrollee } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [searchInputs, setSearchInputs] = useState({
        firstName: "",
        lastName: "",
        enrolleeId: "",
        email: "",
        FromDate: "",
        ToDate: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const [results, setResults] = useState([]); // Stores the fetched results
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const itemsPerPage = 10; // Limit items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);
    const totalPages = Math.ceil(results.length / itemsPerPage);

    // Dynamic fields array
    const fields = [
        { name: "firstname", label: "First Name" },
        { name: "lastname", label: "Last Name" },
        { name: "enrolleeid", label: "Enrollee ID" },
        { name: "email", label: "Email" },
        { name: "FromDate", label: "From Date" },
        { name: "ToDate", label: "To Date" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchInputs({ ...searchInputs, [name]: value });
    };

    const fetchEnrollees = async () => {
        setIsLoading(true);
        try {
            const params = {
                firstname: searchInputs.firstname || null,
                lastname: searchInputs.lastname || null,
                enrolleeid: searchInputs.enrolleeid || null,
                email: searchInputs.email || null,
            };

            // Construct the query string, excluding empty or null values
            const queryParams = Object.entries(params)
                .filter(([_, value]) => value) // Keep only non-empty values
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            value,
                        )}`,
                )
                .join("&");

            console.log(
                "enrollee",
                await fetch(
                    `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByDetails?${queryParams}`,
                    {
                        method: "GET",
                    },
                ),
            );

            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByDetails?${queryParams}`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setEnrollees(data.resultS);
            console.log("Data:", data.result);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setResults(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex bg-white-500">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-y-auto ">
                <Header />
                <div className="mx-7">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#e73535]  text-[20px] font-bold">
                            Kindly fill all appropriate fields
                        </h1>
                        <button
                            onClick={fetchEnrollees}
                            className="bg-red-700 text-white px-4 py-2 rounded-md flex"
                        >
                            <CgSearch className=" w-5 h-5 mt-1 mr-2" />
                            Search
                        </button>
                    </div>
                    {/* Search Inputs */}

                    <div className="bg-white grid md:grid-cols-6 gap-4 p-4 w-full rounded-md">
                        {fields.map((field) => (
                            <div key={field.name}>
                                <label
                                    htmlFor={field.name}
                                    className="text-[#353535] block capitalize"
                                >
                                    {field.label}
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            field.name === "FromDate" ||
                                            field.name === "ToDate"
                                                ? "date"
                                                : "text"
                                        }
                                        name={field.name}
                                        placeholder={
                                            field.name === "FromDate" ||
                                            field.name === "ToDate"
                                                ? ""
                                                : `Search ${field.label}...`
                                        }
                                        className="w-full px-2 py-2 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                        value={searchInputs[field.name]}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table */}
                    <div className="relative overflow-x-auto shadow-md mt-3 rounded-md">
                        <table className="w-full text-sm text-left rtl:text-right text-black rounded-md">
                            <thead className="text-base uppercase bg-white text-black border-b-2 border-black">
                                <tr>
                                    <th className="px-2 border-r w-32 text-[13px]">
                                        Batch Number
                                    </th>
                                    <th className="px-2  border-r w-40 text-[13px]">
                                        Provider
                                    </th>
                                    <th className="px-2  border-r w-40 text-[13px]">
                                        Patient Name
                                    </th>
                                    <th className="px-2  border-r w-32 text-[13px]">
                                        Scheme Type
                                    </th>
                                    <th className="px-2 border-r w-32 text-[13px]">
                                        Claim Date
                                    </th>
                                    <th className="px-2  border-r w-32 text-[13px]">
                                        Claim Amount
                                    </th>
                                    <th className="px-2  border-r w-32 text-[13px]">
                                        Gross Paid
                                    </th>
                                    <th className="px-2  border-r w-40 text-[13px]">
                                        Account Ref No
                                    </th>
                                    <th className="px-2  border-r w-32 text-[13px]">
                                        Claim Status
                                    </th>
                                    <th className="px-2  border-r w-40 text-[13px]">
                                        Batch Processing Status
                                    </th>
                                    <th className="px-2 border-r w-32 text-[13px]">
                                        Claim Number
                                    </th>
                                    <th className="px-2  border-r w-40 text-[13px]">
                                        Payment Req Generated
                                    </th>
                                    <th className="px-2  w-32 text-[13px]">
                                        Refunded On
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {isLoading ? (
                                    <tr className="h-[300px]">
                                        <td colSpan="13" className="p-0">
                                            <div className="flex justify-center items-center h-[300px] w-full">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <img
                                                        src="/loaderx.gif"
                                                        alt="Loading animation"
                                                        className="w-24 h-24"
                                                    />
                                                    <h3 className="text-gray-600 text-lg font-semibold text-center">
                                                        Please Wait, Fetching
                                                        Data...
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : paginatedResults &&
                                  paginatedResults.length > 0 ? (
                                    paginatedResults.map((enrollee, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b border-black hover:bg-gray-200 cursor-pointer"
                                            onClick={() =>
                                                handleNavigate(enrollee)
                                            }
                                        >
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Member_CustomerName ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Member_CustomerName ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Member_EnrolleeID ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Member_Phone_One ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Member_EmailAddress_One ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.Client_GroupID ||
                                                    "N/A"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="13"
                                            className="h-64 text-center"
                                        >
                                            <div className="flex justify-center items-center h-full w-full">
                                                <img
                                                    src="/noRecordFound.svg"
                                                    alt="No records found"
                                                    className="py-5 px-20" // Adjust size as needed
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* 
                         This is for navigation */}
                        {results.length > itemsPerPage && (
                            <div className="flex justify-center mt-4 mb-3">
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
                                    disabled={endIndex >= results.length}
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
};

export default ClaimRefund;

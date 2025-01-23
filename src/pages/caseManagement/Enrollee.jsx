import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import axios from "axios";

const Enrollee = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        navigate("/enrolleeCustomerinfo", { state: { enrollee } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [searchInputs, setSearchInputs] = useState({
        firstName: "",
        lastName: "",
        enrolleeId: "",
        phone: "",
        email: "",
        group: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const [results, setResults] = useState([]); // Stores the fetched results
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const itemsPerPage = 10; // Limit items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    // Dynamic fields array
    const fields = [
        { name: "firstname", label: "First Name" },
        { name: "lastname", label: "Last Name" },
        { name: "enrolleeid", label: "Enrollee ID" },
        { name: "mobileNo", label: "Phone" },
        { name: "email", label: "Email" },
        { name: "group_id", label: "Group" },
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
                mobileNo: searchInputs.mobileNo || null,
                email: searchInputs.email || null,
                group_id: searchInputs.group_id || null,
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
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full ">
                <Navbar />
                <div className="mx-7">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#353535]  text-[25px] font-bold">
                            Enrollees
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
                    <div className="bg-white grid md:grid-cols-3 gap-4 p-4 w-full rounded-md">
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
                                        type="text"
                                        name={field.name}
                                        placeholder={`Search ${field.label}...`}
                                        className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
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
                            <thead className="text-base uppercase bg-white text-black   border-b-2 border-black ">
                                <tr>
                                    <th className="px-2 py-3"></th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Enrollee ID</th>
                                    <th className="px-6 py-3">Phone</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-4 "
                                        >
                                            <p>Loading...</p>
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
                                                {index + 1}
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
                                            colSpan="6"
                                            className="text-center py-4"
                                        >
                                            No matching records found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* 
                         This is for navigation */}
                        {results.length > itemsPerPage && (
                            <div className="flex justify-center mt-4">
                                <button
                                    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
                                    disabled={currentPage === 1}
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.max(prev - 1, 1),
                                        )
                                    }
                                >
                                    Previous
                                </button>
                                <button
                                    className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
                                    disabled={endIndex >= results.length}
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
        </div>
    );
};

export default Enrollee;

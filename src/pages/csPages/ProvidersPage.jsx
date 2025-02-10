import React, { useEffect, useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const ProvidersPage = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        navigate("/cspatienthistory", { state: { enrollee } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [searchInputs, setSearchInputs] = useState({
        "Provider Name": "",
        "Provider Code": "",
        Speciality: "",
        Location: "",
        Scheme: "",
        EnrolleeId: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const [results, setResults] = useState([]); // Stores the fetched results
    const [providers, SetProvider] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const itemsPerPage = 10; // Limit items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    // Dynamic fields array
    const fields = [
        { name: "provider name", label: "Provider Name" },
        { name: "provider code", label: "Provider Code" },
        { name: "speciality", label: "Speciality" },
        { name: "location", label: "Location" },
        { name: "scheme", label: "Scheme" },
        { name: "enrollee id", label: "Enrolle Id" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchInputs({ ...searchInputs, [name]: value });
    };

    const fetchEnrollees = async () => {
        setIsLoading(true);
        try {
            const params = {
                "provider name": searchInputs.firstname || null,
                "provider code": searchInputs.lastname || null,
                speciality: searchInputs.enrolleeid || null,
                location: searchInputs.mobileNo || null,
                scheme: searchInputs.email || null,
                "enrollee id": searchInputs.group_id || null,
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

    async function SearchProviders() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetProviders`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
        } catch {}
    }

    useEffect(() => {
        SearchProviders();
    }, []);

    return (
        <div className="flex bg-white-500">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full ">
                <Header />
                <div className="mx-7">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#353535]  text-[25px] font-bold">
                            Provider
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
                            <thead className="text-base uppercase bg-white  border-b-2 border-black ">
                                <tr>
                                    <th className="px-2 py-3">S/N</th>
                                    <th className="px-2 py-3">Provider Code</th>
                                    <th className="px-6 py-3">Provider</th>
                                    <th className="px-6 py-3">Speciality</th>
                                    <th className="px-6 py-3">Provider plan</th>
                                    <th className="px-6 py-3">Phone</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Status</th>
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
                                ) : providers && providers.length > 0 ? (
                                    providers.map((enrollee, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b border-black hover:bg-gray-200 cursor-pointer"
                                        >
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee + 1}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.ProviderCode}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.FullName || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Specialty || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.vv2 || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.Contact1 || "N/A"},
                                                {enrollee.Contact2 || "N/A"}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.Email || "N/A"}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.Status || "N/A"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="h-64 text-center"
                                        >
                                            <div className="flex justify-center items-center h-full">
                                                <img
                                                    src="/noRecordFound.svg"
                                                    alt="No records found"
                                                    className=" py-5 px-20" // Adjust size as needed
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

export default ProvidersPage;

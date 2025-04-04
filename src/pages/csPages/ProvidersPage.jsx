import React, { useEffect, useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { CiExport } from "react-icons/ci";
import { BiSolidPrinter } from "react-icons/bi";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ProvidersPage = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        navigate("/cspatienthistory", { state: { enrollee } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [searchInputs, setSearchInputs] = useState({
        ProviderName: "",
        providerCode: "",
        Speciality: "",
        StateID: "",
        LGA: "",
        EnrolleeId: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [lga, setLGA] = useState([]);
    const [specialization, setSpeciality] = useState([]);
    const [state, setState] = useState([]);

    const [results, setResults] = useState([]); // Stores the fetched results
    const [providers, SetProvider] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(providers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedResults = providers.slice(startIndex, endIndex);

    const exportToExcel = (data, fileName = "Providers.xlsx") => {
        if (!data || data.length === 0) {
            alert("No data to export!");
            return;
        }

        // Select only the fields you want
        const selectedFields = data.map(
            ({ provider, phone1, phone2, Discipline, ProviderAddress }) => ({
                provider: provider?.trim() || "N/A", // Ensure provider exists & remove extra spaces
                phone1: phone1?.trim() || "N/A",
                phone2: phone2?.trim() || "N/A",
                Discipline: Discipline || "N/A",
                ProviderAddress: ProviderAddress || "N/A",
            }),
        );

        // Convert to Excel sheet
        const worksheet = XLSX.utils.json_to_sheet(selectedFields);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "FilteredData");

        // Convert to downloadable format
        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });
        const dataBlob = new Blob([excelBuffer], {
            type: "application/octet-stream",
        });

        // Download the file
        saveAs(dataBlob, fileName);
    };

    async function GetFilteredProviders() {
        setIsLoading(true);
        try {
            const params = {
                ProviderName: searchInputs.ProviderName || null,
                TypeID: searchInputs.Speciality || null,
                StateID: searchInputs.StateID || null,
                LGAID: searchInputs.LGA || null,
                enrolleeid: searchInputs.EnrolleeId || null,
                provider_id: searchInputs.providerCode || null,
            };

            // Construct the query string, excluding empty values
            const queryParams = Object.entries(params)
                .map(([key, value]) => [
                    key,
                    key === "ProviderName" && (value === null || value === "")
                        ? ""
                        : key === "enrolleeid" &&
                            (value === null || value === "")
                          ? ""
                          : value || "0", // Keep enrolleeid empty, others default to "0"
                ])
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            value,
                        )}`,
                )
                .join("&");

            console.log(
                "xxs",
                await fetch(
                    `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=20&pageSize=10&${queryParams}`,
                    {
                        method: "GET",
                    },
                ),
            );

            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&${queryParams}`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
            console.log("Dataxxx:", data.result);

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
    }

    async function SearchProviders() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetProviders`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    }
    async function SearchStates() {
        // setIsLoading(true);
        try {
            const response = await fetch(`${apiUrl}api/ListValues/GetStates`, {
                method: "GET",
            });
            const data = await response.json();
            setState(data);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setState([]);
        } finally {
            // setIsLoading(false);
        }
    }
    async function SearchSpeciality() {
        // setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/Getalldepartments`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setSpeciality(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setSpeciality([]);
        } finally {
            // setIsLoading(false);
        }
    }
    async function SearchLGA() {
        try {
            const response = await fetch(`${apiUrl}api/ListValues/GetLGA`, {
                method: "GET",
            });
            const data = await response.json();
            setLGA(data);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setLGA([]);
        } finally {
            // setIsLoading(false);
        }
    }

    useEffect(() => {
        SearchProviders();
        SearchStates();
        SearchSpeciality();
        SearchLGA();
    }, []);

    return (
        <div className="flex bg-white-500">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full ">
                <Header />
                <div className="mx-3">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#353535]  text-[25px] font-bold">
                            Provider
                        </h1>
                        <button
                            onClick={GetFilteredProviders}
                            className="bg-red-700 text-white px-4 py-2 rounded-md flex hover:bg-white hover:text-red-600 hover:border border-red-600"
                        >
                            <CgSearch className=" w-5 h-5 mt-1 mr-2" />
                            Search
                        </button>
                    </div>
                    {/* Search Inputs */}
                    <div className="bg-white grid md:grid-cols-3 gap-4 p-4 w-full rounded-md">
                        <div>
                            <label htmlFor="">Provider Name</label>
                            <input
                                type="text"
                                name="ProviderName"
                                value={searchInputs.ProviderName}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        ProviderName: e.target.value,
                                    })
                                }
                                placeholder="Search Provider Name..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Provider Code</label>
                            <input
                                type="text"
                                name="enrolleeid"
                                value={searchInputs.providerCode}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        providerCode: e.target.value,
                                    })
                                }
                                placeholder="Search Provider Code..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Enrollee Id</label>
                            <input
                                type="text"
                                name="enrolleeid"
                                value={searchInputs.EnrolleeId}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        EnrolleeId: e.target.value,
                                    })
                                }
                                placeholder="Search Enrollee ID..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <select
                                name="StateID"
                                value={searchInputs?.StateID || ""} // Ensure safe access
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs((prev) => ({
                                        ...prev,
                                        StateID: e.target.value,
                                    }))
                                }
                            >
                                <option value="">Filter by State</option>
                                {state && state.length > 0 ? (
                                    state.map((stateItem) => (
                                        <option
                                            key={stateItem.id}
                                            value={stateItem.Value}
                                        >
                                            {stateItem.Text}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading states...</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">LGA</label>
                            <select
                                name="LGA"
                                value={searchInputs?.LGA || ""}
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        LGA: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select LGA</option>
                                {lga && lga.length > 0 ? (
                                    lga.map((specialty) => (
                                        <option
                                            key={specialty.id}
                                            value={specialty.Value}
                                        >
                                            {specialty.Text}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading LGA...</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Specialization</label>
                            <select
                                name="Speciality"
                                value={searchInputs?.Speciality || ""}
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        Speciality: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Speciality</option>
                                {specialization && specialization.length > 0 ? (
                                    specialization.map((specialty) => (
                                        <option
                                            key={specialty.id}
                                            value={specialty.Department_id}
                                        >
                                            {specialty.Department}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>
                                        Loading Speciality...
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className=" flex justify-between  pt-2">
                        <h1 className=" text-red-600 text-[1.5rem] font-medium">
                            Provider List
                        </h1>
                        <div className=" flex gap-3">
                            <button
                                className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md flex hover:bg-red-600 hover:text-white"
                                onClick={() => exportToExcel(providers)}
                            >
                                <CiExport className=" w-5 h-5  mr-2" />
                                Export
                            </button>
                            <button className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md flex hover:bg-red-600 hover:text-white">
                                <BiSolidPrinter className=" w-5 h-5  mr-2" />
                                Print
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md mt-3 rounded-md">
                        <div className="max-h-[400px] overflow-y-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-black rounded-md border-collapse">
                                {/* Table Header */}
                                <thead className="text-base uppercase bg-white border-b border-gray-200 sticky top-0 z-10">
                                    <tr className="border-b border-gray-200 bg-white">
                                        <th className="px-6 py-3">S/N</th>
                                        <th className="px-6 py-3 ">
                                            Provider Code
                                        </th>
                                        <th className="px-6 py-3">Provider</th>
                                        <th className="px-6 py-3">
                                            Speciality
                                        </th>
                                        <th className="px-6 py-3">
                                            Provider Plan
                                        </th>
                                        <th className="px-6 py-3">Phone</th>
                                        <th className="px-6 py-3">Email</th>
                                        <th className="px-6 py-3">Address</th>
                                        <th className="px-6 py-3">Status</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
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
                                                        Providers...
                                                    </h3>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : providers && providers.length > 0 ? (
                                        paginatedResults.map(
                                            (enrollee, index) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border border-gray-200 hover:bg-gray-200 cursor-pointer"
                                                >
                                                    <td className="px-6 py-3">
                                                        {startIndex + index + 1}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {enrollee.ProviderID ||
                                                            enrollee.provider_id ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {enrollee.FullName ||
                                                            enrollee.provider ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {enrollee.Specialty ||
                                                            enrollee.Discipline ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {enrollee.Schemes ||
                                                            enrollee.Specialty ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {enrollee.Contact1 ||
                                                            enrollee.phone1 ||
                                                            "N/A"}
                                                        ,{" "}
                                                        {enrollee.Contact2 ||
                                                            enrollee.phone2 ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-1 py-3">
                                                        {enrollee.Email ||
                                                            enrollee.email ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-1 py-3">
                                                        {enrollee.add1 ||
                                                            enrollee.ProviderAddress ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <span
                                                            className={`px-4 py-1 rounded-md font-medium ${
                                                                (
                                                                    enrollee.Status ||
                                                                    enrollee.status_id
                                                                )?.toLowerCase() ===
                                                                "active"
                                                                    ? "text-white bg-green-500"
                                                                    : (
                                                                            enrollee.Status ||
                                                                            enrollee.description
                                                                        )?.toLowerCase() ===
                                                                        "pending"
                                                                      ? "text-white bg-amber-600"
                                                                      : "text-red-600 bg-red-100"
                                                            }`}
                                                        >
                                                            {enrollee.Status ||
                                                                enrollee.status_id ||
                                                                "N/A"}
                                                        </span>
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
                        {providers.length > itemsPerPage && (
                            <div className="flex justify-center mt-4 items-center gap-4">
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
        </div>
    );
};

export default ProvidersPage;

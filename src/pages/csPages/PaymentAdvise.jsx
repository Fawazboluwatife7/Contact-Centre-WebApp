import React, { useEffect, useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";
import { Today } from "@mui/icons-material";

const PaymentAdvise = () => {
    // const navigate = useNavigate();
    // const handleNavigate = (enrollee) => {
    //     navigate("/cspatienthistory", { state: { enrollee } });
    // };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [provider, setAllProvider] = useState([]);
    const [filteredProvider, setFilteredProvider] = useState([]);
    const [showProviderDropdown, setShowProviderDropdown] = useState([]);
    const [showBatchDropdown, setShowProviderDropdow] = useState([]);
    const [PaymentAdvise, SetPaymentAdvise] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, SetStatus] = useState("");
    const [showSearchDropDown, setShowSearchDropDown] = useState(false);
    const [searchProvider, setSearchProvider] = useState("");
    const filteredProviders = filteredProvider.filter((prov) =>
        prov.FullName.toLowerCase().includes(searchProvider.toLowerCase()),
    );

    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (enrollee) => {
        setSelectedItems((prev) => {
            const isSelected = prev.some(
                (i) => i.batch_number === enrollee.batch_number,
            );

            if (isSelected) {
                return prev.filter(
                    (i) => i.batch_number !== enrollee.batch_number,
                );
            } else {
                return [...prev, enrollee];
            }
        });

        // Update selectAll state based on new selection
        setSelectAll(selectedItems.length + 1 === paginatedResults.length);
    };

    const [selectedProviders, setSelectedProvider] = useState({
        ProviderCode: null,
    });

    const [selectedStatusId, setSelectedStatusId] = useState("");

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    const statusOptions = [
        { BATCH_STATUS_ID: 10, STATUS_DESCR: "Pending" },
        { BATCH_STATUS_ID: 11, STATUS_DESCR: "Paid" },
    ];

    const handleStatusChange = (e) => {
        setSelectedStatusId(e.target.value);
    };

    const handlefromDateChange = (e) => {
        setFromDate(e.target.value);
    };
    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const [searchInputs, setSearchInputs] = useState({
        Provider: "",
        ProviderNo: "",
        BatchNumber: "",
        BatchStatus: "",
        FromDate: "",
        ToDate: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [batchNumber, setBatchNumber] = useState("");

    const [selectedStatus, setSelectedStatus] = useState("");

    const itemsPerPage = 10; // Limit items per page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = PaymentAdvise?.slice(startIndex, endIndex);
    const totalPages = Math.ceil(PaymentAdvise?.length / itemsPerPage);

    const fields = [
        { name: "Provider", label: "Provider", type: "dropdown" },
        { name: "ProviderNo", label: "Provider no", type: "text" },
        { name: "BatchNumber", label: "Batch Number", type: "text" },
        { name: "BatchStatus", label: "Batch status", type: "dropdown" },
        { name: "FromDate", label: "From Date", type: "date" },
        { name: "ToDate", label: "To Date", type: "date" },
    ];

    useEffect(() => {
        GetProvider();
    }, []);

    const handleBatchChange = (e) => {
        setBatchNumber(e.target.value);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelectedItems(newSelectAll ? [...paginatedResults] : []);
    };

    async function GetProvider() {
        try {
            const provider = await fetch(
                `${apiUrl}api/ListValues/GetProviders`,
                {
                    method: "GET",
                },
            );

            const response = await provider.json();
            console.log("provider", response);
            setFilteredProvider(response.result);
        } catch (error) {
            console.error("Error fetching provider", error);
        }
    }

    async function GetPaymentAdvise() {
        setIsLoading(true);
        const urls = `${apiUrl}api/ProviderNetwork/GetPaymentAdvise?fmdate=${fromDate}&tdate=${toDate}&status=${selectedStatusId}&NamasNumber=${selectedProviders.ProviderCode}&BatchNumber=${batchNumber}`;
        console.log("pays", urls);

        try {
            const provider = await fetch(
                `${apiUrl}api/ProviderNetwork/GetPaymentAdvise?fmdate=${fromDate}&tdate=${toDate}&status=${selectedStatusId}&NamasNumber=${selectedProviders.ProviderCode}&BatchNumber=${batchNumber}
`,
                {
                    method: "GET",
                },
            );

            const response = await provider.json();
            console.log("payment", response);
            SetPaymentAdvise(response.result);
        } catch (error) {
            console.error("Error fetching provider", error);
        } finally {
            setIsLoading(false);
        }
    }
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
                            onClick={GetPaymentAdvise}
                            className="bg-red-700 text-white px-4 py-2 rounded-md flex"
                        >
                            <CgSearch className=" w-5 h-5 mt-1 mr-2" />
                            Search
                        </button>
                    </div>
                    <div className=" grid grid-cols-6 w-full gap-3 ">
                        <div>
                            <label className="block mb-2 text-gray-700 font-medium">
                                Search Provider
                            </label>
                            <input
                                className="relative h-[44px] w-full rounded-lg outline-none border border-black px-2 text-[15px] placeholder-gray-500 "
                                onChange={(e) => {
                                    setSearchProvider(e.target.value);
                                    setShowSearchDropDown(true);
                                }}
                                value={searchProvider}
                                placeholder="Search Provider"
                            />

                            {showSearchDropDown && (
                                <div className="h-[220px] w-[250px] bg-white z-10 border rounded-[10px] p-3">
                                    <div className="h-[180px] overflow-y-auto">
                                        {filteredProvider
                                            .filter((prov) =>
                                                prov.FullName.toLowerCase().includes(
                                                    searchProvider.toLowerCase(),
                                                ),
                                            )
                                            .slice(
                                                currentPage * 10,
                                                currentPage * 10 + 10,
                                            )
                                            .map((prov) => (
                                                <p
                                                    key={
                                                        prov.ProviderCode ||
                                                        index
                                                    }
                                                    className="my-1 p-1 cursor-pointer hover:bg-slate-100 rounded"
                                                    onClick={(e) => {
                                                        setSearchProvider(
                                                            prov.FullName,
                                                        );
                                                        setSelectedProvider(
                                                            prov,
                                                        );
                                                        setShowSearchDropDown(
                                                            false,
                                                        );
                                                    }}
                                                >
                                                    {prov.FullName}
                                                </p>
                                            ))}
                                    </div>

                                    {/* Pagination controls */}
                                    <div className="flex justify-between items-center pt-2 mt-2 border-t">
                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) =>
                                                    Math.max(0, prev - 1),
                                                )
                                            }
                                            disabled={currentPage === 0}
                                            className={`px-2 py-1 rounded ${
                                                currentPage === 0
                                                    ? "text-gray-400"
                                                    : "text-blue-500 hover:bg-blue-50"
                                            }`}
                                        >
                                            Previous
                                        </button>
                                        <span className="text-sm text-gray-500">
                                            Page {currentPage} of{" "}
                                            {Math.ceil(
                                                filteredProviders.length / 10,
                                            )}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) =>
                                                    (prev + 1) * 10 <
                                                    filteredProviders.length
                                                        ? prev + 1
                                                        : prev,
                                                )
                                            }
                                            disabled={
                                                (currentPage + 1) * 10 >=
                                                filteredProviders.length
                                            }
                                            className={`px-2 py-1 rounded ${
                                                (currentPage + 1) * 10 >=
                                                filteredProviders.length
                                                    ? "text-gray-400"
                                                    : "text-blue-500 hover:bg-blue-50"
                                            }`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="">
                            <label className="block mb-2 text-gray-700 font-medium">
                                Provider Code
                            </label>
                            <div className="relative w-full h-[44px] border border-black rounded-lg">
                                <input
                                    disabled
                                    type="email"
                                    placeholder={
                                        selectedProviders?.ProviderCode ||
                                        "Provider code"
                                    }
                                    className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg  placeholder-gray-500 "
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-gray-700 font-medium">
                                Batch Number
                            </label>
                            <div className="relative w-full h-[44px] border border-black rounded-lg">
                                <input
                                    placeholder="Add Battch Number"
                                    value={batchNumber}
                                    onChange={handleBatchChange}
                                    className="w-full h-full px-3 py-2 text-black  bg-white rounded-lg placeholder-gray-500 outline-none"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block mb-2 text-gray-700 font-medium">
                                Batch Status
                            </label>
                            <select
                                value={selectedStatusId}
                                onChange={handleStatusChange}
                                className="relative w-full h-[44px] rounded-lg outline-none border border-black px-3"
                            >
                                <option value="" disabled>
                                    Select Status
                                </option>
                                {statusOptions.map((status) => (
                                    <option
                                        key={status.BATCH_STATUS_ID}
                                        value={status.BATCH_STATUS_ID}
                                    >
                                        {status.STATUS_DESCR}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="">
                            <label className="block mb-2 text-gray-700 font-medium">
                                From Date
                            </label>

                            <input
                                type="date"
                                onChange={handlefromDateChange}
                                className="relative w-full h-[44px] border px-3 border-black rounded-lg"
                            ></input>
                        </div>
                        <div className="">
                            <label className="block mb-2 text-gray-700 font-medium">
                                To Date
                            </label>

                            <input
                                type="date"
                                onChange={handleToDateChange}
                                className="relative w-full h-[44px] border px-3 border-black rounded-lg"
                            ></input>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md mt-7   mx-7">
                    <table className="w-full text-sm text-left rtl:text-right text-black rounded-md">
                        <thead className="text-base uppercase bg-white text-black border-b-2 border-black border-t-2">
                            <tr>
                                <th className="border border-black px-4 py-2 text-left">
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                        className="h-4 w-4"
                                    />
                                </th>
                                <th className="px-2 pl-20 border-r border-black w-32 text-[13px]">
                                    Category
                                </th>
                                <th className="px-2 pl-7  border-r border-black w-40 text-[13px] whitespace-nowrap">
                                    Batch No
                                </th>
                                <th className="px-2 pl-10 border-r border-black w-40 text-[13px]">
                                    Provider
                                </th>
                                <th className="px-2 pl-3 border-r border-black w-32 text-[13px] whitespace-nowrap">
                                    Enconter Month
                                </th>
                                <th className="px-2 border-r border-black w-32 text-[13px]">
                                    Units
                                </th>
                                <th className="px-2 pl-5 border-r border-black w-32 text-[13px] whitespace-nowrap">
                                    Batch Total
                                </th>
                                <th className="px-8 border-r border-black w-32 text-[13px]  justify-items-center justify-center">
                                    Paid
                                </th>
                                <th className="px-2  border-r border-black w-40 text-[13px]">
                                    Status
                                </th>

                                <th className="px-2 pl-12  border-r border-black w-40 text-[13px]">
                                    Umpire
                                </th>
                                <th className="px-2 pl-12  border-r border-black w-32 text-[13px] whitespace-nowrap">
                                    Email
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
                            ) : paginatedResults?.length > 0 ? (
                                paginatedResults.map((enrollee, index) => {
                                    const isSelected = selectedItems.some(
                                        (selected) =>
                                            selected.batch_number ===
                                            enrollee.batch_number,
                                    );

                                    return (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100  border-b-2 border-black"
                                        >
                                            <td className=" p-2 text-center  border-black border">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            enrollee,
                                                        )
                                                    }
                                                    className="border-black border"
                                                />
                                            </td>

                                            <td className="px-6 py-3 border-r border-black whitespace-nowrap">
                                                {enrollee.SCHEME_TYPE_CATEGORY ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.batch_number || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black whitespace-nowrap">
                                                {enrollee.provider || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black whitespace-nowrap">
                                                {enrollee.EncounterMonth ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.units || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.batchtotal || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.BatchPaidAmount ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.xx || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black whitespace-nowrap">
                                                {enrollee.FULL_NAME || "N/A"}
                                            </td>
                                            <td className="px-6 py-3 border-r border-black">
                                                {enrollee.ProviderEmail ||
                                                    "N/A"}
                                            </td>
                                        </tr>
                                    );
                                })
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
                    {PaymentAdvise?.length > itemsPerPage && (
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
                                disabled={endIndex >= PaymentAdvise?.length}
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

export default PaymentAdvise;

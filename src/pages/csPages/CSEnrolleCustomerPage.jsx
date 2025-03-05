import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import Sidebar from "../../components/cs/csSideBar";
import Navbar from "../../components/cs/Header";

import { useNavigate } from "react-router-dom";
import CustomerModal from "../csPages/CSPatientModal";
import { TbPlus } from "react-icons/tb";
import { RiCrossFill } from "react-icons/ri";
import PAHistoryModal from "../csPages/CSPAHistoryModal";
import HospitalVisitModal from "../csPages/CSHospitalVisitModal";

function DateDropdown({ options, sendNumber, className }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        sendNumber(value);
    };

    return (
        <select
            value={selectedValue}
            onChange={handleChange}
            className={`border border-gray-300 rounded p-2 ${className}`}
        >
            <option value="" disabled>
                Select Service Type
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
const BenefitsArray = [
    {
        sn: "",

        benefitscode: "FRAME",
        benefitsname: "FRAMES",
        benefitsnamefr: "FRAMES",
        date: "29/10/2024",
    },
    {
        sn: "",

        benefitscode: "FRAME",
        benefitsname: "FRAMES",
        benefitsnamefr: "FRAMES",
        date: "29/10/2023",
    },
    {
        sn: "",

        benefitscode: "FRAME",
        benefitsname: "FRAMES",
        benefitsnamefr: "FRAMES",
        date: "29/10/2022",
    },
];

const concessionsArray = [
    {
        concessiondate: "02/02/2022",
        concession: "Permitted to use grade A hospitals",
    },
    {
        concessiondate: "02/02/2022",
        concession: "Permitted to use grade A hospitals",
    },
];
// Tabs for table filters
const tabs = ["Requests", "PA History", "Hospital Visits", "Benefits"];

const headers = {
    Requests: [
        "",
        "Date",
        "Diagnosis",
        "Benefits",
        "Description",
        "CHarge Amount",

        "Visit Type",
        "Status",
    ],
    "PA History": [
        "ID",
        "Name",
        "Date",
        "Diagnosis",
        "Provider",
        "Procedure",
        "Issuer",
        "Case Manager",
        "Status",
    ],

    "Hospital Visits": [
        "Date",
        "Provider",
        "Diagnosis",
        "Service",
        "Billed Amount",
        "Qty",
        "Amount Paid",
        "Preauth code",
        "Visit Type",
        "Status",
    ],
    Benefits: [
        "Benefit Name",
        "Service Limit",
        "Service Amount Used",
        "Service Balance",
        "Visit Limit",
        "Visit USed",
    ],

    Concessions: ["Date", "Concession"],
};

const CSEnrolleCustomerPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleNavigateWithEnrollee = (enrollee) => {
        navigate("/csenrolleepage", { state: { enrollee } });
    };

    const servTypes = [
        { value: 1, label: "Inpatient" },
        { value: 2, label: "Outpatient" },
        { value: 51, label: "Major Disease Benefit" },
        { value: 53, label: "Maternity" },
        { value: 65, label: "Dentistry" },
        { value: 91, label: "Additional Benefits" },
        { value: 92, label: "Advanced Investigations" },
        { value: 101, label: "Health Check Basic" },
        { value: 102, label: "Eye Care" },
        { value: 137, label: "Chronic Diseases Treatment" },
    ];

    const [selectedValue, setSelectedValue] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [service, setService] = useState([]);
    const [concession, setConcession] = useState([]);
    const [activeTab, setActiveTab] = useState("Requests");
    const [pa, setPA] = useState([]);
    const [hospitalHistory, setHospitalHistory] = useState([]);
    const [enronlleBioData, setEnronlleBioData] = useState([]);

    const [visitTypes, setVisitTypes] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState(null); // To store the selected servtype_id

    const [selectedItem, setSelectedItem] = useState(null); // Track selected item
    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
    const [selectedHospitalItem, setSelectedHospitalItem] = useState(null); // Track selected item
    const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false); // Manage modal visibility

    const openModal = (item) => {
        setSelectedItem(item); // Set the clicked item's data
        setIsModalOpen(true); // Show the modal
    };

    useEffect(() => {
        if (selectedValue) {
            // Only call if there's a selected value
            GetBenefit();
        }
    }, [selectedValue]);

    const closeModal = () => {
        setSelectedItem(null); // Clear the selected item
        setIsModalOpen(false); // Hide the modal
    };

    const openHospitalModal = (item) => {
        setSelectedHospitalItem(item); // Set the clicked item's data
        setIsHospitalModalOpen(true); // Show the modal
    };

    // const location = useLocation();
    // const enrollee = location.state?.enrollee;

    const location = useLocation();
    const { enrollee, enrolleeRequests } = location.state || {};

    const closeHospitalModal = () => {
        setSelectedHospitalItem(null); // Clear the selected item
        setIsHospitalModalOpen(false); // Hide the modal
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (item) => {
        setSelectedItems((prev) => {
            const isSelected = prev.some(
                (i) => i.VisitDetailsID === item.VisitDetailsID,
            );

            if (isSelected) {
                return prev.filter(
                    (i) => i.VisitDetailsID !== item.VisitDetailsID,
                );
            } else {
                return [...prev, item];
            }
        });
    };

    const handleTransferClick = (enrollee, selectedItems) => {
        navigate("/paapprovalpage", { state: { enrollee, selectedItems } });
    };

    const handleRejectTransferClick = () => {
        // Navigate and pass the selected items
        navigate("/selected-pa", { state: { selectedItems } });
    };

    const currentHeaders = headers[activeTab];

    const [selectedStatus, setSelectedStatus] = useState(null); // Status state

    const [currentPage, setCurrentPage] = useState(1); // Active page
    const itemsPerPage = 3;
    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    console.log(
        "getting PA",
        fetch(
            `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${3}&PAStatus&visitid`,
            {
                method: "GET",
            },
        ),
    );
    useEffect(() => {
        GetPAHistory();
        GetEnrolleeBiodata();
    }, []);

    async function GetPAHistory() {
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${enrollee.CIF_NUMBER}&PAStatus&visitid
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("All:", data);

            setPA(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    async function GetEnrolleeBiodata() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrollee.MembernUmber}
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("All:", data);

            setEnronlleBioData(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    useEffect(() => {
        GetHospitalHistory();
        GetService();
        GetConcession();
    }, []);

    console.log(
        "hospitalP PA",
        fetch(
            `${apiUrl}api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.enrolleeID}&fromdate=2010-12-31&todate=2025-12-31&network_type=
`,
            {
                method: "GET",
            },
        ),
    );

    async function GetHospitalHistory() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.MembernUmber}&fromdate=2010-12-31&todate=2025-12-31&network_type=
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("All:", data);

            setHospitalHistory(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    console.log(
        "getting benefits",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.CIF_NUMBER}&schemeid=${enrollee.SCHEME_ID}&serviceid=${selectedValue}
            `,
            {
                method: "GET",
            },
        ),
    );
    async function GetBenefit(serviceId) {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.CIF_NUMBER}&schemeid=${enrollee.SCHEME_ID}&serviceid=${serviceId}
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("benefitszzz:", data);

            setBenefit(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    console.log(
        "service",
        fetch(
            `$${apiUrl}api/ListValues/GetSeviceType?cif=${enrollee.CIF_NUMBER}&Schemeid=${enrollee.SCHEME_ID}
            `,
            {
                method: "GET",
            },
        ),
    );

    async function GetService() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetSeviceType?cif=${enrollee.CIF_NUMBER}&Schemeid=${enrollee.SCHEME_ID}             
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("service:", data.result);

            setService(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }
    async function GetConcession() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeClaims/GetEnrolleeFlags?cif=$${enrollee.CIF_NUMBER}           
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("Concession:", data.result);

            setConcession(data.result);
        } catch (error) {
            console.error("Error fetching concession:", error);
        }
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <div className=" flex justify-between">
                        <span className="text-xl  font-medium ">
                            {enrollee?.provider} is requesting approval for
                            Enrollee #{enrollee?.MembernUmber}
                        </span>
                        <div className=" flex gap-3">
                            <button
                                className="flex items-center justify-center gap-2 bg-[#C61531] py-2 px-4 rounded-md text-white"
                                onClick={() => handleNavigate("/cmticket")}
                            >
                                <TbPlus className="h-6" />
                                Generate New PA
                            </button>
                        </div>
                    </div>
                    <CustomerModal
                        selectedStatus={selectedStatus}
                        enrollee={enrollee}
                    />

                    <div className="flex border-b space-x-1 mt-5">
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

                        <div className="">
                            <DateDropdown
                                options={service.map((type) => ({
                                    label: type.visittype,
                                    value: type.servtype_id,
                                }))}
                                sendNumber={(value) => {
                                    setSelectedValue(value); // Update selected value
                                    GetBenefit(value); // Fetch benefit based on selection
                                }}
                                className="outline-none bg-red-500 rounded-md  ml-[22rem] text-white"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white p-4 rounded-md ">
                        <table className="table-auto w-full ">
                            <thead className="bg-white text-[#1F4173]">
                                <tr className="bg-gray-50 overflow-x-scroll ">
                                    {currentHeaders.map((header, index) => (
                                        <th
                                            key={index}
                                            className="border px-4 py-2 text-left"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {activeTab === "Requests" && (
                                    <>
                                        {enrolleeRequests.map((item, index) => {
                                            const isSelected =
                                                selectedItems.some(
                                                    (selected) =>
                                                        selected.VisitDetailsID ===
                                                        item.VisitDetailsID,
                                                );

                                            return (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border p-2 text-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={isSelected}
                                                            onChange={() =>
                                                                handleCheckboxChange(
                                                                    item,
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {
                                                            new Date(
                                                                item.DateIssued,
                                                            )
                                                                .toISOString()
                                                                .split("T")[0]
                                                        }
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.diagcode
                                                            ?.split(",")[0]
                                                            ?.split(" ")
                                                            .slice(1)
                                                            .join(" ") || "N/A"}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {
                                                            item.ProcedureDescription
                                                        }
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.chargeamount}
                                                    </td>

                                                    <td className="border px-4 py-2">
                                                        {item.visitType}
                                                    </td>
                                                    <td className="border px-4 py-2 text-orange-500">
                                                        {item.PAStatus}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                )}

                                {activeTab === "PA History" &&
                                    pa.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                            onClick={() => openModal(item)}
                                        >
                                            <td className="border px-4 py-2">
                                                {item.VisitID}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.surname} {item.firstname}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {
                                                    new Date(item.DateIssued)
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </td>
                                            {/* <td className="border px-4 py-2">
                                                {item.plan}
                                            </td> */}
                                            <td className="border px-4 py-2">
                                                {item.diagcode
                                                    ?.split(",")[0]
                                                    ?.split(" ")
                                                    .slice(1)
                                                    .join(" ") || "N/A"}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.provider}
                                            </td>

                                            <td className="border px-4 py-2">
                                                {item.ProcedureDescription}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.issuedBy}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.casemanager}
                                            </td>
                                            <td
                                                className={
                                                    item.status === "Approved"
                                                        ? "text-green-500 border px-4 py-2"
                                                        : "text-red-500 border px-4 py-2"
                                                }
                                            >
                                                {item.PAStatus}
                                            </td>
                                        </tr>
                                    ))}
                                {activeTab === "Hospital Visits" &&
                                    hospitalHistory.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                            onClick={() =>
                                                openHospitalModal(item)
                                            }
                                        >
                                            <td className="border px-4 py-2">
                                                {
                                                    new Date(
                                                        item.ClaimLine_TreatmentDate,
                                                    )
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_Provider}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_Diagnosis}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {
                                                    item.ClaimLine_BenefitDepartment
                                                }
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.ClaimLine_TariffAmt ||
                                                    "No Payment made"}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.ClaimLine_units}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.ClaimLine_AmtPaid}
                                            </td>

                                            <td className="border px-4 py-2">
                                                {item.Claim_Authorisation}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_Service_Type}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_status}
                                            </td>
                                        </tr>
                                    ))}
                                {activeTab === "Benefits" && // Ensure this only affects Benefits
                                    (!selectedValue ? ( // If no scheme is selected, show "Please select a scheme"
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="h-64 text-center"
                                            >
                                                <div className="flex justify-center items-center w-full h-full">
                                                    <h1 className="text-gray-500 text-lg">
                                                        Please select a service
                                                        type
                                                    </h1>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : benefit && benefit.length > 0 ? ( // If benefits exist, display them
                                        benefit.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.Benefit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.ServiceLimit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.Used}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.Balance}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.VisitsLimit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.VisitsUsed}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        // If scheme is selected but no benefits exist, show "No Record Found"
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="h-64 text-center"
                                            >
                                                <div className="flex justify-center items-center w-full h-full">
                                                    <h1 className="py-5 px-20">
                                                        No Record Found
                                                    </h1>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                {/* {activeTab === "Concessions" &&
                                    concession.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                        >
                                            <td className="border px-4 py-2">
                                                {
                                                    new Date(item.FlaggedOn)
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.FlagDescription}
                                            </td>
                                        </tr>
                                    ))} */}
                            </tbody>
                        </table>
                    </div>
                    {isModalOpen && selectedItem && (
                        <PAHistoryModal
                            item={selectedItem}
                            onClose={closeModal}
                        />
                    )}

                    {isHospitalModalOpen && selectedHospitalItem && (
                        <HospitalVisitModal
                            item={selectedHospitalItem}
                            onClose={closeHospitalModal}
                        />
                    )}

                    {selectedItems.length > 0 && (
                        <div className="mt-4 flex justify-center items-center w-full">
                            <button
                                onClick={() =>
                                    handleTransferClick(enrollee, selectedItems)
                                }
                                className="bg-red-500 text-white px-9 py-3 mb-2 rounded-md hover:bg-red-700 whitespace-nowrap mx-2"
                            >
                                Reject PA
                            </button>
                            <button
                                onClick={() =>
                                    handleTransferClick(enrollee, selectedItems)
                                }
                                className="bg-white text-red-500 px-9 py-3 mb-2 border border-red-500 rounded-md whitespace-nowrap mx-2"
                            >
                                Authorize PA
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CSEnrolleCustomerPage;

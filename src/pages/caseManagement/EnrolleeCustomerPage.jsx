import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";

import { useNavigate } from "react-router-dom";
import CustomerModal from "./customerModal";
import { TbPlus } from "react-icons/tb";
import { RiCrossFill } from "react-icons/ri";
import PAHistoryModal from "./PAHistoryModal";
import HospitalVisitModal from "./HospitalVisitModal";

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
const tabs = ["PA History", "Hospital Visits", "Benefits", "Concessions"];

const headers = {
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
        "Description",
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

const EnrolleeCustomerPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
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
    const [activeTab, setActiveTab] = useState("PA History");
    const [pa, setPA] = useState([]);
    const [hospitalHistory, setHospitalHistory] = useState([]);

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

    const location = useLocation();
    const enrollee = location.state?.enrollee;

    const closeHospitalModal = () => {
        setSelectedHospitalItem(null); // Clear the selected item
        setIsHospitalModalOpen(false); // Hide the modal
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
            `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${enrollee.Member_MemberUniqueID}&PAStatus&visitid`,
            {
                method: "GET",
            },
        ),
    );
    useEffect(() => {
        GetPAHistory();
    }, []);

    async function GetPAHistory() {
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${enrollee.Member_MemberUniqueID}&PAStatus&visitid
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

    useEffect(() => {
        GetHospitalHistory();
        GetService();
    }, []);

    async function GetHospitalHistory() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.Member_EnrolleeID}&fromdate=2010-12-31&todate=2025-12-31&network_type=
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
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedValue}
            `,
            {
                method: "GET",
            },
        ),
    );
    async function GetBenefit(serviceId) {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${serviceId}
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
            `$${apiUrl}api/ListValues/GetSeviceType?cif=${enrollee.Member_MemberUniqueID}&Schemeid=${enrollee.Member_PlanID}
            `,
            {
                method: "GET",
            },
        ),
    );

    async function GetService() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetSeviceType?cif=${enrollee.Member_MemberUniqueID}&Schemeid=${enrollee.Member_PlanID}             
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("service:", data);

            setService(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <div className=" flex justify-between">
                        <span className="text-xl  text-[2.2rem] font-medium">
                            {enrollee?.Member_CustomerName} - Enrollee #
                            {enrollee?.Member_EnrolleeID}
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

                    {/* Table */}
                    {/* Tabs Section */}
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
                                    label: type.visittype, // Display text in the dropdown
                                    value: type.servtype_id, // Value to be sent
                                }))}
                                sendNumber={(value) => {
                                    setSelectedValue(value); // Update selected value
                                    GetBenefit(value); // Fetch benefit based on selection
                                }}
                                className="outline-none bg-red-500 rounded-md ml-[26rem] text-white"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white p-4 rounded-md">
                        <table className="table-auto w-full">
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
                                                {item.hospitalvisitdate}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_Provider}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.Claim_Diagnosis}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.description}
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
                                                {item.preauthcode}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.visitType}
                                            </td>
                                            <td
                                                className={
                                                    item.hospitalstatus ===
                                                    "Approved"
                                                        ? "text-green-500 border px-4 py-2"
                                                        : "text-red-500 border px-4 py-2"
                                                }
                                            >
                                                {item.hospitalstatus}
                                            </td>
                                        </tr>
                                    ))}
                                {activeTab === "Benefits" &&
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
                                    ))}
                                {activeTab === "Concessions" &&
                                    concessionsArray.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                        >
                                            <td className="border px-4 py-2">
                                                {item.concessiondate}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.concession}
                                            </td>
                                        </tr>
                                    ))}
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
                </div>
            </div>
        </div>
    );
};

export default EnrolleeCustomerPage;

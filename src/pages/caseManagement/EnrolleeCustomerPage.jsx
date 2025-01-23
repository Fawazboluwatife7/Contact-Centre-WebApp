import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";

import { useNavigate } from "react-router-dom";
import CustomerModal from "./customerModal";
import { TbPlus } from "react-icons/tb";
import { RiCrossFill } from "react-icons/ri";
import PAHistoryModal from "./PAHistoryModal";
import HospitalVisitModal from "./HospitalVisitModal";

const PAHistoryArray = [
    {
        id: "947736",
        name: "Yamal bakare",
        date: "29/10/2024",
        plan: "Magnum",
        diagnosis: "persistant stomachaches",
        code: "R59.9",
        provider: "Rexxon Healthcare",
        procedure: "Headache and stitches",
        issuer: "Ode p.",
        casemanager: " Valery O.",
        status: "Discharged",
        drugs: "Paracetamol, Folic acid, Calcium suppplement",
        investigation: "X-ray scan",
        treatment: "Had head stitches",
    },
    {
        id: "9436",
        name: "Yag Lanbre",
        date: "29/10/2024",
        plan: "Magnum",
        diagnosis: "persistant stomachaches",
        code: "R59.9",
        provider: "Rexxon Healthcare",
        procedure: "Headache and stitches",
        issuer: "Ode p.",
        casemanager: " Valery O.",
        status: "Discharged",
        drugs: "Dolamata B tab",
        investigation: "specialist consultation",
        treatment: "none",
    },
];

const HospitalVisitArray = [
    {
        visitType: "Outpatients",
        status: "Accepted",
        diagnosis: "persistant stomachaches",
        date: "29/10/2024",
        benefits: "specialist consultation",
        hospitalvisitdate: "01/02/2022",
        provider: "Rexxon Healthcare",
        diagnosis: "Paracetamol",
        description: "Cardiologist consultation",
        chargeamount: "#10,000",
        qty: "30",

        preauthcode: "LH/RAD/248225",
        visitType: "Outpatient",
        hospitalstatus: "Approved",
    },
    {
        diagnosis: "persistant stomachaches",
        date: "29/10/2024",
        benefits: "specialist consultation",
        hospitalvisitdate: "01/02/20212",
        provider: "Rexxon Healthcare",
        diagnosis: "Paracetamol",
        description: "Cardiologist consultation",
        chargeamount: "#30,000",
        qty: "40",
        preauthcode: "LH/RAD/248225",
        visitType: "Outpatient",
        hospitalstatus: "Approved",
    },
];

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
        "Plan",
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
        "Charge Amount",
        "Qty",
        "Preauth code",
        "Visit Type",
        "Status",
    ],
    Benefits: [
        "SN",

        "Benefits Code",
        "Benefits Name",
        "Benefits Name FR",
        "Date",
    ],

    Concessions: ["Date", "Concession"],
};

const EnrolleeCustomerPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const [activeTab, setActiveTab] = useState("PA History");

    const [selectedItem, setSelectedItem] = useState(null); // Track selected item
    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
    const [selectedHospitalItem, setSelectedHospitalItem] = useState(null); // Track selected item
    const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false); // Manage modal visibility

    const openModal = (item) => {
        setSelectedItem(item); // Set the clicked item's data
        setIsModalOpen(true); // Show the modal
    };

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
    const itemsPerPage = 3; // Number of items per page
    // const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Total pages

    // // Function to calculate the data for the current page
    // const paginatedData = filteredData.slice(
    //     (currentPage - 1) * itemsPerPage,
    //     currentPage * itemsPerPage,
    // );

    // Handler to change pages
    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    console.log(
        "getting PA",
        fetch(
            `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${enrollee.Member_MemberUniqueID}&PAStatus&visitid
            `,
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

            const data = await response.result.json();

            console.log("All:", data);

            setClaimsPaid(getAllClaimsPaid.toLocaleString("en-US"));
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
                    <div className="flex mt-6 border-b space-x-1">
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
                                    PAHistoryArray.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                            onClick={() => openModal(item)}
                                        >
                                            <td className="border px-4 py-2">
                                                {item.id}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.name}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.date}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.plan}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.diagnosis}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.provider}
                                            </td>

                                            <td className="border px-4 py-2">
                                                {item.procedure}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.issuer}
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
                                                {item.status}
                                            </td>
                                        </tr>
                                    ))}
                                {activeTab === "Hospital Visits" &&
                                    HospitalVisitArray.map((item, index) => (
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
                                                {item.provider}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.diagnosis}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.description}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.chargeamount}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.qty}
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
                                    BenefitsArray.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                        >
                                            <td className="border px-4 py-2">
                                                <RiCrossFill className=" mx-auto text-red-700  bg-gray-200 rounded-full w-6 h-6" />
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.benefitscode}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.benefitsname}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.benefitsnamefr}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.date}
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

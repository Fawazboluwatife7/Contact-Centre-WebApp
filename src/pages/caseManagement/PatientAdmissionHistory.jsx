import React, { useState } from "react";

import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import PatientInformation from "./PatientInformation";
import StatusModal from "./StatusModal";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { PiCrossLight } from "react-icons/pi";

import { BiHome } from "react-icons/bi";
import { PiFlagBold } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { FaFilePdf } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
//import { SiMicrosoftexcel } from "react-icons/si";
import { BiSolidFileImage } from "react-icons/bi";
import { FaFlag } from "react-icons/fa6";

import { BsThreeDots } from "react-icons/bs";
import { green } from "@mui/material/colors";

const managementArray = [
    {
        code: "R59.9",
        diagnosis: "Resistant headaches",
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        drugs: "Paracetamol",
        investigation: "X-Ray and scan",
        treatment: "Headache and stitches",
        status: "Approved",
    },
    {
        code: "R59.9",
        diagnosis: "Resistant headaches",
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        drugs: "Paracetamol",
        investigation: "X-Ray and scan",
        treatment: "Headache and stitches",
        status: "Approved",
    },
    {
        code: "R59.9",
        diagnosis: "Resistant headaches",
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        drugs: "Paracetamol",
        investigation: "X-Ray and scan",
        treatment: "Headache and stitches",
        status: "Rejected",
    },
];

const PAHistoryArray = [
    {
        date: "29/10/2024",
        provider: "Rexxon Healthcare",
        diagnosis: "Resistant headaches",

        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        status: "Approved",
    },
    {
        date: "29/10/2024",
        provider: "R Jolad",
        diagnosis: "Resistant headaches",
        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        status: "Rejected",
    },
    {
        date: "29/10/2024",
        provider: "Mount Sinai",
        diagnosis: "Resistant headaches",
        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        status: "Rejected",
    },
    {
        date: "29/10/2024",
        provider: "Mount Sinai",
        diagnosis: "Resistant headaches",
        description: "Cardiologist consultation",
        chargeAmount: "#10,000",
        quantity: "30",
        preauthCode: "LH/RAD/248225",
        visitType: "Outpatient",
        status: "Approved",
    },
];

const AdmissionHistory = [
    {
        id: "947766",
        name: "Tunde Bakare",
        startDate: "22/10/2024",
        endDate: "29/10/2024",

        plan: "Magnum",
        diagnosis: "Madness",
        provider: "Rexxon Healthcare",
        issuer: "Ode P.",
        state: "Lagos",
    },

    {
        id: "947726",

        startDate: "22/10/2024",
        endDate: "29/10/2024",
        name: "Tunde Bakare",
        plan: "Magnum",
        diagnosis: "Madness",
        provider: "Rexxon Healthcare",
        issuer: "Ode P.",
        state: "Lagos",
    },

    {
        id: "947716",

        startDate: "22/10/2024",
        endDate: "29/10/2024",
        name: "Tunde Bakare",
        plan: "Magnum",
        diagnosis: "Madness",
        provider: "Rexxon Healthcare",
        issuer: "Ode P.",
        state: "Lagos",
    },

    {
        id: "947736",

        startDate: "22/10/2024",
        endDate: "29/10/2024",
        name: "Tunde Bakare",
        plan: "Magnum",
        diagnosis: "Madness",
        provider: "Rexxon Healthcare",
        issuer: "Ode P.",
        state: "Lagos",
    },
    {
        name: "Tunde Bakare",
        id: "947736",
        startDate: "2/10/2024",
        endDate: "9/10/2024",
        plan: "Magnum",
        diagnosis: "Madness",
        provider: "Rexxon Healthcare",
        issuer: "Ode P.",
        state: "Lagos",
    },
];

const HospitalVisit = [
    {
        date: "02/02/2022",
        provider: "Lagoon Hospital",
    },
    {
        date: "02/02/2022",
        provider: "Lagoxx Hospital",
    },
];

const Benefits = [
    {
        startDate: "02/02/2022",
        memberName: "Tunde Bape",
        planName: "PRO2025",
        serviceName: "Outpatient",
        benefits: "Outpatient",
        aggregateLimit: "0",
        serviceTypeLimit: "IndividualLimit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
    },
    {
        startDate: "02/02/2022",
        memberName: "John Bape",
        planName: "PRO2025",
        serviceName: "Outpatient",
        benefits: "Outpatient",
        aggregateLimit: "0",
        serviceTypeLimit: "IndividualLimit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
    },
    {
        startDate: "02/02/2022",
        memberName: "Merlin Gapko",
        planName: "PRO2025",
        serviceName: "Outpatient",
        benefits: "Outpatient",
        aggregateLimit: "0",
        serviceTypeLimit: "IndividualLimit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
    },
    {
        startDate: "02/02/2022",
        memberName: "Jude Belligham",
        planName: "PRO2025",
        serviceName: "Outpatient",
        benefits: "Outpatient",
        aggregateLimit: "0",
        serviceTypeLimit: "IndividualLimit",
        serviceLimit: "Unlimited",
        serviceLimitUnit: "0",
        benefit: "Individual",
    },
];

const EnrolleeInfo = {
    name: "Tunde Bakare",
    enrolleeId: "LH09980/0",
    group: "Sterling",
    scheme: "NGPRO",
    age: 62,
    sex: "Male",
    policyDate: "02/10/2021 - 02/10/2024",
    dob: "01 October 1960",
    phoneNumber: "+2348035911412",
    address: "122/123 Funsho Williams Avenue, Surulere, Lagos",
    email: "tundebakare@gmail.com",
    status: "Active",
    nextOfKin: "Shade Bakare",
    nokPhoneNumber: "+2349030302321",
    profileImage: "profile-image-url-here",
    id: "977735",
};

const concession = [
    {
        date: "02/10/2021  11:20AM",
        concession: "Permitted to use selected grade A hospitals",
    },
    {
        date: "02/10/2021  11:20AM",
        concession: "Can use gym sunscription more than  twice a week",
    },
    {
        date: "02/10/2021  11:20AM",
        concession: "Permitted to use selected grade A hospitals",
    },
];
const exclusions = [
    {
        approver: "02/10/2021  11:20AM",
        preauthcode: "Permitted to use selected grade A hospitals",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo.",
    },
    {
        approver: "02/10/2021  11:20AM",
        preauthcode: "Permitted to use selected grade A hospitals",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo.",
    },
    {
        approver: "02/10/2021  11:20AM",
        preauthcode: "Permitted to use selected grade A hospitals",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo.",
    },
    {
        approver: "02/10/2021  11:20AM",
        preauthcode: "Permitted to use selected grade A hospitals",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo.",
    },
    {
        approver: "02/10/2021  11:20AM",
        preauthcode: "Permitted to use selected grade A hospitals",
        reason: "Approved to use selected grade A hospital by Dr Alli Tokunbo.",
    },
];
const flagArray = [
    {
        date: "02/10/2021",
        status: "accepted",
        agent: "Adebiyi John",
        reason: "Patient can access all care plus exclusive",
    },
    {
        date: "02/10/2021",
        status: "rejected",
        agent: "Adebiyi John",
        reason: "Patient can access all care plus exclusive",
    },
];

const noteArray = [
    {
        time: "5 hours ago",
        picture: "/avatar.svg",
        messageTitle: " Created Ticket #376512- Request for HMO",
        messageDescription: " Assigned to pharmacy benefits",
    },
    {
        time: "5 hours ago",
        picture: "/avatar.svg",
        messageTitle: "",
        messageDescription:
            " I’m having troubles locating the customer on our search engine, did he/she happen to provide an email address? Thanks.",
    },
];

const attachmentsArray = [
    {
        type: "pdf",
        fileName: "Medical Report for Salau Kunle",
        description: "Medical Report",
        dateUploaded: "12/10/2022",
        uploadedBy: "Dr jay-jay",
    },
    {
        type: "doc",
        fileName: "Medical Report for Salau Kunle",
        description: "Medical Report",
        dateUploaded: "12/10/2022",
        uploadedBy: "Dr jay-jay",
    },
    {
        type: "excel",
        fileName: "Medical Report for Salau Kunle",
        description: "Medical Report",
        dateUploaded: "12/10/2022",
        uploadedBy: "Dr jay-jay",
    },
    {
        type: "image",
        fileName: "Medical Report for Salau Kunle",
        description: "Medical Report",
        dateUploaded: "12/10/2022",
        uploadedBy: "Dr jay-jay",
    },
];

// Tabs for table filters
const tabs = [
    "Management",
    "PA History",
    "Admission History",
    "Hospital Visits",
    "Benefits",
    "Concessions",
    "Exclusions",
    "Flags",
    "Notes",
    "Attachments",
];

const headers = {
    Management: [
        "Code",
        "Diagnosis",
        "Date",
        "Provider",
        "Drugs",
        "Investigation",
        "Treatment",
        "Status",
    ],
    "PA History": [
        "Date",
        "Provider",
        "Diagnosis",
        "Description",
        "Charge Amount",
        "Quantity",
        "Preauth code",
        "Visit Type",

        "Status",
    ],
    "Admission History": [
        "#ID",
        "Name",
        "Start Date",
        "End Date",
        "Plan",
        "Diagnosis",
        "Provider",
        "State",
        "Issuer",
    ],
    "Hospital Visits": ["Date", "Provider"],
    Benefits: [
        "Start Date",
        " Member Name",
        "Plan Name",
        "Service Name",
        "Benefits",
        "Aggregate Limit",
        "Service Type Limit",
        "Service  Limit",
        "Service Limit Unit",
        "Benefit",
    ],
    Expired: [
        "#ID",
        "Name",
        "Start Date",
        "End Date",
        "Plan",
        "Issuer",
        "Status",
    ],
    Concessions: ["Date", "Concession"],
    Exclusions: ["Approver", "Preauth code", "Reason"],
    Flags: ["", "Date", "Agent", "Reason"],
    Notes: ["#ID", "Name"],
    Attachments: [
        "",
        "Type",
        "File Name",
        "Description",
        "Date Uploaded",
        "Uploaded By",
        "Action",
    ],
};

const PatientAdmissionHistory = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file.name); // Handle the uploaded file
        }
    };

    const [activeTab, setActiveTab] = useState("Management");

    const currentHeaders = headers[activeTab];

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedStatus, setSelectedStatus] = useState(null); // Status state

    // Open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [attachments, setAttachments] = useState([]);

    // Update the selected status
    const handleSelectStatus = (status) => {
        setSelectedStatus(status); // Update status
        handleCloseModal(false); // Close modal
    };

    const tabIcons = [
        PiCrossLight,
        PiCrossLight,

        BiHome,
        BiHome,
        PiCrossLight,
        PiCrossLight,
        PiCrossLight,
        PiFlagBold,
        GrNotes,
        IoDocumentAttachOutline,
    ];

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <div className=" flex justify-between">
                        <span className="text-xl  text-[2.2rem]">
                            Admissions
                        </span>
                        <div className=" flex gap-3">
                            <button
                                className="flex items-center justify-center gap-2 bg-[#C61531] py-2 px-4 rounded-md text-white"
                                onClick={handleOpenModal}
                            >
                                <img
                                    src="dropbox.svg"
                                    alt="Dropbox Icon"
                                    className="h-6"
                                />
                                <span>Update Status</span>
                            </button>

                            <button
                                className="flex items-center justify-center gap-2 bg-[#C61531] py-2 px-4 rounded-md text-white"
                                onClick={() => handleNavigate("/cmticket")}
                            >
                                <RxUpdate className=" text-white" />
                                Convert to Ticket
                            </button>
                        </div>
                    </div>
                    <PatientInformation selectedStatus={selectedStatus} />

                    <StatusModal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onSelectStatus={handleSelectStatus} // Pass status update function
                    />
                    <div className="mt-7 bg-white h-[20rem] py-2 rounded-md">
                        <div className="grid grid-cols-7 gap-2 mb-4 border-b px-4 pt-2">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-center space-x-2 w-full h-12 ${
                                        activeTab === tab
                                            ? "text-[#344054] bg-[#f6e8ea] border border-[#EAA6B0]"
                                            : "text-[#344054] bg-[#F0F2FA]"
                                    } rounded-md`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {/* Icon */}
                                    {React.createElement(tabIcons[index], {
                                        className: `w-6 h-6 ${
                                            activeTab === tab
                                                ? "text-red-600"
                                                : "text-[#344054]"
                                        }`,
                                    })}

                                    {/* Tab Name */}
                                    <span className="whitespace-nowrap text-sm font-medium">
                                        {tab}
                                    </span>
                                </button>
                            ))}
                        </div>
                        {activeTab === "Attachments" && (
                            <div className=" flex justify-between mr-4 mb-4">
                                <p></p>
                                <button className=" text-red-600  border border-red-500 w-16">
                                    Export
                                </button>
                            </div>
                        )}

                        <div className="overflow-x-auto bg-white px-4">
                            <table className="table-auto w-full border-collapse border border-gray-300 overflow-x-scroll">
                                <thead className="overflow-x-scroll">
                                    <tr className="bg-gray-50 overflow-x-scroll">
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
                                    {/* {filteredData.map((item, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            className="hover:bg-gray-100"
                                        >
                                            {currentHeaders.map(
                                                (header, colIndex) => (
                                                    <td
                                                        key={colIndex}
                                                        className="border px-4 py-2"
                                                    >
                                                        {item[header]}
                                                    </td>
                                                ),
                                            )}
                                        </tr>
                                    ))} */}

                                    {activeTab === "Management" &&
                                        managementArray.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.code}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.diagnosis}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.drugs}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.investigation}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.provider}
                                                </td>

                                                <td className="border px-4 py-2">
                                                    {item.treatment}
                                                </td>
                                                <td
                                                    className={
                                                        item.status ===
                                                        "Approved"
                                                            ? "text-green-500 border px-4 py-2"
                                                            : "text-red-500 border px-4 py-2"
                                                    }
                                                >
                                                    {item.status}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Hospital Visits" &&
                                        HospitalVisit.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.provider}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Hospital Visits" &&
                                        HospitalVisit.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.provider}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Benefits" &&
                                        Benefits.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.startDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.memberName}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.planName}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.serviceName}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.benefits}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.aggregateLimit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.serviceTypeLimit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.serviceLimit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.serviceLimitUnit}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.benefit}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Hospital Visits" &&
                                        HospitalVisit.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.provider}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Exclusions" &&
                                        exclusions.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.approver}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.preauthcode}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.reason}
                                                </td>
                                            </tr>
                                        ))}

                                    {activeTab === "Concessions" &&
                                        concession.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.concession}
                                                </td>
                                            </tr>
                                        ))}

                                    {activeTab === "PA History" &&
                                        PAHistoryArray.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.date}
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
                                                    {item.chargeAmount}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.quantity}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.preauthCode}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.visitType}
                                                </td>
                                                <td
                                                    className={
                                                        item.status ===
                                                        "Approved"
                                                            ? " text-green-600 px-4  border py-2"
                                                            : " text-red-600 px-4  border py-2"
                                                    }
                                                >
                                                    {item.status}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Flags" &&
                                        flagArray.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.status ===
                                                    "accepted" ? (
                                                        <FaFlag className=" text-green-600" />
                                                    ) : (
                                                        <FaFlag className=" text-red-600" />
                                                    )}
                                                </td>

                                                <td className="border px-4 py-2">
                                                    {item.date}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.agent}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.reason}
                                                </td>
                                            </tr>
                                        ))}

                                    {activeTab === "Admission History" &&
                                        AdmissionHistory.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.name}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.startDate}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.endDate}
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
                                                    {item.state}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.issuer}
                                                </td>
                                            </tr>
                                        ))}
                                    {activeTab === "Attachments" &&
                                        attachmentsArray.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.type === "pdf" ? (
                                                        <FaFilePdf className=" text-red-600" />
                                                    ) : item.type === "doc" ? (
                                                        <IoDocumentText className=" text-blue-600" />
                                                    ) : item.type ===
                                                      "excel" ? (
                                                        <SiMicrosoftexcel className=" text-green-600" />
                                                    ) : (
                                                        <BiSolidFileImage className=" text-green-400" />
                                                    )}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.fileName}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.description}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.dateUploaded}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.uploadedBy}
                                                </td>
                                                <td className="border px-4 py-2 flex items-center justify-center">
                                                    <BsThreeDots />
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            {activeTab === "Attachments" && (
                                <div className="flex justify-center items-center mt-5 gap-5 mb-5">
                                    {/* Request Medical Report Button */}
                                    <div>
                                        <button className="text-red-700 p-3 border border-red-700 w-50">
                                            Request Medical Report
                                        </button>
                                    </div>

                                    <div>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            onChange={(event) => {
                                                const file =
                                                    event.target.files[0];
                                                if (file) {
                                                    console.log(
                                                        "Selected file:",
                                                        file.name,
                                                    );
                                                }
                                            }}
                                            style={{ display: "none" }} // Hide input
                                        />

                                        {/* Label for the file input */}
                                        <label htmlFor="file-upload">
                                            <div className="text-white bg-red-700 p-3 border border-red-500 w-50 cursor-pointer">
                                                Update Attachment
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientAdmissionHistory;

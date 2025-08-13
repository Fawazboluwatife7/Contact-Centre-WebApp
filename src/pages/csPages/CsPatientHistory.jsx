import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import PatientInformation from "../csPages/CsPatientInformation";

import { useNavigate } from "react-router-dom";
import { PiCrossLight } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";

import { BiHome } from "react-icons/bi";
import { PiFlagBold } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";

import { FaFilePdf } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
//import { SiMicrosoftexcel } from "react-icons/si";
import { BiSolidFileImage } from "react-icons/bi";

import { BsThreeDots } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";

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
    // "Pending PA",
    "Benefits",
    "PA History",
    "Concessions",
    "Exclusions",
    "Hospital Visits",

    "Flags",
];
const headers = {
    // "Pending PA": [
    //     "Select",
    //     "Date",
    //     "Provider",
    //     "Diagnosis",
    //     "Description",
    //     "Price",

    //     "Preauth code",
    //     "Visit Type",

    //     "Status",
    // ],
    "PA History": [
        "Select",
        "Date",
        "Provider",
        "Diagnosis",
        "Description",
        "Tarriff",

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
    Benefits: ["Benefit", "Limit", "Used", "Amount claimed", "Balance"],

    Expired: [
        "#ID",
        "Name",
        "Start Date",
        "End Date",
        "Plan",
        "Issuer",
        "Status",
    ],
    Concessions: ["Date", "Concession", "FlaggedBy"],
    Exclusions: ["Approver", "Preauth code", "Reason"],
    Vaccine: ["Vaccine"],
    Flags: [],
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

const handleSelectAll = () => {
    if (!selectAll) {
        // Select all items in the Pending PA table
        setSelectedItems([...pendingPA]); // Spread the array to avoid reference issues
    } else {
        // Deselect all items
        setSelectedItems([]);
    }
    setSelectAll(!selectAll);
};

const handleCheckboxChange = (item) => {
    setSelectedItems((prev) => {
        const isSelected = prev.some(
            (selected) => selected.VisitDetailsID === item.VisitDetailsID,
        );

        if (isSelected) {
            // If already selected, remove it
            return prev.filter((i) => i.VisitDetailsID !== item.VisitDetailsID);
        } else {
            // Otherwise, add it
            return [...prev, item];
        }
    });
};

const CsPatientHistory = () => {
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
    const [selectedValue, setSelectedValue] = useState(null);
    const [dentistry, setDentistry] = useState([]);
    const [optical, setOptical] = useState([]);
    const [fertility, setFertility] = useState([]);
    const [physio, setPhysio] = useState([]);
    const [ward, setWard] = useState([]);
    const [telemedicine, setTelemedicine] = useState([]);

    const [service, setService] = useState([]);
    const [concession, setConcession] = useState([]);
    const [exclusions, setExclusion] = useState([]);
    const [annualChecks, setAnnualChecks] = useState([]);
    const [spa, GetSpar] = useState([]);
    const [gym, SetGym] = useState([]);
    const [pendingPA, setPendingPA] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const enrollee = location.state?.enrollee;

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedStatus, setSelectedStatus] = useState(null); // Status state
    const [hospital, setHospitalHistory] = useState([]); // Status state
    const [vaccine, setVaccine] = useState([]); // Status state
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

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

    const handleSelectAll = () => {
        setSelectAll(!selectAll);

        if (!selectAll) {
            // If not all selected, select all items
            setSelectedItems(pendingPA);
        } else {
            // If all selected, deselect all items
            setSelectedItems([]);
        }
    };
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

    const handleTransferClick = (enrollee, selectedItems) => {
        navigate("/paapprovalpage", { state: { enrollee, selectedItems } });
    };
    const handleTransferClickrejext = (enrollee, selectedItems) => {
        navigate("/parejectionpage", { state: { enrollee, selectedItems } });
    };

    const tabIcons = [
        // MdPendingActions,
        PiCrossLight,

        BiHome,

        PiCrossLight,

        GrNotes,
        PiFlagBold,

        IoDocumentAttachOutline,
    ];
    const [pa, SetPa] = useState([]);

    async function GetPAHistory() {
        setLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${enrollee.Member_MemberUniqueID}&PAStatus&visitid`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("pahistory", data.result);

            SetPa(data.result);
        } catch (error) {
            console.error("Error getting PA:", error);
        } finally {
            setLoading(false);
        }
    }
    async function GetPendingPA() {
        setLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=2019-12-31&Todate=2040-12-31&cifno=${enrollee.Member_MemberUniqueID}&PAStatus&visitid`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("www", data.result);

            if (data.status === 200) {
                const validStatuses = ["Authorization Pending"];

                const filteredData = data.result.filter((item) =>
                    validStatuses.includes(item.PAStatus),
                );

                const PendingPA = filteredData.filter(
                    (item) =>
                        item.PAStatus.toLowerCase() === "authorization pending",
                );

                console.log("approved", PendingPA);

                setPendingPA(PendingPA);
            } else {
                console.error(
                    "Failed to fetch data or unexpected response format.",
                );
            }
        } catch (error) {
            console.error("Error getting PA:", error);
        } finally {
            setLoading(false);
        }
    }

    async function GetHospitalHistory() {
        const hospital = `${apiUrl}api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.Member_EnrolleeID}&fromdate=2010-12-31&todate=2030-12-31&network_type=`;
        console.log("hoz", hospital);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.Member_EnrolleeID}&fromdate=2010-12-31&todate=2090-12-31&network_type=
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("AllHospital:", data);

            setHospitalHistory(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        } finally {
            setLoading(false);
        }
    }

    const fetchBenefits = () => console.log("Fetching Benefits Data...");
    const fetchConcessions = () => console.log("Fetching Concessions Data...");
    const fetchHospitals = () => console.log("Fetching Hospital List...");
    const fetchExclusions = () => console.log("Fetching Exclusions Data...");
    const fetchFlags = () => console.log("Fetching Flags Data...");
    const fetchTicketHistory = () =>
        console.log("Fetching Ticket History Data...");

    const tabActions = {
        "Pending PA": GetPendingPA,
        "PA History": GetPAHistory,
        "Hospital Visits": GetHospitalHistory,
        Benefits: GetDentistry,
        Vaccine: GetVaccine,

        Concessions: GetConcession,

        Hospitals: fetchHospitals,
        Exclusions: GetExclusions,

        Flags: fetchFlags,
        "Ticket History": fetchTicketHistory,
    };

    const [activeTab, setActiveTab] = useState(tabs[0]); // Default tab

    // Run the function whenever the tab changes
    useEffect(() => {
        tabActions[activeTab](); // Call the corresponding function
    }, [activeTab]);

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

    async function GetDentistry() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Dental?cifno=${enrollee.Member_MemberUniqueID}
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

            setDentistry(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }
    async function GetOptical() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_LensFrames?cifno=${enrollee.Member_MemberUniqueID}
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

            setOptical(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }
    async function GetFertility() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Fertility?cifno=${enrollee.Member_MemberUniqueID}
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

            setFertility(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }
    async function GetPhysiotherapy() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Physiotherapy?cifno=${enrollee.Member_MemberUniqueID}
                
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

            setPhysio(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }
    async function GetWard() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_RoomType?cifno=${enrollee.Member_MemberUniqueID}
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

            setWard(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }
    async function GetTelemedicine() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeServiceBenefitsByCif_AdminDriven?cifno=${enrollee.Member_MemberUniqueID}
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

            setTelemedicine(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    useEffect(() => {
        GetService();
        GetConcession();
        GetExclusions();
        GetTelemedicine();
        GetDentistry();
        GetOptical();
        GetFertility();
        GetPhysiotherapy();
        GetSpa();
        GetGym();
        GetPAHistory();
        GetWard();
        GetVaccine();
        GetAnnualHealthCheck();
    }, []);

    async function GetExclusions() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleePreauthorizations_exclussion?Fromdate=&Todate=&cifno=${enrollee.Member_MemberUniqueID}`,

                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("exclusions:", data);

            setExclusion(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    async function GetVaccine() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Vaccines?cifno=${enrollee.Member_MemberUniqueID}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("vaccine:", data);

            setVaccine(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    async function GetService() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetSeviceType?cif=${enrollee.Member_MemberUniqueID}&Schemeid=${enrollee.Member_PlanID}             
`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("service:", data);

            setService(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }
    async function GetVaccine() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Vaccines?cifno=${enrollee.Member_MemberUniqueID}           
`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("service:", data);

            setVaccine(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }
    async function GetAnnualHealthCheck() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_AnnualHealthChecks?cifno=${enrollee.Member_MemberUniqueID}        
`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("AnnualHealthchecks:", data);

            setAnnualChecks(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    async function GetGym() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Gym?cifno=${enrollee.Member_MemberUniqueID}        
`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("Gym:", data);

            SetGym(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }
    async function GetSpa() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitsByCif_Spa?cifno=${enrollee.Member_MemberUniqueID} 
`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("Get spa:", data);

            GetSpar(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    async function GetConcession() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeClaims/GetEnrolleeFlags?cif=${enrollee.Member_MemberUniqueID}            
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("Concession:", data);

            setConcession(data.result);
        } catch (error) {
            console.error("Error fetching concession:", error);
        } finally {
            setLoading(false);
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const sortedUniqueData = useMemo(() => {
        return [...pendingPA].sort((a, b) => {
            const dateA = new Date(a.DateIssued).getTime();
            const dateB = new Date(b.DateIssued).getTime();

            // Sort in ascending order (earliest first)
            return dateB - dateA;
        });
    }, [pendingPA]);

    const totalPages = Math.ceil(sortedUniqueData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedResults = sortedUniqueData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10;

    // const sortedUniqueData = useMemo(() => {
    //     return [...pendingPA].sort((a, b) => {
    //         const dateA = new Date(a.DateIssued).getTime();
    //         const dateB = new Date(b.DateIssued).getTime();

    //         // Sort in ascending order (earliest first)
    //         return dateB - dateA;
    //     });
    // }, [pendingPA]);

    // const totalPages = Math.ceil(sortedUniqueData.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const paginatedResults = sortedUniqueData.slice(
    //     startIndex,
    //     startIndex + itemsPerPage,
    // );

    const [currentPAHistoryPage, setCurrentPAHistoryPage] = useState(1);
    const itemsPAHistoryPerPage = 10;

    const sortedPAHistoryUniqueData = useMemo(() => {
        return [...pa].sort((a, b) => {
            const dateA = new Date(a.DateIssued).getTime();
            const dateB = new Date(b.DateIssued).getTime();

            // Sort in ascending order (earliest first)
            return dateB - dateA;
        });
    }, [pa]);

    const totalPAHistoryPages = Math.ceil(
        sortedPAHistoryUniqueData.length / itemsPAHistoryPerPage,
    );

    console.log("mmm", totalPAHistoryPages);
    const startPAHistoryIndex =
        (currentPAHistoryPage - 1) * itemsPAHistoryPerPage;
    const paginatedPAHistoryResults = sortedPAHistoryUniqueData.slice(
        startPAHistoryIndex,
        startPAHistoryIndex + itemsPAHistoryPerPage,
    );

    const [currentProviderPage, setCurrentProviderPage] = useState(1);
    const itemsPerPages = 10;

    // const sortedProviderUniqueData = useMemo(() => {
    //     return [...hospital].sort((a, b) => {
    //         const dateA = new Date(a.ClaimLine_TreatmentDate).getTime();
    //         const dateB = new Date(b.ClaimLine_TreatmentDate).getTime();

    //         // Sort in ascending order (earliest first)
    //         return dateB - dateA;
    //     });
    // }, [pa]);

    // const totalProviderPages = Math.ceil(
    //     sortedPAHistoryUniqueData.length / itemsPAHistoryPerPage,
    // );
    // const startProvideryIndex =
    //     (currentPAHistoryPage - 1) * itemsPAHistoryPerPage;
    // const paginatedProviderResults = sortedPAHistoryUniqueData.slice(
    //     startProvideryIndex,
    //     startProvideryIndex + itemsPAHistoryPerPage,
    // );

    const uniqueProviders = Array.from(
        new Set(hospital.map((item) => item.Claim_Provider)),
    );

    const totalProviderPages = Math.ceil(
        uniqueProviders.length / itemsPerPages,
    );

    const paginatedProviders = uniqueProviders.slice(
        (currentProviderPage - 1) * itemsPerPages,
        currentProviderPage * itemsPerPages,
    );

    return (
        <div className=" flex">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Header />
                <div className="mx-3 mt-3">
                    <div className=" flex justify-between">
                        <span className="text-xl  text-[2.2rem] font-medium">
                            {enrollee?.Member_CustomerName} - Enrollee #
                            {enrollee?.Member_EnrolleeID}
                        </span>
                        {/* <div className=" flex gap-3">
                            <button
                                className="flex items-center justify-center gap-2 bg-[#C61531] py-2 px-4 rounded-md text-white"
                                onClick={() =>
                                    handleNavigate("/createpaenrolleesearch")
                                }
                            >
                                <HiOutlinePlus className=" text-white" />
                                Generate new PA
                            </button>
                        </div> */}
                    </div>
                    <PatientInformation
                        selectedStatus={selectedStatus}
                        enrollee={enrollee}
                    />

                    <div className="mt-5 bg-white h-[20rem] py-1 rounded-md">
                        <div className="grid grid-cols-7 gap-2 mb-4 border-b px-4 pt-2">
                            {tabs?.map((tab, index) => (
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
                                <tr className="bg-gray-50 overflow-x-scroll">
                                    {headers[activeTab]?.map(
                                        (header, index) => (
                                            <th
                                                key={index}
                                                className="border px-4 py-2 text-left"
                                            >
                                                {activeTab === "Pending PA" &&
                                                "PA History" &&
                                                index === 0 ? (
                                                    <input
                                                        type="checkbox"
                                                        checked={selectAll}
                                                        onChange={
                                                            handleSelectAll
                                                        }
                                                        className="h-4 w-4"
                                                    />
                                                ) : (
                                                    header
                                                )}
                                            </th>
                                        ),
                                    )}
                                </tr>

                                {/* <tbody>
                                    {activeTab === "Pending PA" && (
                                        <>
                                            {loading ? (
                                                <tr>
                                                    <td
                                                        className="h-64 text-center"
                                                        colSpan="9"
                                                    >
                                                        Fetching Data Please
                                                        Wait...
                                                    </td>
                                                </tr>
                                            ) : pendingPA.length > 0 ? (
                                                paginatedResults.map(
                                                    (item, index) => {
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
                                                                        checked={
                                                                            isSelected
                                                                        }
                                                                        onChange={() =>
                                                                            handleCheckboxChange(
                                                                                item,
                                                                            )
                                                                        }
                                                                    />
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {formatISOToCustom(
                                                                        item.DateIssued,
                                                                    )}
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {
                                                                        item.provider
                                                                    }
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {item.diagcode
                                                                        ?.split(
                                                                            ",",
                                                                        )[0]
                                                                        ?.split(
                                                                            " ",
                                                                        )
                                                                        .slice(
                                                                            1,
                                                                        )
                                                                        .join(
                                                                            " ",
                                                                        ) ||
                                                                        "N/A"}
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {
                                                                        item.ProcedureDescription
                                                                    }
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {item.chargeamount
                                                                        ? `#${item.chargeamount}`
                                                                        : "#N/A"}
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {item.PACode ||
                                                                        "N/A"}
                                                                </td>
                                                                <td className="border px-4 py-2">
                                                                    {
                                                                        item.visitType
                                                                    }
                                                                </td>
                                                                <td className="border px-4 py-2 text-orange-500">
                                                                    {
                                                                        item.PAStatus
                                                                    }
                                                                </td>
                                                            </tr>
                                                        );
                                                    },
                                                )
                                            ) : (
                                                <tr>
                                                    <td
                                                        className="h-64 text-center"
                                                        colSpan="9"
                                                    >
                                                        No Record Found
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    )}
                                </tbody> */}

                                {activeTab === "PA History" && (
                                    <>
                                        {loading ? (
                                            <tr>
                                                <td
                                                    className="h-64 text-center"
                                                    colSpan="8"
                                                >
                                                    <h1 className="py-5 px-20">
                                                        Fetching Data Please
                                                        Wait...
                                                    </h1>
                                                </td>
                                            </tr>
                                        ) : pa.length > 0 ? (
                                            paginatedPAHistoryResults.map(
                                                (item, index) => {
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
                                                                    checked={
                                                                        isSelected
                                                                    }
                                                                    onChange={() =>
                                                                        handleCheckboxChange(
                                                                            item,
                                                                        )
                                                                    }
                                                                />
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {formatISOToCustom(
                                                                    item.DateIssued,
                                                                )}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {item.provider}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {item.diagcode
                                                                    ?.split(
                                                                        ",",
                                                                    )[0]
                                                                    ?.split(" ")
                                                                    .slice(1)
                                                                    .join(
                                                                        " ",
                                                                    ) || "N/A"}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {
                                                                    item.ProcedureDescription
                                                                }
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                #
                                                                {item.chargeamount !==
                                                                    undefined &&
                                                                item.chargeamount !==
                                                                    null
                                                                    ? item.chargeamount.toLocaleString(
                                                                          "en-US",
                                                                      )
                                                                    : "N/A"}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {item.PACode}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {item.visitType}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {item.PAStatus}
                                                            </td>
                                                        </tr>
                                                    );
                                                },
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    className="h-64 text-center"
                                                    colSpan="8"
                                                >
                                                    <h1 className="py-5 px-20 ">
                                                        No Record Found
                                                    </h1>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )}
                                {activeTab === "Hospital Visits" && (
                                    <>
                                        {loading ? (
                                            <tr>
                                                <td
                                                    className="h-64 text-center"
                                                    colSpan="2"
                                                >
                                                    <h1 className="py-5 px-20">
                                                        Fetching Data...
                                                    </h1>
                                                </td>
                                            </tr>
                                        ) : hospital.length > 0 ? (
                                            paginatedProviders.map(
                                                (uniqueProvider) => {
                                                    const item = hospital.find(
                                                        (h) =>
                                                            h.Claim_Provider ===
                                                            uniqueProvider,
                                                    );
                                                    if (!item) return null;

                                                    return (
                                                        <tr
                                                            key={uniqueProvider}
                                                            className="hover:bg-gray-100"
                                                        >
                                                            <td className="border px-4 py-2">
                                                                {new Date(
                                                                    item.ClaimLine_TreatmentDate,
                                                                ).toLocaleDateString(
                                                                    "en-GB",
                                                                )}
                                                            </td>
                                                            <td className="border px-4 py-2">
                                                                {
                                                                    item.Claim_Provider
                                                                }
                                                            </td>
                                                        </tr>
                                                    );
                                                },
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    className="text-center py-5 px-20"
                                                >
                                                    <h1>No Record Found</h1>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )}

                                {activeTab === "Benefits" && (
                                    <>
                                        {telemedicine &&
                                        telemedicine.length > 0 ? (
                                            telemedicine
                                                .filter(
                                                    (item) =>
                                                        item.Benefit ===
                                                        "Telemedicine",
                                                ) // Filter for Telemedicine
                                                .map((item, index) => (
                                                    <tr
                                                        key={index}
                                                        className="hover:bg-gray-100"
                                                    >
                                                        <td className="border px-4 py-2">
                                                            {item.Benefit}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {item.Limit}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {item.Used}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {item.AmtClaimed}
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {item.Balance}
                                                        </td>
                                                    </tr>
                                                ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        Telemedicine
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium whitespace-nowrap">
                                                            No Telemedicine
                                                            Record Found
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                        {dentistry && dentistry.length > 0 ? (
                                            dentistry.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        Dentistry
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium">
                                                            No Dentistry Record
                                                            Found
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                        {optical && optical.length > 0 ? (
                                            optical.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        Optical
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium whitespace-nowrap">
                                                            No optical Record
                                                            Found
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                        {fertility && fertility.length > 0 ? (
                                            fertility.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        Fertility
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium whitespace-nowrap">
                                                            No Fertility visit
                                                            Found
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                        {physio && physio.length > 0 ? (
                                            physio.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        Physio
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium whitespace-nowrap">
                                                            No Physio Record
                                                            Found
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}

                                        {gym && gym.length > 0 ? (
                                            gym.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        GYM Session
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium">
                                                            This enrollee is not
                                                            eligible for gym
                                                            services
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}

                                        {spa && spa.length > 0 ? (
                                            spa.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td className="border px-4 py-2">
                                                        {item.Benefit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Limit}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Used}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.AmtClaimed}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {item.Balance}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className="bg-gray-200">
                                                    <th
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center font-bold"
                                                    >
                                                        SPA Session
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 text-center"
                                                    >
                                                        <h1 className="text-gray-700 font-medium">
                                                            This enrollee is not
                                                            eligible for Spa
                                                            services
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </>
                                        )}

                                        <tr className="bg-gray-200">
                                            <th
                                                colSpan="5"
                                                className="border px-4 py-2 text-left font-bold pl-[33rem]"
                                            >
                                                Ward Type
                                            </th>
                                        </tr>

                                        {ward && ward.toString.length > 0 ? (
                                            ward.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 pl-[33rem]"
                                                    >
                                                        {item.RoomTypeCode}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5">
                                                    <h1 className="py-2 pl-[33rem]">
                                                        No Record Found
                                                    </h1>
                                                </td>
                                            </tr>
                                        )}
                                        {/* Vaccine Section (Spanning Entire Table) */}
                                        <tr className="bg-gray-200">
                                            <th
                                                colSpan="5"
                                                className="border px-4 py-2 text-left font-bold pl-[34rem]"
                                            >
                                                Vaccine
                                            </th>
                                        </tr>

                                        {vaccine &&
                                        vaccine.toString.length > 0 ? (
                                            vaccine.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2"
                                                    >
                                                        {item.vaccine}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5">
                                                    <h1 className="py-2 pl-[33rem]">
                                                        No Record Found
                                                    </h1>
                                                </td>
                                            </tr>
                                        )}

                                        <tr className="bg-gray-200">
                                            <th
                                                colSpan="5"
                                                className="border px-4 py-2 text-left font-bold pl-[32rem]"
                                            >
                                                Annual Health Checks
                                            </th>
                                        </tr>

                                        {annualChecks &&
                                        annualChecks.toString.length > 0 ? (
                                            annualChecks.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-100"
                                                >
                                                    <td
                                                        colSpan="5"
                                                        className="border px-4 py-2 pl-[34.5rem]"
                                                    >
                                                        {
                                                            item.AnnualHealthChecks
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5">
                                                    <h1 className="p2-5 px-20 pl-[33rem]">
                                                        No Record Found
                                                    </h1>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                )}

                                {activeTab === "Concessions" &&
                                    (concession && concession.length > 0 ? (
                                        concession.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {formatISOToCustom(
                                                        item.FlaggedOn,
                                                    )}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.FlagDescription}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.FlaggedByUsername}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5">
                                                <h1 className="py-2 pl-[25rem]">
                                                    No Record Found
                                                </h1>
                                            </td>
                                        </tr>
                                    ))}

                                {/* {activeTab === "Hospital" &&
                                        exclusions.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.vv}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.vv}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.vv}
                                                </td>
                                            </tr>
                                        ))} */}

                                {activeTab === "Exclusions" &&
                                    (exclusions && exclusions.length > 0 ? (
                                        exclusions.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border px-4 py-2">
                                                    {item.issuedBy}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.PAcode}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.ExclusionReason}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5">
                                                <h1 className="py-2 pl-[30rem]">
                                                    No Record Found
                                                </h1>
                                            </td>
                                        </tr>
                                    ))}
                                {activeTab === "Flags" && (
                                    <div className="mt-4">
                                        <div>
                                            <div className=" flex justify-between pl-4">
                                                <h2 className=" font-bold text-[20px]">
                                                    Flags
                                                </h2>
                                                <div className="flex justify-end space-x-2 mb-4">
                                                    <button className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition">
                                                        <i className="fas fa-file-alt"></i>
                                                        <span>Benefit</span>
                                                    </button>

                                                    <button className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition">
                                                        <i className="fas fa-print"></i>
                                                        <span>Print</span>
                                                    </button>

                                                    <button className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition">
                                                        <i className="fas fa-download"></i>
                                                        <span>Export</span>
                                                    </button>

                                                    <button className="flex items-center space-x-2 border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition">
                                                        <i className="fas fa-edit"></i>
                                                        <span>Edit Info</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className=" flex">
                                                <div className=" pl-4">
                                                    <h1>Date From</h1>
                                                    <input
                                                        type="date"
                                                        className=" border border-gray-300 mb-2  rounded-md w-[10rem] py-1"
                                                    />
                                                </div>
                                                <div className=" pl-4">
                                                    <h1>Date To</h1>
                                                    <input
                                                        type="date"
                                                        className=" border border-gray-300 mb-2  rounded-md w-[10rem] py-1"
                                                    />
                                                </div>
                                                <div className=" pl-4">
                                                    <h1>Is Concession</h1>
                                                    <input
                                                        type="checkbox"
                                                        className=" w-4 h-4"
                                                    />
                                                </div>
                                            </div>

                                            <div className=" mx-4">
                                                <h2>Reason</h2>
                                                <textarea
                                                    className="border border-gray-300 rounded-md w-full h-32 p-2 outline-none"
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* {activeTab === "Ticket History" &&
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
                                        ))} */}
                                {activeTab === "Ticket History" &&
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
                                                ) : item.type === "excel" ? (
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
                            {/* {activeTab === "Pending PA" &&
                                sortedUniqueData.length > itemsPerPage && (
                                    <div className="flex justify-center mt-3 items-center gap-4">
                                        <button
                                            className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                            disabled={currentPage === 1}
                                            onClick={() =>
                                                setCurrentPage((prev) =>
                                                    Math.max(prev - 1, 1),
                                                )
                                            }
                                        >
                                            Previous
                                        </button>

                                        <span className="text-gray-700 text-lg font-semibold">
                                            Page {currentPage} of {totalPages}{" "}
                                            Pages
                                        </span>

                                        <button
                                            className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                            disabled={currentPage >= totalPages}
                                            onClick={() =>
                                                setCurrentPage(
                                                    (prev) => prev + 1,
                                                )
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                )} */}
                            {activeTab === "PA History" &&
                                sortedPAHistoryUniqueData.length >
                                    itemsPAHistoryPerPage && (
                                    <div className="flex justify-center mt-3 items-center gap-4">
                                        <button
                                            className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                            disabled={
                                                currentPAHistoryPage === 1
                                            }
                                            onClick={() =>
                                                setCurrentPAHistoryPage(
                                                    (prev) =>
                                                        Math.max(prev - 1, 1),
                                                )
                                            }
                                        >
                                            Previous
                                        </button>

                                        <span className="text-gray-700 text-lg font-semibold">
                                            Page {currentPAHistoryPage} of{" "}
                                            {totalPAHistoryPages} Pages
                                        </span>

                                        <button
                                            className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                            disabled={
                                                currentPAHistoryPage >=
                                                totalPAHistoryPages
                                            }
                                            onClick={() =>
                                                setCurrentPAHistoryPage(
                                                    (prev) => prev + 1,
                                                )
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            {activeTab === "Hospital Visits" &&
                                totalProviderPages > 1 && (
                                    <div className="flex justify-center mt-3 items-center gap-4">
                                        <button
                                            className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-md"
                                            disabled={currentProviderPage === 1}
                                            onClick={() =>
                                                setCurrentProviderPage((prev) =>
                                                    Math.max(prev - 1, 1),
                                                )
                                            }
                                        >
                                            Previous
                                        </button>

                                        <span className="text-gray-700 text-lg font-semibold">
                                            Page {currentProviderPage} of{" "}
                                            {totalProviderPages}
                                        </span>

                                        <button
                                            className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-md"
                                            disabled={
                                                currentProviderPage ===
                                                totalProviderPages
                                            }
                                            onClick={() =>
                                                setCurrentProviderPage(
                                                    (prev) => prev + 1,
                                                )
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}

                            {selectedItems.length > 0 && (
                                <div className="mt-4 flex justify-between items-center w-full">
                                    <button
                                        onClick={() =>
                                            handleTransferClickrejext(
                                                enrollee,
                                                selectedItems,
                                            )
                                        }
                                        className="bg-red-500 text-white px-9 py-3 mb-2 rounded-md hover:bg-red-700 whitespace-nowrap mx-2"
                                    >
                                        Reject PA
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleTransferClick(
                                                enrollee,
                                                selectedItems,
                                            )
                                        }
                                        className="bg-white text-red-500 px-9 py-3 mb-2 border border-red-500 rounded-md whitespace-nowrap mx-2"
                                    >
                                        Authorize PA
                                    </button>
                                </div>
                            )}

                            {/* {activeTab === "Pending PA" &&
                                selectedItems.length > 0 && (
                                    <div className="mt-4 flex justify-between items-center w-full">
                                        <button
                                            onClick={() =>
                                                handleTransferClickrejext(
                                                    enrollee,
                                                    selectedItems,
                                                )
                                            }
                                            className="bg-red-500 text-white px-9 py-3 mb-2 rounded-md hover:bg-red-700 whitespace-nowrap mx-2"
                                        >
                                            Reject PA
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleTransferClick(
                                                    enrollee,
                                                    selectedItems,
                                                )
                                            }
                                            className="bg-white text-red-500 px-9 py-3 mb-2 border border-red-500 rounded-md whitespace-nowrap mx-2"
                                        >
                                            Authorize PA
                                        </button>
                                    </div>
                                )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CsPatientHistory;

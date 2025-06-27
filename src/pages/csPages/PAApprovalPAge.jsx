import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../components/cs/csSideBar";
import Navbar from "../../components/cs/Header";

import { useNavigate } from "react-router-dom";
import CustomerModal from "../csPages/CSPatientModal";

import ApiResponseModal from "../csPages/ApiResponseModal";
import { FaSpinner } from "react-icons/fa";

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

const PAApprovalPAge = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };
    const [submitLoader, setSubmitLoader] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [service, setService] = useState([]);
    const [concession, setConcession] = useState([]);
    const [activeTab, setActiveTab] = useState("Requests");
    const [pa, setPA] = useState([]);
    const [hospitalHistory, setHospitalHistory] = useState([]);
    const [enronlleBioData, setEnronlleBioData] = useState([]);
    const [totalAmounts, setTotalAmounts] = useState(0);

    const user = JSON.parse(localStorage.getItem("user"));

    const [selectedStatus, setSelectedStatus] = useState(null);
    const [visitTypes, setVisitTypes] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHospitalItem, setSelectedHospitalItem] = useState(null);
    const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);
    const [apiResponse, setApiResponse] = useState([]);
    const [visitdetailId, setVisitdetailId] = useState(null);

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
    const { enrollee, selectedItems } = location.state || {
        enrollee: {},
        selectedItems: [],
    };

    useEffect(() => {
        const newTotalAmount = Array.isArray(selectedItems)
            ? selectedItems.reduce(
                  (sum, item) => sum + (Number(item.chargeamount) || 0),
                  0,
              )
            : 0;

        setTotalAmounts(newTotalAmount);
    }, [selectedItems]);

    const closeHospitalModal = () => {
        setSelectedHospitalItem(null); // Clear the selected item
        setIsHospitalModalOpen(false); // Hide the modal
    };

    const handleSubmit = async () => {
        setSubmitLoader(true);
        const responses = [];

        for (const item of selectedItems) {
            const requestData = {
                visitid: item.VisitID1,
                username: user.result[0].UserName,
                VisitDetailIDs: [{ visitdetail_id: item.VisitDetailsID }],
            };

            console.log("Sent Data:", JSON.stringify(requestData, null, 2));

            try {
                const response = await fetch(
                    `${apiUrl}api/ProviderNetwork/approvePreauthorization`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(requestData),
                    },
                );

                const data = await response.json();
                console.log("Response:", data);

                responses.push({
                    visitdetail_id: item.VisitDetailsID,
                    status: data.status,
                    message: data.message,
                    pacode: data.pacode,
                });
            } catch (error) {
                console.error("Error submitting data:", error);
                responses.push({
                    visitdetail_id: item.VisitDetailsID,
                    status: "Error",
                    message: "Network error occurred",
                });
            }
        }
        setSubmitLoader(false);
        setApiResponse([...responses]); // Ensure response is always an array
        setIsModalOpen(true);
    };

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

    useEffect(() => {
        GetPAHistory();
        GetEnrolleeBiodata();
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

            setHospitalHistory(data.result);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

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

            setBenefit(data.result);
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
                <div className="mx-7 mt-10">
                    <CustomerModal
                        selectedStatus={selectedStatus}
                        enrollee={enrollee}
                    />
                    <h1 className=" pt-3 font-bold text-red-500">
                        PA Generation Review
                    </h1>
                    <table className="table-auto w-full  mt-4">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 bg-white">
                                {/* Table Head */}
                                <thead className="border px-4 py-2 text-left">
                                    <tr>
                                        <th className="border p-2"></th>
                                        <th className="border p-2">
                                            Diagnosis Description
                                        </th>

                                        <th className="border p-2">Amount</th>
                                        <th className="border p-2">
                                            Procedure Description
                                        </th>
                                        <th className="border p-2">Provider</th>
                                        <th className="border p-2 whitespace-nowrap">
                                            Visit Detail Id
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {selectedItems.length > 0 ? (
                                        selectedItems.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-100"
                                            >
                                                <td className="border p-2 text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="border p-2">
                                                    {item.diagcode
                                                        ?.split(",")[0]
                                                        ?.split(" ")
                                                        .slice(1)
                                                        .join(" ") || "N/A"}
                                                </td>
                                                <td className="border p-2">
                                                    {item.chargeamount}
                                                </td>
                                                <td className="border p-2">
                                                    {item.ProcedureDescription}
                                                </td>
                                                <td className="border p-2">
                                                    {item.provider}
                                                </td>
                                                <td className="border p-2">
                                                    {item.VisitDetailsID}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="9"
                                                className="border p-4 text-center text-gray-500"
                                            >
                                                No selected items
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>{" "}
                    </table>

                    <h1 className=" text-red-500 mt-5 text-[30px]">
                        Total cost
                    </h1>
                    <h1 className=" text-[30px]">#{totalAmounts}</h1>

                    {selectedItems.length > 0 && (
                        <div className="mt-4 flex justify-between items-center w-full">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-white text-red-500 px-9 py-2 border border-red-500 rounded-md whitespace-nowrap mx-2"
                            >
                                Cancel
                            </button>

                            <div>
                                {submitLoader ? (
                                    <button
                                        disabled
                                        className="flex items-center gap-2 whitespace-nowrap h-11 px-5 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                    >
                                        Submitting..
                                        <FaSpinner className="animate-spin text-xl" />
                                    </button>
                                ) : (
                                    <button
                                        className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                            <ApiResponseModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                response={apiResponse}
                                visitdetailId={visitdetailId}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PAApprovalPAge;

import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";

import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import search from "../../assets/csImages/Search.svg";
import plusiconred from "../../assets/csImages/Group 2356.svg";
import { useLocation } from "react-router-dom";
import { Search } from "@mui/icons-material";

const CreateEnroleePACode = () => {
    const [enrolleeData, setEnrolleeData] = useState(null);
    const [service, setService] = useState([]);
    const [provider, setAllProvider] = useState([]);
    const [benefit, setBenefit] = useState([]);
    const [diagnosisData, setDiagnosisData] = useState([]); // Store API data
    const [searchTerm, setSearchTerm] = useState(""); // Track user input
    const [filteredResults, setFilteredResults] = useState([]); // Filtered options
    const [selectedDiagnosis, setSelectedDiagnosis] = useState(null); // Store selected item

    const fetchDiagnosisData = async () => {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetAllDiagnosis`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setDiagnosisData(data);
            localStorage.setItem("diagnosisData", JSON.stringify(data)); // Cache in local storage
        } catch (error) {
            console.error("Error fetching diagnosis data:", error);
        }
    };

    // Load API data (Check cache first)
    useEffect(() => {
        const cachedData = localStorage.getItem("diagnosisData");
        if (cachedData) {
            setDiagnosisData(JSON.parse(cachedData)); // Load from cache
        } else {
            fetchDiagnosisData(); // Fetch if not cached
        }
    }, []);

    // Filter diagnosis list based on input
    useEffect(() => {
        if (searchTerm) {
            const results = diagnosisData.filter((item) =>
                item.Value.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    }, [searchTerm, diagnosisData]);

    // Handle selection of diagnosis
    const handleSelect = (diagnosis) => {
        setSelectedDiagnosis(diagnosis);
        setSearchTerm(diagnosis.Value); // Fill input with selected value
        setFilteredResults([]); // Hide suggestions
    };

    const [selectedVisitType, setSelectedVisitType] = useState({
        value: "",
        label: "",
    });
    const [selectedProvider, setProvider] = useState({
        value: "",
        label: "",
    });
    const [selectedBenefit, setSelectedBenefit] = useState({
        value: "",
        label: "",
    });

    const [SelectedBenefit, setSelectedBeenefitType] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);

    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const postData = {
            CifNumber: enrollee.Member_MemberUniqueID,
            EnrolleeID: enrollee.Member_EnrolleeID,
            RequestingProviderCode: selectedProvider?.value, // Ensure optional chaining
            UserID: user.result[0].UserName,
            UserName: user.result[0].UserName,
            Source: "Leadway Contact Centre",
            mobilephone: enrollee.Member_Phone_One,
            VisitType: selectedVisitType?.label || "", // Use label safely
        };

        console.log("getvisitID:", JSON.stringify(postData, null, 2));
        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/Verify_Enrollee`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // Ensure proper content type
                    },
                    body: JSON.stringify(postData), // Convert object to JSON
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const handleNavigate = (enrollee) => {
        navigate("/csenrolleeprofileupdate", { state: { enrollee } });
    };
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const location = useLocation();
    const enrollee = location.state?.enrollee;
    const [dropdownStates, setDropdownStates] = useState({
        visitType: false,
        benefits: false,
    });
    const [selectedItems, setSelectedItems] = useState({
        visitType: "",
        benefits: "",
    });
    const dropdownItemsVisitType = [
        "Visit Type 1",
        "Visit Type 2",
        "Visit Type 3",
    ];

    const [claimsPaid, setClaimsPaid] = useState("");

    function DateDropdown({
        options,
        selectedValue,
        sendSelection,
        className,
    }) {
        const handleChange = (event) => {
            const value = event.target.value;
            const selectedOption = options.find(
                (option) => option.value === value,
            );

            // Send both value and label
            if (selectedOption) {
                sendSelection(selectedOption);
            }
        };

        return (
            <select
                value={selectedValue?.value || ""} // Ensure it doesn't break if null
                onChange={handleChange}
                className={`border border-gray-300 rounded p-2 ${className}`}
            >
                <option value="" disabled>
                    Select Type
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }

    console.log(
        "getBenefits",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}`,
            {
                method: "GET",
            },
        ),
    );

    async function GetBenefit() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("getBebefit", data.result);
            setBenefit(data.result);
        } catch (error) {
            console.error("Error getting benefits", error);
        }
    }
    async function GetDiagnosis() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetAllDiagnosis`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("getdiagnosis", data.result);
            setDiagnosis(data.result);
        } catch (error) {
            console.error("Error getting benefits", error);
        }
    }
    async function CalculateAllAmountSpentOnEnrollee() {
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.Member_EnrolleeID}&fromdate=2010-12-31&todate=2025-12-31&network_type=`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.result && Array.isArray(data.result)) {
                // Filter claims with `ClaimLine_AmtPaid` greater than 0
                const allClaimsPaid = data.result.filter(
                    (item) => item.ClaimLine_AmtPaid,
                );

                // Sum up all the amounts paid
                const getAllClaimsPaid = allClaimsPaid.reduce(
                    (sum, item) => sum + (item.ClaimLine_AmtPaid || 0),
                    0, // Initial value for `reduce`
                );

                const nuber = allClaimsPaid.length;

                console.log("All Claims Paid:", getAllClaimsPaid);

                setClaimsPaid(getAllClaimsPaid.toLocaleString("en-US"));
            } else {
                console.warn("No claims data found in the response.");
            }
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
    async function GetProvider() {
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetProviders             
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("providers:", data.result);

            setAllProvider(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    useEffect(() => {
        CalculateAllAmountSpentOnEnrollee();
        GetService();
        GetProvider();
        GetDiagnosis();
    }, []);

    useEffect(() => {
        if (selectedVisitType?.value) {
            GetBenefit();
        }
    }, [selectedVisitType?.value]);
    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full">
                <Navbar />
                <div className="bg-lightblue  w-full p-3">
                    <div className="">
                        <div className=" flex justify-between">
                            <h3 className="font-bold text-[23px] font-sans ml-1 mt-1">
                                Generate PA Code
                            </h3>
                            <div className=" flex gap-3 ">
                                <Link to="/generatePaCode">
                                    <button className="flex items-center">
                                        <img
                                            src={backIcon}
                                            alt="Back Icon"
                                            className="w-6 h-6"
                                        />
                                    </button>
                                </Link>

                                <h4
                                    className="text-[#C61531] font-normal text-[16px] text-left cursor-pointer"
                                    onClick={() => navigate(-1)}
                                >
                                    Back to enrollee Search
                                </h4>
                            </div>
                        </div>

                        <div className=" rounded-md bg-white">
                            <h1 className=" font-bold bg-white pl-5 py-3 text-[20px] text-gray-500 rounded-md">
                                Enrollee Information
                            </h1>
                            <div className="flex gap-6  w-full ">
                                {/* Profile Image */}
                                <div className="flex flex-col items-center ml-6">
                                    <img
                                        src="Avataraang.svg"
                                        alt="Avatar"
                                        className="w-20 h-20 rounded-full"
                                    />
                                    <div className=" items-center mt-2 rounded-full flex gap-2">
                                        <span className=" h-2 w-2 rounded-full bg-green-600 flex"></span>
                                        Active
                                    </div>
                                </div>

                                <div className=" w-full">
                                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4  ">
                                        <div>
                                            <span className="block text-gray-500">
                                                Name
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Member_CustomerName}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Date of Birth
                                            </span>
                                            <span className="block font-medium">
                                                {
                                                    new Date(
                                                        enrollee.Member_DateOfBirth,
                                                    )
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Enrollee ID
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Member_EnrolleeID}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Phone Number
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Member_Phone_One}
                                                {enrollee.Member_Phone_Two}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Group
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Client_ClientName}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-gray-500">
                                                Email Address
                                            </span>
                                            <span className="block font-medium break-words">
                                                {enrollee.Client_EmailAddress}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Scheme
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.client_schemename}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-gray-500">
                                                Age
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Member_Age}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Member Type
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Member_Membertype}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Policy Date
                                            </span>
                                            <span className="block font-medium">
                                                {
                                                    new Date(
                                                        enrollee.Client_DateAccepted,
                                                    ).toLocaleDateString(
                                                        "en-GB",
                                                    ) // Formats the date as day/month/year
                                                }
                                                -
                                                {
                                                    new Date(
                                                        enrollee.Client_Expiry_date,
                                                    ).toLocaleDateString(
                                                        "en-GB",
                                                    ) // Formats the date as day/month/year
                                                }
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Amount Spent
                                            </span>
                                            <span className="block font-medium">
                                                #{claimsPaid}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Next of Kin
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Client_ContactPerson}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                NOK Phone Number
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee.Client_ContactPhone1}
                                            </span>
                                        </div>

                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>

                                        <button
                                            className=" text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md flex gap-3 px-3 py-2 justify-items-end items-end mb-3 "
                                            onClick={() =>
                                                handleNavigate(enrollee)
                                            }
                                        >
                                            <img
                                                src="handpen.svg"
                                                alt=""
                                                className=" h-7"
                                            />
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" bg-white p-3 shadow-md rounded-lg mt-3 w-full">
                        <div className=" flex justify-between">
                            <h2 className="ml-6 text-[22px] text-red-700 font-bold mb-6">
                                Procedure Information
                            </h2>

                            <button
                                className=" whitespace-nowrap h-11 px-9 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                onClick={handleSubmit}
                            >
                                Get Visit Id
                            </button>
                        </div>

                        {/* First Row of Input Divs */}
                        <div className="flex ml-6 space-x-4">
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Visit Type
                                </label>
                                <DateDropdown
                                    options={service.map((type) => ({
                                        label: type.visittype,
                                        value: type.servtype_id.toString(),
                                    }))}
                                    selectedValue={selectedVisitType}
                                    sendSelection={(selectedOption) =>
                                        setSelectedVisitType(selectedOption)
                                    }
                                    className="relative w-full h-[44px] rounded-lg outline-none"
                                />
                            </div>

                            {/* Date Picker */}
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Encounter Start Date
                                </label>
                                <div className="relative w-full h-[44px] border border-black rounded-lg">
                                    <input
                                        type="date"
                                        className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="relative w-[320px] ">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Benefits
                                </label>
                                <DateDropdown
                                    options={benefit.map((type) => ({
                                        label: type.Benefit,
                                        value: type.Benefit,
                                    }))}
                                    selectedValue={selectedBenefit}
                                    sendSelection={(selectedOption) =>
                                        setSelectedBenefit(selectedOption)
                                    }
                                    className="relative w-full h-[44px] rounded-lg outline-none"
                                />
                            </div>
                        </div>
                        {/* Second Row of Input Divs */}
                        <div className="flex ml-6 space-x-4 mt-4">
                            {/* Requesting Provider Dropdown */}
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Requesting Provider
                                </label>

                                <DateDropdown
                                    options={provider.map((type) => ({
                                        label: type.FullName,
                                        value: type.ProviderCode.toString(),
                                    }))}
                                    selectedValue={selectedProvider}
                                    sendSelection={(selectedOption) =>
                                        setProvider(selectedOption)
                                    }
                                    className="relative w-full h-[44px] rounded-lg outline-none"
                                />
                            </div>

                            {/* Provider Email Input */}
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Provider Email
                                </label>
                                <div className="relative w-full h-[44px] border border-black rounded-lg">
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* <div className="relative w-[320px]">
                                
                                <DateDropdown
                                    options={provider.map((type) => ({
                                        label: type.FullName, // Display text in the dropdown
                                        value: type.visittype, // Value to be sent
                                    }))}
                                    sendNumber={(value) => {
                                        setSelectedValue(value); // Update selected value
                                    }}
                                    className="relative w-full h-[44px] outline-none rounded-lg"
                                    placeholder="Please select referral provider "
                                />
                            </div> */}
                        </div>

                        <div className="ml-6 mt-6 mb-6">
                            <h3 className="text-[23px] text-red-700 mt-6 font-bold">
                                Services
                            </h3>

                            <h3 className="text-gray-700 flex items-center">
                                Diagnosis
                                <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                            </h3>

                            <div className="flex space-x-4 mt-4">
                                <div className="flex flex-col mr-10">
                                    <label
                                        htmlFor="diagnosis-code"
                                        className="font-semibold"
                                    >
                                        Diagnosis Code
                                    </label>
                                    <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                        <img
                                            src={Search}
                                            alt="Search Icon"
                                            className="h-6 w-6 absolute left-2"
                                        />
                                        <input
                                            type="text"
                                            id="diagnosis-code"
                                            placeholder="Enter diag code"
                                            className="w-full h-full outline-none border-none pl-2"
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="diagnostic-description"
                                        className="font-semibold"
                                    >
                                        Diagnostic Description
                                    </label>
                                    <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                        <input
                                            type="text"
                                            id="diagnostic-description"
                                            placeholder="Enter description"
                                            className="w-full h-full outline-none border-none px-2"
                                            value={
                                                selectedDiagnosis
                                                    ? selectedDiagnosis.Text
                                                    : ""
                                            }
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex ml-6 justify-end">
                            {" "}
                            <img
                                src={plusiconred}
                                alt=""
                                className="mr-2"
                            />{" "}
                            Add Another Dianosis
                        </div>

                        <div className="ml-6 mt-6 mb-6">
                            <h3 className="text-[23px] text-red-700 mt-6 font-bold">
                                Services
                            </h3>

                            <h3 className="text-gray-700 flex items-center">
                                Procedure
                                <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                            </h3>

                            <div className="flex space-x-4 mt-4">
                                <div className="flex flex-col mr-10">
                                    <label
                                        htmlFor="diagnosis-code"
                                        className="font-semibold"
                                    >
                                        Diagnosis Code
                                    </label>
                                    <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                        <img
                                            src={search}
                                            alt="Search Icon"
                                            className="h-6 w-6 absolute left-2"
                                        />
                                        <input
                                            type="text"
                                            id="diagnosis-code"
                                            placeholder="Enter diag code"
                                            className="w-full h-full outline-none border-none pl-10"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mr-10">
                                    <label
                                        htmlFor="diagnosis-code"
                                        className="font-semibold"
                                    >
                                        Price
                                    </label>
                                    <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                        <input
                                            type="text"
                                            id="diagnosis-code"
                                            placeholder="Enter Price"
                                            className="w-full h-full outline-none border-none pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor="diagnostic-description"
                                        className="font-semibold"
                                    >
                                        Procedure Description
                                    </label>
                                    <div className="w-[502px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                        <input
                                            type="text"
                                            id="diagnostic-description"
                                            placeholder="Enter description"
                                            className="w-full h-full outline-none border-none px-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex ml-6 justify-end">
                            {" "}
                            <img
                                src={plusiconred}
                                alt=""
                                className="mr-2"
                            />{" "}
                            Add Another Procedure
                        </div>

                        <div className="ml-6">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="escalation-checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4"
                                />
                                <div>Escalation</div>
                            </div>

                            {isChecked && (
                                <div className="flex flex-col mt-4">
                                    <label
                                        htmlFor="diagnostic-description"
                                        className="font-semibold"
                                    >
                                        Exclusion Reason
                                    </label>
                                    <div className="w-[1060px] h-[44px] border-2 border-black rounded-md flex items-center px-2 mt-2">
                                        <input
                                            type="text"
                                            id="diagnostic-description"
                                            placeholder="Enter Exclusion Reason"
                                            className="w-full h-full outline-none border-none px-2"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="ml-6 mt-10">
                            <h3 className="text-gray-700 flex items-center">
                                Notes
                                <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                            </h3>
                            <div className="flex flex-col mt-4">
                                <div className="w-[1060px] h-[167px] border-2 border-black rounded-md mt-2">
                                    <textarea
                                        id="diagnostic-description"
                                        placeholder="Enter Text"
                                        className="w-full h-full outline-none border-none px-2 pt-4 resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <div>
                                <button
                                    className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md"
                                    onClick={() =>
                                        navigate("/enrolleeInformations")
                                    }
                                >
                                    Back
                                </button>
                            </div>
                            <div>
                                <button
                                    className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                                    onClick={() => navigate("/approvePaCode")}
                                >
                                    Proceed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEnroleePACode;

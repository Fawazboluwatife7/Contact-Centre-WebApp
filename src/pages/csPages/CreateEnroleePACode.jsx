import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import CreatePAModal from "./CreatePAModal";

const CreateEnroleePACode = () => {
    const [service, setService] = useState([]);
    const [provider, setAllProvider] = useState([]);
    const [benefit, setBenefit] = useState([]);
    const [alldiagnosis, SetAllDiagnosis] = useState([]);
    const [apiResponse, setApiResponse] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [diagnosisData, setDiagnosisData] = useState([]); // Store API data
    const [diagnosisDataa, setDiagnosisDataa] = useState([]); // Store API data
    const [searchTerm, setSearchTerm] = useState(""); // Track user input
    const [filteredResults, setFilteredResults] = useState([]); // Filtered options

    const [selectedProviders, setSelectedProvider] = useState({
        provider_id: null,
    });
    const [data, SetData] = useState("");
    const [doctorsprescription, setDoctorsPrescription] = useState("");
    const [providerEmail, SetEmailProvider] = useState("");

    const [searchProvider, setSearchProvider] = useState("");
    const [encounterDate, SetEncounterDate] = useState("");
    const [showSearchDropDown, setShowSearchDropDown] = useState(false);

    const [diagnoses, setDiagnoses] = useState([
        { id: 1, code: "", description: "", filteredResults: [] },
    ]);

    // const [selectedRemark, setSelectedRemark] = useState("");
    const [selectedData, setSelectedData] = useState(null);
    const [formValues, setFormValues] = useState({});

    const [procedures, setProcedures] = useState([
        { id: 1, code: "", description: "", filteredResults: [] },
    ]);
    const [proceduresData, setProceduresData] = useState([]);

    const [selectedRemarks, setSelectedRemarks] = useState("");
    const [selectedFilterType, setSelectedFilterType] = useState("");
    const [proceduress, setProceduress] = useState([]);
    const [provDetails, SetProvDetails] = useState([]);
    const [selectedProcedures, setSelectedProcedures] = useState([]);

    const handleAddProcedures = () => {
        console.log("mmm", selectedData, formValues);
        if (!selectedData || !selectedData.ProcedureCode) {
            alert("Please select a procedure code first.");
            return;
        }

        const newProcedure = {
            FilterType: formValues.FilterType,
            ProcedureCode: formValues.ProcedureCode,
            ExtensionRemarks: "",
            ...(selectedRemark === "pharmacy" && {
                ProcedureQty: formValues.ProcedureQty,
                Duration: formValues.Duration,
                DailyQuantity: formValues.DailyQuantity,
                DosageValue: "daily",
                DrugForm: formValues.DrugForm, // Example, modify as needed
                Period: formValues.Period, // Example, modify as needed
            }),
            ...(selectedRemark === "Admitted" && {
                AdmissionDate: formValues.AdmissionDate,
                DischargeDate: formValues.DischargeDate,
            }),
            ...(selectedRemark === "Observation" && {
                Start_Time: formValues.Start_Time,
                End_Time: formValues.End_Time,
            }),
        };

        setSelectedProcedures([...selectedProcedures, newProcedure]);
    };

    const handleRemoveProcedure = (index) => {
        setSelectedProcedures(selectedProcedures.filter((_, i) => i !== index));
    };

    console.log("getpros:", JSON.stringify(selectedProcedures, null, 2));

    const addProcedures = () => {
        setProceduress((prev) => [
            ...prev,
            {
                code: "",
                description: "",
                filteredResults: [],
                filterType: selectedFilterType, // Save the current filter type
                extraFields: {}, // For additional fields like Pharmacy, Admission, etc.
            },
        ]);
    };

    const handleSelectProceduress = (index, procedure) => {
        setProceduress((prev) => {
            const updated = [...prev];
            updated[index].code = procedure.ProcedureCode;
            updated[index].description = procedure.ProcedureDescription;
            return updated;
        });
    };

    console.log("encounter:", JSON.stringify(encounterDate, null, 2));

    const handleSelects = (e) => {
        const remark = e.target.value;
        const selectedItem = utilizationLines.find(
            (item) => item.ExtensionRemarks === remark,
        );

        setSelectedRemarks(remark);
        setSelectedFilterType(selectedItem ? selectedItem.FilterType : ""); // Store FilterType
        setProceduress([]); // Reset procedures when changing remark
        GetProceduress(); // Fetch updated procedures
    };

    // Handle Procedure Code search
    const handleSearchChangeProcedure = (index, value) => {
        const filtered = proceduresData.filter(
            (proc) =>
                proc.ProcedureCode.toLowerCase().includes(
                    value.toLowerCase(),
                ) ||
                proc.ProcedureDescription.toLowerCase().includes(
                    value.toLowerCase(),
                ),
        );

        setProcedures((prev) => {
            const updated = [...prev];
            updated[index].code = value;
            updated[index].filteredResults = filtered;
            return updated;
        });
    };

    useEffect(() => {
        setFormValues((prev) => {
            // console.log("testingform procedures3", procedures);
            const updated = {
                ...prev,
                ExtensionRemarks: procedures[0].description,
                ProcedureCode: procedures[0].code,
            };
            // console.log("testingform procedures2", prev, updated);
            // updated["ExtensionRemarks"] = procedures.description;
            // updated["ProcedureCode"] = procedures.code;
            return updated;
        });
    }, [procedures]);

    const handleSelectProcedures = (index, procedure) => {
        setProcedures((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                code: procedure.ProcedureCode,
                description: procedure.ProcedureDescription,
                filteredResults: [],
            };
            return updated;
        });
    };

    const handleAddProcedure = () => {
        setProcedures((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                code: "",
                description: "",
                filteredResults: [],
            },
        ]);
    };
    const handleSelect = (event) => {
        const remark = event.target.value;
        setSelectedRemark(remark);
        const selectedItem = utilizationLines.find(
            (item) => item.ExtensionRemarks === remark,
        );
        setSelectedData(selectedItem);

        if (selectedItem) {
            setFormValues({
                FilterType: selectedItem.FilterType,
                ProcedureCode: selectedItem.ProcedureCode || "",
                ExtensionRemarks: selectedItem.ExtensionRemarks || "",
                ProcedureQty: "",
                Duration: "",
                DailyQuantity: "",
                DosageValue: "",
                AdmissionDate: "",
                DischargeDate: "",
                Start_Time: "",
                End_Time: "",
            });
        } else {
            setFormValues({});
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const utilizationLines = [
        {
            FilterType: "1",
            ProcedureCode: "DO-B34-001-041-SYR-040-000",
            ExtensionRemarks: "consultation",
        },
    ];

    useEffect(() => {
        const fetchDiagnosisData = async () => {
            try {
                const response = await fetch(
                    `${apiUrl}api/ListValues/GetAllDiagnosis`,
                    {
                        method: "GET",
                    },
                );
                const data = await response.json();
                setDiagnosisDataa(data);
                setDiagnosisData(data);
            } catch (error) {
                console.error("Error fetching diagnosis data:", error);
            }
        };

        fetchDiagnosisData();
    }, []);

    const handleSearchChange = (index, value) => {
        const updatedDiagnoses = [...diagnoses];
        updatedDiagnoses[index].code = value;

        if (value) {
            updatedDiagnoses[index].filteredResults = diagnosisDataa.filter(
                (item) =>
                    item.Value.toLowerCase().includes(value.toLowerCase()) ||
                    item.Text.toLowerCase().includes(value.toLowerCase()),
            );
        } else {
            updatedDiagnoses[index].filteredResults = [];
        }

        setDiagnoses(updatedDiagnoses);
    };

    const handleSelectd = (index, diagnosis) => {
        const updatedDiagnoses = [...diagnoses];
        updatedDiagnoses[index].code = diagnosis.Value;
        updatedDiagnoses[index].description = diagnosis.Text;
        updatedDiagnoses[index].filteredResults = []; // Hide dropdown
        setDiagnoses(updatedDiagnoses);
    };

    // Function to add a new diagnosis input set
    const handleAddDiagnosis = () => {
        setDiagnoses([
            ...diagnoses,
            {
                id: diagnoses.length + 1,
                code: "",
                description: "",
                filteredResults: [],
            },
        ]);

        const diag = diagnoses.map(({ code, description }) => ({
            DiagnosisCode: code,
            DiagnosisDescription: description,
        }));
        SetAllDiagnosis(diag);

        console.log("daignosis:", JSON.stringify(diag, null, 2));
    };

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

    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const postData = {
            CifNumber: enrollee.Member_MemberUniqueID,
            EnrolleeID: enrollee.Member_EnrolleeID,
            RequestingProviderCode: selectedProviders?.ProviderCode, // Ensure optional chaining
            UserID: providerEmail,
            UserName: providerEmail,
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

            if (data.status === 200 && data.VisitID) {
                alert(`Visit ID ${data.VisitID} generated successfully!`);
            } else {
                alert(`Unexpected response: ${JSON.stringify(data)}`);
            }

            SetData(data);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const handleSubmitPA = async () => {
        console.log("Button clicked, function running");
        if (!data.VisitID) {
            ("VisitID is missing from API response!");
            return;
        }

        const submitPA = {
            CifNumber: enrollee.Member_MemberUniqueID,
            ProviderID: selectedProviders?.provider_id,

            VisitID: data.VisitID,
            VisitDate: encounterDate,
            username: providerEmail,
            DoctorRecommendations: doctorsprescription,
            ServiceTypeID: selectedVisitType?.value || "",
            DiagnosisLines: alldiagnosis,
            UtilizationLines: selectedProcedures,
            UtilizationDocuments: [
                {
                    ClaimDocument: "fkfkfnff",
                    claimContentType: "pdf",
                    DocumentCategory: "Claims",
                    ClaimDocumentSequenceID: "743",
                },
            ],
        };

        console.log("All procedures", JSON.stringify(submitPA, null, 2));
        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/CreatePreauthorizationRequest`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // Ensure proper content type
                    },
                    body: JSON.stringify(submitPA), // Convert object to JSON
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);

            const responseApi = {
                VisitID: data.VisitID,
                status: data.status,
                Message: data.Message,
            };
            setApiResponse(responseApi); // Ensure response is always an array
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error submitting data:", error);
            responses.push({
                VisitID: data.VisitID,
                status: data.status,
                Message: data.Message,
            });
            setApiResponse(responseApi); // Ensure response is always an array
            setIsModalOpen(true);
        }
    };

    console.log("selectedx", JSON.stringify(selectedProviders, null, 2));
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

    const [claimsPaid, setClaimsPaid] = useState("");

    const [procedurex, setProcedurex] = useState([]);
    const [selectedRemark, setSelectedRemark] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const getRemarkText = (remark) => {
        const remarksMap = {
            1: "Consultation",
            // 2: "Investigations",
            // 3: "Pharmacy",
            // 4: "Admitted",
            // 5: "Immunization",
            // 6: "Procedures",
            // 7: "Observation",
        };
        return remarksMap[remark] || "Unknown";
    };

    const handleSelectRemark = (event) => {
        setSelectedRemark(event.target.value);
    };

    const handleSelectProcedurex = (event) => {
        const selectedValue = parseInt(event.target.value, 10); // Convert string to number
        setSelectedRemark(selectedValue); // Store the numeric value
    };

    const handleProcedureChangex = (index, field, value) => {
        setProcedurex((prevProcedures) =>
            prevProcedures.map((proc, i) =>
                i === index ? { ...proc, [field]: value } : proc,
            ),
        );
    };

    const addProcedure = (procedure) => {
        if (!selectedRemark) {
            console.error("Please select a remark first.");
            return;
        }

        setProcedurex((prevProcedures) => [
            ...prevProcedures,
            {
                FilterType: selectedRemark, // Store the selected remark type
                ProcedureCode: procedure.ProcedureCode, // Unique procedure code
                ExtensionRemarks: getRemarkText(selectedRemark), // Readable name
                ProcedureQty: "",
                Duration: "",
                DailyQuantity: "",
                DosageValue: "",
                DrugForm: "",
                Period: "",
                AdmissionDate: "",
                DischargeDate: "",
                Start_Time: "",
                End_Time: "",
            },
        ]);
    };

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
                {options.map((option, index) => (
                    <option
                        key={`${option.value}-${index}`}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }

    console.log(
        "getprovdetails",
        fetch(
            `${apiUrl}api/ProviderNetwork/GetProvidersUser?providerid=${selectedProviders.provider_id}`,
            {
                method: "GET",
            },
        ),
    );

    // console.log(
    //     "getBenefits",
    //     fetch(
    //         `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );

    async function GetBenefit() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            // console.log("getBebefit", data.result);
            setBenefit(data.result);
        } catch (error) {
            console.error("Error getting benefits", error);
        }
    }

    console.log(
        "getprovdetails",
        fetch(
            `${apiUrl}api/ProviderNetwork/GetProvidersUser?providerid=${selectedProviders.provider_id}`,
            {
                method: "GET",
            },
        ),
    );
    async function GetProviderEmail() {
        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/GetProvidersUser?providerid=${selectedProviders.provider_id}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            console.log("gettingID", data.result[0].Email);
            SetEmailProvider(data.result[0].Email);
        } catch (error) {
            console.error("Error getting benefits", error);
        }
    }

    useEffect(() => {
        if (selectedProviders.provider_id) {
            GetProviderEmail();
        }
    }, [selectedProviders]);

    async function GetProcedure() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeCoveredProcedures?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}&benefitid=${selectedBenefit?.value}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            console.log("Procedure7:", JSON.stringify(data, null, 2));
            // setProcedure(data.result);
            setProceduresData(data.result);
        } catch (error) {
            console.error("Error getting Procedures", error);
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

                const getAllClaimsPaid = allClaimsPaid.reduce(
                    (sum, item) => sum + (item.ClaimLine_AmtPaid || 0),
                    0,
                );

                const nuber = allClaimsPaid.length;

                // console.log("All Claims Paid:", getAllClaimsPaid);

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
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=20&pageSize=10&ProviderName=&TypeID=0&StateID=0&LGAID=0&enrolleeid=${enrollee.Member_EnrolleeID}&provider_id=0
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log("providers:", data.result);

            setAllProvider(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    useEffect(() => {
        CalculateAllAmountSpentOnEnrollee();
        GetService();
        GetProvider();
    }, []);

    useEffect(() => {
        if (selectedVisitType?.value) {
            GetBenefit();
        }
    }, [selectedVisitType?.value]);
    useEffect(() => {
        if (selectedBenefit?.value) {
            GetProcedure();
        }
    }, [selectedBenefit?.value]);

    // Function to delete a diagnosis by index
    const handleDeleteDiagnosis = (indexToDelete) => {
        // Make sure we don't delete the last remaining diagnosis
        if (diagnoses.length <= 1) {
            return; // Keep at least one diagnosis row
        }

        // Filter out the diagnosis at the specified index
        const updatedDiagnoses = diagnoses.filter(
            (_, index) => index !== indexToDelete,
        );

        // Update the IDs to keep them sequential
        const reindexedDiagnoses = updatedDiagnoses.map((diag, index) => ({
            ...diag,
            id: index + 1,
        }));

        setDiagnoses(reindexedDiagnoses);

        // Update the parent component's state if needed
        const diag = reindexedDiagnoses.map(({ code, description }) => ({
            DiagnosisCode: code,
            DiagnosisDescription: description,
        }));
        SetAllDiagnosis(diag);
    };

    const [currentPage, setCurrentPage] = useState(0);
    const filteredProviders = provider.filter((prov) =>
        prov.provider.toLowerCase().includes(searchProvider.toLowerCase()),
    );

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full">
                <Header />
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
                                            src="src/assets/CSIMAGES/eva_arrow-back-outline.svg"
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
                                    <div className=" items-center mt-2 rounded-full flex gap-2 ">
                                        {enrollee?.Member_MemberStatus_Description ===
                                        "Active" ? (
                                            <FaFlag className="text-green-500 w-[3rem] h-[3rem]" />
                                        ) : (
                                            <FaFlag className="text-red-500 w-[3rem] h-[3rem]" />
                                        )}
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
                        </div>

                        {/* First Row of Input Divs */}
                        <div className="flex ml-6 space-x-4">
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Visit Type
                                </label>
                                <DateDropdown
                                    key="service-dropdown"
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
                                        onChange={(e) =>
                                            SetEncounterDate(e.target.value)
                                        }
                                        value={encounterDate}
                                    />
                                </div>
                            </div>

                            <div className="relative w-[320px] ">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Benefits
                                </label>
                                <DateDropdown
                                    key="benefits-dropdown"
                                    options={benefit.map((type) => ({
                                        label: type.Benefit,
                                        value: type.BenefitID.toString(),
                                    }))}
                                    selectedValue={selectedBenefit}
                                    sendSelection={(selectedOption) =>
                                        setSelectedBenefit(selectedOption)
                                    }
                                    className="relative w-full h-[44px] rounded-lg "
                                />
                            </div>
                        </div>

                        <div className="flex ml-6 space-x-4 mt-4">
                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Requesting Provider
                                </label>

                                <input
                                    className="relative w-full h-[44px] rounded-lg outline-none border border-black px-2"
                                    onChange={(e) => {
                                        setSearchProvider(e.target.value);
                                        setShowSearchDropDown(true);
                                    }}
                                    value={searchProvider}
                                />

                                {showSearchDropDown && (
                                    <div className="h-[220px] w-full absolute bg-white z-10 border rounded-[10px] p-3">
                                        <div className="h-[180px] overflow-y-auto">
                                            {provider
                                                .filter((prov) =>
                                                    prov.provider
                                                        .toLowerCase()
                                                        .includes(
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
                                                            prov.provider_id ||
                                                            index
                                                        }
                                                        className="my-1 p-1 cursor-pointer hover:bg-slate-100 rounded"
                                                        onClick={(e) => {
                                                            setSearchProvider(
                                                                prov.provider,
                                                            );
                                                            setSelectedProvider(
                                                                prov,
                                                            );
                                                            setShowSearchDropDown(
                                                                false,
                                                            );
                                                        }}
                                                    >
                                                        {prov.provider}
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
                                                Page {currentPage + 1} of{" "}
                                                {Math.ceil(
                                                    filteredProviders.length /
                                                        10,
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

                            <div className="relative w-[320px]">
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Provider Email
                                </label>
                                <div className="relative w-full h-[44px] border border-black rounded-lg">
                                    <input
                                        disabled
                                        type="email"
                                        placeholder={selectedProviders?.email}
                                        className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-black"
                                    />
                                </div>
                            </div>

                            <button
                                className=" whitespace-nowrap h-11 px-9 text-[#C61531] border border-[#C61531] bg-[#C615311A]  rounded-md mt-8 items-end"
                                onClick={handleSubmit}
                            >
                                Get Visit Id
                            </button>
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
                                    <div>
                                        {diagnoses.map((diag, index) => (
                                            <div
                                                className="flex space-x-4 mt-2 relative"
                                                key={diag.id}
                                            >
                                                {/* Diagnosis Code Input */}
                                                <div className="flex flex-col mr-10">
                                                    <label className="font-semibold">
                                                        Diagnosis Code
                                                    </label>
                                                    <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                        <img
                                                            src="./Search.svg"
                                                            alt="Search Icon"
                                                            className="h-6 w-6 absolute left-2"
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Enter diag code"
                                                            className="w-full h-full outline-none border-none pl-10"
                                                            value={diag.code}
                                                            onChange={(e) =>
                                                                handleSearchChange(
                                                                    index,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        />
                                                    </div>

                                                    {diag.filteredResults
                                                        .length > 0 && (
                                                        <ul className="border border-gray-300 w-[240px] mt-[4.5rem] bg-white shadow-lg rounded-md absolute z-10">
                                                            {diag.filteredResults
                                                                .slice(0, 5)
                                                                .map(
                                                                    (
                                                                        diagnosis,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                diagnosis.Value
                                                                            }
                                                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                                                            onClick={() =>
                                                                                handleSelectd(
                                                                                    index,
                                                                                    diagnosis,
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                diagnosis.Value
                                                                            }{" "}
                                                                            -{" "}
                                                                            {
                                                                                diagnosis.Text
                                                                            }
                                                                        </li>
                                                                    ),
                                                                )}
                                                        </ul>
                                                    )}
                                                </div>

                                                {/* Diagnosis Description Input */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold">
                                                        Diagnostic Description
                                                    </label>
                                                    <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter description"
                                                            className="w-full h-full outline-none border-none px-2"
                                                            value={
                                                                diag.description
                                                            }
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                {diagnoses.length > 1 && (
                                                    <div className="flex items-end mb-2 ml-2">
                                                        <button
                                                            onClick={() =>
                                                                handleDeleteDiagnosis(
                                                                    index,
                                                                )
                                                            }
                                                            className="text-red-500 hover:text-red-700 focus:outline-none"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        <div
                                            className="flex ml-6 justify-end cursor-pointer mt-4"
                                            onClick={handleAddDiagnosis}
                                        >
                                            <img
                                                src="./Group 2356.svg"
                                                alt="Add"
                                                className="mr-2"
                                            />
                                            Add Diagnosis
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="flex flex-col">
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
                                </div> */}
                            </div>
                        </div>

                        <div className="ml-6 mt-6 mb-6">
                            <h3 className="text-[23px] text-red-700 mt-6 font-bold">
                                Services
                            </h3>

                            <h3 className="text-gray-700 flex items-center">
                                Procedure
                                <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                            </h3>

                            <div className="mx-auto mt-2">
                                <select
                                    value={selectedRemark}
                                    onChange={handleSelect}
                                    className="w-[15rem] p-2 border rounded-md"
                                >
                                    <option value="">Select</option>
                                    {utilizationLines.map((item) => (
                                        <option
                                            key={item.FilterType}
                                            value={item.ExtensionRemarks}
                                        >
                                            {item.ExtensionRemarks}
                                        </option>
                                    ))}
                                </select>

                                {selectedData && (
                                    <div className="mt-4 p-4 border rounded-md">
                                        <div className="grid grid-cols-2 gap-4">
                                            {procedures.map((proc, index) => (
                                                <div
                                                    key={index}
                                                    className="flex space-x-4 mt-2 relative"
                                                >
                                                    {/* Procedure Code Search */}
                                                    <div className="flex flex-col mr-10">
                                                        <label className="font-semibold">
                                                            Procedure Code
                                                        </label>
                                                        <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                            <img
                                                                src="./Search.svg"
                                                                alt="Search Icon"
                                                                className="h-6 w-6 absolute left-2"
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder="Search procedure code"
                                                                className="w-full h-full outline-none border-none  pl-9"
                                                                value={
                                                                    proc.code
                                                                }
                                                                onChange={(e) =>
                                                                    handleSearchChangeProcedure(
                                                                        index,
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        {/* Filtered Results Dropdown */}
                                                        {proc.filteredResults
                                                            .length > 0 && (
                                                            <div className="">
                                                                <ul className="border border-gray-300 w-[240px] mt-[4.5rem] bg-white shadow-lg rounded-md absolute z-10">
                                                                    {proc.filteredResults
                                                                        .slice(
                                                                            0,
                                                                            5,
                                                                        )
                                                                        .map(
                                                                            (
                                                                                procedure,
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        procedure.ProcedureCode
                                                                                    }
                                                                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                                                                    onClick={() =>
                                                                                        handleSelectProcedures(
                                                                                            index,
                                                                                            procedure,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        procedure.ProcedureCode
                                                                                    }{" "}
                                                                                    -{" "}
                                                                                    {
                                                                                        procedure.ProcedureDescription
                                                                                    }
                                                                                </li>
                                                                            ),
                                                                        )}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col ">
                                                        <label className="font-semibold">
                                                            Procedure
                                                            Description
                                                        </label>
                                                        <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Procedure description"
                                                                className="w-full h-full outline-none border-none px-2"
                                                                value={
                                                                    proc.description
                                                                }
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {selectedRemark === "pharmacy" && (
                                            <div className="mt-4 p-4 border rounded-md bg-white">
                                                <h2 className="text-lg font-semibold mb-2">
                                                    Pharmacy Details
                                                </h2>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Quantity
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="ProcedureQty"
                                                            value={
                                                                formValues.ProcedureQty
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Duration
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Duration"
                                                            value={
                                                                formValues.Duration
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Daily Quantity
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="DailyQuantity"
                                                            value={
                                                                formValues.DailyQuantity
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Dosage Value
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="DosageValue"
                                                            value={
                                                                formValues.DosageValue
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Drug form
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="DrugForm"
                                                            value={
                                                                formValues.DrugForm
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Period
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="Period"
                                                            value={
                                                                formValues.Period
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedRemark === "Admitted" && (
                                            <div className="mt-4 p-4 border rounded-md bg-white">
                                                <h2 className="text-lg font-semibold mb-2">
                                                    Admission Details
                                                </h2>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Admission Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="AdmissionDate"
                                                            value={
                                                                formValues.AdmissionDate
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Discharge Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="DischargeDate"
                                                            value={
                                                                formValues.DischargeDate
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedRemark === "Observation" && (
                                            <div className="mt-4 p-4 border rounded-md bg-white">
                                                <h2 className="text-lg font-semibold mb-2">
                                                    Observation Details
                                                </h2>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            Start Time
                                                        </label>
                                                        <input
                                                            type="time"
                                                            name="Start_Time"
                                                            value={
                                                                formValues.Start_Time
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium">
                                                            End Time
                                                        </label>
                                                        <input
                                                            type="time"
                                                            name="End_Time"
                                                            value={
                                                                formValues.End_Time
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full border p-2 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">
                                    Selected Procedures
                                </h2>
                                {selectedProcedures.length === 0 ? (
                                    <p className="text-gray-500">
                                        No procedures added yet.
                                    </p>
                                ) : (
                                    <ul className="mt-2">
                                        {selectedProcedures.map(
                                            (proc, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center p-2 border rounded-md mb-2"
                                                >
                                                    <span className="text-gray-700">
                                                        {proc.ProcedureCode}-
                                                        {
                                                            proc.ProcedureDescription
                                                        }
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleRemoveProcedure(
                                                                index,
                                                            )
                                                        }
                                                        className="text-red-500 hover:text-red-700 font-semibold"
                                                    >
                                                        Remove
                                                    </button>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div
                            className="flex ml-6 justify-end cursor-pointer mt-4"
                            onClick={handleAddProcedures}
                        >
                            <img
                                src="./Group 2356.svg"
                                alt=""
                                className="mr-2"
                            />
                            <span className=" font-semibold">
                                Add Procedure
                            </span>
                        </div>
                        {/* 
                        <div>
                            <h2>Select Procedures</h2>
                            {procedurex.map((procedure, index) => (
                                <div key={index} className="procedure-item">
                                    <p>
                                        <strong>Procedure:</strong>{" "}
                                        {procedurex.ExtensionRemarks}
                                    </p>

                                    {procedure.FilterType === "3" && (
                                        <>
                                            <label>Quantity:</label>
                                            <input
                                                type="number"
                                                value={
                                                    procedure.ProcedureQty || ""
                                                }
                                                onChange={(e) =>
                                                    handleProcedureChangex(
                                                        index,
                                                        "ProcedureQty",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </>
                                    )}

                                    {procedure.FilterType === "4" && (
                                        <>
                                            <label>Admission Date:</label>
                                            <input
                                                type="date"
                                                value={
                                                    procedure.AdmissionDate ||
                                                    ""
                                                }
                                                onChange={(e) =>
                                                    handleProcedureChangex(
                                                        index,
                                                        "AdmissionDate",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </>
                                    )}

                                    {procedure.FilterType === "7" && (
                                        <>
                                            <label>Start Time:</label>
                                            <input
                                                type="time"
                                                value={
                                                    procedure.Start_Time || ""
                                                }
                                                onChange={(e) =>
                                                    handleProcedureChangex(
                                                        index,
                                                        "Start_Time",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </>
                                    )}
                                </div>
                            ))}

                            <button onClick={handleSubmit}>Submit</button>
                        </div> */}

                        {/* <div className="ml-6">
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
                        </div> */}

                        <div className="ml-6 mt-10">
                            <h3 className="text-gray-700 flex items-center">
                                Notes
                                <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                            </h3>
                            <div className="flex flex-col mt-4">
                                <div className="w-[1060px] h-[167px] border-2 border-black rounded-md mt-2">
                                    <textarea
                                        id="diagnostic-description"
                                        placeholder="Enter note / diagnostic-description"
                                        className="w-full h-full outline-none border-none px-2 pt-4 resize-none"
                                        onChange={(e) =>
                                            setDoctorsPrescription(
                                                e.target.value,
                                            )
                                        }
                                        value={doctorsprescription}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8">
                            <div>
                                <button
                                    className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md"
                                    onClick={() =>
                                        navigate("/createpaenrolleesearch")
                                    }
                                >
                                    Back
                                </button>
                            </div>
                            <div>
                                <button
                                    className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                                    onClick={handleSubmitPA}
                                >
                                    Proceed
                                </button>
                            </div>
                            <CreatePAModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                response={apiResponse}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEnroleePACode;

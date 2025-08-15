import { Link, useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useState, useEffect, useMemo } from "react";

import { useLocation } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import CreatePAModal from "./CreatePAModal";
import { FaSpinner } from "react-icons/fa";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";
import Alert from "../../components/Alert";

const CreateEnroleePACode = () => {
    const [rejectionMessage, setRejectionMessage] = useState("");
    const [service, setService] = useState([]);
    const [ProvId, setProvId] = useState([]);
    const [provider, setAllProvider] = useState([]);
    const [benefit, setBenefit] = useState([]);
    const [alldiagnosis, SetAllDiagnosis] = useState([]);
    const [apiResponse, setApiResponse] = useState("");
    const [price, setPrice] = useState("");
    const [provEmail, setProvEmail] = useState("");
    const [paProviderId, setPaProviderId] = useState("");
    const [visitid, setVisitId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visitIdLoader, setVisitIdLoader] = useState(false);
    const [submitLoader, setSubmitLoader] = useState(false);
    const [rejectLoader, setRejectLoader] = useState(false);
    const [addProcedureLoader, setAddProcedureLoader] = useState(false);
    const [singleSubmitLoader, setSIngleSubmitLoader] = useState(false);
    const [procedureCodes, setProcedureCodes] = useState([]);
    const [state, SetStates] = useState([]);
    const [lga, setLga] = useState([]);
    const [filteredProvider, setFilteredProvider] = useState([]);
    const [biodata, setBiodata] = useState([]);
    const [enrolleeProvider, setAllEnrolleeProvider] = useState([]);
    const [ShowPATable, setShowPATable] = useState(false);
    const [rejectModal, setRejectModal] = useState(false);
    const [fetchingData, setFetchingData] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [msg, setMsg] = useState("");
    const [loadedDiagnosis, setLoadedDiagnosis] = useState([]);
    const [loadedPa, SetLoadedPa] = useState([]);
    const [reloadedPa, setReloadedPa] = useState([]);

    const collectProcedureCodes = () => {
        const codes = procedures.map((proc) => proc.code);
        setProcedureCodes(codes);
        // console.log("Collected Procedure Codes:", codes);
    };

    const [diagnosisData, setDiagnosisData] = useState([]);
    const [diagnosisDataa, setDiagnosisDataa] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const [selectedProviders, setSelectedProvider] = useState({
        provider_id: null,
    });
    const [data, SetData] = useState("");
    const [doctorsprescription, setDoctorsPrescription] = useState("");
    const [providerEmail, SetEmailProvider] = useState("");

    const [searchProvider, setSearchProvider] = useState("");
    const [encounterDate, SetEncounterDate] = useState("");
    const [showSearchDropDown, setShowSearchDropDown] = useState(false);
    const [isModalsOpen, setIsModalsOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginatedLoader, setPaginatedLoader] = useState(false);
    const [benefits, setAllBenefits] = useState([]);
    const [pa, SetPa] = useState([]);
    const enrolleeIdz = localStorage.getItem("enrolleeId");
    const visitIdz = localStorage.getItem("visitId");
    console.log("visitIdz", visitIdz);

    const [diagnoses, setDiagnoses] = useState([
        { id: 1, code: "", description: "", filteredResults: [] },
    ]);

    // const [selectedRemark, setSelectedRemark] = useState("");
    const [selectedData, setSelectedData] = useState(null);
    const [formValues, setFormValues] = useState({});

    const [procedures, setProcedures] = useState([
        {
            id: 1,
            code: "",
            description: "",
            price: "",
            ProcedureQty: "",
            ChargeAmount: "",
            filteredResults: [],
        },
    ]);
    //  console.log("procedurzz", procedures);

    const [proceduresData, setProceduresData] = useState([]);

    const [selectedRemarks, setSelectedRemarks] = useState("");
    const [selectedFilterType, setSelectedFilterType] = useState("");
    const [proceduress, setProceduress] = useState([]);
    const [provDetails, SetProvDetails] = useState([]);
    const [selectedProcedures, setSelectedProcedures] = useState([]);
    const [selectedPa, SetSelectedPa] = useState([]);

    const totalAmount = selectedProcedures.reduce((sum, proc) => {
        console.log("log", selectedProcedures);
        const quantity = parseFloat(proc.ProcedureQty) || 0;
        // Default to 1 if not specified
        const chargeAmount = parseFloat(proc.ChargeAmount) || 0;
        const price = parseFloat(proc.price) || 0; // Ensure price is a number

        // If both ChargeAmount and Quantity are valid numbers
        if (chargeAmount > 0 && quantity > 0) {
            console.log("sum2", sum, chargeAmount, quantity);
            return sum + chargeAmount * quantity;
        } else if (quantity > 0 && price > 0) {
            return sum + quantity * price;
        }
        // Otherwise just add the price

        // console.log("sum", sum, price);
        return sum + price;
    }, 0);

    const handleAddProceduress = () => {
        // console.log("mmm", selectedData, formValues);
        if (!selectedData || !selectedData.ProcedureCode) {
            alert("Please select a procedure code first.");
            return;
        }

        const newProcedure = {
            FilterType: formValues.FilterType,
            ProcedureCode: formValues.ProcedureCode,
            ProcedureQty: proc.ProcedureQty,
            ChargeAmount: proc.ChargeAmount,
            ExtensionRemarks: formValues.ExtensionRemarks,
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

    const formatDateForInput = (dateString) => {
        if (!dateString) return "";

        // Already in YYYY-MM-DD format
        if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return dateString;
        }

        // If it's in MM/DD/YYYY format
        if (dateString.includes("/")) {
            const datePart = dateString.split(" ")[0];
            const [month, day, year] = datePart.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        }

        // ISO format like "1999-10-10T00:00:00"
        if (dateString.includes("T")) {
            return dateString.split("T")[0];
        }

        // As fallback: try to convert any valid date
        try {
            const date = new Date(dateString);
            return isNaN(date) ? "" : date.toISOString().split("T")[0];
        } catch (error) {
            console.error("Date formatting error:", error);
            return "";
        }
    };

    const handleSelectProcedure = async (selectedProc) => {
        setFetchingData(true);
        setShowPATable(true);
        try {
            //  console.log("Daignosess Check0", selectedProc);

            // Format the visit date for the date input
            const formattedDate = formatDateForInput(selectedProc.Visitdate);
            const providerIds = selectedProc.PROVIDER_ID;
            //    console.log("provDetails", providerIds);

            // Update the encounter date state
            const matchingVisitType = service.find(
                (type) =>
                    type.visittype === selectedProc.visitType ||
                    type.servtype_id.toString() === selectedProc.visitType,
            );

            if (matchingVisitType) {
                setSelectedVisitType({
                    value: matchingVisitType.servtype_id.toString(),
                    label: matchingVisitType.visittype,
                });
            } else {
                setSelectedVisitType({
                    value:
                        selectedProc.visitTypeId ||
                        selectedProc.visitType ||
                        "",
                    label: selectedProc.visitType || "Unknown Visit Type",
                });
            } //
            SetEncounterDate(formattedDate);
            setVisitId(selectedProc.visitid);
            setSelectedProvider({
                provider_id:
                    selectedProc.providerId || selectedProc.provider_id || null,
                email: selectedProc.issuedBy || "No email available",
                name: selectedProc.provider || "Unknown Provider",
            });

            setSearchProvider(selectedProc.provider);

            // if (selectedProc.diagcode) {
            //     setDiagnoses([
            //         {
            //             id: Date.now(),
            //             code: selectedProc.diagcode,
            //             description: selectedProc.diagcode,
            //             filteredResults: [],
            //         },
            //     ]);
            // }

            const allDiagnosesForVisit = pa
                .filter((proc) => proc.visitid === selectedProc.visitid)
                .filter((proc) => proc.diagcode)
                .reduce((unique, proc) => {
                    const exists = unique.some(
                        (item) => item.code === proc.diagcode,
                    );
                    if (!exists) {
                        unique.push({
                            id: unique.length + 1,
                            code: proc.diagcode,
                            description: proc.diagdescription || proc.diagcode,
                            filteredResults: [],
                        });
                    }
                    return unique;
                }, []);

            console.log("allDiagnosesForVisit", allDiagnosesForVisit);
            const automaticDiagnosesForVisit = paginatedUniqueResults
                .filter((proc) => proc.visitid === selectedProc.visitid)
                .filter((proc) => proc.diagcode)
                .reduce((unique, proc) => {
                    const exists = unique.some(
                        (item) => item.code === proc.diagcode,
                    );
                    if (!exists) {
                        unique.push({
                            DiagnosisCode: proc.diagcode.split(" ")[0],
                            DiagnosisDescription:
                                proc.diagdescription ||
                                proc.diagcode.split(" ").slice(1).join(" "),
                        });
                    }
                    return unique;
                }, []);

            setLoadedDiagnosis(automaticDiagnosesForVisit);

            // console.log(
            //     "automaticDiagnosesForVisit",
            //     automaticDiagnosesForVisit,
            // );

            const visitId = selectedProc.visitid;
            const providerMatch = filteredProvider.find(
                (item) => item.ProviderCode === selectedProc.providercode,
            );

            // console.log("providerMatch", providerMatch);
            if (!providerMatch || !providerMatch.provider_id) {
                alert("Provider ID not found.");
                return;
            }

            const providerId = providerMatch.provider_id;
            const providerEmail = providerMatch.email;

            console.log("provDetails", providerIds);
            console.log("providerEmail", providerEmail);

            setProvId(providerId);
            setProvEmail(providerEmail);

            const proceduresForVisit = pa
                .filter((proc) => proc.visitid === visitId)
                .map((proc) => ({
                    ProcedureCode: proc.ProcedureCode || "",
                    ExtensionRemarks: proc.ProcedureDescription || "",
                    price: proc.chargeamount || 0,
                    ProcedureQty: proc.ProcedureQty?.trim(),
                    ChargeAmount: "",
                    PACode: proc.PACode || "",
                    apiResponse: {
                        PreAutCode: proc?.PACode || null,
                    },
                }));

            // console.log("Procedures for selected visit:", proceduresForVisit);
            // console.log("Daignosess Check1", allDiagnosesForVisit);

            // ✅ Set the procedures to render them in the selected table
            setSelectedProcedures(proceduresForVisit);

            // Set diagnoses accordingly
            if (allDiagnosesForVisit.length > 0) {
                setDiagnoses(allDiagnosesForVisit);
            } else if (selectedProc.diagcode) {
                setDiagnoses([
                    {
                        id: 1,
                        code: selectedProc.diagcode,
                        description:
                            selectedProc.diagdescription ||
                            selectedProc.diagcode,
                        filteredResults: [],
                    },
                ]);
            } else {
                setDiagnoses([
                    { id: 1, code: "", description: "", filteredResults: [] },
                ]);
            }

            // console.log("diagnoses", diagnoses);
            // Optional: You can also set other fields if you have state for them
            // setVisitId(selectedProc.visitid);
            // setDiagnosisCode(selectedProc.diagcode);
            // setProcedureCode(selectedProc.ProcedureCode);
            // etc.
            try {
                await GetLoadedPAHistory(selectedProc.visitid); // Make sure this is async
            } catch (err) {
                console.error("Error loading PA history", err);
            } finally {
                setFetchingData(false); // Hide modal when done
            }

            // console.log("Daignosess Check2", diagnoses);
            // console.log("Selected procedure:", selectedProc);
            // console.log("Formatted date:", formattedDate);
        } catch (error) {
            console.log("Daignosess Check3", error);
        }
    };
    // console.log("paaa", pa);
    // const handleAddProcedures = async () => {
    //     setShowPATable(true);

    //     if (!selectedData || !formValues.ExtensionRemarks) {
    //         alert("Please select a procedure code first.");
    //         return;
    //     }

    //     const updated = procedures.map((proc) => {
    //         console.log("console", procedures, price);
    //         return {
    //             FilterType: formValues.FilterType,
    //             ProcedureCode: proc.code,
    //             ProcedureQty: proc.ProcedureQty,
    //             ChargeAmount: proc.ChargeAmount || 0,
    //             price: price,
    //             ExtensionRemarks: formValues.ExtensionRemarks,
    //             ...(selectedRemark === "pharmacy" && {
    //                 ProcedureQty: formValues.ProcedureQty,
    //                 Duration: formValues.Duration,
    //                 DailyQuantity: formValues.DailyQuantity,
    //                 DosageValue: "daily",
    //                 DrugForm: formValues.DrugForm,
    //                 Period: formValues.Period,
    //             }),
    //             ...(selectedRemark === "Admitted" && {
    //                 AdmissionDate: formValues.AdmissionDate,
    //                 DischargeDate: formValues.DischargeDate,
    //             }),
    //             ...(selectedRemark === "Observation" && {
    //                 Start_Time: formValues.Start_Time,
    //                 End_Time: formValues.End_Time,
    //             }),
    //         };
    //     });

    //     console.log("updated", updated);

    //     // Update procedures first
    //     setSelectedProcedures((prev) => [...prev, ...updated]);

    //     // Reset the input fields
    //     setProcedures([
    //         {
    //             id: "",
    //             code: "",
    //             description: "",
    //             price: "",
    //             ProcedureQty: "",
    //             ChargeAmount: "",
    //             filteredResults: [],
    //         },
    //     ]);

    //     // 🔥 Directly call handleSubmitPA after updates
    //     await handleSubmitPA();
    // };

    const handleAddProcedures = async () => {
        setAddProcedureLoader(true);
        if (!selectedData || !formValues.ExtensionRemarks) {
            alert("Please select a procedure code first.");
            return;
        }

        const lastProc = procedures[procedures.length - 1];

        const updated = {
            FilterType: formValues.FilterType,
            ProcedureCode: lastProc.code,
            ProcedureQty: lastProc.ProcedureQty,
            ChargeAmount: lastProc.ChargeAmount || 0,
            price: price,
            ExtensionRemarks: formValues.ExtensionRemarks,
            ...(selectedRemark === "pharmacy" && {
                ProcedureQty: formValues.ProcedureQty,
                Duration: formValues.Duration,
                DailyQuantity: formValues.DailyQuantity,
                DosageValue: "daily",
                DrugForm: formValues.DrugForm,
                Period: formValues.Period,
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

        const apiResponse = await handleSubmitPA(updated);

        const updatedWithResponse = {
            ...updated,
            apiResponse,
        };

        setSelectedProcedures((prev) => [...prev, updatedWithResponse]);

        setProcedures([
            {
                id: "",
                code: "",
                description: "",
                price: "",
                ProcedureQty: "",
                ChargeAmount: "",
                filteredResults: [],
            },
        ]);
        setShowPATable(true);
        setAddProcedureLoader(false);
        GetLoadedPAHistory(visitid);
        GetPAHistory();
    };

    // console.log("providerId", paProviderId);

    // console.log("loadedDiagnosis", JSON.stringify(loadedDiagnosis, null, 2));
    const handleSubmitPA = async (procedure) => {
        setSubmitLoader(true);
        // console.log("Daignosess Check12", data);
        // console.log("loadedDiagnosis3", loadedDiagnosis);
        const checkVisitId = data.VisitID || visitid;
        if (!checkVisitId) {
            alert("VisitID is missing from API response!");
            setSubmitLoader(false);
            return null;
        }

        const { price, ...rest } = procedure;

        const submitPA = {
            CifNumber: enrollee.Member_MemberUniqueID,
            ProviderID: selectedProviders?.provider_id || ProvId,
            VisitID: data.VisitID || visitid,
            VisitDate: encounterDate,
            username: user?.result[0]?.UserName, //providerEmail || provEmail,
            DoctorRecommendations: doctorsprescription,
            ServiceTypeID: selectedVisitType?.value || "",
            DiagnosisLines:
                alldiagnosis && alldiagnosis.length > 0
                    ? alldiagnosis
                    : loadedDiagnosis,
            UtilizationLines: [{ ...rest, ExtensionRemarks: "" }],
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
                `${apiUrl}api/ProviderNetwork/CreatePreauthorizationRequest_WithPreAuthCode`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(submitPA),
                },
            );

            // const responseText = await response.text();
            // const parsedResponse = JSON.parse(responseText);
            const apiResponse = await response.json();

            if (apiResponse.status == 200) {
                setMsg(apiResponse.Message);
                setAlertType("success");
            }
            if (apiResponse.status == 306) {
                setMsg(apiResponse.Message || "An error occurred");
                setAlertType("error");
            }
            if (apiResponse.status !== 200) {
                setMsg(apiResponse.Message || "An error occurred");
                setAlertType("error");
            }
            //   console.log("PA API Response", apiResponse);

            const responseApi = {
                VisitID: apiResponse?.VisitID || "N/A",
                status: apiResponse?.status || "Error",
                Message: apiResponse?.Message || "",
                PreAutCode: apiResponse?.VisitDetails?.[0]?.PreAutCode || null,
            };

            return responseApi;
        } catch (error) {
            console.error("Error submitting data:", error);

            return {
                VisitID: data?.VisitID || "N/A",
                status: "Error",
                Message: error.message,
                PreAutCode: null,
            };
        } finally {
            setSubmitLoader(false);
            GetPAHistory();
            GetLoadedPAHistory();
        }
    };

    // console.log("apiResponse", apiResponse);
    // const handleAddProcedures = () => {
    //     console.log("mmm", selectedData, formValues);
    //     if (!selectedData || !formValues.ExtensionRemarks) {
    //         alert("Please select a procedure code first.");
    //         return;
    //     }

    //     // Include ProcedureDescription only for UI display purposes
    //     const newProcedure = {
    //         FilterType: formValues.FilterType,
    //         ProcedureCode: formValues.ProcedureCode,
    //         // For display only
    //         ExtensionRemarks: formValues.ExtensionRemarks,
    //         ...(selectedRemark === "pharmacy" && {
    //             ProcedureQty: formValues.ProcedureQty,
    //             Duration: formValues.Duration,
    //             DailyQuantity: formValues.DailyQuantity,
    //             DosageValue: "daily",
    //             DrugForm: formValues.DrugForm,
    //             Period: formValues.Period,
    //         }),
    //         ...(selectedRemark === "Admitted" && {
    //             AdmissionDate: formValues.AdmissionDate,
    //             DischargeDate: formValues.DischargeDate,
    //         }),
    //         ...(selectedRemark === "Observation" && {
    //             Start_Time: formValues.Start_Time,
    //             End_Time: formValues.End_Time,
    //         }),
    //     };

    //     setSelectedProcedures([...selectedProcedures, newProcedure]);

    //     // Optionally: remove ProcedureDescription from final form submission (in the submit function, not here)
    // };

    const handleRemoveProcedure = (index) => {
        setSelectedProcedures(selectedProcedures.filter((_, i) => i !== index));
    };

    //  console.log("getpros:", JSON.stringify(selectedProcedures, null, 2));

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

    useEffect(() => {
        const codes = procedures.map((proc) => proc.code);
        setProcedureCodes(codes);
    }, [procedures]);

    const handleSelectProceduress = (index, procedure) => {
        setProceduress((prev) => {
            const updated = [...prev];
            updated[index].code = procedure.ProcedureCode;
            updated[index].description = procedure.ProcedureDescription;
            return updated;
        });
    };

    // console.log("encounter:", JSON.stringify(encounterDate, null, 2));

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
        const filtered = proceduresData?.filter(
            (proc) =>
                proc.tariff_code.toLowerCase().includes(value.toLowerCase()) ||
                proc.tariff_desc.toLowerCase().includes(value.toLowerCase()),
        );

        setProcedures((prev) => {
            const updated = [...prev];
            updated[index].code = value;
            updated[index].filteredResults = filtered;
            return updated;
        });
    };

    useEffect(() => {
        const defaultRemark = "consultation";
        setSelectedRemark(defaultRemark);

        const selectedItem = utilizationLines.find(
            (item) => item.ExtensionRemarks === defaultRemark,
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
        }
    }, []);

    useEffect(() => {
        setCurrentPage(0);
    }, [searchProvider]);

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

    const handleSelectProcedures = async (index, procedure) => {
        const price = await GetProcedurePrice(procedure.tariff_code);

        setProcedures((prev) => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                code: procedure.tariff_code,
                description: procedure.tariff_desc,
                price: price || procedure.RegisteredPrice || 0,
                ChargeAmount: price || procedure.RegisteredPrice || 0,
                filteredResults: [],
            };
            return updated;
        });
    };

    useEffect(() => {
        if (procedureCodes) {
            GetProcedurePrice();
        }
    }, [procedureCodes]);

    async function GetProcedurePrice() {
        const priceUrl = `${apiUrl}api/ProviderNetwork/GetProviderProcedureTarrifAmount?providerid=${
            selectedProviders?.provider_id || ProvId
        }&procedurecode=${procedureCodes}&cifnumber=0`;

        //  console.log("priceUrl", priceUrl);

        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/GetProviderProcedureTarrifAmount?providerid=${
                    selectedProviders?.provider_id || ProvId
                }&procedurecode=${procedureCodes}&cifnumber=0`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            //     console.log("procedure price", data.TarifAmount);
            setPrice(data.TarifAmount);
        } catch (error) {
            console.error("Error fetching procedure price", error);
        }
    }

    async function GetStates() {
        try {
            const states = await fetch(`${apiUrl}api/ListValues/GetStates`, {
                method: "GET",
            });

            const response = await states.json();
            //   console.log("states", response);
            SetStates(response);
        } catch (error) {
            console.error("Error fetching states", error);
        }
    }

    async function GetLGA() {
        try {
            const lga = await fetch(
                `${apiUrl}api/ListValues/GetCitiesByStates?state=${selectedState.value}`,
                {
                    method: "GET",
                },
            );

            const response = await lga.json();
            //   console.log("Lga", response);
            setLga(response);
        } catch (error) {
            console.error("Error fetching lga", error);
        }
    }
    // console.log("providerCheck FilterProvider", filteredProvider);
    async function GetProvider() {
        try {
            // console.log("providerCheck0");
            const provider = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=10000&pageSize=1000&ProviderName=&TypeID=0&StateID=0&LGAID=0&enrolleeid=${
                    enrollee?.Member_EnrolleeID || pendingPa.MemberNumber
                } }&provider_id=0`,
                {
                    method: "GET",
                },
            );

            const response = await provider.json();
            console.log("providerCheck", response);
            setFilteredProvider(response.result);
        } catch (error) {
            console.error("providerCheck Error fetching provider", error);
        }
    }

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

        SetAllDiagnosis([
            {
                DiagnosisCode: diagnosis.Value,
                DiagnosisDescription: diagnosis.Text,
            },
        ]);
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

        // const diag = diagnoses.map(({ code, description }) => ({
        //     DiagnosisCode: code,
        //     DiagnosisDescription: description,
        // }));
        // SetAllDiagnosis(diag);

        //  console.log("daignosis:", JSON.stringify(diag, null, 2));
    };

    useEffect(() => {
        GetProvider();
    }, []);
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
    const [selectedState, setState] = useState({
        Text: "",
        Value: "",
    });
    const [selectedLga, setSelectedLga] = useState({
        Text: "",
        Value: "",
    });
    const [selectedFacility, setSelectedFacility] = useState({
        Provider: "",
        Provider_Id: "",
    });

    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleSubmit = async () => {
        setVisitIdLoader(true);
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

        // console.log("getvisitID:", JSON.stringify(postData, null, 2));
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
                //alert(`Visit ID ${data.VisitID} generated successfully!`);
                setVisitId(data.VisitID);
            } else {
                alert(`Unexpected response: ${JSON.stringify(data)}`);
            }

            SetData(data);
            // console.log("Success:", data);
        } catch (error) {
            console.error("Error submitting data:", error);
        } finally {
            setVisitIdLoader(false);
        }
    };

    // const handleSubmitPA = async () => {
    //     setSubmitLoader(true);
    //     console.log("Button clicked, function running");
    //     if (!data.VisitID) {
    //         alert("VisitID is missing from API response!");
    //         setSubmitLoader(false);
    //         return;
    //     }

    //     const submitPA = {
    //         CifNumber: enrollee.Member_MemberUniqueID,
    //         ProviderID: selectedProviders?.provider_id,

    //         VisitID: data.VisitID,
    //         VisitDate: encounterDate,
    //         username: providerEmail,
    //         DoctorRecommendations: doctorsprescription,
    //         ServiceTypeID: selectedVisitType?.value || "",
    //         DiagnosisLines: alldiagnosis,
    //         // UtilizationLines: selectedProcedures.map(
    //         //     ({ ProcedureDescription, ...rest }) => ({
    //         //         ...rest,
    //         //         ExtensionRemarks: "",
    //         //     }),
    //         // ),
    //         UtilizationLines: selectedProcedures.map(
    //             ({ ProcedureDescription, price, ...rest }) => ({
    //                 ...rest,
    //                 ExtensionRemarks: "",
    //             }),
    //         ),

    //         UtilizationDocuments: [
    //             {
    //                 ClaimDocument: "fkfkfnff",
    //                 claimContentType: "pdf",
    //                 DocumentCategory: "Claims",
    //                 ClaimDocumentSequenceID: "743",
    //             },
    //         ],
    //     };

    //     console.log("All procedures", JSON.stringify(submitPA, null, 2));
    //     try {
    //         const response = await fetch(
    //             `${apiUrl}api/ProviderNetwork/CreatePreauthorizationRequest_WithPreAuthCode`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json", // Ensure proper content type
    //                 },
    //                 body: JSON.stringify(submitPA), // Convert object to JSON
    //             },
    //         );

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         console.log("Success:", data);

    //         const responseApi = {
    //             VisitID: data.VisitID,
    //             status: data.status,
    //             Message: data.Message,
    //             PreAutCode: data.VisitDetails[0].PreAutCode,
    //         };
    //         setApiResponse(responseApi); // Ensure response is always an array
    //         setIsModalOpen(true);
    //     } catch (error) {
    //         console.error("Error submitting data:", error);

    //         const responseApi = {
    //             VisitID: data?.VisitID || "N/A", // Handle missing VisitID
    //             status: data?.status,
    //             Message: data?.Message,
    //         };

    //         // responses.push(responseApi);
    //         setApiResponse(responseApi);
    //         setIsModalOpen(true);
    //     } finally {
    //         setSubmitLoader(false);
    //     }
    // };

    // const handleSubmitPA = async () => {
    //     setSubmitLoader(true);

    //     console.log("Button clicked, function running");

    //     if (!data.VisitID) {
    //         alert("VisitID is missing from API response!");
    //         setSubmitLoader(false);
    //         return;
    //     }

    //     const submitPA = {
    //         CifNumber: enrollee.Member_MemberUniqueID,
    //         ProviderID: selectedProviders?.provider_id,
    //         VisitID: data.VisitID,
    //         VisitDate: encounterDate,
    //         username: providerEmail,
    //         DoctorRecommendations: doctorsprescription,
    //         ServiceTypeID: selectedVisitType?.value || "",
    //         DiagnosisLines: alldiagnosis,
    //         UtilizationLines: selectedProcedures.map(
    //             ({ ProcedureDescription, price, ...rest }) => ({
    //                 ...rest,
    //                 ExtensionRemarks: "",
    //             }),
    //         ),
    //         UtilizationDocuments: [
    //             {
    //                 ClaimDocument: "fkfkfnff",
    //                 claimContentType: "pdf",
    //                 DocumentCategory: "Claims",
    //                 ClaimDocumentSequenceID: "743",
    //             },
    //         ],
    //     };

    //     console.log("All procedures", JSON.stringify(submitPA, null, 2));

    //     let parsedResponse = null; // Track the parsed API response

    //     try {
    //         const response = await fetch(
    //             `${apiUrl}api/ProviderNetwork/CreatePreauthorizationRequest_WithPreAuthCode`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(submitPA),
    //             },
    //         );

    //         const responseText = await response.text();

    //         try {
    //             parsedResponse = JSON.parse(responseText); // Try parsing response
    //         } catch (jsonError) {
    //             console.error("JSON parse error:", jsonError);
    //             throw new Error("Invalid JSON response");
    //         }

    //         const responseApi = {
    //             VisitID: parsedResponse.VisitID || "N/A",
    //             status: parsedResponse.status,
    //             Message: parsedResponse.Message,
    //             PreAutCode:
    //                 parsedResponse?.VisitDetails?.[0]?.PreAutCode || null,
    //         };

    //         setApiResponse(responseApi);
    //         setIsModalOpen(true);
    //     } catch (error) {
    //         console.error("Error submitting data:", error);

    //         const responseApi = {
    //             VisitID: parsedResponse?.VisitID || data?.VisitID || "N/A",
    //             status: parsedResponse?.status || "Error",
    //             Message: parsedResponse?.Message || error.message,
    //             PreAutCode: null,
    //         };

    //         setApiResponse(responseApi);
    //         setIsModalOpen(true);
    //     } finally {
    //         setSubmitLoader(false);
    //     }
    // };

    const handleNavigate = (enrollee) => {
        navigate("/csenrolleeprofileupdate", { state: { enrollee } });
    };
    const [isChecked, setIsChecked] = useState(false);

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const location = useLocation();
    const enrollee = location.state?.enrollee;
    const pendingPa = location.state?.pendingPa;

    console.log("pendingPa", pendingPa);
    const [claimsPaid, setClaimsPaid] = useState("");

    const [procedurex, setProcedurex] = useState([]);
    const [selectedRemark, setSelectedRemark] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelectedItems(newSelectAll ? [...selectedProcedures] : []);
    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (item) => {
        setSelectedItems((prev) => {
            const isSelected = prev.some(
                (i) => i.ProcedureCode === item.ProcedureCode,
            );

            const updated = isSelected
                ? prev.filter((i) => i.ProcedureCode !== item.ProcedureCode)
                : [...prev, item];

            // ✅ Update Select All status
            setSelectAll(updated.length === selectedProcedures.length);

            //  console.log("Item selected:", item);

            // if (!isSelected) {
            //     const payload = {
            //         visitid: item.visitid,
            //         username: user?.result[0]?.UserName,
            //         VisitDetailIDs: [
            //             {
            //                 visitdetail_id: item.VisitDetailsID,
            //             },
            //         ],
            //     };
            //     console.log("Item selected:", payload);
            //     sendPASelectionToAPI(payload);
            // }

            return updated;
        });
    };

    const handleApprovePA = async () => {
        setSubmitLoader(true);

        const responses = [];

        for (const item of selectedItems) {
            const requestData = {
                visitid: item.VisitID1,
                username: user?.result[0]?.UserName,
                VisitDetailIDs: [{ visitdetail_id: item.VisitDetailsID }],
            };

            //  console.log("Sending to API:", requestData);

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
                // console.log("API Response:", data);

                if (data.status == 200) {
                    setMsg(data.message);
                    setAlertType("success");
                } else if (data.status == 417) {
                    setMsg(data.message || "An error occurred");
                    setAlertType("error");
                } else if (data.status !== 200) {
                    setMsg(data.pacode || "An error occurred");
                    setAlertType("error");
                }

                responses.push({
                    status: data.status,
                    message: data.message,
                    pacode: data.pacode,
                });
            } catch (error) {
                //  console.error("API Error:", error);
                responses.push({
                    visitdetail_id: item.VisitDetailsID,
                    status: "Error",
                    message: "Network error occurred",
                });
            }
        }

        setSubmitLoader(false);
        setApiResponse(responses);
        //setIsModalOpen(true);
        GetPAHistory();
        GetLoadedPAHistoryID();
    };
    const handleSingleApprovePA = async () => {
        setSIngleSubmitLoader(true);

        const responses = [];

        for (const item of selectedItems) {
            const requestData = {
                visitid: item.VisitID1,
                username: user?.result[0]?.UserName,
                VisitDetailIDs: [{ visitdetail_id: item.VisitDetailsID }],
            };

            //  console.log("Sending to API:", requestData);

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
                // console.log("API Response:", data);

                if (data.status == 200) {
                    setMsg(data.message);
                    setAlertType("success");
                } else if (data.status == 417) {
                    setMsg(data.message || "An error occurred");
                    setAlertType("error");
                } else if (data.status !== 200) {
                    setMsg(data.pacode || "An error occurred");
                    setAlertType("error");
                }

                responses.push({
                    status: data.status,
                    message: data.message,
                    pacode: data.pacode,
                });
            } catch (error) {
                //  console.error("API Error:", error);
                responses.push({
                    visitdetail_id: item.VisitDetailsID,
                    status: "Error",
                    message: "Network error occurred",
                });
            }
        }

        setSIngleSubmitLoader(false);
        setApiResponse(responses);
        //setIsModalOpen(true);
        GetPAHistory();
        GetLoadedPAHistoryID();
    };

    const handleRejectPA = async () => {
        setRejectLoader(true);
        const responses = [];

        for (const item of selectedItems) {
            const requestData = {
                message: rejectionMessage,
                userid: user?.result[0]?.User_id,
                VisitDetailid: item.VisitDetailsID,
            };

            //  console.log("Sent Dataz:", JSON.stringify(requestData, null, 2));

            try {
                const response = await fetch(
                    `${apiUrl}api/EnrolleeProfile/reject_EnrolleePA`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(requestData),
                    },
                );

                const data = await response.json();
                //  console.log("API Responsez:", data);

                if (data.status == 200) {
                    setMsg(data.ReturnMessage);
                    setAlertType("success");
                }
                if (data.status !== 200) {
                    setMsg(data.ReturnMessage || "An error occurred");
                    setAlertType("error");
                }

                responses.push({
                    status: data.status,
                    message: data.message,
                    pacode: data.pacode,
                });
            } catch (error) {
                console.error("API Error:", error);
                responses.push({
                    visitdetail_id: item.VisitDetailsID,
                    status: "Error",
                    message: "Network error occurred",
                });
            }
        }

        setRejectLoader(false);
        setApiResponse(responses);
        //setIsModalOpen(true);
        GetPAHistory();
        GetLoadedPAHistoryID();
    };

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
    console.log("loadedPa", loadedPa[0]?.Member_MemberUniqueID);
    async function GetBenefit() {
        console.log(
            "benefit",
            fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${
                    enrollee?.Member_MemberUniqueID ||
                    loadedPa[0]?.Member_MemberUniqueID
                }&schemeid=${
                    enrollee?.Member_PlanID || loadedPa[0]?.Member_PlanID
                }&serviceid=${selectedVisitType?.value}`,
                {
                    method: "GET",
                },
            ),
        );
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${
                    enrollee?.Member_MemberUniqueID ||
                    loadedPa[0]?.Member_MemberUniqueID
                }&schemeid=${enrollee.Member_PlanID}&serviceid=${
                    selectedVisitType?.value
                }`,
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
    // console.log("states", selectedState?.Value);
    // console.log(
    //     "getprovdetails",
    //     fetch(
    //         `${apiUrl}api/ProviderNetwork/GetProvidersUser?providerid=${selectedProviders.provider_id}`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );
    async function GetProviderEmail() {
        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/GetProvidersUser?providerid=${selectedProviders.provider_id}`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();
            // console.log("gettingID", data.result[0].Email);
            SetEmailProvider(data.result[0].Email);
        } catch (error) {
            console.error("Error getting benefits", error);
        }
    }

    useEffect(() => {
        if (selectedProviders.provider_id) {
            GetProviderEmail();
            GetProcedure();
        }
    }, [selectedProviders]);

    useEffect(() => {
        if (ProvId) {
            GetProcedure();
        }
    }, [ProvId]);

    // console.log(
    //     "procedurezzz",
    //     fetch(
    //         `${apiUrl}api/EnrolleeProfile/GetEnrolleeCoveredProcedures?cifnumber=${enrollee.Member_MemberUniqueID}&schemeid=${enrollee.Member_PlanID}&serviceid=${selectedVisitType?.value}&benefitid=0`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );

    // console.log("Checkingpovid1", ProvId);
    async function GetProcedure() {
        try {
            const response = await fetch(
                `${apiUrl}api/ProviderNetwork/GetProceduresByFilter?filtertype=0&providerid=${
                    selectedProviders.provider_id || ProvId
                }&searchbyname=`,
                {
                    method: "GET",
                },
            );

            const data = await response.json();

            // console.log("Checkingpovid2:", JSON.stringify(data, null, 2));
            // console.log("Checkingpovid3", response);

            setProceduresData(data.result);
        } catch (error) {
            console.error("CheckingpovidError", error);
        }
    }

    async function CalculateAllAmountSpentOnEnrollee() {
        const response = fetch(
            `${apiUrl}/api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${
                enrollee.Member_EnrolleeID || enrollee?.enrolleeID
            }&fromdate=2010-12-31&todate=2025-12-31&network_type=`,
            {
                method: "GET",
            },
        );

        // console.log("amountspent", response);
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${
                    enrollee.Member_EnrolleeID || enrollee?.enrolleeID
                }&fromdate=2010-12-31&todate=2025-12-31&network_type=`,
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
                //  console.log("amountspent", getAllClaimsPaid);

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
            const response = `${apiUrl}api/ListValues/GetSeviceType?cif=${
                enrollee?.Member_MemberUniqueID ||
                loadedPa[0]?.Member_MemberUniqueID
            }&Schemeid=${
                enrollee?.Member_PlanID || loadedPa[0]?.Member_PlanID
            } `;

            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }

            const data = await response.json();

            console.log("service:", data.result);

            setService(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    // console.log(
    //     "new providersss",
    //     fetch(
    //         `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=10000&pageSize=1000&ProviderName=&TypeID=0&StateID=0&LGAID=0&enrolleeid=${enrollee.Member_EnrolleeID}&provider_id=0`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );

    async function GetEnrolleeProvider() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=10000&pageSize=1000&ProviderName=&TypeID=0&StateID=${selectedState?.value}&LGAID=${selectedLga?.value}&enrolleeid=${enrollee.Member_EnrolleeID}&provider_id=0`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log("EnrolleesProviders:", JSON.stringify(data, null, 2));

            setAllEnrolleeProvider(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }
    async function GetEnrolleeProvider() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=10000&pageSize=1000&ProviderName=&TypeID=0&StateID=${selectedState?.value}&LGAID=${selectedLga?.value}&enrolleeid=${enrollee.Member_EnrolleeID}&provider_id=0
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log("Providers:", JSON.stringify(providers, null, 2));

            setAllProvider(data.result);
        } catch (error) {
            console.error("Error getiing service:", error);
        }
    }

    useEffect(() => {
        CalculateAllAmountSpentOnEnrollee();
        GetService();

        GetStates();
    }, []);

    useEffect(() => {
        if (selectedVisitType?.value) {
            GetBenefit();
        }
    }, [selectedVisitType?.value]);
    useEffect(() => {
        if (selectedVisitType?.value) {
            GetProcedure();
            GetAllBenefits();
        }
    }, [selectedVisitType?.value]);

    useEffect(() => {
        if (isModalsOpen) {
            GetAllBenefits();
        }
    }, [isModalsOpen]);

    useEffect(() => {
        if (selectedLga?.value) {
            GetEnrolleeProvider();
        }
    }, [selectedLga?.value]);

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

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCurrentPage, setPageCurrentPage] = useState(1);

    const [providerCurrentPage, setProviderCurrentPage] = useState(1);
    const filteredProviders = provider.filter((prov) =>
        prov.provider.toLowerCase().includes(searchProvider.toLowerCase()),
    );

    useEffect(() => {
        if (selectedState.value) GetLGA();
    }, [selectedState.value]);

    useEffect(() => {
        GetBiodata();

        GetLoadedPAHistoryFromDashboard();
        if (loadedPa[0]?.Member_MemberUniqueID) {
            GetPAHistory();
        }
    }, []);

    useEffect(() => {
        if (
            enrollee?.Member_MemberUniqueID ||
            loadedPa[0]?.Member_MemberUniqueID
        ) {
            console.log("GetPAHistoryzz is called");
            console.log(
                "GetPAHistoryzz is called",
                enrollee?.Member_MemberUniqueID ||
                    loadedPa[0]?.Member_MemberUniqueID,
            );

            GetPAHistory();
        }
    }, [enrollee?.Member_MemberUniqueID || loadedPa[0]?.Member_MemberUniqueID]);

    // console.log("visitType", selectedVisitType);
    // console.log("State", selectedState);
    // console.log("State2", selectedState.value);
    // console.log("local", selectedLga.value);

    async function GetAllBenefits() {
        try {
            setLoading(true);
            const response = `${apiUrl}api/EnrolleeProfile/GetEnrolleeBenefitServices?cifnumber=${
                enrollee?.Member_MemberUniqueID ||
                loadedPa[0]?.Member_MemberUniqueID
            }&schemeid=${
                enrollee?.Member_PlanID || loadedPa[0]?.Member_PlanID
            }&serviceid=${selectedVisitType?.value}
`;

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log(
            //     "ConsoleALLBenefits:",
            //     JSON.stringify(response, null, 2),
            // );
            console.log("ALLBenefits:", response);

            setAllBenefits(data);
        } catch (error) {
            console.error("Error getiing service:", error);
        } finally {
            setLoading(false);
        }
    }
    // console.log("frank", loadedPa[0]?.Member_MemberUniqueID);

    // async function GetPAHistoryzz() {
    //     setPaginatedLoader(true);

    //     console.log("vvppss", loadedPa[0]?.Member_MemberUniqueID);
    //     const response = `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${
    //         enrollee?.Member_MemberUniqueID ||
    //         loadedPa[0]?.Member_MemberUniqueID
    //     }&PAStatus&visitid`;

    //     console.log("vvppss", response);

    //     const responses = await fetch(
    //         `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${
    //             enrollee?.Member_MemberUniqueID ||
    //             loadedPa[0]?.Member_MemberUniqueID
    //         }&PAStatus&visitid`,
    //         {
    //             method: "GET",
    //         },
    //     );

    //     const data = await responses.json();
    //     setReloadedPa(data.result);
    //     // setPaginatedLoader(false);
    //     console.log("vvppx", data.result);
    // }

    async function GetPAHistory() {
        setPaginatedLoader(true);

        console.log("vvvv", loadedPa[0]?.Member_MemberUniqueID);
        const response = `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${
            enrollee?.Member_MemberUniqueID ||
            loadedPa[0]?.Member_MemberUniqueID
        }&PAStatus&visitid`;

        console.log("lllzz", response);
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=${
                    enrollee?.Member_MemberUniqueID ||
                    loadedPa[0]?.Member_MemberUniqueID
                }&PAStatus&visitid`,
                {
                    method: "GET",
                },
            );

            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }

            const data = await response.json();

            console.log("paselqq", data.result);

            SetPa(data.result);
            //SetPaProvider(data.result.issuedBy);
            setPaProviderId(data.PROVIDER_ID);
            setPaginatedUniGesults(getUniqueVisitIds(data?.result));
        } catch (error) {
            console?.error("Error getting PA:", error);
        }
        setPaginatedLoader(false);
    }

    // console.log("sss", visitid);

    async function GetLoadedPAHistory(visit_id) {
        setLoading(true);

        const response = fetch(
            `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=0&PAStatus&visitid=${visit_id}`,
            {
                method: "GET",
            },
        );
        // console.log("pasels", response);

        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=0&PAStatus&visitid=${visit_id}`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log("paselectedhistory", data.result);

            SetSelectedPa(data.result);
            //SetPaProvider(data.result.issuedBy);
            // setPaProviderId(data.PROVIDER_ID);
            // setPaginatedUniqueResults(getUniqueVisitIds(data.result));
        } catch (error) {
            console.error("Error getting PA:", error);
        } finally {
            setLoading(false);
        }
    }
    async function GetLoadedPAHistoryFromDashboard() {
        setLoading(true);

        const response = fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${pendingPa.MemberNumber}`,
            {
                method: "GET",
            },
        );
        console.log("paselssx", response);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${pendingPa.MemberNumber}`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("paselss", data.result);

            // if (response.ok) {
            //     console.log("testing", response);
            //     GetPAHistory(data.result[0]?.Member_MemberUniqueID);
            // }
            SetLoadedPa(data.result);
            //SetPaProvider(data.result.issuedBy);
            // setPaProviderId(data.PROVIDER_ID);
            // setPaginatedUniqueResults(getUniqueVisitIds(data.result));
        } catch (error) {
            console.error("Error getting PA:", error);
        } finally {
            setLoading(false);
        }
    }
    async function GetLoadedPAHistoryID() {
        setLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/GetEnrolleePreauthorizations?Fromdate=&Todate=&cifno=0&PAStatus&visitid=${visitid}`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            //   console.log("paselectedhistory", data.result);

            SetSelectedPa(data.result);
            //SetPaProvider(data.result.issuedBy);
            // setPaProviderId(data.PROVIDER_ID);
            // setPaginatedUniqueResults(getUniqueVisitIds(data.result));
        } catch (error) {
            console.error("Error getting PA:", error);
        } finally {
            setLoading(false);
        }
    }

    function getUniqueVisitIds(data) {
        const seen = new Set();
        return data.filter((item) => {
            if (seen.has(item.visitid)) return false;
            seen.add(item.visitid);
            return true;
        });
    }

    // useEffect(() => {
    //     if (isModalOpen) fetchProviders();
    // }, [isModalOpen]);

    const [currentPAPage, setCurrentPAPage] = useState(1);

    const seenIDs = new Set();

    const uniqueResults = useMemo(() => {
        // First, sort entire array by Visitdate
        const sortedData = [...pa].sort((a, b) => {
            const dateA = new Date(a.Visitdate).getTime();
            const dateB = new Date(b.Visitdate).getTime();
            return dateB - dateA; // Earliest first
        });
        //   console.log("pax", pa);
        // Then get first (earliest) occurrence of each enrolleeID
        const seenIDs = new Set();
        const uniqueArray = [];

        for (const item of sortedData) {
            if (!seenIDs.has(item.VisitID1)) {
                seenIDs.add(item.VisitID1);
                uniqueArray.push(item);
            }
        }

        return uniqueArray;
    }, [pa]); // Only recalculate when combinedOpenPA changes

    // Pagination logic
    const itemsPerPage = 5;
    const totalPages = Math.ceil(uniqueResults.length / itemsPerPage);
    const startIndex = (pageCurrentPage - 1) * itemsPerPage;
    const paginatedUniqueResults = uniqueResults.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

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

    async function GetBiodata() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${
                    enrollee.Member_EnrolleeID || enrollee.enrolleeID
                }
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // console.log("Allbiodata:", data.result);

            setBiodata(data);
        } catch (error) {
            console.error("Error getting enrollee bio data:", error);
        } finally {
            setLoading(false);
        }
    }
    // const base64Image = `data:image/jpeg;base64,${biodata.profilepic}`;

    console.log("pendingPa", pendingPa);
    console.log("pendingPa2", filteredProvider);
    useEffect(() => {
        if (pendingPa && filteredProvider && filteredProvider.length > 0) {
            handleSelectProcedure(pendingPa);
        }
    }, [pendingPa, filteredProvider]);

    //     useEffect(() => {
    //     // Only run if filteredProvider is ready and not empty
    //     if (!filteredProvider || filteredProvider.length === 0) return;

    //     // Then check if pendingPa is ready
    //     if (pendingPa) {
    //         handleSelectProcedure(pendingPa);
    //     }
    // }, [filteredProvider, pendingPa]);

    const base64Image = biodata?.profilepic
        ? `data:image/jpeg;base64,${biodata.profilepic}`
        : "/Avataraang.svg";

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
                                        src={base64Image}
                                        alt="Profile"
                                        className="w-20 h-20 rounded-full"
                                    />
                                    <div className=" items-center mt-2 rounded-full flex gap-2 ">
                                        {enrollee?.Member_MemberStatus_Description ===
                                            "Active" ||
                                        loadedPa[0]
                                            ?.Member_MemberStatus_Description ===
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
                                                {enrollee?.Member_CustomerName ||
                                                    loadedPa[0]
                                                        ?.Member_CustomerName}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Date of Birth
                                            </span>
                                            <span className="block font-medium">
                                                {/* {
                                                    new Date(
                                                        enrollee.Member_DateOfBirth,
                                                    )
                                                        .toISOString()
                                                        .split("T")[0]
                                                } */}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Enrollee ID
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Member_EnrolleeID ||
                                                    loadedPa[0]
                                                        ?.Member_EnrolleeID}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Phone Number
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Member_Phone_One ||
                                                    loadedPa[0]
                                                        ?.Member_Phone_One}{" "}
                                                ||
                                                {enrollee?.Member_Phone_Two ||
                                                    loadedPa[0]
                                                        ?.Member_Phone_Two}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Group
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Client_ClientName ||
                                                    loadedPa[0]
                                                        ?.Client_ClientName}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-gray-500">
                                                Email Address
                                            </span>
                                            <span className="block font-medium break-words">
                                                {enrollee?.Client_EmailAddress ||
                                                    loadedPa[0]
                                                        ?.Client_EmailAddress}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Scheme
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.client_schemename ||
                                                    loadedPa[0]
                                                        ?.client_schemename}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-gray-500">
                                                Age
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Member_Age ||
                                                    loadedPa[0]?.Member_Age}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                Member Type
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Member_Membertype ||
                                                    loadedPa[0]
                                                        ?.Member_Membertype}
                                            </span>
                                        </div>
                                        {/* <div>
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
                                        </div> */}
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
                                                {enrollee?.Client_ContactPerson ||
                                                    loadedPa[0]
                                                        ?.Client_ContactPerson}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500">
                                                NOK Phone Number
                                            </span>
                                            <span className="block font-medium">
                                                {enrollee?.Client_ContactPhone1 ||
                                                    loadedPa[0]
                                                        ?.Client_ContactPhone1}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-gray-500 whitespace-nowrap">
                                                Original start Date
                                            </span>

                                            <span className=" block font-medium break-words text-[15px] leading-tight">
                                                {
                                                    new Date(
                                                        enrollee?.Client_DateAccepted ||
                                                            loadedPa[0]
                                                                ?.Client_DateAccepted,
                                                    ).toLocaleDateString(
                                                        "en-GB",
                                                    ) // Formats the date as day/month/year
                                                }
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500 whitespace-nowrap">
                                                Contract Start Date
                                            </span>

                                            <span className=" block font-medium break-words text-[15px] leading-tight">
                                                N/A
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500 whitespace-nowrap">
                                                Contract End Date
                                            </span>

                                            <span className=" block font-medium break-words text-[15px] leading-tight">
                                                {
                                                    new Date(
                                                        enrollee?.Client_Expiry_date ||
                                                            loadedPa[0]
                                                                ?.Client_Expiry_date,
                                                    ).toLocaleDateString(
                                                        "en-GB",
                                                    ) // Formats the date as day/month/year
                                                }
                                            </span>
                                        </div>

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
                        <div className=" flex">
                            <div className="">
                                <div className="flex ml-6 space-x-4">
                                    <div className="relative w-[250px]">
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
                                                setSelectedVisitType(
                                                    selectedOption,
                                                )
                                            }
                                            className="relative w-full h-[44px] rounded-lg outline-none border border-black"
                                        />
                                    </div>

                                    <div className="relative w-[200/px]">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            Encounter Start Date
                                        </label>
                                        <div className="relative w-full h-[44px] border border-black rounded-lg outline-none">
                                            <input
                                                type="date"
                                                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
                                                onChange={(e) =>
                                                    SetEncounterDate(
                                                        e.target.value,
                                                    )
                                                }
                                                value={encounterDate}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="whitespace-nowrap h-15 px-3 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md mt-8"
                                        onClick={() => setIsModalsOpen(true)}
                                    >
                                        Get Benefits
                                    </button>
                                    {/* <div className="relative w-[320px] ">
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
                                 </div> */}
                                </div>

                                <div className="flex ml-6 space-x-4 mt-4">
                                    <div className="relative w-[280px]">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            Requesting Provider
                                        </label>

                                        <input
                                            className="relative w-full h-[44px] rounded-lg outline-none border border-black px-2"
                                            onChange={(e) => {
                                                setSearchProvider(
                                                    e.target.value,
                                                );
                                                setShowSearchDropDown(true);
                                            }}
                                            value={searchProvider}
                                            placeholder="Search Provider"
                                        />

                                        {showSearchDropDown && (
                                            <div className="h-[220px] w-full absolute bg-white z-10 border rounded-[10px] p-3">
                                                <div className="h-[180px] overflow-y-auto">
                                                    {filteredProvider
                                                        .filter((prov) =>
                                                            prov.provider
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchProvider.toLowerCase(),
                                                                ),
                                                        )
                                                        .slice(
                                                            (providerCurrentPage -
                                                                1) *
                                                                10,
                                                            providerCurrentPage *
                                                                10,
                                                        )

                                                        .map((prov, index) => (
                                                            <p
                                                                key={
                                                                    prov.provider_id ||
                                                                    `${prov.provider}-${index}`
                                                                }
                                                                className="my-1 p-1 cursor-pointer hover:bg-slate-100 rounded"
                                                                onClick={(
                                                                    e,
                                                                ) => {
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
                                                            setProviderCurrentPage(
                                                                (prev) =>
                                                                    Math.max(
                                                                        0,
                                                                        prev -
                                                                            1,
                                                                    ),
                                                            )
                                                        }
                                                        disabled={
                                                            providerCurrentPage ===
                                                            1
                                                        }
                                                        className={`px-2 py-1 rounded ${
                                                            providerCurrentPage ===
                                                            1
                                                                ? "text-gray-400"
                                                                : "text-blue-500 hover:bg-blue-50"
                                                        }`}
                                                    >
                                                        Previous
                                                    </button>
                                                    <span className="text-sm text-gray-500">
                                                        Page{" "}
                                                        {providerCurrentPage} of{" "}
                                                        {Math.ceil(
                                                            filteredProvider.filter(
                                                                (prov) =>
                                                                    prov.provider
                                                                        .toLowerCase()
                                                                        .includes(
                                                                            searchProvider.toLowerCase(),
                                                                        ),
                                                            ).length / 10,
                                                        )}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            setProviderCurrentPage(
                                                                (prev) => {
                                                                    const filteredLength =
                                                                        filteredProvider.filter(
                                                                            (
                                                                                prov,
                                                                            ) =>
                                                                                prov.provider
                                                                                    .toLowerCase()
                                                                                    .includes(
                                                                                        searchProvider.toLowerCase(),
                                                                                    ),
                                                                        ).length;
                                                                    return (prev +
                                                                        1) *
                                                                        10 <
                                                                        filteredLength
                                                                        ? prev +
                                                                              1
                                                                        : prev;
                                                                },
                                                            )
                                                        }
                                                        disabled={
                                                            (providerCurrentPage +
                                                                1) *
                                                                10 >=
                                                            filteredProvider.filter(
                                                                (prov) =>
                                                                    prov.provider
                                                                        .toLowerCase()
                                                                        .includes(
                                                                            searchProvider.toLowerCase(),
                                                                        ),
                                                            ).length
                                                        }
                                                        className={`px-2 py-1 rounded ${
                                                            (providerCurrentPage +
                                                                1) *
                                                                10 >=
                                                            filteredProvider.filter(
                                                                (prov) =>
                                                                    prov.provider
                                                                        .toLowerCase()
                                                                        .includes(
                                                                            searchProvider.toLowerCase(),
                                                                        ),
                                                            ).length
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

                                    <div className="relative w-[260px]">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            Provider Email
                                        </label>
                                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                                            <input
                                                disabled
                                                type="email"
                                                placeholder={
                                                    selectedProviders?.email
                                                }
                                                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-black"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className=" flex ml-6 space-x-4 ">
                                    <div>
                                        {visitIdLoader ? (
                                            <button
                                                disabled
                                                className="flex items-center gap-2 whitespace-nowrap h-11 px-9 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md mt-8"
                                            >
                                                <FaSpinner className="animate-spin text-xl" />
                                                Getting Visit Number...
                                            </button>
                                        ) : (
                                            <button
                                                className="whitespace-nowrap h-11 px-9 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md mt-8"
                                                onClick={handleSubmit}
                                            >
                                                Get Visit Number
                                            </button>
                                        )}
                                    </div>

                                    <div className=" whitespace-nowrap h-11 px-5 pt-1  text-black border border-[#3b3637] bg-[#312d2e1a]  rounded-md mt-8 items-end">
                                        <h2 className=" text-[25px]">
                                            {visitid}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className=" border border-l-2 border-black  ml-1"></div>

                            <div className="flex relative overflow-x-auto ml-2">
                                <table className="min-w-full table-auto border-collapse text-sm">
                                    <thead className="bg-gray-100 text-left text-[10px]">
                                        <tr>
                                            <th className="p-2 border"></th>
                                            <th className="p-2 border whitespace-nowrap">
                                                Visit PA Code
                                            </th>
                                            <th className="p-2 border">Date</th>
                                            <th className="p-2 border whitespace-nowrap">
                                                Visit Type
                                            </th>
                                            <th className="p-2 border">
                                                Provider
                                            </th>
                                            <th className="p-2 border">
                                                Issuer
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedLoader ? (
                                            <tr>
                                                <td
                                                    colSpan={6}
                                                    className="text-center py-10 w-[40rem]"
                                                >
                                                    <div className="flex flex-col justify-center items-center w-full">
                                                        <img
                                                            src="./loaderx.gif"
                                                            alt="Loading animation"
                                                            className="w-40 h-40"
                                                        />
                                                        <h2 className="text-lg font-semibold text-gray-700 mt-2 w-full">
                                                            Fetching data...
                                                        </h2>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : paginatedUniqueResults &&
                                          paginatedUniqueResults.length > 0 ? (
                                            paginatedUniqueResults.map(
                                                (proc, idx) => (
                                                    <tr
                                                        key={idx}
                                                        className="border-t text-[10px]"
                                                    >
                                                        <td className="px-4 border">
                                                            <button
                                                                className="px-3 whitespace-nowrap border border-blue-500 hover:bg-blue-50"
                                                                onClick={() =>
                                                                    handleSelectProcedure(
                                                                        proc,
                                                                    )
                                                                }
                                                            >
                                                                Select
                                                            </button>
                                                        </td>

                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.PACODE1}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {formatISOToCustom(
                                                                proc.Visitdate,
                                                            )}
                                                        </td>

                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.visitType}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.provider}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.issuedBy}
                                                        </td>
                                                    </tr>
                                                ),
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={6}
                                                    className="text-center py-10 w-[40rem]"
                                                >
                                                    <div className="flex justify-center items-center h-full">
                                                        <h2>Server Error</h2>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {uniqueResults.length > itemsPerPage && (
                            <div className="flex  mt-2 items-center gap-4 pb-2 ml-[41rem]">
                                <button
                                    className="px-1 py-0.5 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                    disabled={pageCurrentPage === 1}
                                    onClick={() =>
                                        setPageCurrentPage((prev) =>
                                            Math.max(prev - 1, 1),
                                        )
                                    }
                                >
                                    <MdSkipPrevious className="w-7 h-7 mr-2" />
                                    Previous
                                </button>

                                <span className="text-gray-700 text-lg font-semibold">
                                    Page {pageCurrentPage} of {totalPages} Pages
                                </span>

                                <button
                                    className="px-1 py-0.5 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                    disabled={pageCurrentPage >= totalPages}
                                    onClick={() =>
                                        setPageCurrentPage((prev) => prev + 1)
                                    }
                                >
                                    <CgPlayTrackNext className="w-7 h-7 mr-2" />
                                    Next
                                </button>
                            </div>
                        )}

                        {selectedVisitType?.label !== "Health Checks" && (
                            <>
                                <div className="ml-6  mb-6">
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
                                                {diagnoses.map(
                                                    (diag, index) => (
                                                        <div
                                                            className="flex space-x-4 mt-2 relative"
                                                            key={diag.id}
                                                        >
                                                            {/* Diagnosis Code Input */}
                                                            <div className="flex flex-col mr-10">
                                                                <label className="font-semibold">
                                                                    Diagnosis
                                                                    Code
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
                                                                        value={
                                                                            diag.code
                                                                        }
                                                                        onChange={(
                                                                            e,
                                                                        ) =>
                                                                            handleSearchChange(
                                                                                index,
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                            )
                                                                        }
                                                                    />
                                                                </div>

                                                                {diag
                                                                    .filteredResults
                                                                    .length >
                                                                    0 && (
                                                                    <ul className="border border-gray-300 w-[240px] mt-[4.5rem] bg-white shadow-lg rounded-md absolute z-10">
                                                                        {diag.filteredResults
                                                                            .slice(
                                                                                0,
                                                                                5,
                                                                            )
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
                                                                    Diagnostic
                                                                    Description
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
                                                            {diagnoses.length >
                                                                1 && (
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
                                                    ),
                                                )}

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
                                            className="hidden"
                                        >
                                            <option value="">Select</option>
                                            {utilizationLines.map((item) => (
                                                <option
                                                    key={item.FilterType}
                                                    value={
                                                        item.ExtensionRemarks
                                                    }
                                                >
                                                    {item.ExtensionRemarks}
                                                </option>
                                            ))}
                                        </select>
                                        {selectedData && (
                                            <div className="mt-4 p-4 border rounded-md">
                                                <div className="grid grid-cols-2 gap-4">
                                                    {procedures.map(
                                                        (proc, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex space-x-4 mt-2 relative"
                                                            >
                                                                {/* Procedure Code Search */}
                                                                <div className="flex flex-col mr-10">
                                                                    <label className="font-semibold">
                                                                        Procedure
                                                                        Code
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
                                                                            onChange={(
                                                                                e,
                                                                            ) =>
                                                                                handleSearchChangeProcedure(
                                                                                    index,
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>

                                                                    {proc
                                                                        .filteredResults
                                                                        ?.length >
                                                                        0 && (
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
                                                                                                    procedure.tariff_code
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
                                                                                                    procedure.tariff_code
                                                                                                }{" "}
                                                                                                -{" "}
                                                                                                {
                                                                                                    procedure.tariff_desc
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
                                                                    <div className="w-[400px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Procedure description"
                                                                            className="w-full h-full outline-none border-none px-2"
                                                                            value={
                                                                                proc.description
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col ">
                                                                    <label className="font-semibold whitespace-nowrap">
                                                                        Price
                                                                    </label>
                                                                    <div className="w-[90px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                                        <h2 className=" ml-1">
                                                                            {
                                                                                "\u20A6"
                                                                            }
                                                                            {
                                                                                price
                                                                            }
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col ">
                                                                    <label className="font-semibold whitespace-nowrap">
                                                                        Quantity
                                                                    </label>
                                                                    <div className="w-[90px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Quantity"
                                                                            className="w-full h-full outline-none border-none px-1"
                                                                            value={
                                                                                proc.ProcedureQty ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) => {
                                                                                const updatedProcedures =
                                                                                    [
                                                                                        ...procedures,
                                                                                    ];
                                                                                updatedProcedures[
                                                                                    index
                                                                                ].ProcedureQty =
                                                                                    e.target.value;
                                                                                setProcedures(
                                                                                    updatedProcedures,
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col ">
                                                                    <label className="font-semibold whitespace-nowrap">
                                                                        Preferred
                                                                        Price
                                                                    </label>
                                                                    <div className="w-[90px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Price"
                                                                            className="w-full h-full outline-none border-none px-2"
                                                                            value={
                                                                                proc.ChargeAmount ||
                                                                                ""
                                                                            }
                                                                            onChange={(
                                                                                e,
                                                                            ) => {
                                                                                const updatedProcedures =
                                                                                    [
                                                                                        ...procedures,
                                                                                    ];
                                                                                updatedProcedures[
                                                                                    index
                                                                                ].ChargeAmount =
                                                                                    e.target.value;
                                                                                setProcedures(
                                                                                    updatedProcedures,
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    {addProcedureLoader ? (
                                                                        <button
                                                                            disabled
                                                                            className="flex justify-end cursor-pointer mt-6 border border-red-500 bg-red-700 text-white rounded-md whitespace-nowrap text-[0.8rem] px-3 py-3"
                                                                        >
                                                                            Adding...
                                                                            <FaSpinner className="animate-spin text-xl" />
                                                                        </button>
                                                                    ) : (
                                                                        <div
                                                                            className="flex justify-end cursor-pointer mt-6 border border-red-500 bg-red-700 text-white rounded-md whitespace-nowrap text-[0.8rem] px-1 py-3"
                                                                            onClick={
                                                                                handleAddProcedures
                                                                            }
                                                                        >
                                                                            {/* <img
                                                                                src="./Group 2356.svg"
                                                                                alt=""
                                                                                className="mr-2"
                                                                            /> */}
                                                                            <span className=" font-semibold">
                                                                                Add
                                                                                Procedure
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
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
                                            <table className="w-full mt-4 border border-gray-300">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="p-2 border">
                                                            #
                                                        </th>
                                                        <th className="p-2 border">
                                                            Procedure Code
                                                        </th>
                                                        <th className="p-2 border">
                                                            Procecedure
                                                            Description
                                                        </th>
                                                        <th className="p-2 border">
                                                            Registered Price
                                                        </th>
                                                        <th className="p-2 border">
                                                            Quantity
                                                        </th>
                                                        <th className="p-2 border">
                                                            Preferred Price (₦)
                                                        </th>
                                                        <th className="p-2 border">
                                                            PA Code/Status
                                                        </th>
                                                        {/* <th className="p-2 border">
                                                            Actions
                                                        </th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedProcedures.length ===
                                                    0 ? (
                                                        <tr>
                                                            <td
                                                                colSpan="6"
                                                                className="p-4 text-center text-gray-500"
                                                            >
                                                                No procedures
                                                                added yet.
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        selectedPa.map(
                                                            (proc, idx) => {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="border-t"
                                                                    >
                                                                        <td className="p-2 border text-center">
                                                                            {idx +
                                                                                1}
                                                                        </td>
                                                                        <td className="p-2 border">
                                                                            {
                                                                                proc.ProcedureCode
                                                                            }
                                                                        </td>
                                                                        <td className="p-2 border">
                                                                            {proc.ExtensionRemarks ||
                                                                                proc.ProcedureDescription}
                                                                        </td>
                                                                        <td className="p-2 border text-center">
                                                                            ₦
                                                                            {
                                                                                proc.chargeamount
                                                                            }
                                                                        </td>
                                                                        <td className="p-2 border text-center">
                                                                            {proc.ProcedureQty?.trim()}
                                                                        </td>
                                                                        <td className="p-2 border text-center">
                                                                            ₦
                                                                            {proc.ChargeAmount
                                                                                ? Number(
                                                                                      proc.ChargeAmount,
                                                                                  ).toLocaleString()
                                                                                : "—"}
                                                                        </td>
                                                                        <td className="p-2 border text-center whitespace-nowrap">
                                                                            {
                                                                                proc.PACode
                                                                            }
                                                                        </td>
                                                                        {/* <td className="p-2 border text-center">
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
                                                                        </td> */}
                                                                    </tr>
                                                                );
                                                            },
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4  ml-6 font-semibold text-lg text-red-700">
                                    Total Amount: ₦
                                    {totalAmount.toLocaleString()}
                                </div>

                                {/* <div
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
                                </div> */}
                            </>
                        )}

                        {selectedVisitType?.label === "Health Checks" && (
                            <div className="mt-6">
                                <h3 className="text-red-700 flex items-center font-bold text-[20px]  ml-10">
                                    Hospital Visit Information
                                    <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                                </h3>
                                <div className=" flex gap-4 mt-5">
                                    <div className="relative w-[350px] ml-5">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            State of Residence
                                        </label>
                                        <DateDropdown
                                            key="service-dropdown"
                                            options={state.map((type) => ({
                                                label: type.Text,
                                                value: type.Value,
                                            }))}
                                            selectedValue={selectedState}
                                            sendSelection={(selectedOption) =>
                                                setState(selectedOption)
                                            }
                                            className="relative w-full h-[44px] rounded-lg outline-none"
                                        />
                                    </div>

                                    <div className="relative w-[350px]">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            Screening Location
                                        </label>
                                        <DateDropdown
                                            key="service-dropdown"
                                            options={lga.map((type) => ({
                                                label: type.Text,
                                                value: type.Value,
                                            }))}
                                            selectedValue={selectedLga}
                                            sendSelection={(selectedOption) =>
                                                setSelectedLga(selectedOption)
                                            }
                                            className="relative w-full h-[44px] rounded-lg outline-none"
                                        />
                                    </div>
                                    <div className="relative w-[350px]">
                                        <label className="block mb-2 text-gray-700 font-medium">
                                            Facility
                                        </label>
                                        <DateDropdown
                                            key="facility"
                                            options={filteredProvider.map(
                                                (type) => ({
                                                    label: type.provider,
                                                    value: type.provider_id.toString(),
                                                }),
                                            )}
                                            selectedValue={selectedFacility}
                                            sendSelection={(selectedOption) =>
                                                setSelectedFacility(
                                                    selectedOption,
                                                )
                                            }
                                            className="relative w-full h-[44px] rounded-lg outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

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
                            {/* <div>
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
                                            onClick={handleSubmitPA}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div> */}

                            <CreatePAModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                response={apiResponse}
                            />
                            {/* benefitModal */}

                            {isModalsOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                                    <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg relative">
                                        <div className="flex justify-between items-center px-4 py-3 border-b">
                                            <h2 className="text-lg font-semibold text-red-700">
                                                {selectedVisitType?.label}
                                            </h2>
                                            <button
                                                onClick={() =>
                                                    setIsModalsOpen(false)
                                                }
                                                className="text-gray-600 hover:text-red-500 text-xl"
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        <div className="max-h-[70vh] overflow-y-auto p-4">
                                            {loading ? (
                                                <p className="text-center text-gray-500">
                                                    Loading...
                                                </p>
                                            ) : (
                                                <table className="min-w-full table-auto border-collapse text-sm">
                                                    <thead className="bg-gray-100 text-left">
                                                        <tr>
                                                            <th className="p-2 border">
                                                                Benefit
                                                            </th>
                                                            <th className="p-2 border">
                                                                Limit
                                                            </th>
                                                            <th className="p-2 border">
                                                                Servicename
                                                            </th>
                                                            <th className="p-2 border">
                                                                Membername
                                                            </th>
                                                            <th className="p-2 border">
                                                                Authorised
                                                            </th>
                                                            <th className="p-2 border text-right">
                                                                Used
                                                            </th>
                                                            <th className="p-2 border text-right">
                                                                Balance
                                                            </th>
                                                            <th className="p-2 border text-right">
                                                                Schemename
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {benefit.map(
                                                            (item, index) => (
                                                                <tr
                                                                    key={index}
                                                                    className="even:bg-gray-50"
                                                                >
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.Benefit
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.Limit
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.servicename
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.membername
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.Authorised
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.Used
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.Balance
                                                                        }
                                                                    </td>
                                                                    <td className="p-2 border">
                                                                        {
                                                                            item.schemename
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {ShowPATable && (
                            <div className="  flex gap-3 w-full">
                                <div className="w-[80%] flex relative overflow-x-auto">
                                    <table className="min-w-full table-auto border-collapse text-sm mt-5 ">
                                        <thead className="bg-gray-100 text-left text-[10px]">
                                            <tr>
                                                <th className=" px-2 py-1 text-left border">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectAll}
                                                        onChange={
                                                            handleSelectAll
                                                        }
                                                        className="h-3 w-3"
                                                    />
                                                </th>
                                                <th className="p-2 border">
                                                    DiagnosisCode
                                                </th>
                                                <th className="p-2 border whitespace-nowrap">
                                                    Diagnosis Description
                                                </th>
                                                <th className="p-2 border whitespace-nowrap">
                                                    Procedure Code
                                                </th>
                                                <th className="p-2 border whitespace-nowrap">
                                                    Procedure Description
                                                </th>
                                                <th className="p-2 border whitespace-nowrap">
                                                    PA Code
                                                </th>
                                                <th className="p-2 border">
                                                    Provider
                                                </th>
                                                <th className="p-2 border">
                                                    VisitID
                                                </th>
                                                <th className="p-2 border">
                                                    VisitDate
                                                </th>
                                                <th className="p-2 border">
                                                    Username
                                                </th>
                                                <th className="p-2 border whitespace-nowrap">
                                                    Doctor Recommendations
                                                </th>
                                                <th className="p-2 border">
                                                    ServiceType
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedPa.map((proc, idx) => {
                                                const isSelected =
                                                    selectedItems.some(
                                                        (selected) =>
                                                            selected.VisitDetailsID ===
                                                            proc.VisitDetailsID,
                                                    );

                                                return (
                                                    <tr
                                                        key={idx}
                                                        className="border-t text-[10px] "
                                                    >
                                                        <td className=" p-2 text-center  ">
                                                            <input
                                                                type="checkbox"
                                                                checked={
                                                                    isSelected
                                                                }
                                                                onChange={() =>
                                                                    handleCheckboxChange(
                                                                        proc,
                                                                    )
                                                                }
                                                                className="border-black border"
                                                            />
                                                        </td>

                                                        <td className="px-4 py-2 ">
                                                            {alldiagnosis[0]
                                                                ?.DiagnosisCode ||
                                                                pa.diagcode ||
                                                                proc.diagcode.split(
                                                                    " ",
                                                                )[0] ||
                                                                "N/A"}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {alldiagnosis[0]
                                                                ?.DiagnosisDescription ||
                                                                proc.diagcode
                                                                    .split(" ")
                                                                    .slice(1)
                                                                    .join(" ")}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {proc.ProcedureCode}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.ExtensionRemarks ||
                                                                proc.ProcedureDescription}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {proc.PACode}
                                                        </td>

                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {searchProvider}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {proc?.apiResponse
                                                                ?.visitdetails_id ||
                                                                proc.visitid}
                                                        </td>
                                                        <td className="px-4 py-2 border whitespace-nowrap">
                                                            {encounterDate}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {provEmail}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {doctorsprescription ==
                                                            null
                                                                ? "No prescription"
                                                                : doctorsprescription}
                                                        </td>
                                                        <td className="px-4 py-2 border">
                                                            {proc.visitType}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grid grid-cols-2  h-[90px] mt-3 gap-2 ">
                                    <div>
                                        {submitLoader ? (
                                            <button
                                                disabled
                                                className="flex items-center gap-2 whitespace-nowrap h-9 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                            >
                                                Approving...
                                                <FaSpinner className="animate-spin text-xl" />
                                            </button>
                                        ) : (
                                            <button
                                                className="h-9 px-3 whitespace-nowrap text-center text-white bg-red-700 rounded-md"
                                                onClick={() =>
                                                    handleApprovePA()
                                                }
                                            >
                                                Approve All
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        className="h-9 px-4 whitespace-nowrap text-center text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                        onClick={() => setRejectModal(true)}
                                    >
                                        Reject All
                                    </button>{" "}
                                    <div>
                                        {singleSubmitLoader ? (
                                            <button
                                                disabled
                                                className="flex items-center gap-2 whitespace-nowrap h-9  text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                            >
                                                Approving..
                                                <FaSpinner className="animate-spin text-xl" />
                                            </button>
                                        ) : (
                                            <button
                                                className="h-9 px-6 text-center text-white bg-red-700 rounded-md"
                                                onClick={() =>
                                                    handleSingleApprovePA()
                                                }
                                            >
                                                Approve
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        className="whitespace-nowrap  h-9 px-8    text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md "
                                        onClick={() => setRejectModal(true)}
                                    >
                                        Reject
                                    </button>{" "}
                                </div>
                            </div>
                        )}
                        {rejectModal && (
                            <div className=" z-50 bg-black justify-center items-center inset-0 fixed flex bg-opacity-50">
                                <div className=" bg-white  rounded-lg shadow-lg w-full max-w-md p-6">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Reject PA
                                    </h2>
                                    <input
                                        type="text"
                                        placeholder="Enter reason"
                                        className="w-full border border-gray-300 rounded p-2 outline-red-600 "
                                        value={rejectionMessage}
                                        onChange={(e) =>
                                            setRejectionMessage(e.target.value)
                                        }
                                    ></input>
                                    <div className=" flex justify-end gap-2 mt-3">
                                        {/* <button
                                            className=" whitespace-nowrap  bg-red-600 text-white px-4 py-2 rounded"
                                            onClick={handleRejectPA}
                                        >
                                            Reject Pa
                                        </button> */}

                                        <div>
                                            {rejectLoader ? (
                                                <button
                                                    disabled
                                                    className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md"
                                                >
                                                    Rejecting Pa...
                                                    <FaSpinner className="animate-spin text-xl" />
                                                </button>
                                            ) : (
                                                <button
                                                    className="px-4 py-2 text-center text-white bg-red-700 rounded-md"
                                                    onClick={handleRejectPA}
                                                >
                                                    Reject Pa
                                                </button>
                                            )}
                                        </div>
                                        <button
                                            className=" whitespace-nowrap  border border-gray-300 rounded p-2 "
                                            onClick={() =>
                                                setRejectModal(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {fetchingData && (
                            <div className=" z-50 bg-black justify-center items-center inset-0 fixed flex bg-opacity-50">
                                <img
                                    src="./loaderx.gif"
                                    alt="Loading animation"
                                    className="w-40 h-40" /* Adjust size as needed */
                                />
                                <h2 className="text-lg font-semibold mb-4 text-white">
                                    Fetching data...
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType} />}
        </div>
    );
};

export default CreateEnroleePACode;

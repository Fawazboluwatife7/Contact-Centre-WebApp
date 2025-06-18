import React, { useEffect, useState } from "react";
import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { CiExport } from "react-icons/ci";
import { BiSolidPrinter } from "react-icons/bi";
import { CgPlayTrackNext } from "react-icons/cg";
import { MdSkipPrevious } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const ProvidersPage = () => {
    const navigate = useNavigate();
    const handleNavigate = (enrollee) => {
        navigate("/cspatienthistory", { state: { enrollee } });
    };

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [enrollees, setEnrollees] = useState([]);
    const [searchInputs, setSearchInputs] = useState({
        ProviderName: "",
        providerCode: "",
        Speciality: "",
        StateID: "",
        LGA: "",
        EnrolleeId: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [lga, setLGA] = useState([]);
    const [specialization, setSpeciality] = useState([]);
    const [state, setState] = useState([]);
    const [enrolleeBioData, SetEnrolleeBioData] = useState([]);

    const [results, setResults] = useState([]); // Stores the fetched results
    const [providers, SetProvider] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(providers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedResults = providers.slice(startIndex, endIndex);

    // const submitEmailAddress = async () => {
    //     const postData = {
    //         EmailAddress: enrolleeBioData,
    //         CC: "",
    //         BCC: "",
    //         Subject: "Leadway Health",
    //         MessageBody:
    //             "Dear Enrollee here are the lists of providers that you can access under your plan",
    //         Attachments: null,
    //         Category: "",
    //         UserId: 0,
    //         ProviderId: 0,
    //         ServiceId: 0,
    //         Reference: "",
    //         TransactionType: "",
    //     };

    //     console.log(":", JSON.stringify(postData, null, 2));
    //     try {
    //         const response = await fetch(
    //             `${apiUrl}api/EnrolleeProfile/SendEmailAlert`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json", // Ensure proper content type
    //                 },
    //                 body: JSON.stringify(postData), // Convert object to JSON
    //             },
    //         );

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const data = await response.json();

    //         if (data.status === 200 && data.VisitID) {
    //             alert(`Visit ID ${data.VisitID} generated successfully!`);
    //             setVisitId(data.VisitID);
    //         } else {
    //             alert(`Unexpected response: ${JSON.stringify(data)}`);
    //         }

    //         SetData(data);
    //         console.log("Success:", data);
    //     } catch (error) {
    //         console.error("Error submitting data:", error);
    //     } finally {
    //         setVisitIdLoader(false);
    //     }
    // };

    // const exportToExcel = (data, fileName = "Providers.xlsx") => {
    //     if (!data || data.length === 0) {
    //         alert("No data to export!");
    //         return;
    //     }

    //     // Select only the fields you want
    //     const selectedFields = data.map(
    //         ({ provider, phone1, phone2, Discipline, ProviderAddress }) => ({
    //             provider: provider?.trim() || "N/A", // Ensure provider exists & remove extra spaces
    //             phone1: phone1?.trim() || "N/A",
    //             phone2: phone2?.trim() || "N/A",
    //             Discipline: Discipline || "N/A",
    //             ProviderAddress: ProviderAddress || "N/A",
    //         }),
    //     );

    //     // Convert to Excel sheet
    //     const worksheet = XLSX.utils.json_to_sheet(selectedFields);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "FilteredData");

    //     // Convert to downloadable format
    //     const excelBuffer = XLSX.write(workbook, {
    //         bookType: "xlsx",
    //         type: "array",
    //     });
    //     const dataBlob = new Blob([excelBuffer], {
    //         type: "application/octet-stream",
    //     });

    //     // Download the file
    //     saveAs(dataBlob, fileName);
    // };

    const handleExportAndSendEmail = async () => {
        if (!providers || providers.length === 0) {
            alert("No data to export!");
            return;
        }

        try {
            // Generate PDF with the table data
            const pdfBase64 = generatePdfBase64(providers);

            // Also generate Excel as a secondary attachment if needed
            const excelBase64 = exportToExcelBase64(providers);

            const postData = {
                EmailAddress: enrolleeBioData,
                CC: "",
                BCC: "",
                Subject: "Leadway Health Provider List",
                MessageBody:
                    "Dear Enrollee, here are the lists of providers that you can access under your plan. Please find the attached PDF document.",
                Attachments: [
                    {
                        FileName: "Providers.pdf",
                        ContentType: "application/pdf",
                        Base64Data: pdfBase64,
                    },
                ],
                Category: "",
                UserId: 0,
                ProviderId: 0,
                ServiceId: 0,
                Reference: "",
                TransactionType: "",
            };

            console.log(
                "Submitting email with PDF attachment:",
                JSON.stringify(
                    {
                        ...postData,
                        Attachments: [
                            {
                                ...postData.Attachments[0],
                                Base64Data: pdfBase64,
                            },
                        ],
                    },
                    null,
                    2,
                ),
            );

            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/SendEmailAlert`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                },
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `HTTP error! Status: ${response.status}, Details: ${errorText}`,
                );
            }

            const data = await response.json();
            alert("Email with PDF attachment sent successfully!");
            console.log("Response:", data);
        } catch (error) {
            console.error("Error sending email:", error);
            alert(`Failed to send email: ${error.message}`);
        }
    };

    const generatePdfBase64 = (data) => {
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(18);
        doc.setTextColor(200, 30, 54);
        doc.text("Leadway Health Providers", 105, 15, { align: "center" });

        // Add subtitle
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Black
        doc.text("List of Available Providers Under Your Plan", 105, 25, {
            align: "center",
        });

        // Current date
        const today = new Date();
        const dateStr = today.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        doc.setFontSize(10);
        doc.text(`Generated on: ${dateStr}`, 105, 35, { align: "center" });

        // Format data for the table
        const tableData = data.map(
            ({ provider, phone1, phone2, Discipline, ProviderAddress }) => [
                provider?.trim() || "N/A",
                phone1?.trim() || "N/A",
                phone2?.trim() || "N/A",
                Discipline || "N/A",
                ProviderAddress || "N/A",
            ],
        );

        // Define column headers
        const tableHeaders = [
            [
                "Provider Name",
                "Primary Phone",
                "Alternative Phone",
                "Discipline",
                "Address",
            ],
        ];

        // Generate the table
        autoTable(doc, {
            head: tableHeaders,
            body: tableData,
            startY: 40,
            styles: {
                fontSize: 10,
                cellPadding: 3,
                overflow: "linebreak",
            },
            headStyles: {
                fillColor: [200, 30, 54], // Red Leadway color
                textColor: 255,
                fontStyle: "bold",
            },
            columnStyles: {
                0: { cellWidth: "auto" }, // Provider name column
                1: { cellWidth: "auto" }, // Primary phone column
                2: { cellWidth: "auto" }, // Alternative phone column
                3: { cellWidth: 30 }, // Discipline column
                4: { cellWidth: "auto" }, // Address column - auto width
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245], // Light gray for alternate rows
            },
            margin: { top: 40 },
        });

        // Add page numbers if the table spans multiple pages
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.text(
                `Page ${i} of ${pageCount}`,
                105,
                doc.internal.pageSize.height - 10,
                { align: "center" },
            );
        }

        // Add footer with company info
        doc.setPage(pageCount);
        doc.setFontSize(9);
        const footerText =
            "© Leadway Health - This document is automatically generated";
        doc.text(footerText, 105, doc.internal.pageSize.height - 20, {
            align: "center",
        });

        // Convert PDF to base64 string
        const pdfBase64 = doc.output("datauristring").split(",")[1];

        return pdfBase64;
    };

    const exportToExcelBase64 = (data) => {
        if (!data || data.length === 0) {
            return null;
        }

        const selectedFields = data.map(
            ({ provider, phone1, phone2, Discipline, ProviderAddress }) => ({
                provider: provider?.trim() || "N/A",
                phone1: phone1?.trim() || "N/A",
                phone2: phone2?.trim() || "N/A",
                Discipline: Discipline || "N/A",
                ProviderAddress: ProviderAddress || "N/A",
            }),
        );

        const worksheet = XLSX.utils.json_to_sheet(selectedFields);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "FilteredData");

        // Generate a base64 string
        const excelBase64 = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "base64",
        });

        return excelBase64;
    };
    async function GetFilteredProviders() {
        setIsLoading(true);
        try {
            const params = {
                ProviderName: searchInputs.ProviderName || null,
                TypeID: searchInputs.Speciality || null,
                StateID: searchInputs.StateID || null,
                LGAID: searchInputs.LGA || null,
                enrolleeid: searchInputs.EnrolleeId || null,
                provider_id: searchInputs.providerCode || null,
            };

            // Construct the query string, excluding empty values
            const queryParams = Object.entries(params)
                .map(([key, value]) => [
                    key,
                    key === "ProviderName" && (value === null || value === "")
                        ? ""
                        : key === "enrolleeid" &&
                            (value === null || value === "")
                          ? ""
                          : value || "0", // Keep enrolleeid empty, others default to "0"
                ])
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            value,
                        )}`,
                )
                .join("&");

            console.log(
                "xxs",
                await fetch(
                    `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&NoOfRecords=20&pageSize=10&${queryParams}`,
                    {
                        method: "GET",
                    },
                ),
            );

            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeProvidersListsAll?schemeid=0&MinimumID=0&${queryParams}`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
            console.log("Dataxxx:", data.result);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setResults(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    }

    async function SearchProviders() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetProviders`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    }

    console.log(
        "biodata",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${searchInputs.EnrolleeId}`,
            {
                method: "GET",
            },
        ),
    );

    useEffect(() => {
        if (searchInputs.EnrolleeId) {
            SearchEnrolleeBiodata();
        }
    }, [searchInputs.EnrolleeId]);

    async function SearchEnrolleeBiodata() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${searchInputs.EnrolleeId}`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            console.log(
                "enrolleeEmail",
                data.result[0].Member_EmailAddress_One,
            );

            const email = data.result[0].Member_EmailAddress_One;
            if (!email) {
                setErrorModal(true);
            }
            SetEnrolleeBioData(data.result[0].Member_EmailAddress_One);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    }

    // async function SearchEnrolleeBiodata() {
    //     setIsLoading(true);
    //     try {
    //         const response = await fetch(
    //             `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${searchInputs.EnrolleeId}`,
    //             { method: "GET" },
    //         );

    //         const data = await response.json();

    //         const email = data?.result?.[0]?.Member_EmailAddress_One?.trim();

    //         console.log(
    //             "email",
    //             data?.result?.[0]?.Member_EmailAddress_One?.trim(),
    //         );

    //         if (!email) {
    //             setErrorModal(true);
    //             return; // Stop further execution if no email
    //         }

    //         SetEnrolleeBioData(email);
    //     } catch (error) {
    //         console.error("Error fetching enrollees:", error);
    //         setEnrollees([]);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    async function SearchProviders() {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/GetProviders`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            SetProvider(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setEnrollees([]);
        } finally {
            setIsLoading(false);
        }
    }
    async function SearchStates() {
        // setIsLoading(true);
        try {
            const response = await fetch(`${apiUrl}api/ListValues/GetStates`, {
                method: "GET",
            });
            const data = await response.json();
            setState(data);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setState([]);
        } finally {
            // setIsLoading(false);
        }
    }
    async function SearchSpeciality() {
        // setIsLoading(true);
        try {
            const response = await fetch(
                `${apiUrl}api/ListValues/Getalldepartments`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setSpeciality(data.result);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setSpeciality([]);
        } finally {
            // setIsLoading(false);
        }
    }

    const Submit = async () => {
        setIsSubmitting(true);
        const allResponses = [];

        const postData = {
            AddBeneficiary: [
                {
                    groupid: formData.company,
                    MemberShipNo: "",
                    Parent_Cif: "",
                    Cif_number: "",
                    OfflineID: formData.staffNo,
                    FirstName: formData.firstName,
                    Surname: formData.surname,
                    DateOfBirth: formData.dob,
                    Sex_ID: formData.gender,
                    MaritalStatus: formData.maritalStatus,
                    EmailAdress: formData.email,
                    Home_Phone: formData.phone,
                    Work_Phone: formData.phone,
                    Mobile: formData.phone,
                    Mobile2: formData.phone,
                    Hospital: "",
                    Scheme: formData.scheme,
                    Postal_Phone: formData.phone,
                    Physical_Add1: formData.address,
                    Postal_Town_ID: "",
                    Relationship_ID: 30,
                    BloodGroup: "",
                    PreExistingCondition: "",
                    EnrolleePictureType:
                        formData.passport?.type?.split("/")[1] || "jpeg",
                    EnrolleePicture: `data:${formData.passport?.type};base64,${formData.passport?.base64}`,

                    genotype: "",
                    othernames: "",
                    regionid: "",
                    schemeid: formData.schemeId,
                    startdate: formData.startdate,
                    registrationsource: "Web",
                    usercaptured: user?.result[0]?.UserName,
                },
            ],
        };
        let filteredResponses = [];
        console.log(" Principal API sent:", JSON.stringify(postData, null, 2));
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeProfile/AddBeneficiaryList`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(postData),
                },
            );

            const data = await response.json();

            console.log(
                " Principal API Response:",
                JSON.stringify(data, null, 2),
            );

            const uniqueNo = data.Enrollee_Numbers?.[0]?.UniqueMembershipNo;
            setEnrolleeData(uniqueNo);

            // Extract only principal info
            const principalInfo = {
                UniqueMembershipNo: uniqueNo || "N/A",
                EnrolleeName: data.Enrollee_Numbers?.[0]?.EnrolleeName || "N/A",
            };

            allResponses.push(principalInfo);

            if (data.status !== 200) {
                const errorMessages = [];

                // Check for errors in Enrollee_Numbers array
                if (Array.isArray(data?.Enrollee_Numbers)) {
                    data.Enrollee_Numbers.forEach((enrollee) => {
                        if (enrollee?.ErrorMessage) {
                            errorMessages.push(enrollee.ErrorMessage);
                        }
                    });
                }

                // Check for errors in result array
                if (Array.isArray(data?.result)) {
                    data.result.forEach((item) => {
                        if (item?.ErrorMessage) {
                            errorMessages.push(item.ErrorMessage);
                        }
                    });
                }

                // Check for top-level message
                if (data?.message && !errorMessages.includes(data.message)) {
                    errorMessages.push(data.message);
                }

                // Fallback if no errors found
                const errorMsg =
                    errorMessages.length > 0
                        ? errorMessages.join(", ")
                        : `Unexpected response: ${JSON.stringify(data)}`;

                setErrorMessage(errorMsg);
                setErrorModal(true);
            }

            // Now fetch biodata and submit dependants
            if (uniqueNo) {
                const bioResponse = await fetch(
                    `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${uniqueNo}`,
                    { method: "GET" },
                );

                const bioDataJson = await bioResponse.json();
                const parentId =
                    bioDataJson.result?.[0]?.Member_ParentMemberUniqueID;
                setBiodata(parentId);

                if (parentId) {
                    const dependantResponses =
                        await submitDependantsSequentially(uniqueNo, parentId);
                    allResponses.push(...dependantResponses);
                }
            }

            console.log(" Summary of Submitted Members:");
            allResponses.forEach((res, index) => {
                console.log(`#${index + 1}:`, res);
            });

            filteredResponses = allResponses.filter((response) => {
                // Only include responses that don't have both fields as 'N/A'
                return !(
                    response.UniqueMembershipNo === "N/A" &&
                    response.EnrolleeName === "N/A"
                );
            });
        } catch (error) {
            console.error("Submit error:", error);
        } finally {
            setIsSubmitting(false);
            if (filteredResponses.length > 0) {
                setAllResponses(filteredResponses);
                setApiSuccessModal(true);
            } else {
                console.log("No valid responses to display");
            }
        }
    };

    async function sendEmailAddress() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/SendEmailAlert`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setEmailAddress(data.result[0].Member_EmailAddress_One);
            console.log(
                "enrolleeEmailAddress",
                data.result[0].Member_EmailAddress_One,
            );
        } catch {}
    }
    async function SearchLGA() {
        try {
            const response = await fetch(`${apiUrl}api/ListValues/GetLGA`, {
                method: "GET",
            });
            const data = await response.json();
            setLGA(data);
        } catch (error) {
            console.error("Error fetching enrollees:", error);
            setLGA([]);
        } finally {
            // setIsLoading(false);
        }
    }

    useEffect(() => {
        SearchProviders();
        SearchStates();
        SearchSpeciality();
        SearchLGA();
        SearchEnrolleeBiodata();
    }, []);

    return (
        <div className="flex bg-white-500">
            <CsSidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full ">
                <Header />
                <div className="mx-3">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-[#353535]  text-[25px] font-bold">
                            Provider
                        </h1>
                        <button
                            onClick={GetFilteredProviders}
                            className="bg-red-700 text-white px-4 py-2 rounded-md flex hover:bg-white hover:text-red-600 hover:border border-red-600"
                        >
                            <CgSearch className=" w-5 h-5 mt-1 mr-2" />
                            Search
                        </button>
                    </div>
                    {/* Search Inputs */}
                    <div className="bg-white grid md:grid-cols-3 gap-4 p-4 w-full rounded-md">
                        <div>
                            <label htmlFor="">Provider Name</label>
                            <input
                                type="text"
                                name="ProviderName"
                                value={searchInputs.ProviderName}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        ProviderName: e.target.value,
                                    })
                                }
                                placeholder="Search Provider Name..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Provider Code</label>
                            <input
                                type="text"
                                name="enrolleeid"
                                value={searchInputs.providerCode}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        providerCode: e.target.value,
                                    })
                                }
                                placeholder="Search Provider Code..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Enrollee Id</label>
                            <input
                                type="text"
                                name="enrolleeid"
                                value={searchInputs.EnrolleeId}
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        EnrolleeId: e.target.value,
                                    })
                                }
                                placeholder="Search Enrollee ID..."
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <select
                                name="StateID"
                                value={searchInputs?.StateID || ""} // Ensure safe access
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs((prev) => ({
                                        ...prev,
                                        StateID: e.target.value,
                                    }))
                                }
                            >
                                <option value="">Filter by State</option>
                                {state && state.length > 0 ? (
                                    state.map((stateItem) => (
                                        <option
                                            key={stateItem.id}
                                            value={stateItem.Value}
                                        >
                                            {stateItem.Text}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading states...</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">LGA</label>
                            <select
                                name="LGA"
                                value={searchInputs?.LGA || ""}
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        LGA: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select LGA</option>
                                {lga && lga.length > 0 ? (
                                    lga.map((specialty) => (
                                        <option
                                            key={specialty.id}
                                            value={specialty.Value}
                                        >
                                            {specialty.Text}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading LGA...</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Specialization</label>
                            <select
                                name="Speciality"
                                value={searchInputs?.Speciality || ""}
                                className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                onChange={(e) =>
                                    setSearchInputs({
                                        ...searchInputs,
                                        Speciality: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Speciality</option>
                                {specialization && specialization.length > 0 ? (
                                    specialization.map((specialty) => (
                                        <option
                                            key={specialty.id}
                                            value={specialty.Department_id}
                                        >
                                            {specialty.Department}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>
                                        Loading Speciality...
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className=" flex justify-between  pt-2">
                        <h1 className=" text-red-600 text-[1.5rem] font-medium">
                            Provider List
                        </h1>
                        <div className=" flex gap-3">
                            <button
                                className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md flex hover:bg-red-600 hover:text-white"
                                onClick={handleExportAndSendEmail}
                            >
                                <CiExport className="w-5 h-5 mr-2" />
                                Export & Send Email
                            </button>

                            <button className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md flex hover:bg-red-600 hover:text-white">
                                <BiSolidPrinter className=" w-5 h-5  mr-2" />
                                Print
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md mt-3 rounded-md">
                        <div className="max-h-[400px] overflow-y-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-black rounded-md border-collapse">
                                {/* Table Header */}
                                <thead className="text-base uppercase bg-white border-b border-gray-200 sticky top-0 z-10">
                                    <tr className="border-b border-gray-200 bg-white">
                                        <th className="px-6 py-3 text-[13px]">
                                            S/N
                                        </th>
                                        <th className="px-3 py-3 text-[13px] whitespace-nowrap">
                                            Provider Code
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Provider
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Speciality
                                        </th>
                                        <th className="px-3 py-3 text-[13px] whitespace-nowrap">
                                            Provider Plan
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Phone
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Email
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Address
                                        </th>
                                        <th className="px-3 py-3 text-[13px]">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {isLoading ? (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="h-64 text-center"
                                            >
                                                <div className="flex flex-col items-center justify-center h-full space-y-2">
                                                    <img
                                                        src="./loaderx.gif"
                                                        alt="Loading animation"
                                                        className="w-40 h-40" /* Adjust size as needed */
                                                    />
                                                    <h3 className="text-gray-600 text-lg font-semibold">
                                                        Please Wait, Fetching
                                                        Providers...
                                                    </h3>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : providers && providers.length > 0 ? (
                                        paginatedResults.map(
                                            (enrollee, index) => (
                                                <tr
                                                    key={index}
                                                    className="bg-white border border-gray-200 hover:bg-gray-200 cursor-pointer"
                                                >
                                                    <td className="px-3 py-3">
                                                        {startIndex + index + 1}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.ProviderID ||
                                                            enrollee.provider_id ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.FullName ||
                                                            enrollee.provider ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.Specialty ||
                                                            enrollee.Discipline ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.Schemes ||
                                                            enrollee.Specialty ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.Contact1 ||
                                                            enrollee.phone1 ||
                                                            "N/A"}
                                                        ,{" "}
                                                        {enrollee.Contact2 ||
                                                            enrollee.phone2 ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.Email ||
                                                            enrollee.email ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        {enrollee.add1 ||
                                                            enrollee.ProviderAddress ||
                                                            "N/A"}
                                                    </td>
                                                    <td className="px-3 py-3 text-[13px]">
                                                        <span
                                                            className={`px-4 py-1 rounded-md font-medium ${
                                                                (
                                                                    enrollee.Status ||
                                                                    enrollee.status_id
                                                                )?.toLowerCase() ===
                                                                "active"
                                                                    ? "text-white bg-green-500"
                                                                    : (
                                                                            enrollee.Status ||
                                                                            enrollee.description
                                                                        )?.toLowerCase() ===
                                                                        "pending"
                                                                      ? "text-white bg-amber-600"
                                                                      : "text-red-600 bg-red-100"
                                                            }`}
                                                        >
                                                            {enrollee.Status ||
                                                                enrollee.status_id ||
                                                                "N/A"}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ),
                                        )
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="h-64 text-center"
                                            >
                                                <div className="flex justify-center items-center h-full">
                                                    <img
                                                        src="/noRecordFound.svg"
                                                        alt="No records found"
                                                        className="py-5 px-20"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {providers.length > itemsPerPage && (
                            <div className="flex justify-center mt-4 items-center gap-4">
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

                                {/* Show "Pages Left: X" */}
                                <span className="text-gray-700 text-lg font-semibold">
                                    Page {currentPage} of {totalPages} Pages
                                </span>

                                <button
                                    className="px-4 py-2 mx-1 bg-white text-red-600 border border-red-600 rounded-md flex"
                                    disabled={currentPage >= totalPages}
                                    onClick={() =>
                                        setCurrentPage((prev) => prev + 1)
                                    }
                                >
                                    <CgPlayTrackNext className="w-7 h-7 mr-2" />
                                    Next
                                </button>
                            </div>
                        )}

                        {errorModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white rounded-lg p-6 w-full max-w-md border-l-4 border-red-500">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-2 rounded-full mr-3">
                                            <svg
                                                className="h-6 w-6 text-red-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold text-red-700">
                                            Error
                                        </h2>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-gray-700">
                                            Enrollee does not have a valid email
                                            address.
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setErrorModal(false)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mr-2"
                                        >
                                            Dismiss
                                        </button>
                                        <button
                                            onClick={() => {
                                                setErrorModal(false);
                                            }}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvidersPage;

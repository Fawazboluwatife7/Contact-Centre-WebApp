import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";

// Mock Data - Dynamic State Initialization
const CsPatientInformation = ({ selectedStatus }) => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const handleNavigate = (enrollee) => {
        navigate("/csenrolleeprofileupdate", { state: { enrollee } });
    };
    const handleNavigatee = (enrollee) => {
        navigate("/createpacode", { state: { enrollee } });
    };

    const [enrolleeData, setEnrolleeData] = useState({
        name: "",
        dateOfBirth: "",
        enrolleeId: "",
        contactNumber: "",
        group: "",
        emailAddress: "",
        scheme: "",
        primaryProvider: "",
        age: 0,
        memberType: "",
        policyDate: "",
        amountSpent: "",
        nextOfKin: "",
        NOKPhoneNumber: "",
    });

    const [claimsPaid, setClaimsPaid] = useState("");
    const [biodata, setBiodata] = useState([]);

    const location = useLocation();
    const enrollee = location.state?.enrollee;

    useEffect(() => {
        setEnrolleeData({
            name: "John Doe",
            dateOfBirth: "01/01/1990",
            enrolleeId: "LH221121/0",
            contactNumber: "123-456-7890",
            group: "A",
            emailAddress: "johndoe@example.com",
            scheme: "Basic Plan",
            primaryProvider: "Provider A",
            age: 34,
            memberType: "Individual",
            policyDate: "2022-01-01",
            amountSpent: "$200",
            nextOfKin: "Shade Bakare",
            NOKPhoneNumber: "+2349030302321",
        });
    }, []);

    useEffect(() => {
        CalculateAllAmountSpentOnEnrollee();
        GetBiodata();
    }, []);

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

    async function GetBiodata() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrollee.Member_EnrolleeID}
`,
                {
                    method: "GET",
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            console.log("Allbiodata:", data);

            setBiodata(data);
        } catch (error) {
            console.error("Error getting enrollee bio data:", error);
        } finally {
            setLoading(false);
        }
    }
    // const base64Image = `data:image/jpeg;base64,${biodata.profilepic}`;

    const base64Image = biodata?.profilepic
        ? `data:image/jpeg;base64,${biodata.profilepic}`
        : "/Avataraang.svg";

    console.log("images", base64Image);
    return (
        <div className="bg-white shadow-md rounded-md p-3 mt-3 w-full">
            <div className=" flex gap-8">
                <h3 className="font-bold text-lg mb-3">Enrollee Information</h3>
            </div>

            <div className="flex gap-6  w-full">
                {/* Profile Image */}
                <div className="flex flex-col items-center ml-6">
                    <img
                        src={base64Image}
                        alt="Profile"
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
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
                        <div>
                            <span className="block text-gray-500">Name</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_CustomerName || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Date of Birth
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {
                                    new Date(
                                        enrollee.Member_DateOfBirth,
                                    ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                }
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Enrollee ID
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_EnrolleeID}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Phone Number
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_Phone_One || "      N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Group</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Client_ClientName}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Age</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_Age || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Scheme</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.client_schemename || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Email Address
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_EmailAddress_One || "N/A"}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Member Type
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_Membertype || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Gender</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_Gender || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500 whitespace-nowrap">
                                Original start Date
                            </span>

                            <span className=" block font-medium break-words text-[15px] leading-tight">
                                {
                                    new Date(
                                        enrollee.Client_DateAccepted,
                                    ).toLocaleDateString("en-GB") // Formats the date as day/month/year
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
                                        enrollee.Client_Expiry_date,
                                    ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                }
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Amount Spent
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                #{claimsPaid || "Nil"}
                            </span>
                        </div>
                        <div></div>
                        <div></div>
                        <button
                            className=" text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md flex gap-1 px-3 w-[7rem] py-2  justify-items-end items-end "
                            onClick={() => handleNavigatee(enrollee)}
                        >
                            <SiLibreofficewriter className="h-7" />
                            Issue PA
                        </button>

                        <button
                            className=" text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md flex gap-1 px-1 justify-items-end items-end w-[7rem] py-2 whitespace-nowrap"
                            onClick={() => handleNavigate(enrollee)}
                        >
                            <img src="handpen.svg" alt="" className=" h-5" />
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CsPatientInformation;

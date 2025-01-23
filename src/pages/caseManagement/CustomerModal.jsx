import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Mock Data - Dynamic State Initialization
const CustomerModal = ({ selectedStatus }) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const location = useLocation();
    const enrollee = location.state?.enrollee;
    const [claimsPaid, setClaimsPaid] = useState("");

    const [enrolleeData, setEnrolleeData] = useState({
        name: "",

        enrolleeId: "",

        group: "",
        emailAddress: "",
        scheme: "",
        primaryProvider: "",
        age: 0,
        memberType: "",
        policyDate: "",
        amountSpent: "",

        dateOfBirth: "",
        phoneNumber: "",
    });

    useEffect(() => {
        setEnrolleeData({
            name: "Tunde Bakare",
            dateOfBirth: "01 October 1990",
            enrolleeId: "LH221121/0",
            contactNumber: "08035911412",
            group: "Leadway",
            emailAddress: "tundebakare@gmail.com",
            scheme: "NGPRO",
            primaryProvider: "Crystal",
            age: 62,
            memberType: "Age 0-60",
            policyDate: "02/10/2021 - 02-10/2024",
            amountSpent: "#1200",
        });
    }, []);

    // console.log(
    //     "getting all",
    //     fetch(
    //         `${apiUrl}/api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.Member_EnrolleeID}&fromdate=2010-12-31&todate=2025-12-31&network_type=`,
    //         {
    //             method: "GET",
    //         },
    //     ),
    // );

    useEffect(() => {
        CalculateAllAmountSpentOnEnrollee();
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

    return (
        <div className="bg-white shadow-md rounded-md p-6 w-full mt-2">
            <div className=" flex gap-8">
                <h3 className="font-bold text-lg mb-4">Enrollee Information</h3>
                <div className="mb-4 flex"></div>
            </div>

            <div className="flex gap-6  w-full">
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
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
                        <div>
                            <span className="block text-gray-500">Name</span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.Member_CustomerName || "N/A"}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Date of Birth
                            </span>
                            <span className="block font-medium text-[14px]">
                                {
                                    new Date(enrollee.Member_DateOfBirth)
                                        .toISOString()
                                        .split("T")[0]
                                }
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Enrollee ID
                            </span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.Member_EnrolleeID}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Phone Number
                            </span>
                            <span className="block font-medium text-[14px]">
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
                            <span className="block text-gray-500">
                                Email Address
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.Member_EmailAddress_One || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Scheme</span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.client_schemename || "N/A"}
                            </span>
                        </div>
                        {/* <div>
                            <span className="block text-gray-500">
                                Primary Provider
                            </span>
                            <span className="block font-medium text-[14px]">
                                {enrolleeData.primaryProvider}
                            </span>
                        </div> */}

                        <div>
                            <span className="block text-gray-500">
                                Member Type
                            </span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.Member_Membertype || "N/A"}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Amount Spent
                            </span>
                            <span className="block font-medium text-[14px]">
                                #{claimsPaid}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500 text-[14px]">
                                Age
                            </span>
                            <span className="block font-medium">
                                {enrollee.Member_Age}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500 ">
                                Policy Date
                            </span>

                            <span className=" block font-medium break-words text-[14px] leading-tight">
                                {
                                    new Date(enrollee.Client_DateAccepted)
                                        .toISOString()
                                        .split("T")[0]
                                }
                                /
                                {
                                    new Date(enrollee.Client_Expiry_date)
                                        .toISOString()
                                        .split("T")[0]
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerModal;

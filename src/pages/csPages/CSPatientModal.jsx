import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaFlag } from "react-icons/fa";

// Mock Data - Dynamic State Initialization
const CSPatientModal = ({ selectedStatus }) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    // const handleNavigate = (path) => {
    //     navigate(path);
    // };

    const handleNavigate = (enrollee) => {
        navigate("/csenrolleeprofileupdate", { state: { enrollee } });
    };

    const location = useLocation();
    const enrollee = location.state?.enrollee;
    const [claimsPaid, setClaimsPaid] = useState("");
    const [enrolleeStatus, setEnrolleeStatus] = useState(null);

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
        GetEnrolleeStatus();
    }, []);

    async function CalculateAllAmountSpentOnEnrollee() {
        try {
            const response = await fetch(
                `${apiUrl}/api/EnrolleeClaims/GetEnrolleeClaimList?enrolleeid=${enrollee.enrolleeID}&fromdate=2010-12-31&todate=2025-12-31&network_type=`,
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

    console.log(
        "xyz",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrollee.MembernUmber}`,
            {
                method: "GET",
            },
        ),
    );
    async function GetEnrolleeStatus() {
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrollee.MembernUmber}`,
                {
                    method: "GET",
                },
            );
            const data = await response.json();
            setEnrolleeStatus(data.result[0]);
        } catch (error) {
            console.error(
                "Error calculating total amount spent on enrollee:",
                error,
            );
        }
    }

    // const handleButtonClick = async () => {
    //     if (!enrollee) {
    //         console.error("No enrollee data found!");
    //         return;
    //     }

    //     try {
    //         // Perform some operation (e.g., fetch API using enrollee data)
    //         const response = await fetch(
    //             `${apiUrl}api/SomeEndpoint?enrolleeid=${enrollee.MembernUmber}`,
    //         );

    //         if (!response === 200) throw new Error("Failed to fetch data");

    //         const result = await response.json();

    //         // Navigate to the next page with updated data
    //         navigate("/csenrolleeprofileupdate", {
    //             state: { enrollee: result },
    //         });
    //     } catch (error) {
    //         console.error("Error processing data:", error);
    //     }
    // };

    return (
        <div className="bg-white shadow-md rounded-md p-6 w-full mt-2">
            <div className=" flex gap-8">
                <h3 className="font-bold text-lg mb-4">Enrollee Information</h3>
                <div className="mb-4 flex"></div>
            </div>

            <div className="flex gap-6  w-full">
                <div className="flex flex-col items-center ml-6">
                    <img
                        src="Avataraang.svg"
                        alt="Avatar"
                        className="w-20 h-20 rounded-full"
                    />
                    <div className=" items-center mt-2 rounded-full flex gap-2 ">
                        {enrollee?.Status === "Active" ? (
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
                            <span className="block font-medium text-[14px]">
                                {enrollee.surname} {""} {enrollee.firstname}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Date of Birth
                            </span>
                            <span className="block font-medium text-[14px]">
                                {
                                    new Date(
                                        enrollee.dateofbirth,
                                    ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                }
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Enrollee ID
                            </span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.MemberNumber}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Phone Number
                            </span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.MobilePhone}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Group</span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.group_name}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500">
                                Email Address
                            </span>
                            <span className="block font-medium break-words text-[14px] leading-tight">
                                {enrollee.email || "N/A"}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Scheme</span>
                            <span className="block font-medium text-[14px]">
                                {enrollee.SCHEME_TYPE || "N/A"}
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
                                {enrollee.MemberType || "N/A"}
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
                                {enrollee.Age}
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500 ">
                                Policy End Date
                            </span>

                            <span className=" block font-medium break-words text-[14px] leading-tight">
                                {
                                    new Date(
                                        enrollee.PolicyEndDate,
                                    ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                }
                            </span>
                        </div>

                        <div>
                            <span className="block text-gray-500 ">
                                Loss Ratio
                            </span>

                            <span className=" block font-medium break-words text-[14px] leading-tight">
                                #
                            </span>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <button
                            className=" border border-red-300 flex gap-2 pl-4 pt-2 rounded-md bg-red-100 py-4"
                            onClick={() => handleNavigate(enrollee)}
                        >
                            <FiEdit className=" text-red-500 mt-1" />
                            <h1 className="block text-red-500 ">
                                Edit Profile
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSPatientModal;

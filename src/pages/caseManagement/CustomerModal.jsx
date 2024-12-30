import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Mock Data - Dynamic State Initialization
const CustomerModal = ({ selectedStatus }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

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
                            <span className="block font-medium">
                                {enrolleeData.name}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Date of Birth
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.dateOfBirth}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Enrollee ID
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.enrolleeId}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Phone Number
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.contactNumber}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Group</span>
                            <span className="block font-medium">
                                {enrolleeData.group}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Email Address
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.emailAddress}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Scheme</span>
                            <span className="block font-medium">
                                {enrolleeData.scheme}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Primary Provider
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.primaryProvider}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">Age</span>
                            <span className="block font-medium">
                                {enrolleeData.age}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Member Type
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.memberType}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Policy Date
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.policyDate}
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-500">
                                Amount Spent
                            </span>
                            <span className="block font-medium">
                                {enrolleeData.amountSpent}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerModal;

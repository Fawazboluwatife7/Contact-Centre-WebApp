import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

import { PiCross } from "react-icons/pi";

const Enrollee = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const [enrollees] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            enrolleeId: "EN123",
            phone: "1234567890",
            email: "john@example.com",
            group: "Group A",
            image: "Avatar.svg",
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            enrolleeId: "EN124",
            phone: "0987654321",
            email: "jane@example.com",
            group: "Group B",
            image: "Avatar.svg",
        },
        {
            id: 3,
            firstName: "Alice",
            lastName: "Johnson",
            enrolleeId: "EN125",
            phone: "1112223333",
            email: "alice@example.com",
            group: "Group C",
            image: "Avatar.svg",
        },
    ]);

    const [searchInputs, setSearchInputs] = useState({
        firstName: "",
        lastName: "",
        enrolleeId: "",
        phone: "",
        email: "",
        group: "",
    });

    const getFilteredEnrollees = () => {
        const areAllInputsEmpty = Object.values(searchInputs).every(
            (value) => value === "",
        );

        if (areAllInputsEmpty) return [];

        return enrollees.filter((enrollee) =>
            Object.keys(searchInputs).every((key) =>
                searchInputs[key]
                    ? enrollee[key]
                          ?.toLowerCase()
                          .includes(searchInputs[key].toLowerCase())
                    : true,
            ),
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchInputs({ ...searchInputs, [name]: value });
    };

    const filteredEnrollees = getFilteredEnrollees();

    return (
        <div className="flex bg-white-500">
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh]">
                <Navbar />
                <div className="mx-7">
                    <div className="mb-2 mt-4">
                        <h1 className="text-[#353535] font-normal text-[25px]">
                            Enrollees
                        </h1>
                    </div>
                    {/* Search Inputs */}
                    <div className="bg-white grid md:grid-cols-3 gap-4 p-4 w-full rounded-md">
                        {[
                            "firstName",
                            "lastName",
                            "enrolleeId",
                            "phone",
                            "email",
                            "group",
                        ].map((field) => (
                            <div key={field}>
                                <label
                                    htmlFor={field}
                                    className="text-[#353535] block capitalize"
                                >
                                    {field.replace(/([A-Z])/g, " $1")}
                                </label>
                                <div className="relative">
                                    {/* Input with icon */}
                                    <input
                                        type="text"
                                        name={field}
                                        placeholder={`Search ${field}...`}
                                        className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                        value={searchInputs[field]}
                                        onChange={handleInputChange}
                                    />
                                    {/* Search Icon */}
                                    {!searchInputs[field] && (
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 21l-4.35-4.35m2.325-5.915a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table */}
                    <div className="relative overflow-x-auto shadow-md mt-3 ">
                        <table className="w-full text-sm text-left rtl:text-right text-black">
                            <thead className="text-xs uppercase bg-white text-black">
                                <tr>
                                    <th className="px-2 py-3"></th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Enrollee ID</th>
                                    <th className="px-6 py-3">Phone</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Group</th>
                                </tr>
                            </thead>
                            <tbody
                                className="bg-white cursor-pointer"
                                onClick={() =>
                                    handleNavigate("/enrolleeCustomerinfo")
                                }
                            >
                                {filteredEnrollees.length > 0 ? (
                                    filteredEnrollees.map((enrollee) => (
                                        <tr key={enrollee.id}>
                                            <td className="px-2 py-3"></td>
                                            <td className="px-6 py-3">{`${enrollee.firstName} ${enrollee.lastName}`}</td>
                                            <td className="px-6 py-3">
                                                {enrollee.enrolleeId}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.phone}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.email}
                                            </td>
                                            <td className="px-6 py-3">
                                                {enrollee.group}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center py-4"
                                        >
                                            <img
                                                src="noRecordFound.svg"
                                                alt="No records found"
                                                className="mx-auto"
                                            />
                                            <p className="mt-2 text-gray-500">
                                                No matching records found
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrollee;

import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const CsUpdateProfile = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to store the selected person's details
    const [selectedPerson, setSelectedPerson] = useState({
        name: "",
        id: "",
    });

    // Sample data for demonstration
    const person = {
        id: "0123456789",
        name: "Tunde Bakare",
    };

    // Function to handle "Update" button click
    const handleUpdateClick = () => {
        // Set the selected person's details
        setSelectedPerson(person);
        // Open the modal
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-2">
                    <div className=" flex justify-between">
                        <span className=" text-[2.1rem]"> Update profile</span>
                        <h1
                            className=" text-[1.9rem] text-red-600 flex"
                            onClick={() => handleNavigate("/patienthistory")}
                        >
                            <IoArrowBack className=" text-red-600 mt-2" /> Back
                        </h1>
                    </div>
                    <div className=" bg-white h-full  mt-2">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 py-4 overflow-hidden">
                            {/* First Name */}
                            <div className=" ">
                                <label className=" text-[1rem] font-medium text-black ">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tunde"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7"
                                />
                            </div>
                            <div>
                                <label className=" text-[1rem] font-medium text-black">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Bakare"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7"
                                />
                            </div>{" "}
                            <div>
                                <label className=" text-[1rem] font-medium text-[#3535352B]">
                                    Enrollee ID
                                </label>
                                <input
                                    type="text"
                                    placeholder="0123456789"
                                    disabled
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                />
                            </div>{" "}
                            <div>
                                <label className="text-[1rem] font-medium text-[#3535352B]">
                                    Policy Date
                                </label>
                                <input
                                    placeholder="03/03/23 - 03/03/24"
                                    disabled
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                />
                            </div>
                            {/* Gender */}
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Gender
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            {/* Marital Status */}
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Marital Status
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-[#3535352B]">
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    placeholder=" 03/03/93"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-[#3535352B]">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    placeholder="32"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Phone Number
                                </label>
                                <div className="flex items-center">
                                    <span className="bg-gray-200 px-4 py-2 rounded-l-md border border-r-0 border-gray-300">
                                        +234
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="814 923 9293"
                                        className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="tundebakare@gmail.com"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Funsho Williams Avenue, Surulere, Lagos"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem]"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Company/Client
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2">
                                    <option>Sterling Bank</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Plan Type
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem]"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    NOK
                                </label>

                                <input
                                    type="text"
                                    placeholder="Tunde"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem]"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    NOK Phone Number
                                </label>
                                <div className="flex items-center">
                                    <span className="bg-gray-200 px-4 py-2 rounded-l-md border border-r-0 border-gray-300">
                                        +234
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="814 923 9444"
                                        className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] "
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    NOK Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Funsho Williams Avenue, Surulere, Lagos"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem]"
                                />
                            </div>
                        </form>
                        <div className="flex justify-end pr-4 pb-4">
                            <button
                                className="bg-[#C61531] text-white rounded-md py-2 px-4"
                                onClick={handleUpdateClick}
                            >
                                Update
                            </button>
                        </div>

                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white w-[90%] md:w-[30%] rounded-lg shadow-lg p-6 h-[24rem]">
                                    <div className="text-center">
                                        <span className="text-lg font-bold text-[1.7rem] mt-4">
                                            {selectedPerson.name} profile has
                                            been updated successfully
                                        </span>
                                        <p className="text-lg font-bold text-[1.7rem] mt-3">
                                            ID Number: {selectedPerson.id}
                                        </p>

                                        <img
                                            src="checked.svg"
                                            alt="Success Icon"
                                            className="h-24 mx-auto mt-3"
                                        />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={closeModal}
                                            className="bg-[#C61531] text-white rounded-md  h-[2.4rem] w-[13rem]"
                                        >
                                            Close
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

export default CsUpdateProfile;

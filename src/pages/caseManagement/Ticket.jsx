import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { MdArrowForwardIos } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            {" "}
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className=" flex justify-between mx-4">
                    <div className=" ">
                        <h1 className=" text-[2rem]"> Create new ticket</h1>
                        <h2 className=" text-[#7A7C87] text-[1rem]">
                            {" "}
                            Create and assign a new ticket
                        </h2>
                    </div>
                    <div className=" flex">
                        <h2
                            className=" text-[#C61531] text-[1.5rem]  mt-1 cursor-pointer"
                            onClick={() => handleNavigate("/allticket")}
                        >
                            All tickets
                        </h2>
                        <MdArrowForwardIos className=" text-[#C61531] text-[1.5rem] mt-3" />
                    </div>
                </div>
                <div className=" flex gap-2 mx-4 mt-[1rem] ">
                    <div className=" bg-white pl-3   px-4  flex-grow-[7] pt-8">
                        <div className="flex w-full gap-4 ">
                            <div className=" w-1/2">
                                <label className="text-[1rem] text-black font-bold">
                                    Caller class*
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Enrolle</option>
                                    <option>Provider</option>
                                    <option>Agent</option>
                                    <option>Prospect</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className=" w-1/2">
                                <label className="text-[1rem] font-bold text-black">
                                    Channel*
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Phone call</option>
                                    <option>Whatsapp</option>
                                    <option>E-mail</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className=" mt-4 ">
                            <label className=" text-[1rem] font-medium text-black ">
                                Ticket name
                            </label>
                            <input
                                type="text"
                                placeholder="Tunde Bakare"
                                className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7"
                            />
                        </div>
                        <div className=" w-full mt-2">
                            <label className="text-[1rem] font-bold text-black">
                                Channel*
                            </label>
                            <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                <option>Call</option>
                                <option>Enquiry</option>
                                <option>Approval</option>
                                <option>Complaint</option>
                                <option>Approval</option>
                                <option>Pre-book</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className=" flex gap-4 w-full mt-2 ">
                            <div className=" w-[40%]">
                                <label className="text-[1rem] font-bold text-black">
                                    Caller name
                                </label>
                                <input
                                    type="text"
                                    placeholder="RExxon Healthcare"
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-3"
                                />
                            </div>
                            <div className=" w-full">
                                <label className="text-[1rem] font-bold text-black">
                                    Enrollee Id
                                </label>
                                <div className="relative">
                                    <img
                                        src="searchBar.svg"
                                        alt="Search Icon"
                                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full mt-1 py-2 pl-10 pr-4 border rounded-md  placeholder-gray-400 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-4  ">
                            <div className=" w-1/2">
                                <label className="text-[1rem] text-black font-bold">
                                    Caller class*
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Enrolle</option>
                                    <option>Provider</option>
                                    <option>Agent</option>
                                    <option>Prospect</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className=" w-1/2">
                                <label className="text-[1rem] font-bold text-black">
                                    Channel*
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Phone call</option>
                                    <option>Whatsapp</option>
                                    <option>E-mail</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex w-full gap-4  mt-3">
                            <div className=" w-1/2">
                                <label className="text-[1rem] text-black font-bold">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 py-2 pl-10 pr-4 border rounded-md  placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                            <div className=" w-1/2">
                                <label className="text-[1rem] font-bold text-black">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 py-2 pl-10 pr-4 border rounded-md  placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full gap-4  mt-3">
                            <div className=" w-1/2">
                                <label className="text-[1rem] text-black font-bold">
                                    Select team
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option value="">Assign a team</option>
                                    <option>Sales</option>
                                    <option>Client Services</option>
                                    <option>Case Management</option>
                                    <option>Enrollment</option>
                                    <option>Pharmacy benefits</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className=" w-1/2">
                                <label className="text-[1rem] font-bold text-black">
                                    Add deadline
                                </label>
                                <input
                                    type="date"
                                    className="w-full mt-1 py-2 pl-10 pr-4 border rounded-md  placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                            <div className=" w-1/2">
                                <label className="text-[1rem] font-bold text-black">
                                    Priority
                                </label>
                                <select className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                                    <option>Low</option>
                                    <option>Urgent</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div className=" w-full">
                            <label htmlFor="">Description</label>
                            <textarea
                                name=""
                                id=""
                                className=" w-full outline-none border border-gray-300 rounded-md"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Create Ticket Button */}
                        <button
                            type="submit"
                            className="bg-[#C61531] text-white px-12 py-3 rounded-md hover:bg-red-600 transition mt-7 mb-4"
                            onClick={() => handleNavigate("/createticket")}
                        >
                            Create ticket
                        </button>
                    </div>
                    <div className=" bg-white  pt-8  px-4">
                        <h1 className=" text-[#54565F] font-semibold text-[2rem]">
                            Workflow
                        </h1>
                        <h1 className=" text-[#7A7C87] text-[0.9rem] mt-4">
                            Select a workflow that applies to your ticket
                        </h1>

                        <select className=" w-full  mt-6 rounded-md border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-[#3535352B] placeholder:text-[1.4rem] ">
                            <option>--</option>
                            <option>Follow up enrollee's care</option>
                            <option>Update enrollee details</option>
                            <option>Asign a provider</option>
                            <option>Request reimbursement</option>
                            <option>Pharmacy benefits</option>
                            <option>Add new...</option>
                        </select>

                        <h1 className=" text-[#353535] text-[1.3rem] mt-4 font-bold">
                            Recently used:
                        </h1>

                        <div className=" flex mt-2 gap-2">
                            <IoTicketOutline className=" text-gray-600" />
                            <h1 className=" text-[#7A7C87] gap-1">
                                Create a new enrollee
                            </h1>
                        </div>

                        <div className=" flex mt-1 gap-2">
                            <IoTicketOutline className=" text-gray-600" />
                            <h1 className=" text-[#7A7C87]">
                                Assign a provider
                            </h1>
                        </div>
                        <div className=" flex mt-1 gap-2">
                            <IoTicketOutline className=" text-gray-600" />
                            <h1 className=" text-[#7A7C87]">
                                Update enrollee personal details
                            </h1>
                        </div>
                        <div className=" flex mt-1 gap-2">
                            <IoTicketOutline className=" text-gray-600" />
                            <h1 className=" text-[#7A7C87]">
                                Recurring pharmacy benefit
                            </h1>
                        </div>
                        <div className=" flex mt-1 gap-2">
                            <IoTicketOutline className=" text-gray-600" />
                            <h1 className=" text-[#7A7C87]">
                                Onboard new prospect
                            </h1>
                        </div>

                        <div className=" mt-20">
                            <h1 className=" font-bold ">Call line</h1>
                            <div className=" flex gap-2">
                                <h1 className=" text-red-600"> 01-22100290</h1>
                                <MdPhoneCallback className=" mt-1" />
                            </div>
                            <div className=" flex gap-2">
                                <h1 className=" text-red-600"> 01-22100290</h1>
                                <MdPhoneCallback className=" mt-1" />
                            </div>
                        </div>

                        <div className=" mt-20">
                            <h1 className=" font-bold ">E-mail</h1>
                            <h1 className=" text-red-600 mt-3">
                                leadwayhealth@gmail.com
                            </h1>
                        </div>

                        <button
                            className="bg-[#C61531] text-white px-5 py-3 rounded-md hover:bg-red-600 transition mt-16 ml-[5rem] 
                            "
                        >
                            Create ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;

import React, { useState } from "react";
import TicketInfoTab from "./TicketInfoTab";
import Navbar from "../../components/Navbar";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import HistoryTab from "./HistoryTab";
import CommentTab from "./CommentTab";

const ViewTicket = () => {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-7 mt-3">
                    <h1 className="text-2xl font-semibold mb-4">
                        Request for HMO - Ticket #376512
                    </h1>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-300 space-x-1">
                        {[
                            { label: "Ticket Info", value: "info" },
                            { label: "History", value: "history" },
                            { label: "Comments", value: "comments" },
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`py-2 px-4 border-b-2 ${
                                    activeTab === tab.value
                                        ? "border-red-500 text-red-600 font-semibold bg-white  rounded-t-md"
                                        : "border-transparent text-white  bg-red-600     rounded-t-md "
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className=" bg-white p-6 rounded-md shadow-sm">
                        {activeTab === "info" && <TicketInfoTab />}
                        {activeTab === "history" && <HistoryTab />}
                        {activeTab === "comments" && <CommentTab />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTicket;

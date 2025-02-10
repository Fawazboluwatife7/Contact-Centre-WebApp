import print from "../../assets/csImages/print.svg";
import search from "../../assets/csImages/Search.svg";
import plus from "../../assets/csImages/plusSign.svg";
import filter from "../../assets/csImages/filter.svg";
import exportIcon from "../../assets/csImages/export.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaHistory = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("All");

    const handleGenerateClick = () => {
        navigate("/generatePaCode");
    };

    const tableData = {
        all: [
            {
                date: "2024-11-01",
                enrolleeName: "John Doe",
                provider: "Provider A",
                enrolleeID: "12345",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-02",
                diagnosis: "Hypertension",
                request: "Routine Checkup",
            },
            {
                date: "2024-11-03",
                enrolleeName: "Jane Smith",
                provider: "Provider B",
                enrolleeID: "12346",
                requestStatus: "Pending",
                comment: "Pending approval.",
                approvedRejectedDate: "-",
                diagnosis: "Diabetes",
                request: "Emergency Care",
            },
            {
                date: "2024-11-05",
                enrolleeName: "Mark Johnson",
                provider: "Provider C",
                enrolleeID: "12347",
                requestStatus: "Rejected",
                comment: "Request rejected due to missing documents.",
                approvedRejectedDate: "2024-11-06",
                diagnosis: "Asthma",
                request: "Specialist Referral",
            },
            {
                date: "2024-11-07",
                enrolleeName: "Emily Davis",
                provider: "Provider A",
                enrolleeID: "12348",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-08",
                diagnosis: "Pneumonia",
                request: "Hospitalization",
            },
            {
                date: "2024-11-09",
                enrolleeName: "Michael Brown",
                provider: "Provider B",
                enrolleeID: "12349",
                requestStatus: "Pending",
                comment: "Awaiting further review.",
                approvedRejectedDate: "-",
                diagnosis: "Anemia",
                request: "Blood Transfusion",
            },
            {
                date: "2024-11-10",
                enrolleeName: "Sarah Wilson",
                provider: "Provider C",
                enrolleeID: "12350",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-11",
                diagnosis: "Migraine",
                request: "Pain Management",
            },
            {
                date: "2024-11-12",
                enrolleeName: "David Lee",
                provider: "Provider A",
                enrolleeID: "12351",
                requestStatus: "Rejected",
                comment: "Request rejected due to invalid details.",
                approvedRejectedDate: "2024-11-13",
                diagnosis: "Back Pain",
                request: "Physical Therapy",
            },
            {
                date: "2024-11-13",
                enrolleeName: "Laura Taylor",
                provider: "Provider B",
                enrolleeID: "12352",
                requestStatus: "Pending",
                comment: "Under review.",
                approvedRejectedDate: "-",
                diagnosis: "Depression",
                request: "Psychiatric Evaluation",
            },
            {
                date: "2024-11-14",
                enrolleeName: "James Harris",
                provider: "Provider C",
                enrolleeID: "12353",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-15",
                diagnosis: "COVID-19",
                request: "Isolation Care",
            },
        ],
        pending: [
            {
                date: "2024-11-03",
                enrolleeName: "Jane Smith",
                provider: "Provider B",
                enrolleeID: "12346",
                requestStatus: "Pending",
                comment: "Pending approval.",
                approvedRejectedDate: "-",
                diagnosis: "Diabetes",
                request: "Emergency Care",
            },
            {
                date: "2024-11-09",
                enrolleeName: "Michael Brown",
                provider: "Provider B",
                enrolleeID: "12349",
                requestStatus: "Pending",
                comment: "Awaiting further review.",
                approvedRejectedDate: "-",
                diagnosis: "Anemia",
                request: "Blood Transfusion",
            },
            {
                date: "2024-11-13",
                enrolleeName: "Laura Taylor",
                provider: "Provider B",
                enrolleeID: "12352",
                requestStatus: "Pending",
                comment: "Under review.",
                approvedRejectedDate: "-",
                diagnosis: "Depression",
                request: "Psychiatric Evaluation",
            },
        ],
        approved: [
            {
                date: "2024-11-01",
                enrolleeName: "John Doe",
                provider: "Provider A",
                enrolleeID: "12345",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-02",
                diagnosis: "Hypertension",
                request: "Routine Checkup",
            },
            {
                date: "2024-11-07",
                enrolleeName: "Emily Davis",
                provider: "Provider A",
                enrolleeID: "12348",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-08",
                diagnosis: "Pneumonia",
                request: "Hospitalization",
            },
            {
                date: "2024-11-10",
                enrolleeName: "Sarah Wilson",
                provider: "Provider C",
                enrolleeID: "12350",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-11",
                diagnosis: "Migraine",
                request: "Pain Management",
            },
            {
                date: "2024-11-14",
                enrolleeName: "James Harris",
                provider: "Provider C",
                enrolleeID: "12353",
                requestStatus: "Approved",
                comment: "Request approved successfully.",
                approvedRejectedDate: "2024-11-15",
                diagnosis: "COVID-19",
                request: "Isolation Care",
            },
        ],
        rejected: [
            {
                date: "2024-11-05",
                enrolleeName: "Mark Johnson",
                provider: "Provider C",
                enrolleeID: "12347",
                requestStatus: "Rejected",
                comment: "Request rejected due to missing documents.",
                approvedRejectedDate: "2024-11-06",
                diagnosis: "Asthma",
                request: "Specialist Referral",
            },
            {
                date: "2024-11-12",
                enrolleeName: "David Lee",
                provider: "Provider A",
                enrolleeID: "12351",
                requestStatus: "Rejected",
                comment: "Request rejected due to invalid details.",
                approvedRejectedDate: "2024-11-13",
                diagnosis: "Back Pain",
                request: "Physical Therapy",
            },
        ],
    };

    const getStatusColor = (status) => {
        if (status === "Approved") return "text-green-500";
        if (status === "Pending") return "text-orange-500";
        if (status === "Rejected") return "text-red-500";
        return "";
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    // const handleRowClick = (enrolleeID) => {
    //   navigate(`/enrolleeInformations/${enrolleeID}`);
    // };
    const handleRowClick = () => {
        //its not getting the userID yet
        navigate("/enrolleeInformations");
    };

    return (
        <div className="bg-lightblue w-full h-[100vh]">
            <div className=" mx-3 p-1 pt-3 bg-lightblue  flex justify-between">
                <h3 className="font-bold text-lg font-sans">PA Requests</h3>

                <button
                    onClick={handleGenerateClick}
                    className="   ml-auto w-[182px] h-[44px] bg-red-700 text-white rounded flex items-center justify-center"
                >
                    <img src={plus} alt="icon" className="mr-1" />
                    <span>Generate PA Code</span>
                </button>
            </div>

            <div className=" flex bg-white-500 mx-2 gap-10">
                <div className=" h-[37px] mt-[1rem] flex gap-3">
                    <button className="w-full h-full flex items-center px-2 border border-gray-300 rounded outline-none bg-white">
                        <img src={search} alt="icon" className="mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full border-none outline-none placeholder-gray-500 bg-white"
                        />
                    </button>
                </div>

                <div className="  ">
                    <p>Date From</p>
                    <input
                        type="date"
                        className=" rounded-md w-[10rem] h-[2rem]"
                    />
                </div>

                <div className=" mb-5">
                    <p>Date To</p>
                    <input
                        type="date"
                        className=" rounded-md w-[10rem] h-[2rem]"
                    />
                </div>
            </div>

            <div className="w-full bg-lightgray mt-2 flex justify-between">
                <div className="flex gap-x-1 mt-4 w-[570px] h-[43px] bg-white ml-2 rounded-t-md">
                    <button
                        className={`px-4 py-2 text-sm font-medium w-[8rem] rounded-t-md ${
                            selectedTab === "All"
                                ? "text-red-500 bg-white border border-b-4 border-red-500"
                                : "text-white bg-red-500"
                        }`}
                        onClick={() => handleTabClick("All")}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 w-[142px] h-[43px] rounded-t-md ${
                            selectedTab === "Pending"
                                ? "text-red-500 bg-white border border-b-4 border-red-500"
                                : "text-white bg-red-500"
                        }`}
                        onClick={() => handleTabClick("Pending")}
                    >
                        Pending
                    </button>
                    <button
                        className={`px-4 py-2 w-[142px] h-[43px] rounded-t-md ${
                            selectedTab === "Approved"
                                ? "text-red-500 bg-white border border-b-4 border-red-500"
                                : "text-white bg-red-500"
                        }`}
                        onClick={() => handleTabClick("Approved")}
                    >
                        Approved
                    </button>
                    <button
                        className={`px-4 py-2 w-[142px] h-[43px] rounded-t-md ${
                            selectedTab === "Rejected"
                                ? "text-red-500 bg-white border border-b-4 border-red-500 "
                                : "text-white bg-red-500"
                        }`}
                        onClick={() => handleTabClick("Rejected")}
                    >
                        Rejected
                    </button>
                </div>
            </div>

            <div className="px-2 w-full overflow-hidden">
                <div className="overflow-y-auto">
                    <table className="w-full bg-white ">
                        <thead className="text-[#1F4173] sticky top-0 bg-white px-2 ">
                            <tr className="text-sm text-left">
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Enrollee</th>
                                <th className="px-4 py-2 border">Provider</th>
                                <th className="px-4 py-2 border">EnrolleeID</th>
                                <th className="px-4 py-2 border">Diagnosis</th>
                                <th className="px-4 py-2 border">Request</th>
                                <th className="px-4 py-2 border">Status</th>
                                <th className="px-4 py-2 border">Comment</th>
                                <th className="px-4 py-2 border">
                                    App/Rej Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData[selectedTab.toLowerCase()].map(
                                (request, index) => (
                                    <tr
                                        key={index}
                                        className="text-sm cursor-pointer"
                                        onClick={() =>
                                            handleRowClick(request.enrolleeID)
                                        }
                                    >
                                        <td className="px-4 py-2 border">
                                            {request.date}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.enrolleeName}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.provider}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.enrolleeID}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.diagnosis}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.request}
                                        </td>
                                        <td
                                            className={`px-4 py-2 border ${getStatusColor(
                                                request.requestStatus,
                                            )}`}
                                        >
                                            {request.requestStatus}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {request.comment}
                                        </td>
                                        <td className="px-4 py-2 border"></td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaHistory;

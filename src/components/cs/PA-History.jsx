// import print from "../../assets/csImages/print.svg";
// import search from "../../assets/csImages/Search.svg";
// import plus from "../../assets/csImages/plusSign.svg";
// import filter from "../../assets/csImages/filter.svg";
// import exportIcon from "../../assets/csImages/export.svg";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";

// function paHistory() {
//   const navigate = useNavigate();
//   const StatusTable = () => {
//     const [selectedTab, setSelectedTab] = useState('All');

//   const handleGenerateClick = () => {
//     navigate("/enrolleInformations");
//   };

//   return (
//     <div className="bg-lightblue ml">
//       <div className=" ml-6 w-90 p-1 bg-lightblue -mt-2 mr-4">
//         <h3 className="font-bold text-lg font-sans mt-3 mb-3">
//           PA Requests
//         </h3>
//       </div>
//       <div className=" ml-6 flex bg-white-500">
//         <div className=" bg-white w-[280px] h-[37px] mt-[1px]">
//           <button className="w-full h-full flex items-center px-2 border border-gray-300 rounded outline-none">
//             <img src={search} alt="icon" className="mr-2" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full border-none outline-none placeholder-gray-500"
//             />
//           </button>
//         </div>

//         <div className="bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
//           <img src={filter} alt="icon" className="mr-1" />
//           <span>Filter</span>
//         </div>

//         <div className=" bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
//           <img src={exportIcon} alt="icon" className="mr-1" />
//           <span>Export</span>
//         </div>

//         <div className=" bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
//           <img src={print} alt="icon" className="mr-1" />
//           <span>Print</span>
//         </div>

//         <div className="ml-auto w-[182px] h-[44px] bg-red-700 text-white rounded flex items-center justify-center">
//           <button onClick={handleGenerateClick} className="flex items-center">
//             <img src={plus} alt="icon" className="mr-1" />
//             <span>Generate PA Code</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex ml-6">
//         <div className="w-[142px] h-[43px] mr-1 mt-5 text-white bg-red-700 flex items-center justify-center rounded-md"> All </div>
//         <div className="w-[142px] h-[43px] mr-1 mt-5 text-white bg-red-700 flex items-center justify-center rounded-md"> Pending </div>
//         <div className="w-[142px] h-[43px] mr-1 mt-5 text-white bg-red-700 flex items-center justify-center rounded-md"> Approved </div>
//         <div className="w-[142px] h-[43px] mr-1 mt-5 text-white bg-red-700 flex items-center justify-center rounded-md"> Rejected </div>
//       </div>

//     </div>
//   );
// }

// export default paHistory;

import print from "../../assets/csImages/print.svg";
import search from "../../assets/csImages/Search.svg";
import plus from "../../assets/csImages/plusSign.svg";
import filter from "../../assets/csImages/filter.svg";
import exportIcon from "../../assets/csImages/export.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function PaHistory() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("All");

  const handleGenerateClick = () => {
    navigate("/enrolleInformations");
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

  return (
    <div className="bg-lightblue">
      <div className="ml-6 w-90 p-1 bg-lightblue -mt-2 mr-4">
        <h3 className="font-bold text-lg font-sans mt-3 mb-3">PA Requests</h3>
      </div>

      <div className="ml-6 flex bg-white-500">
        <div className="bg-white w-[280px] h-[37px] mt-[1px]">
          <button className="w-full h-full flex items-center px-2 border border-gray-300 rounded outline-none">
            <img src={search} alt="icon" className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none outline-none placeholder-gray-500"
            />
          </button>
        </div>

        <div className="bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
          <img src={filter} alt="icon" className="mr-1" />
          <span>Filter</span>
        </div>
        <div className="bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
          <img src={exportIcon} alt="icon" className="mr-1" />
          <span>Export</span>
        </div>
        <div className="bg-white ml-1 w-[114px] h-[36px] border border-red-700 rounded flex items-center justify-center text-red-700">
          <img src={print} alt="icon" className="mr-1" />
          <span>Print</span>
        </div>

        <div className="ml-auto w-[182px] h-[44px] bg-red-700 text-white rounded flex items-center justify-center">
          <button onClick={handleGenerateClick} className="flex items-center">
            <img src={plus} alt="icon" className="mr-1" />
            <span>Generate PA Code</span>
          </button>
        </div>
      </div>

      <div className="w-36 bg-lightgray rounded-[5px] mt-6">
        <div className="flex space-x-1 mt-4 bg-lightblue-500 w-[577px] h-[43px] bg-white ml-6 rounded-[5px]">
          <button
            className={`px-4 py-2 w-[142px] h-[43px] ${
              selectedTab === "All"
                ? "bg-white text-red-700"
                : "bg-red-700 text-white"
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 w-[142px] h-[43px] ${
              selectedTab === "Pending"
                ? "bg-white text-red-700"
                : "bg-red-700 text-white"
            }`}
            onClick={() => handleTabClick("Pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 w-[142px] h-[43px] ${
              selectedTab === "Approved"
                ? "bg-white text-red-700"
                : "bg-red-700 text-white"
            }`}
            onClick={() => handleTabClick("Approved")}
          >
            Approved
          </button>
          <button
            className={`px-4 py-2 w-[142px] h-[43px] ${
              selectedTab === "Rejected"
                ? "bg-white text-red-700"
                : "bg-red-700 text-white"
            }`}
            onClick={() => handleTabClick("Rejected")}
          >
            Rejected
          </button>
        </div>
      </div>

      <div className="overflow-auto ml-6 mb-10 w-[1100px]">
        <table className="w-full bg-white table-auto border-collapse">
          <thead className="text-[#1F4173]">
            <tr className="text-sm text-left">
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Enrollee Name</th>
              <th className="px-4 py-2 border">Provider</th>
              <th className="px-4 py-2 border">Enrollee ID</th>
              <th className="px-4 py-2 border">Diagnosis</th>
              <th className="px-4 py-2 border">Request</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Comment</th>
              <th className="px-4 py-2 border">Approved/Rejected Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData[selectedTab.toLowerCase()].map((data, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{data.date}</td>
                <td className="border px-4 py-2">{data.enrolleeName}</td>
                <td className="border px-4 py-2">{data.provider}</td>
                <td className="border px-4 py-2">{data.enrolleeID}</td>
                <td className="border px-4 py-2">{data.diagnosis}</td>
                <td className="border px-4 py-2">{data.request}</td>
                <td
                  className={`border px-4 py-2 ${getStatusColor(
                    data.requestStatus
                  )}`}
                >
                  {data.requestStatus}
                </td>
                <td className="border px-4 py-2">{data.comment}</td>
                <td className="border px-4 py-2">
                  {data.approvedRejectedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaHistory;

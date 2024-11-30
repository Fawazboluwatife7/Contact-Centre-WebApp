import { useNavigate } from "react-router-dom";
import { useState } from "react";


const CoveragePlanTable = () => {
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
const handleRowClick = () => { //its not getting the userID yet
  navigate("/enrolleeInformations");
};
return (
  <div className="bg-lightblue">

     <div className="w-32 bg-lightgray rounded-[5px]">
       <div className="flex space-x-1 mt-4 bg-lightblue-500 w-[577px] h-[43px] bg-white rounded-[5px]">
         <button
           className={`px-4 py-2 w-[142px] h-[43px] ${
             selectedTab === "All"
               ? "bg-white text-green-600"
               : "bg-gray-400 text-black"
           }`}
           onClick={() => handleTabClick("All")}
         >
           All
         </button>
         <button
           className={`px-4 py-2 w-[142px] h-[43px] ${
             selectedTab === "Pending"
               ? "bg-white text-green-600"
               : "bg-pink-300 text-red-700"
           }`}
           onClick={() => handleTabClick("Pending")}
         >
           Pending
         </button>
         <button
           className={`px-4 py-2 w-[142px] h-[43px] ${
             selectedTab === "Approved"
               ? "bg-white text-green-600"
               : "bg-green-500 text-white"
           }`}
           onClick={() => handleTabClick("Approved")}
         >
           Approved
         </button>
         <button
           className={`px-4 py-2 w-[142px] h-[43px] ${
             selectedTab === "Rejected"
               ? "bg-white text-green-600"
               : "bg-red-600 text-white"
              }`}
              onClick={() => handleTabClick("Rejected")}
            >
              Rejected
            </button>
          </div>
        </div>
   
   
        <div className="mb-10 w-[1110px] shadow-md ">
          <table className="bg-white table-auto">
            <thead className="text-[#1F4173]">
              <tr className="text-sm text-left">
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Enrollee</th>
                <th className="px-4 py-2 border">Provider</th>
                <th className="px-4 py-2 border">EnrolleeID</th>
                <th className="px-4 py-2 border">Diagnosis</th>
                <th className="px-4 py-2 border">Request</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Comment</th>
                <th className="px-4 py-2 border">App/Rej Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData[selectedTab.toLowerCase()].map((request, index) => (
                <tr
                  key={index}
                  className="text-sm cursor-pointer"
                  onClick={() => handleRowClick(request.enrolleeID)}
                >
                  <td className="px-4 py-2 border">{request.date}</td>
                  <td className="px-4 py-2 border">{request.enrolleeName}</td>
                  <td className="px-4 py-2 border">{request.provider}</td>
                  <td className="px-4 py-2 border">{request.enrolleeID}</td>
                  <td className="px-4 py-2 border">{request.diagnosis}</td>
                  <td className="px-4 py-2 border">{request.request}</td>
                  <td
                    className={`px-4 py-2 border ${getStatusColor(
                      request.requestStatus
                    )}`}
                  >
{request.requestStatus}
               </td>
               <td className="px-4 py-2 border">{request.comment}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 );
}


export default CoveragePlanTable;
   
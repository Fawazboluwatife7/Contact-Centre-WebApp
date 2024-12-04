import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientsProfileTable = () => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/SalesDashboard/client-enrollee-profile');
  };
  
  const Viewnavigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleViewNavigate = (path) => {
    Viewnavigate(path);
  };
  const [activeTab, setActiveTab] = useState("Enrollees");

  const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Track which menu is open

  const toggleMenu = (index) => {
    // Toggle the menu for the selected row
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const closeMenu = () => {
    // Close the dropdown menu when clicked outside
    setActiveMenuIndex(null);
  };

  const tableContent = {
    "Proposal History": [
      { name: "Customized Plan #01", type: "Retail", date: "22 Aug 2022" },
      { name: "Customized Plan #02", type: "Corporate", date: "22 Aug 2022" },
      { name: "Health Insurance Presentation", type: "Retail", date: "22 Aug 2022" },
    ],
    "Invoice History": [
      { name: "Invoice #123", type: "Corporate", date: "10 Sep 2022" },
      { name: "Invoice #124", type: "Retail", date: "15 Sep 2022" },
    ],
    "Recent Activity": [
      { name: "E-Card Sent", type: "Notification", date: "01 Oct 2022" },
      { name: "Proposal Reviewed", type: "Corporate", date: "05 Oct 2022" },
    ],
  };

  const enrolleeData = [
    {
      name: "Rock of Ages Hospital",
      id: "LAC/1251",
      policyNumber: "2100201/0",
      phone: "08035647363",
      plan: "Gold",
      count: "5",
      status: "Inactive",
      date: "22 Aug 2022",
    },
    {
      name: "Jesus bu Eze Hospital",
      id: "LAC/1251",
      policyNumber: "2100201/0",
      phone: "08035647363",
      plan: "Gold",
      count: "5",
      status: "Active",
      date: "22 Aug 2022",
    },
    {
      name: "Smiths Hospital",
      id: "LAC/1251",
      policyNumber: "2100201/0",
      phone: "08035647363",
      plan: "Gold",
      count: "5",
      status: "Pending",
      date: "22 Aug 2022",
    },
    {
      name: "Intercontinental Clinic",
      id: "LAC/1248",
      policyNumber: "2100201/0",
      phone: "08035647363",
      plan: "Gold",
      count: "5",
      status: "Inactive",
      date: "22 Aug 2022",
    },
  ];

  const renderStatus = (status) => {
    const statusColors = {
      Pending: "text-yellow-500",
      Inactive: "text-red-500",
      Active: "text-green-500",
    };
    return <span className={`font-semibold ${statusColors[status] || "text-gray-500"}`}>{status}</span>;
  };

  const renderEnrolleesTab = () => (
    <div>    {/* Header */}
      <div className="flex justify-end">
        <button onClick={() => handleViewNavigate("/SalesDashboard/client-enrollees")} className="justify-right w-[62px] h-[25px] text-[#C61531] text-[10px] rounded-[3px] font-[Lato] bg-red-200 border border-[#C61531]">
          View All
        </button>
      </div>
    <table className="w-full border-collapse border border-gray-300">
      
      <tbody>
        {enrolleeData.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2"><div className="flex items-center">
                <img
                  src="/Avatar.svg"
                  className="w-8 h-8"
                />
              </div> {row.image}</td>
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.id}</td>
            <td className="px-4 py-2">{row.policyNumber}</td>
            <td className="px-4 py-2">{row.phone}</td>
            <td className="px-4 py-2">{row.plan}</td>
            <td className="px-4 py-2">{row.count}</td>
            <td className="px-4 py-2">{renderStatus(row.status)}</td>
            <td className="px-4 py-2">{row.date}</td>
            {/* Options Button */}
<td className="px-4 py-2">
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevent triggering the closeMenu handler
      toggleMenu(index);
    }}
    className="text-gray-500 hover:text-gray-700 focus:outline-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <circle cx="5" cy="12" r="2.5"></circle>
      <circle cx="12" cy="12" r="2.5"></circle>
      <circle cx="19" cy="12" r="2.5"></circle>
    </svg>
  </button>

  {/* Dropdown Menu */}
  {activeMenuIndex === index && (
    <div
      className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10 w-32"
      onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing when clicked inside
    >
      <ul className="text-sm text-gray-700">
        {["View", "Edit Profile", "Send E-Card", "Dependents", "Change Plan", "Remove"].map(
          (option, idx) => (
            <li
              key={idx}
              className={`px-4 py-1 hover:bg-gray-100 cursor-pointer ${
                option === "Remove" ? "text-red-600" : ""
              }`}
              onClick={handleNavigate} // Placeholder for actions
            >
              {option}
            </li>
          )
        )}
      </ul>
    </div>
  )}
</td>

          </tr>
        ))}
      </tbody>
        </table>
    </div>
  );

  const renderSimpleTab = (tabName) => (
    <table className="w-full border-collapse">
      <tbody>
        {tableContent[tabName].map((item, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">
              <div className="flex items-center">
                <img
                  src="/family_437491.png"
                  className="w-12 h-12"
                />
              </div> 
            </td>
            <td>{item.name}</td>
            <td className="px-4 py-2">{item.type}</td>
            <td className="px-4 py-2">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-gray-200 min-h-screen p-2">
      {/* Tabs */}
      <div className="flex space-x-0.5">
        {["Enrollees", "Invoice History", "Proposal History", "Recent Activity"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-sm font-semibold ${
              activeTab === tab
                ? "bg-white text-red-600 underline"
                : "bg-red-600 text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === "Enrollees" && renderEnrolleesTab()}
        {activeTab !== "Enrollees" && renderSimpleTab(activeTab)}
      </div>
    </div>
  );
};

export default ClientsProfileTable;

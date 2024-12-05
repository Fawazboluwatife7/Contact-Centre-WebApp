import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const ClientEnrollees = () => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/SalesDashboard/client-enrollee-profile')
  }
  const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Track which menu is open

  const toggleMenu = (index) => {
    // Toggle the menu for the selected row
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const closeMenu = () => {
    // Close the dropdown menu when clicked outside
    setActiveMenuIndex(null);
  };

  const searchResults = [
    {
      avatar: "/Avatar.svg",
      name: "Smiths Hospital",
      id: "LAC/1251",
      policyNumber: "2100201/0",
      phone: "08165644329",
      plan: "Gold Plan",
      count: "5",
      status: "Active",
      date: "12/11/2022",
      statusColor: "#1EBD49",
    },
    {
      avatar: "/Avatar.svg",
      name: "Johns Clinic",
      id: "LAC/2232",
      policyNumber: "2100302/1",
      phone: "08012345678",
      plan: "Silver Plan",
      count: "3",
      status: "Pending",
      date: "10/11/2022",
      statusColor: "#F1A806",
    },
    {
      avatar: "/Avatar.svg",
      name: "MediCare Center",
      id: "LAC/3321",
      policyNumber: "2100403/2",
      phone: "09098765432",
      plan: "Platinum Plan",
      count: "8",
      status: "Inactive",
      date: "08/11/2022",
      statusColor: "#C61531",
    },
    {
      avatar: "/Avatar.svg",
      name: "Prime Health",
      id: "LAC/4451",
      policyNumber: "2100504/3",
      phone: "07011223344",
      plan: "Gold Plan",
      count: "6",
      status: "Active",
      date: "06/11/2022",
      statusColor: "#1EBD49",
    },
    {
      avatar: "/Avatar.svg",
      name: "BetterCare Hospital",
      id: "LAC/5511",
      policyNumber: "2100605/4",
      phone: "08187654321",
      plan: "Silver Plan",
      count: "4",
      status: "Pending",
      date: "04/11/2022",
      statusColor: "#F1A806",
    },
    {
      avatar: "/Avatar.svg",
      name: "Family Health Center",
      id: "LAC/6672",
      policyNumber: "2100706/5",
      phone: "08099887766",
      plan: "Gold Plan",
      count: "10",
      status: "Active",
      date: "02/11/2022",
      statusColor: "#1EBD49",
    },
    {
      avatar: "/Avatar.svg",
      name: "Global Health",
      id: "LAC/7781",
      policyNumber: "2100807/6",
      phone: "09033445566",
      plan: "Platinum Plan",
      count: "7",
      status: "Inactive",
      date: "01/11/2022",
      statusColor: "#C61531",
    },
  ];

  return (
    <div className="min-h-full bg-none" onClick={closeMenu}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Client Enrollee</h1>
        <Link to="/SalesDashBoard/add-enrollee">
        <button className="bg-pink-100 border border-red-600 hover:bg-[#B5132A] hover:text-white text-red-600 font-semibold text-sm px-10 py-3 rounded-md shadow-sm -mb-7">
          Add Enrollee
        </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg flex items-center gap-4 mb-8 shadow-sm">
        <select
          className="bg-transparent text-[#2D2D2D] font-medium text-sm border focus:outline-none cursor-pointer p-3 rounded-l"
          aria-label="Search By"
        >
          <option>Search By: Name</option>
          <option>Search By: ID</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="-ml-4 flex-grow mr-6 p-3 bg-white rounded-r border border-[#E5E7EB] text-sm focus:outline-none"
        />
        <button className="bg-[#C61531] hover:bg-[#B5132A] text-white font-medium text-sm px-20 py-3 rounded-md shadow-sm">
          Find
        </button>
      </div>

      {/* Search Results */}
      <div>
        <h2 className="text-base font-semibold text-[#2D2D2D] mb-4">Recent search result:</h2>
        <div className="overflow-hidden rounded-lg shadow-sm border bg-white border-[#E5E7EB]">
          <table className="min-w-full divide-y divide-[#E5E7EB]">
            
            <tbody className="bg-white divide-y divide-[#E5E7EB]">
              {searchResults.map((row, index) => (
                <tr key={index} className="hover:bg-[#F8F9FC] transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={row.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border border-[#E5E7EB]"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.policyNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.count}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: row.statusColor }}>
                    {row.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2D2D2D]">{row.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                    <div className="relative">
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
                                  className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                                  onClick={handleNavigate} // Placeholder for actions
                                >
                                  {option}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientEnrollees;

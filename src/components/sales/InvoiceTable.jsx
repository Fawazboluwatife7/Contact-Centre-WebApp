import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const invoiceData = [
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Rejected" },
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Paid" },
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Pending" },
  // Duplicate rows for pagination simulation
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Rejected" },
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Paid" },
  { name: "Smiths Hospital", email: "smiths@hospital.com", type: "Corporate", staffId: "01786568", invoiceId: "Invoice ID", date: "22 Aug 2022", status: "Pending" },
];

const InvoiceTable = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const filteredData = selectedTab === "All" ? invoiceData : invoiceData.filter((row) => row.status === selectedTab);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest("#menu-button") && !e.target.closest("#dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const handleRowClick = () => {
    navigate('/SalesDashboard/invoice-review');
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Tabs */}
      <div className="flex space-x-0.5">
        {["All", "Pending", "Rejected", "Paid"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-12 py-2 rounded-sm font-semibold ${
              selectedTab === tab ? "bg-white text-red-600 underline" : "bg-red-600 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-white border-b text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email Address</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Staff ID</th>
              <th className="py-3 px-4">Invoice ID</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                <td className="py-3 px-4 flex items-center">
                  <img
                    src="/Avatar.svg"
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {row.name}
                </td>
                <td className="py-3 px-4">{row.email}</td>
                <td className="py-3 px-4">{row.type}</td>
                <td className="py-3 px-4">{row.staffId}</td>
                <td className="py-3 px-4">{row.invoiceId}</td>
                <td className="py-3 px-4">{row.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      row.status === "Rejected"
                        ? "text-red-600"
                        : row.status === "Paid"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                    <div className="relative inline-block text-left">
                      {/* Button */}
                      <button
                        id="menu-button"
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={toggleDropdown}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mr-8">
                          <circle cx="5" cy="12" r="2.5"></circle>
                          <circle cx="12" cy="12" r="2.5"></circle>
                          <circle cx="19" cy="12" r="2.5"></circle>
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div
                          id="dropdown"
                          className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 z-10"
                        >
                          <ul className="py-1">
                            <li>
                              <a
                                href="/SalesDashboard/sending-proposals"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                View
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Option 2
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                Option 3
                              </a>
                            </li>
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">1 - 15 of {invoiceData.length} entries</span>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">1</button>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">2</button>
          <span>...</span>
          <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">6</button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;

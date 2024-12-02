import React, { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceTable from "../../components/sales/InvoiceTable";

const Invoice = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest("#menu-button") && !e.target.closest("#dropdown")) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F6FB] p-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Invoice</h1>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg flex items-center gap-4 mb-8 shadow-sm">
        {/* Dropdown */}
        <div className="relative flex items-center p-3 rounded-l bg-gray-100 border border-[#E5E7EB]">
          <select
            className="bg-transparent text-[#2D2D2D] font-medium text-sm border-none focus:outline-none cursor-pointer"
            aria-label="Search By"
          >
            <option>Search By: Name</option>
            <option>Search By: ID</option>
          </select>
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <svg className="w-4 h-4 text-[#2D2D2D]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4" />
            </svg>
          </span>
        </div>
        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          className="ml-5 flex-grow mr-6 p-3 bg-white rounded-r border border-[#E5E7EB] text-sm focus:outline-red-500"
        />
        {/* Button */}
        <button className="bg-[#C61531] hover:bg-[#B5132A] text-white font-medium text-sm px-16 py-4 rounded-md shadow-sm">
          Find
        </button>
      </div>

      {/* Recent Search Results */}
      <div className="w-full mt-8">
          {/* Table */}
          <InvoiceTable />
      </div>
    </div>
  );
};

export default Invoice;

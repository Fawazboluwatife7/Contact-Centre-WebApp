import React, { useState } from "react";

const Prospects = () => {
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
    <div className="min-h-screen bg-[#F5F6FB] p-14">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Prospects</h1>
        <button className="bg-pink-100 border border-red-600 hover:bg-[#B5132A] text-red-600 font-bold text-sm px-10 py-4 rounded-md shadow-sm">
          Create Prospect
        </button>
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
          className="-ml-5 flex-grow mr-6 p-3 bg-white rounded-r border border-[#E5E7EB] text-sm focus:outline-none"
        />
        {/* Button */}
        <button className="bg-[#C61531] hover:bg-[#B5132A] text-white font-medium text-sm px-16 py-4 rounded-md shadow-sm">
          Find
        </button>
      </div>

      {/* Recent Search Results */}
      <div className="w-full mt-8">
        <h2 className="text-base font-semibold text-gray-400 mb-4">Recent search result:</h2>
        <div className="bg-white border p-8 rounded-lg shadow-lg overflow-hidden">
          {/* Table */}
          <table className="w-full text-left table-auto border-collapse">
            <tbody>
              {/* Sample Rows */}
              <tr className="bg-white hover:bg-gray-100 border-2 border-gray-300">
                <td className="py-4 px-6 flex items-center space-x-3">
                  <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
                  <span>Smiths Hospital</span>
                </td>
                <td className="py-4 px-6">smith@hospital.com</td>
                <td className="py-4 px-6">Corporate</td>
                <td className="py-4 px-6">01786568</td>
                <td className="py-4 px-6">Broker Name</td>
                <td className="py-4 px-6">22 Aug 2022</td>
                <td className="py-4 px-6 text-right">
                  <div className="relative inline-block text-left">
                    {/* Button */}
                    <button
                      id="menu-button"
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={toggleDropdown}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <circle cx="5" cy="12" r="2.5"></circle>
                        <circle cx="12" cy="12" r="2.5"></circle>
                        <circle cx="19" cy="12" r="2.5"></circle>
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div
                        id="dropdown"
                        className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 z-10"
                      >
                        <ul className="py-1">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              Option 1
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
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              Option 4
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              Option 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Prospects;

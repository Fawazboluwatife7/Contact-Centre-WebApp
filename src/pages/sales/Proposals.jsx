import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Proposals = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProspects, setFilteredProspects] = useState([]);
  const navigate = useNavigate();

  const prospects = [
    { id: 1, name: "Smiths Hospital", email: "smith@hospital.com", type: "Corporate", idNumber: "01786568", broker: "Broker Name", date: "22 Aug 2022" },
    { id: 2, name: "Green Valley", email: "contact@greenvalley.com", type: "Corporate", idNumber: "01786569", broker: "Broker A", date: "10 Jul 2022" },
    { id: 3, name: "Blue Health", email: "info@bluehealth.com", type: "Corporate", idNumber: "01786570", broker: "Broker B", date: "05 Jun 2022" },
    { id: 4, name: "Sunrise Clinic", email: "support@sunrise.com", type: "Corporate", idNumber: "01786571", broker: "Broker C", date: "18 Sep 2022" },
    { id: 5, name: "Wellness Center", email: "info@wellness.com", type: "Corporate", idNumber: "01786572", broker: "Broker D", date: "11 Oct 2022" },
    { id: 6, name: "Healthcare Ltd", email: "admin@healthcare.com", type: "Corporate", idNumber: "01786573", broker: "Broker E", date: "01 Nov 2022" },
    { id: 7, name: "MedLife", email: "contact@medlife.com", type: "Corporate", idNumber: "01786574", broker: "Broker F", date: "30 Nov 2022" },
  ];

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

  useEffect(() => {
    setFilteredProspects(
      prospects.filter((prospect) =>
        prospect.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleRowClick = () => {
    navigate("/SalesDashboard/sending-proposals");
  };

  return (
    <div className="min-h-full ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Proposals</h1>
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-5 flex-grow mr-6 p-3 bg-white rounded-r border border-[#E5E7EB] text-sm focus:outline-red-500"
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
              {filteredProspects.map((prospect) => (
                <tr 
                  key={prospect.id} 
                  className="bg-white hover:bg-gray-100 border-2 border-gray-300 cursor-pointer"
                  onClick={handleRowClick}
                >
                  <td className="py-4 px-6 flex items-center space-x-3">
                    <img className="h-8 w-8 rounded-full" src="/Avatar.svg" alt="Profile" />
                    <span>{prospect.name}</span>
                  </td>
                  <td className="py-4 px-6">{prospect.email}</td>
                  <td className="py-4 px-6">{prospect.type}</td>
                  <td className="py-4 px-6">{prospect.idNumber}</td>
                  <td className="py-4 px-6">{prospect.broker}</td>
                  <td className="py-4 px-6">{prospect.date}</td>
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
      </div>
    </div>
  );
};

export default Proposals;

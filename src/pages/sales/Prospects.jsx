import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Prospects = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProspects, setFilteredProspects] = useState([]);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

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

  const toggleMenu = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const closeMenu = () => {
    setActiveMenuIndex(null);
  };

  useEffect(() => {
    setFilteredProspects(
      prospects.filter((prospect) =>
        prospect.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Prospects</h1>
        <Link to="/SalesDashboard/create-prospect1">
          <button className="bg-pink-100 border border-red-600 hover:bg-[#B5132A] hover:text-white text-red-600 font-bold text-sm px-10 py-4 rounded-md shadow-sm">
            Create Prospect
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg flex items-center gap-4 mb-8 shadow-sm">
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
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-5 flex-grow mr-6 p-3 bg-white rounded-r border border-[#E5E7EB] text-sm focus:outline-red-500"
        />
        <button className="bg-[#C61531] hover:bg-[#B5132A] text-white font-medium text-sm px-16 py-4 rounded-md shadow-sm">
          Find
        </button>
      </div>

      {/* Recent Search Results */}
      <div className="w-full mt-8">
        <h2 className="text-base font-semibold text-gray-400 mb-4">Recent search result:</h2>
        <div className="bg-white border p-8 rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left table-auto border-collapse">
            <tbody>
              {filteredProspects.map((prospect, index) => (
                <tr
                  key={prospect.id}
                  className="bg-white hover:bg-gray-100 border-2 border-gray-300"
                  onClick={() => navigate("/SalesDashboard/sme-client-profile")}
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
                  <td className="px-4 py-2 relative text-right">
                    {/* Options Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ul className="text-sm text-gray-700">
                          {["View", "Edit Profile", "Send E-Card", "Dependents", "Change Plan", "Remove"].map(
                            (option, idx) => (
                              <li
                                key={idx}
                                className={`px-4 py-1 hover:bg-gray-100 cursor-pointer ${
                                  option === "Remove" ? "text-red-600" : ""
                                }`}
                                onClick={() => navigate("/SalesDashboard/sme-client-profile")}
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
      </div>
    </div>
  );
};

export default Prospects;

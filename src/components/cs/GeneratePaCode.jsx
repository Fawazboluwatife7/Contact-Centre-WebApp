import { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";
import imageicon from "../../assets/csImages/Ellipse 47.svg";
import filter from "../../assets/csImages/filter.svg";
import sort from "../../assets/csImages/sort.svg";
import { useNavigate } from "react-router-dom";


function GeneratePaCode() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Search state variables
  const [searchName, setSearchName] = useState("");
  const [searchEnrolleeId, setSearchEnrolleeId] = useState("");
  const [searchScheme, setSearchScheme] = useState("");
  const [searchPlanType, setSearchPlanType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          name: "John Doe",
          enrolleeId: "ENR123456",
          scheme: "Health",
          billingFrequency: "Annually",
          startDate: "22/8/2022",
          terminationReason: "Plan Benefit has been exceeded",
          status: "Rejected",
          action: "...",
        },
        {
          name: "Jane Smith",
          enrolleeId: "ENR654321",
          scheme: "Life",
          billingFrequency: "Quarterly",
          startDate: "15/1/2023",
          terminationReason: "User Requested Termination",
          status: "Active",
          action: "...",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchName.toLowerCase()) &&
      item.enrolleeId.toLowerCase().includes(searchEnrolleeId.toLowerCase()) &&
      item.scheme.toLowerCase().includes(searchScheme.toLowerCase()) &&
      item.billingFrequency.toLowerCase().includes(searchPlanType.toLowerCase())
    );
  });

  // Paginate the filtered data
  const paginateData = showAll ? filteredData : filteredData.slice(0, 7);

  if (loading) {
    return (
      <div className="w-full p-5 bg-lightblue mt-10">
        <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
        <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
        <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-5 bg-lightblue mt-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const handleRowClick = (id) => {
    navigate("/enrolleePaCode");
  };
  
  return (
    <div className="p-5 w-[1150px] bg-lightblue">
      <span className="w-[183px] h-[23px] text-[23px] font-bold mb-6">
        {" "}
        Generate PA Code
      </span>
      <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
        {/* Search Fields */}
        <div className="relative">
          <label htmlFor="searchName" className="block text-gray-700 mb-1">
            First Name
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchName"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <div className="absolute left-3 mt-3">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="searchEnrolleeId"
            className="block text-gray-700 mb-1"
          >
            LastName
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchEnrolleeId"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchEnrolleeId}
                onChange={(e) => setSearchEnrolleeId(e.target.value)}
              />
            </div>
            <div className="absolute left-3 mt-3">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="searchScheme" className="block text-gray-700 mb-1">
            Enrollee ID
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchScheme"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchScheme}
                onChange={(e) => setSearchScheme(e.target.value)}
              />
            </div>
            <div className="absolute left-3 mt-3">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="searchPlanType" className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchPlanType"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchPlanType}
                onChange={(e) => setSearchPlanType(e.target.value)}
              />
            </div>
            <div className="absolute left-3 mt-3">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex justify-end mt-5 mb-2">
        <div className="text-red-700 w-[88px] h-[36px] flex items-center justify-center bg-white outline">
          <img src={filter} alt="" className="w-[20px] h-[20px] mr-1" /> Filter
        </div>
        <div className="text-red-700 w-[88px] h-[36px] flex items-center justify-center bg-white outline ml-2">
          <img src={sort} alt="" className="w-[20px] h-[20px] mr-1" /> Sort
        </div>
      </div>

          {/* Table Display */}
          <div className="overflow-x-auto w-full bg-white">
        <table className="w-full text-sm text-gray-600">
          <thead className="bg-darkblue">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Enrollee ID</th>
              <th className="py-2 px-4 text-left">Scheme</th>
              <th className="py-2 px-4 text-left">Billing Frequency</th>
              <th className="py-2 px-4 text-left">Start Date</th>
              <th className="py-2 px-4 text-left">Termination Reason</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginateData.map((item) => (
              <tr
                key={item.id}
                className="border-b cursor-pointer hover:bg-gray-100"
                onClick={() => handleRowClick(item.id)}
              >
                <td className="py-2 px-4 flex items-center">
                  <img src={imageicon} alt="" className="w-6 h-6 mr-2" />
                  {item.name}
                </td>
                <td className="py-2 px-4">{item.enrolleeId}</td>
                <td className="py-2 px-4">{item.scheme}</td>
                <td className="py-2 px-4">{item.billingFrequency}</td>
                <td className="py-2 px-4">{item.startDate}</td>
                <td className="py-2 px-4">{item.terminationReason}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show all toggle */}
      <div className="mt-5 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:text-blue-800"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export default GeneratePaCode;

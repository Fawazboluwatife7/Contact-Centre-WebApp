import { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";
import filter from "../../assets/csImages/filter.svg";
import sort from "../../assets/csImages/sort.svg";
import edit from "../../assets/CSIMAGES/pencil-edit.svg";
import deleteicon from "../../assets/CSIMAGES/delete.svg";
import { useNavigate } from "react-router-dom";

function ProviderComponent() {
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
          id: 1,
          groupCode: "1002",
          groupName: "Reddington hospital",
          scheme: "PRO",
          startDate: "22/8/2022",
          endDate: "22/8/2022",
          status: "Active",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredData = data.filter((item) => {
    return (
      item.groupCode.toLowerCase().includes(searchName.toLowerCase()) &&
      item.groupName.toLowerCase().includes(searchEnrolleeId.toLowerCase()) &&
      item.scheme.toLowerCase().includes(searchScheme.toLowerCase()) &&
      item.startDate.toLowerCase().includes(searchPlanType.toLowerCase())
    );
  });

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
    navigate(`/providerDetails/${id}`);
  };

  return (
    <div className="p-5 w-[1150px] bg-lightblue">
      <span className="w-[183px] h-[23px] text-[23px] font-bold mb-6">
        Provider
      </span>
      <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
        {/* Search Fields */}
        <div className="relative">
          <label htmlFor="searchName" className="block mb-1">
            Provider Name
          </label>
          <input
            id="searchName"
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div className="relative">
          <label htmlFor="searchEnrolleeId" className="block mb-1">
            Provider Code
          </label>
          <input
            id="searchEnrolleeId"
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Search"
            value={searchEnrolleeId}
            onChange={(e) => setSearchEnrolleeId(e.target.value)}
          />
        </div>

        <div className="relative">
          <label htmlFor="searchScheme" className="block mb-1">
            Provider Class (e.g., Hospital, Gym, Pharmacy)
          </label>
          <input
            id="searchScheme"
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Search"
            value={searchScheme}
            onChange={(e) => setSearchScheme(e.target.value)}
          />
        </div>

        <div className="relative">
          <label htmlFor="searchPlanType" className="block mb-1">
            Location
          </label>
          <input
            id="searchPlanType"
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Search"
            value={searchPlanType}
            onChange={(e) => setSearchPlanType(e.target.value)}
          />
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="flex justify-end mt-5 mb-2">
        <div className="text-red-700 w-[88px] h-[36px] flex items-center justify-center bg-white outline">
          <img src={filter} alt="Filter" className="w-[20px] h-[20px] mr-1" /> Filter
        </div>
        <div className="text-red-700 w-[88px] h-[36px] flex items-center justify-center bg-white outline ml-2">
          <img src={sort} alt="Sort" className="w-[20px] h-[20px] mr-1" /> Sort
        </div>
      </div>

      {/* Table Display */}
      <div className="overflow-x-auto w-full bg-white">
        <div className="ml-6 mt-5 mb-4 text-red-700 font-bold">Provider List</div>
        <table className="w-full text-sm text-gray-600">
  <thead className="bg-gray-200">
    <tr>
      <th className="py-2 px-4 text-left">Group Code</th>
      <th className="py-2 px-4 text-left">Group Name</th>
      <th className="py-2 px-4 text-left">Scheme</th>
      <th className="py-2 px-4 text-left">Start Date</th>
      <th className="py-2 px-4 text-left">End Date</th>
      <th className="py-2 px-4 text-left">Status</th>
      <th className="py-2 px-4 text-left">Actions</th>
    </tr>
  </thead>
  <tbody className="font-bold">
    {paginateData.map((item) => (
      <tr
        key={item.id}
        className="border-b cursor-pointer hover:bg-gray-100"
        onClick={() => handleRowClick(item.id)}
      >
        <td className="py-2 px-4">{item.groupCode}</td>
        <td className="py-2 px-4">{item.groupName}</td>
        <td className="py-2 px-4">{item.scheme}</td>
        <td className="py-2 px-4">{item.startDate}</td>
        <td className="py-2 px-4">{item.endDate}</td>
        <td className="py-2 px-4 text-green-600 w-[58px] bg-green-100 font-bold h[20px]">{item.status}</td>
        <td className="py-2 px-4 flex items-center gap-2">
          <img
            src={edit}
            alt="Edit"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src={deleteicon}
            alt="Delete"
            className="w-5 h-5 cursor-pointer"
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>

      {/* Show All Toggle */}
      {/* <div className="mt-5 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 hover:text-blue-800"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div> */}
    </div>
  );
}

export default ProviderComponent;

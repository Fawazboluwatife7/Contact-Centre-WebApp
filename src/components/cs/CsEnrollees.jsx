import { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";
import angleupdown from "../../assets/CSIMAGES/angleupdown.svg";
import eachuser from "../../assets/CSIMAGES/eachuser.svg";

function CsEnrolles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // State for each search field
  const [searchName, setSearchName] = useState("");
  const [searchEnrolleeId, setSearchEnrolleeId] = useState("");
  const [searchScheme, setSearchScheme] = useState("");
  const [searchPlanType, setSearchPlanType] = useState("");
  const [searchBillingInfo, setSearchBillingInfo] = useState("");
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhoneNumber, setSearchPhoneNumber] = useState("");

  // Simulate loading data (useEffect not needed for static data)
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          name: "John Doe",
          enrolleeId: "ENR123456",
          scheme: "Magnum",
          planType: ".....",
          billingInfo: "Annually",
          startDate: "2024-10-12",
          phoneNumber: "0930797493",
          email: "isamadesmond@gmail.com",
          image: eachuser,
        },

        {
          name: "John Doe",
          enrolleeId: "ENR123456",
          scheme: "Magnum",
          planType: "....",
          billingInfo: "Annually",
          startDate: "2024-10-12",
          phoneNumber: "09130797494",
          email: "isamamichael.com",
          image: eachuser,
        },
        {
          name: "Jane Smith",
          enrolleeId: "ENR789101",
          scheme: "Magnum",
          planType: "....",
          billingInfo: "Annually",
          startDate: "2024-10-10",
          phoneNumber: "09230797495",
          email: "isamafavour@gmail.com",
          image: eachuser,
        },
        {
          name: "Mary Johnson",
          enrolleeId: "ENR112233",
          scheme: "Magnum",
          planType: "....",
          billingInfo: "Annually",
          startDate: "2024-10-11",
          phoneNumber: "09330797496",
          email: "isamagrace@gmail.com",
          image: eachuser,
        },

        // Add more data as needed...
      ]);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  // Filter the data based on the search terms for each field
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchName.toLowerCase()) &&
      item.enrolleeId.toLowerCase().includes(searchEnrolleeId.toLowerCase()) &&
      item.scheme.toLowerCase().includes(searchScheme.toLowerCase()) &&
      item.planType.toLowerCase().includes(searchPlanType.toLowerCase()) &&
      item.billingInfo
        .toLowerCase()
        .includes(searchBillingInfo.toLowerCase()) &&
      item.startDate.includes(searchStartDate) &&
      item.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
      item.phoneNumber.toLowerCase().includes(searchPhoneNumber.toLowerCase())
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

  return (
    <div className="p-5 w-[1150px] bg-lightblue">
      <span>Enrollee Details</span>
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
          <label htmlFor="searchName" className="block text-gray-700 mb-1">
            Last Name
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
            Enrollee ID
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
            phone Number
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchPhoneNumber"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchPhoneNumber}
                onChange={(e) => setSearchPhoneNumber(e.target.value)}
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
            Email
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchEmail"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
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
            htmlFor="searchBillingInfo"
            className="block text-gray-700 mb-1"
          >
            Group
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchBillingInfo"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
                value={searchBillingInfo}
                onChange={(e) => setSearchBillingInfo(e.target.value)}
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

      {/* Table Display */}

      <div className="overflow-x-auto w-full mt-10 bg-white">
        <div className="flex justify-center items-center w-full">
          <div className="w-[75%] bg-red-500 flex justify-between gap-10 items-center">
            <div className="flex items-center  py-2  text-left text-sm font-semibold text-gray-600">
              Name
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
            <div className="flex items-center text-left text-sm font-semibold text-gray-600">
              Enrollee ID
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
            <div className="flex items-center  py-2 text-left text-sm font-semibold text-gray-600">
              Scheme
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
            <div className="flex items-center  py-2 text-left text-sm font-semibold text-gray-600">
              Plan Type
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
            <div className="flex items-center  py-2 text-left text-sm font-semibold text-gray-600">
              Billing Frequency
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
            <div className="flex items-center  py-2 text-left text-sm font-semibold text-gray-600">
              Start Date
              <img src={angleupdown} className="ml-2 w-4 h-4" alt="Sort Icon" />
            </div>
          </div>
        </div>

        <tbody>
          {" "}
          {paginateData.map((item, index) => (
            <tr key={index} className="border-b">
              {" "}
              <td className="py-2 px-4">
                {" "}
                <img
                  src={item.image}
                  className="w-10 h-10 rounded-full bg-red-500"
                  alt="User"
                />{" "}
              </td>{" "}
              <td className="py-2 px-16">{item.name}</td>{" "}
              <td className="py-2 px-4">{item.enrolleeId}</td>{" "}
              <td className="py-2 px-4">{item.scheme}</td>{" "}
              <td className="py-2 px-4">{item.planType}</td>{" "}
              <td className="py-2 px-4">{item.billingInfo}</td>{" "}
              <td className="py-2 px-4">{item.startDate}</td>{" "}
            </tr>
          ))}{" "}
        </tbody>
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

export default CsEnrolles;

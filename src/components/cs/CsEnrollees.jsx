import React, { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";

function CsEnrolles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  //   const [searchTerm, setSearchTerm] = useState("");

  // Simulate loading data (useEffect not needed for static data)
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          name: "John Doe",
          enrolleeId: "ENR123456",
          scheme: "Health",
          planType: "Premium",
          billingInfo: "Paid",
          startDate: "2024-10-12",
        },
        {
          name: "Jane Smith",
          enrolleeId: "ENR789101",
          scheme: "Health",
          planType: "Basic",
          billingInfo: "Unpaid",
          startDate: "2024-10-10",
        },
        {
          name: "Mary Johnson",
          enrolleeId: "ENR112233",
          scheme: "Dental",
          planType: "Standard",
          billingInfo: "Paid",
          startDate: "2024-10-11",
        },
        {
          name: "James Brown",
          enrolleeId: "ENR445566",
          scheme: "Vision",
          planType: "Premium",
          billingInfo: "Unpaid",
          startDate: "2024-10-09",
        },
        {
          name: "Robert White",
          enrolleeId: "ENR778899",
          scheme: "Health",
          planType: "Basic",
          billingInfo: "Paid",
          startDate: "2024-10-08",
        },
        {
          name: "Linda Green",
          enrolleeId: "ENR223344",
          scheme: "Dental",
          planType: "Premium",
          billingInfo: "Unpaid",
          startDate: "2024-10-07",
        },
        {
          name: "Michael Black",
          enrolleeId: "ENR556677",
          scheme: "Vision",
          planType: "Standard",
          billingInfo: "Paid",
          startDate: "2024-10-06",
        },
        {
          name: "Elizabeth Blue",
          enrolleeId: "ENR998877",
          scheme: "Health",
          planType: "Premium",
          billingInfo: "Unpaid",
          startDate: "2024-10-05",
        },
        {
          name: "William Grey",
          enrolleeId: "ENR334455",
          scheme: "Health",
          planType: "Standard",
          billingInfo: "Paid",
          startDate: "2024-10-04",
        },
        {
          name: "Susan Purple",
          enrolleeId: "ENR667788",
          scheme: "Dental",
          planType: "Standard",
          billingInfo: "Unpaid",
          startDate: "2024-10-03",
        },
        {
          name: "David Yellow",
          enrolleeId: "ENR223366",
          scheme: "Vision",
          planType: "Premium",
          billingInfo: "Paid",
          startDate: "2024-10-02",
        },
        {
          name: "Helen Pink",
          enrolleeId: "ENR445566",
          scheme: "Health",
          planType: "Basic",
          billingInfo: "Unpaid",
          startDate: "2024-10-01",
        },
      ]);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

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

  const paginateData = showAll ? data : data.slice(0, 7);

  return (
    <div className="p-5 w-[1150px] bg-lightblue">
      <span className="">Enrollee Details</span>
      <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Name
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
            <div className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Enrollee ID */}
        <div className="relative">
          <label htmlFor="enrolleeId" className="block text-gray-700 mb-1">
            Enrollee ID
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="enrolleeId"
                type="text"
                name="enrolleeId"
                className="w-full p-2 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
            <span className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </span>
          </div>
        </div>

        {/* Scheme */}
        <div className="relative">
          <label htmlFor="scheme" className="block text-gray-700 mb-1">
            Scheme
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="scheme"
                type="text"
                name="scheme"
                className="w-full p-2 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
            <span className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </span>
          </div>
        </div>

        {/* Plan Type */}
        <div className="relative">
          <label htmlFor="planType" className="block text-gray-700 mb-1">
            Plan Type
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="planType"
                type="text"
                name="planType"
                className="w-full p-2 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
            <span className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </span>
          </div>
        </div>

        {/* Billing Info */}
        <div className="relative">
          <label htmlFor="billingInfo" className="block text-gray-700 mb-1">
            Billing Info
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="billingInfo"
                type="text"
                name="billingInfo"
                className="w-full p-2 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
            <span className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </span>
          </div>
        </div>

        {/* Start Date */}
        <div className="relative">
          <label htmlFor="startDate" className="block text-gray-700 mb-1">
            Start Date
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="startDate"
                type="date"
                name="startDate"
                className="w-full p-2 rounded-md focus:outline-none"
              />
            </div>
            <span className="absolute left-3 mt-3 ">
              <img
                src={search}
                alt="Search"
                className="w-4 h-4 text-gray-500"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Enrollee ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Scheme
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Plan Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Billing Info
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Start Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                {!showAll && data.length > 7 && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setShowAll(true)}
                      className="text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100"
                    >
                      See More
                    </button>
                  </div>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render paginated data */}
            {paginateData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.enrolleeId}</td>
                <td className="px-4 py-2">{item.scheme}</td>
                <td className="px-4 py-2">{item.planType}</td>
                <td className="px-4 py-2">{item.billingInfo}</td>
                <td className="px-4 py-2">{item.startDate}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:bg-blue-100 py-1 px-3 rounded-md">
                    See All
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CsEnrolles;

// import React, { useState, useEffect } from "react";
// import search from "../../assets/CSIMAGES/Search.svg";

// function CsEnrolles() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState({
//     name: "",
//     enrolleeId: "",
//     scheme: "",
//     planType: "",
//     billingInfo: "",
//     startDate: "",
//   });

//   // Simulate loading data (useEffect not needed for static data)
//   useEffect(() => {
//     setTimeout(() => {
//       setData([
//         {
//           name: "John Doe",
//           enrolleeId: "ENR123456",
//           scheme: "Health",
//           planType: "Premium",
//           billingInfo: "Paid",
//           startDate: "2024-10-12",
//         },
//         {
//           name: "Jane Smith",
//           enrolleeId: "ENR789101",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-10",
//         },
//         {
//           name: "Mary Johnson",
//           enrolleeId: "ENR112233",
//           scheme: "Dental",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-11",
//         },
//         {
//           name: "James Brown",
//           enrolleeId: "ENR445566",
//           scheme: "Vision",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-09",
//         },
//         {
//           name: "Robert White",
//           enrolleeId: "ENR778899",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Paid",
//           startDate: "2024-10-08",
//         },
//         {
//           name: "Linda Green",
//           enrolleeId: "ENR223344",
//           scheme: "Dental",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-07",
//         },
//         {
//           name: "Michael Black",
//           enrolleeId: "ENR556677",
//           scheme: "Vision",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-06",
//         },
//         {
//           name: "Elizabeth Blue",
//           enrolleeId: "ENR998877",
//           scheme: "Health",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-05",
//         },
//         {
//           name: "William Grey",
//           enrolleeId: "ENR334455",
//           scheme: "Health",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-04",
//         },
//         {
//           name: "Susan Purple",
//           enrolleeId: "ENR667788",
//           scheme: "Dental",
//           planType: "Standard",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-03",
//         },
//         {
//           name: "David Yellow",
//           enrolleeId: "ENR223366",
//           scheme: "Vision",
//           planType: "Premium",
//           billingInfo: "Paid",
//           startDate: "2024-10-02",
//         },
//         {
//           name: "Helen Pink",
//           enrolleeId: "ENR445566",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-01",
//         },
//       ]);
//       setLoading(false);
//     }, 1000); // Simulate a 1-second delay
//   }, []);

//   const handleSearch = (e) => {
//     const { name, value } = e.target;
//     setSearchTerm((prev) => ({
//       ...prev,
//       [name]: value.toLowerCase(),
//     }));
//   };

//   // Filter the data based on the searchTerm for each field
//   const filteredData = data.filter((item) => {
//     return (
//       item.name.toLowerCase().includes(searchTerm.name) &&
//       item.enrolleeId.toLowerCase().includes(searchTerm.enrolleeId) &&
//       item.scheme.toLowerCase().includes(searchTerm.scheme) &&
//       item.planType.toLowerCase().includes(searchTerm.planType) &&
//       item.billingInfo.toLowerCase().includes(searchTerm.billingInfo) &&
//       item.startDate.includes(searchTerm.startDate)
//     );
//   });

//   if (loading) {
//     return (
//       <div className="w-full p-5 bg-lightblue mt-10">
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full p-5 bg-lightblue mt-10">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   const paginateData = showAll ? data : data.slice(0, 7);

//   return (
//     <div className="p-5 w-[1150px] bg-lightblue">
//       <span className="">Enrollee Details</span>

//       <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
//         {[
//           "name",
//           "enrolleeId",
//           "scheme",
//           "planType",
//           "billingInfo",
//           "startDate",
//         ].map((field) => (
//           <div className="relative" key={field}>
//             <label htmlFor={field} className="block text-gray-700 mb-1">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <div className="flex flex-col border-2">
//               <div className="ml-7">
//                 <input
//                   id={field}
//                   name={field}
//                   type={field === "startDate" ? "date" : "text"}
//                   value={searchTerm[field]}
//                   onChange={handleSearch}
//                   className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
//                   placeholder={`Search by ${field}`}
//                 />
//               </div>
//               <div className="absolute left-3 mt-3">
//                 <img
//                   src={search}
//                   alt="Search"
//                   className="w-4 h-4 text-gray-500"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="overflow-x-auto bg-white rounded-md shadow-sm">
//         <table className="min-w-full table-auto">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Name
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Enrollee ID
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Scheme
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Plan Type
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Billing Info
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 Start Date
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 {!showAll && data.length > 7 && (
//                   <div className="flex justify-center mt-4">
//                     <button
//                       onClick={() => setShowAll(true)}
//                       className="text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100"
//                     >
//                       See More
//                     </button>
//                   </div>
//                 )}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Render paginated data */}
//             {paginateData.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.enrolleeId}</td>
//                 <td className="px-4 py-2">{item.scheme}</td>
//                 <td className="px-4 py-2">{item.planType}</td>
//                 <td className="px-4 py-2">{item.billingInfo}</td>
//                 <td className="px-4 py-2">{item.startDate}</td>
//                 <td className="px-4 py-2">
//                   <button className="text-blue-500 hover:bg-blue-100 py-1 px-3 rounded-md">
//                     See All
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CsEnrolles;

//correct for one search

// import React, { useState, useEffect } from "react";
// import search from "../../assets/CSIMAGES/Search.svg";

// function CsEnrolles() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Search fields state
//   const [searchName, setSearchName] = useState("");
//   const [searchEnrolleeId, setSearchEnrolleeId] = useState("");
//   const [searchScheme, setSearchScheme] = useState("");
//   const [searchPlanType, setSearchPlanType] = useState("");
//   const [searchBillingInfo, setSearchBillingInfo] = useState("");
//   const [searchStartDate, setSearchStartDate] = useState("");

//   // Simulate loading data (useEffect not needed for static data)
//   useEffect(() => {
//     setTimeout(() => {
//       setData([
//         {
//           name: "John Doe",
//           enrolleeId: "ENR123456",
//           scheme: "Health",
//           planType: "Premium",
//           billingInfo: "Paid",
//           startDate: "2024-10-12",
//         },
//         {
//           name: "Jane Smith",
//           enrolleeId: "ENR789101",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-10",
//         },
//         {
//           name: "Mary Johnson",
//           enrolleeId: "ENR112233",
//           scheme: "Dental",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-11",
//         },
//         {
//           name: "James Brown",
//           enrolleeId: "ENR445566",
//           scheme: "Vision",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-09",
//         },
//         {
//           name: "Robert White",
//           enrolleeId: "ENR778899",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Paid",
//           startDate: "2024-10-08",
//         },
//         {
//           name: "Linda Green",
//           enrolleeId: "ENR223344",
//           scheme: "Dental",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-07",
//         },
//         {
//           name: "Michael Black",
//           enrolleeId: "ENR556677",
//           scheme: "Vision",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-06",
//         },
//         {
//           name: "Elizabeth Blue",
//           enrolleeId: "ENR998877",
//           scheme: "Health",
//           planType: "Premium",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-05",
//         },
//         {
//           name: "William Grey",
//           enrolleeId: "ENR334455",
//           scheme: "Health",
//           planType: "Standard",
//           billingInfo: "Paid",
//           startDate: "2024-10-04",
//         },
//         {
//           name: "Susan Purple",
//           enrolleeId: "ENR667788",
//           scheme: "Dental",
//           planType: "Standard",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-03",
//         },
//         {
//           name: "David Yellow",
//           enrolleeId: "ENR223366",
//           scheme: "Vision",
//           planType: "Premium",
//           billingInfo: "Paid",
//           startDate: "2024-10-02",
//         },
//         {
//           name: "Helen Pink",
//           enrolleeId: "ENR445566",
//           scheme: "Health",
//           planType: "Basic",
//           billingInfo: "Unpaid",
//           startDate: "2024-10-01",
//         },
//       ]);
//       setLoading(false);
//     }, 1000); // Simulate a 1-second delay
//   }, []);

//   // Handle search term change
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter the data based on the search term
//   const filteredData = data.filter((item) => {
//     return (
//       item.name.toLowerCase().includes(searchTerm) ||
//       item.enrolleeId.toLowerCase().includes(searchTerm) ||
//       item.scheme.toLowerCase().includes(searchTerm) ||
//       item.planType.toLowerCase().includes(searchTerm) ||
//       item.billingInfo.toLowerCase().includes(searchTerm) ||
//       item.startDate.includes(searchTerm)
//     );
//   });

//   // Paginate the filtered data
//   const paginateData = showAll ? filteredData : filteredData.slice(0, 7);

//   if (loading) {
//     return (
//       <div className="w-full p-5 bg-lightblue mt-10">
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//         <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full p-5 bg-lightblue mt-10">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-5 w-[1150px] bg-lightblue">
//       <span>Enrollee Details</span>
//       <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
//         <div className="relative">
//           <label htmlFor="search" className="block text-gray-700 mb-1">
//             Search Enrollee
//           </label>
//           <div className="flex flex-col border-2">
//             <div className="ml-7">
//               <input
//                 id="search"
//                 type="text"
//                 className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
//                 placeholder="Search by name, ID, scheme, etc."
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//             </div>
//             <div className="absolute left-3 mt-3">
//               <img
//                 src={search}
//                 alt="Search"
//                 className="w-4 h-4 text-gray-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-md shadow-sm">
//         <table className="min-w-full table-auto">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Name",
//                 "Enrollee ID",
//                 "Scheme",
//                 "Plan Type",
//                 "Billing Info",
//                 "Start Date",
//               ].map((header, index) => (
//                 <th
//                   key={index}
//                   className="px-4 py-2 text-left text-sm font-semibold text-gray-600"
//                 >
//                   {header}
//                 </th>
//               ))}
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//                 {!showAll && filteredData.length > 7 && (
//                   <div className="flex justify-center mt-4">
//                     <button
//                       onClick={() => setShowAll(true)}
//                       className="text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100"
//                     >
//                       See More
//                     </button>
//                   </div>
//                 )}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginateData.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.enrolleeId}</td>
//                 <td className="px-4 py-2">{item.scheme}</td>
//                 <td className="px-4 py-2">{item.planType}</td>
//                 <td className="px-4 py-2">{item.billingInfo}</td>
//                 <td className="px-4 py-2">{item.startDate}</td>
//                 <td className="px-4 py-2">
//                   <button className="text-blue-500 hover:bg-blue-100 py-1 px-3 rounded-md">
//                     See All
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CsEnrolles;

import React, { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";

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
      item.startDate.includes(searchStartDate)
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
            Search by Name
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchName"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search by Name"
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
            Search by Enrollee ID
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchEnrolleeId"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search by Enrollee ID"
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
            Search by Scheme
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchScheme"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search by Scheme"
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
            Search by Plan Type
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchPlanType"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search by Plan Type"
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

        <div className="relative">
          <label
            htmlFor="searchBillingInfo"
            className="block text-gray-700 mb-1"
          >
            Search by Billing Info
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchBillingInfo"
                type="text"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Search by Billing Info"
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

        <div className="relative">
          <label htmlFor="searchStartDate" className="block text-gray-700 mb-1">
            Search by Start Date
          </label>
          <div className="flex flex-col border-2">
            <div className="ml-7">
              <input
                id="searchStartDate"
                type="date"
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
                value={searchStartDate}
                onChange={(e) => setSearchStartDate(e.target.value)}
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
        <table className="w-full text-sm text-gray-600">
          <thead className="text-red-500 bg-darkblue">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Enrollee ID</th>
              <th className="py-2 px-4 text-left">Scheme</th>
              <th className="py-2 px-4 text-left">Plan Type</th>
              <th className="py-2 px-4 text-left">Billing Info</th>
              <th className="py-2 px-4 text-left">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {paginateData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.enrolleeId}</td>
                <td className="py-2 px-4">{item.scheme}</td>
                <td className="py-2 px-4">{item.planType}</td>
                <td className="py-2 px-4">{item.billingInfo}</td>
                <td className="py-2 px-4">{item.startDate}</td>
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

export default CsEnrolles;

import React, { useState, useEffect } from "react";
import rightangle from "../../assets/CSIMAGES/rightangleimg.svg";
import plusbutton from "../../assets/CSIMAGES/plusbutton.svg";
import barchart from "../../assets/CSIMAGES/barchat.svg";
import bluebarchat from "../../assets/CSIMAGES/bluechat.svg";
import skybluechart from "../../assets/CSIMAGES/skybluechat.svg";
import orangechart from "../../assets/CSIMAGES/orangechat.svg";
import search from "../../assets/CSIMAGES/Search.svg";
import eachuser from "../../assets/CSIMAGES/eachuser.svg";

import { useNavigate } from "react-router-dom";

function CsDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Simulate loading data (useEffect not needed for static data)
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          name: "John Doe",
          enrolleeId: "ENR123456",
          date: "2024-10-12",
          hospital: "General Hospital",
          diagnosis: "Flu",
          status: "Open",
          image: eachuser,
        },
        {
          name: "Jane Smith",
          enrolleeId: "ENR789101",
          date: "2024-10-10",
          hospital: "City Clinic",
          diagnosis: "Headache",
          status: "Closed",
          image: eachuser,
        },
        {
          name: "Mary Johnson",
          enrolleeId: "ENR112233",
          date: "2024-10-11",
          hospital: "Greenwood Medical",
          diagnosis: "Back Pain",
          status: "Open",
          image: eachuser,
        },
        {
          name: "James Brown",
          enrolleeId: "ENR445566",
          date: "2024-10-09",
          hospital: "City Hospital",
          diagnosis: "Cold",
          status: "Closed",
          image: eachuser,
        },
        {
          name: "Robert White",
          enrolleeId: "ENR778899",
          date: "2024-10-08",
          hospital: "Downtown Hospital",
          diagnosis: "Cough",
          status: "Open",
          image: eachuser,
        },
        {
          name: "Linda Green",
          enrolleeId: "ENR223344",
          date: "2024-10-07",
          hospital: "St. Mary's Hospital",
          diagnosis: "Fatigue",
          status: "Open",
          image: eachuser,
        },
        {
          name: "Michael Black",
          enrolleeId: "ENR556677",
          date: "2024-10-06",
          hospital: "Sunset Clinic",
          diagnosis: "Stomach Ache",
          status: "Closed",
          image: eachuser,
        },
        {
          name: "Elizabeth Blue",
          enrolleeId: "ENR998877",
          date: "2024-10-05",
          hospital: "River Hospital",
          diagnosis: "Skin Rash",
          status: "Open",
          image: eachuser,
        },
        {
          name: "William Grey",
          enrolleeId: "ENR334455",
          date: "2024-10-04",
          hospital: "Northern Clinic",
          diagnosis: "High Blood Pressure",
          status: "Closed",
          image: eachuser,
        },
        {
          name: "Susan Purple",
          enrolleeId: "ENR667788",
          date: "2024-10-03",
          hospital: "Eastside Medical",
          diagnosis: "Diabetes",
          status: "Open",
          image: eachuser,
        },
        {
          name: "David Yellow",
          enrolleeId: "ENR223366",
          date: "2024-10-02",
          hospital: "Sunnyvale Hospital",
          diagnosis: "Asthma",
          status: "Closed",
          image: eachuser,
        },
        {
          name: "Helen Pink",
          enrolleeId: "ENR445566",
          date: "2024-10-01",
          hospital: "Westview Medical",
          diagnosis: "Anxiety",
          status: "Open",
          image: eachuser,
        },
      ]);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  // Dummy data for Escalations
  const escalations = [
    {
      description: "Escalation 1: Issue with the server not responding.",
    },
    {
      description:
        "Escalation 2: User unable to access their account due to login error.",
    },
    {
      description:
        "Escalation 3: Critical bug in the production environment affecting users.",
    },
  ];

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
    <div className="w-[1150px] flex flex-col  p-5 bg-lightblue">
      {/* Stats Section */}
      <div className="flex gap-5 justify-between ">
        <div className="flex flex-col w-full">
          <span>Hi, Favour,</span>
          <div className="flex w-full justify-between">
            <span>Your Dashboard</span>
            <div className="bg-white b-2">Date Component</div>
          </div>
        </div>
      </div>

      {/* First Div (Grid) */}
      <div className="flex w-full bg-lightblue">
        <div className="grid grid-cols-2 gap-4 mr-4 w-1/2 ">
          {/* PA Request */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <img src={barchart} alt="Icon" className="w-6 h-6" />
            <span>PA Request</span>
            <span className="text-[36px]">275</span>
          </div>

          {/* Approved PA Requests */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <img src={bluebarchat} alt="Icon" className="w-6 h-6" />
            <span>Approved PA Requests</span>
            <span className="text-[36px]">182</span>
          </div>

          {/* Open Tickets */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <img src={skybluechart} alt="Icon" className="w-6 h-6" />
            <span>Open Tickets</span>
            <span className="text-[36px]">2300</span>
          </div>

          {/* Closed Tickets */}
          <div className="flex flex-col items-left justify-center space-x-2 bg-white p-4 rounded-md shadow-sm">
            <img src={orangechart} alt="Icon" className="w-6 h-6" />
            <span>Closed Tickets</span>
            <span className="text-[36px]">42</span>
          </div>
        </div>

        {/* Second Div (Escalations Section) */}
        <div className="w-1/2 flex flex-col">
          {/* Header Section */}
          <div className="flex items-center justify-between p-4 bg-white">
            <h2 className="text-2xl font-semibold">Escalations</h2>

            <button className="flex justify-center items-center text-red-500 py-2 px-4 rounded-md hover:bg-red-600">
              See All
              <img src={rightangle} alt="Arrow" />
            </button>
          </div>

          {/* List of Escalations */}
          <div>
            {/* Render Escalations */}
            {escalations.map((escalation, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white shadow-sm border-b w-full h-[70px] border-gray-300 rounded-md font-productSans"
              >
                <p className="text-[13px] font-normal leading-[15.7px]">
                  {escalation.description}
                </p>
                <button className="text-red-500 py-2 px-4 rounded-md hover:bg-red-600">
                  Take Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-start space-x-4">
        {/* Search Enrollee Button */}
        <button
          onClick={() => handleNavigate("/enrollees")}
          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          Search Enrollee
        </button>

        {/* Manage PA Button */}
        <button
          onClick={() => handleNavigate("/managepa")}
          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          Manage PA
        </button>

        {/* Create Ticket Button with Image */}
        <button
          onClick={() => handleNavigate("/create-ticket")}
          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
        >
          <img src={plusbutton} alt="Create Ticket" className="w-5 h-5 mr-2" />
          Create Ticket
        </button>
      </div>

      <div className="w-full p-5 bg-lightblue mt-10">
        {/* Table Title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Work Bench</h2>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src={search}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white rounded-md shadow-sm">
          {/* Table Section */}
          <div className=" flex justify-end items-center w-full">
            <div className="w-[92%]  flex justify-between gap-10 items-center ">
              <div className="px-4 py-2 bg-white text-left text-sm font-semibold text-gray-600">
                Name
              </div>
              <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Enrollee ID
              </div>
              <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Date
              </div>
              <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Hospital
              </div>
              <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Diagnosis
              </div>
              <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Status
              </div>

              {/* Show All / Show Less Button */}
              <div className="flex justify-center ">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-blue-500 rounded-md hover:bg-blue-100 py-2 px-4"
                >
                  {showAll ? "Show Less" : "Show All"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              {/* Render paginated data */}
              {paginateData.map((item, index) => (
                <div
                  key={index}
                  className="flex  justify-between items-center bg-white border-2 "
                >
                  <p className="ml-3 pr-6  ">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full bg-red-500 "
                    />
                  </p>
                  <p className="font-semibold text-sm flex-1">{item.name}</p>
                  <p className="text-xs text-gray-500 flex-1">
                    {item.enrolleeId}
                  </p>
                  <p className="text-xs text-gray-500 flex-1">{item.date}</p>
                  <p className="text-xs text-gray-500 flex-1">
                    {item.hospital}
                  </p>
                  <p className="text-xs text-gray-500 flex-1">
                    {item.diagnosis}
                  </p>
                  <p className="text-xs text-gray-500 flex-1">{item.status}</p>
                  <button className="mr-3 text-blue-500 hover:bg-blue-100 rounded-md flex-shrink-0">
                    ...
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsDashboard;

// import React, { useState, useEffect } from "react";
// import rightangle from "../../assets/CSIMAGES/rightangleimg.svg";
// import plusbutton from "../../assets/CSIMAGES/plusbutton.svg";
// import barchart from "../../assets/CSIMAGES/barchat.svg";
// import bluebarchat from "../../assets/CSIMAGES/bluechat.svg";
// import skybluechart from "../../assets/CSIMAGES/skybluechat.svg";
// import orangechart from "../../assets/CSIMAGES/orangechat.svg";
// import search from "../../assets/CSIMAGES/Search.svg";
// import { useNavigate } from "react-router-dom";

// function CsDashboard() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false); // Tracks whether to show all or not
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const navigate = useNavigate(); // Initialize the navigate function

//   // Function to handle navigation
//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   // Simulate loading data (useEffect not needed for static data)
//   useEffect(() => {
//     setTimeout(() => {
//       setData([
//         {
//           name: "John Doe",
//           enrolleeId: "ENR123456",
//           date: "2024-10-12",
//           hospital: "General Hospital",
//           diagnosis: "Flu",
//           status: "Open",
//         },
//         {
//           name: "Jane Smith",
//           enrolleeId: "ENR789101",
//           date: "2024-10-10",
//           hospital: "City Clinic",
//           diagnosis: "Headache",
//           status: "Closed",
//         },
//         {
//           name: "Mary Johnson",
//           enrolleeId: "ENR112233",
//           date: "2024-10-11",
//           hospital: "Greenwood Medical",
//           diagnosis: "Back Pain",
//           status: "Open",
//         },
//         {
//           name: "James Brown",
//           enrolleeId: "ENR445566",
//           date: "2024-10-09",
//           hospital: "City Hospital",
//           diagnosis: "Cold",
//           status: "Closed",
//         },
//         {
//           name: "Robert White",
//           enrolleeId: "ENR778899",
//           date: "2024-10-08",
//           hospital: "Downtown Hospital",
//           diagnosis: "Cough",
//           status: "Open",
//         },
//         {
//           name: "Linda Green",
//           enrolleeId: "ENR223344",
//           date: "2024-10-07",
//           hospital: "St. Mary's Hospital",
//           diagnosis: "Fatigue",
//           status: "Open",
//         },
//         {
//           name: "Michael Black",
//           enrolleeId: "ENR556677",
//           date: "2024-10-06",
//           hospital: "Sunset Clinic",
//           diagnosis: "Stomach Ache",
//           status: "Closed",
//         },
//         {
//           name: "Elizabeth Blue",
//           enrolleeId: "ENR998877",
//           date: "2024-10-05",
//           hospital: "River Hospital",
//           diagnosis: "Skin Rash",
//           status: "Open",
//         },
//         {
//           name: "William Grey",
//           enrolleeId: "ENR334455",
//           date: "2024-10-04",
//           hospital: "Northern Clinic",
//           diagnosis: "High Blood Pressure",
//           status: "Closed",
//         },
//         {
//           name: "Susan Purple",
//           enrolleeId: "ENR667788",
//           date: "2024-10-03",
//           hospital: "Eastside Medical",
//           diagnosis: "Diabetes",
//           status: "Open",
//         },
//         {
//           name: "David Yellow",
//           enrolleeId: "ENR223366",
//           date: "2024-10-02",
//           hospital: "Sunnyvale Hospital",
//           diagnosis: "Asthma",
//           status: "Closed",
//         },
//         {
//           name: "Helen Pink",
//           enrolleeId: "ENR445566",
//           date: "2024-10-01",
//           hospital: "Westview Medical",
//           diagnosis: "Anxiety",
//           status: "Open",
//         },
//       ]);
//       setLoading(false);
//     }, 1000); // Simulate a 1-second delay
//   }, []);

//   // Dummy data for Escalations
//   const escalations = [
//     {
//       description: "Escalation 1: Issue with the server not responding.",
//     },
//     {
//       description:
//         "Escalation 2: User unable to access their account due to login error.",
//     },
//     {
//       description:
//         "Escalation 3: Critical bug in the production environment affecting users.",
//     },
//   ];

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

//   const paginateData = showAll ? data : data.slice(0, 7); // Show all or slice the first 7 items

//   return (
//     <div className="w-[1150px] flex flex-col p-5 bg-lightblue">
//       {/* Stats Section */}
//       <div className="flex gap-5 justify-between ">
//         <div className="flex flex-col w-full">
//           <span>Hi, Favour,</span>
//           <div className="flex w-full justify-between">
//             <span>Your Dashboard</span>
//             <div className="bg-white b-2">Date Component</div>
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="w-full p-5 bg-lightblue mt-10">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">Work Bench</h2>
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <img
//               src={search}
//               alt="Search"
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto bg-white rounded-md shadow-sm">
//           <div className="pl-10 pr-8 bg-red-500 flex justify-between gap-4">
//             <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Name
//             </div>
//             <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Enrollee ID
//             </div>
//             <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Date
//             </div>
//             <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Hospital
//             </div>
//             <div className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Diagnosis
//             </div>
//             <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
//               Status
//             </th>

//             {/* Show All / Show Less Button */}
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100"
//               >
//                 {showAll ? "Show Less" : "Show All"}
//               </button>
//             </div>
//           </div>

//           <div className="w-full">
//             {paginateData.map((item, index) => (
//               <div key={index} className="border-b bg-green-500 ">
//                 <div className="flex w-full justify-between items-center bg-white border-2 border-red-500">
//                   <img
//                     src="{item.image}"
//                     classname="w-10 h-10 rounded-full bg-red-500 object-cover"
//                   />
//                   <p className="font-semibold text-sm flex-1">{item.name}</p>
//                   <p className="text-xs text-gray-500 flex-1">
//                     {item.enrolleeId}
//                   </p>
//                   <p className="text-xs text-gray-500 flex-1">{item.date}</p>
//                   <p className="text-xs text-gray-500 flex-1">
//                     {item.hospital}
//                   </p>
//                   <p className="text-xs text-gray-500 flex-1">
//                     {item.diagnosis}
//                   </p>
//                   <p className="text-xs text-gray-500 flex-1">{item.status}</p>
//                   <button className="text-blue-500 hover:bg-blue-100 rounded-md flex-shrink-0">
//                     ...
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CsDashboard;

import { useState, useEffect } from "react";
import search from "../../assets/CSIMAGES/Search.svg";
import userimage from "../../assets/CSIMAGES/userimage.svg";


const ClientDashboard = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [showAll, setShowAll] = useState(false);


 // State for search fields
 const [searchName, setSearchName] = useState("");
 const [searchLastName, setSearchLastName] = useState("");
 const [searchEnrolleeId, setSearchEnrolleeID] = useState("");
 const [searchPhoneNumber, setSearchPhoneNumber] = useState("");
 const [searchEmail, setSearchEmail] = useState("");


 useEffect(() => {
   setTimeout(() => {
     setData([
       {
         image: (
           <img
             src={userimage}
             alt="user"
             className="w-12 h-12 rounded-full"
           />
         ),
         name: "John Doe",
         enrolleeId: "ENR123456",
         scheme: "Health",
         planType: "Premium",
         billingInfo: "Paid",
         startDate: "2024-10-12",
       },
       {
         image: (
           <img
             src={userimage}
             alt="user"
             className="w-12 h-12 rounded-full"
             />
           ),
           name: "Jane Smith",
           enrolleeId: "ENR789101",
           scheme: "Health",
           planType: "Basic",
           billingInfo: "Unpaid",
           startDate: "2024-10-10",
         },
         {
           image: (
             <img
               src={userimage}
               alt="user"
               className="w-12 h-12 rounded-full"
             />
           ),
           name: "Mary Johnson",
           enrolleeId: "ENR112233",
           scheme: "Dental",
           planType: "Standard",
           billingInfo: "Paid",
           startDate: "2024-10-11",
         },
         // Additional mock data...
       ]);
       setLoading(false);
     }, 1000);
   }, []);
  
  
   // Filter data based on search terms
   const filteredData = data.filter((item) => {
     return (
       item.name.toLowerCase().includes(searchName.toLowerCase()) &&
       item.enrolleeId.toLowerCase().includes(searchEnrolleeId.toLowerCase()) &&
       item.scheme.toLowerCase().includes(searchPhoneNumber.toLowerCase()) &&
       item.planType.toLowerCase().includes(searchEmail.toLowerCase())
     );
   });
  
  
   // Paginate the data
   const paginateData = showAll ? filteredData : filteredData.slice(0, 7);


   if (loading) {
     return <div>Loading...</div>;
   }
  
  
   if (error) {
     return <div>Error: {error}</div>;
   }
  
  
   return (
     <div className="p-5 w-[1150px] bg-lightblue">
       <h2 className="text-xl font-semibold mb-5">Enrollees</h2>
  
  
       {/* Search Fields */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-5">
         <div className="relative">
           <label htmlFor="searchName" className="text-gray-700">
             First Name
           </label>
           <input
             type="text"
             id="searchName"
             className="w-full border p-2 rounded-md"
             placeholder="Search First Name"
             value={searchName}
             onChange={(e) => setSearchName(e.target.value)}
           />
         </div>
         <div className="relative">
           <label htmlFor="searchLastName" className="text-gray-700">
             Last Name
           </label>
           <input
             type="text"
             id="searchLastName"
             className="w-full border p-2 rounded-md"
             placeholder="Search Last Name"
             value={searchLastName}
             onChange={(e) => setSearchLastName(e.target.value)}
           />
         </div>
         <div className="relative">
         <label htmlFor="searchEnrolleeId" className="text-gray-700">
           Enrollee ID
         </label>
         <input
           type="text"
           id="searchEnrolleeId"
           className="w-full border p-2 rounded-md"
           placeholder="Search Enrollee ID"
           value={searchEnrolleeId}
           onChange={(e) => setSearchEnrolleeID(e.target.value)}
         />
       </div>
       <div className="relative">
         <label htmlFor="searchPhoneNumber" className="text-gray-700">
           Phone Number
         </label>
         <input
           type="text"
           id="searchPhoneNumber"
           className="w-full border p-2 rounded-md"
           placeholder="Search Phone Number"
           value={searchPhoneNumber}
           onChange={(e) => setSearchPhoneNumber(e.target.value)}
         />
       </div>
       <div className="relative">
         <label htmlFor="searchEmail" className="text-gray-700">
           Email
         </label>
         <input
           type="text"
           id="searchEmail"
           className="w-full border p-2 rounded-md"
           placeholder="Search Email"
           value={searchEmail}
           onChange={(e) => setSearchEmail(e.target.value)}
         />
       </div>
     </div>


     {/* Data Table */}
     <div className="overflow-x-auto bg-white mt-5">
       <table className="w-full text-sm text-left text-gray-600">
         <thead className="bg-gray-200 text-gray-700">
           <tr>
             <th className="py-2 px-4"></th> {/* Empty header for image */}
             <th className="py-2 px-4">Name</th>
             <th className="py-2 px-4">Enrollee ID</th>
             <th className="py-2 px-4">Scheme</th>
             <th className="py-2 px-4">Plan Type</th>
             <th className="py-2 px-4">Billing Info</th>
             <th className="py-2 px-4">Start Date</th>
           </tr>
         </thead>
         <tbody>
           {paginateData.map((item, index) => (
             <tr key={index} className="border-b">
               <td className="py-2 px-4">{item.image}</td>
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


     {/* Toggle Button */}
     <div className="text-center mt-5">
       <button
         onClick={() => setShowAll(!showAll)}
         className="bg-blue-500 text-white px-4 py-2 rounded"
       >
         {showAll ? "Show Less" : "Show All"}
       </button>
     </div>
   </div>
 );
}


export default ClientDashboard;
    
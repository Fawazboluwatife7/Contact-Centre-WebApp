// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import redsearch from "../../../assets/CSIMAGES/redsearch.svg";
// import exportimg from "../../../assets/CSIMAGES/exportimg.svg";
// import printimg from "../../../assets/CSIMAGES/printimg.svg";
// import filterimg from "../../../assets/CSIMAGES/filterimg.svg";
// import { useNavigate } from "react-router-dom";

// // Sample ticket data
// const ticketData = [
//   {
//     id: 344324,
//     title: "Issue with Login",
//     category: "Bug",
//     assigned: "John Doe",
//     dateCreated: "2024-11-17",
//     status: "Open",
//   },
//   {
//     id: 344324,
//     title: "Payment Gateway Error",
//     category: "Escalation",
//     assigned: "Jane Smith",
//     dateCreated: "2024-11-16",
//     status: "Closed",
//   },
//   {
//     id: 344324,
//     title: "Database Connection Timeout",
//     category: "Bug",
//     assigned: "Mary Johnson",
//     dateCreated: "2024-11-15",
//     status: "Open",
//   },
//   {
//     id: 344324,
//     title: "UI/UX Design Issues",
//     category: "Escalation",
//     assigned: "Samuel Lee",
//     dateCreated: "2024-11-14",
//     status: "Closed",
//   },
// ];

// function Ticket() {
//   const { state } = useLocation();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState(state?.filter || "All");

//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   // Filter tickets based on the search query and selected filter
//   const filteredTickets = ticketData.filter((ticket) => {
//     const matchesQuery = ticket.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     if (filter === "All") return matchesQuery;
//     return matchesQuery && ticket.category === filter;
//   });

//   useEffect(() => {
//     if (state?.filter) {
//       setFilter(state.filter);
//     }
//   }, [state]);

//   return (
//     <div className="p-4 bg-lightblue">
//       <div className="min-h-screen bg-white p-8">
//         {/* Search Section */}
//         <div className="flex flex-col justify-between mb-6">
//           <div>Tickets</div>

//           <div className="relative">
//             <input
//               type="text"
//               className="pl-10 border rounded-md h-10 focus:outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search"
//             />
//             <div className="absolute inset-y-0 left-2 flex items-center">
//               <img src={redsearch} alt="icon" className="h-6 w-6" />
//             </div>
//           </div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex justify-between mb-4">
//           {/* Left side filter buttons */}
//           <div className="flex space-x-4">
//             <button
//               onClick={() => setFilter("All")}
//               className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
//                 filter === "All"
//                   ? "bg-white text-red-500 border-red-700 border-b-4"
//                   : "bg-red-700 text-white"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setFilter("Open")}
//               className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
//                 filter === "Open"
//                   ? "bg-white text-red-500 border-red-700 border-b-4"
//                   : "bg-red-700 text-white"
//               }`}
//             >
//               Open
//             </button>
//             <button
//               onClick={() => setFilter("Closed")}
//               className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
//                 filter === "Closed"
//                   ? "bg-white text-red-700 border-red-700 border-b-4"
//                   : "bg-red-700 text-white"
//               }`}
//             >
//               Closed
//             </button>
//             <button
//               onClick={() => setFilter("Escalation")}
//               className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
//                 filter === "Escalation"
//                   ? "bg-white text-red-700 border-red-700 border-b-4"
//                   : "bg-red-700 text-white"
//               }`}
//             >
//               Escalations
//             </button>
//           </div>

//           {/* Right side additional buttons */}
//           <div className="flex space-x-4 ml-auto">
//             <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
//               <img src={exportimg} alt="Export" className="w-5 h-5 mr-2" />
//               Export
//             </button>
//             <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
//               <img src={printimg} alt="Print" className="w-5 h-5 mr-2" />
//               Print
//             </button>
//             <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
//               <img src={filterimg} alt="Filter" className="w-5 h-5 mr-2" />
//               Filter
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto table-fixed bg-white">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-4 py-2 text-left">#ID</th>
//                 <th className="px-4 py-2 text-left">Title</th>
//                 <th className="px-4 py-2 text-left">Category</th>
//                 <th className="px-4 py-2 text-left">Assigned</th>
//                 <th className="px-4 py-2 text-left">Date Created</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTickets.map((ticket) => (
//                 <tr key={ticket.id} className="border-b">
//                   <td className="px-4 py-2">{ticket.id}</td>
//                   <td className="px-4 py-2">{ticket.title}</td>
//                   <td className="px-4 py-2">{ticket.category}</td>
//                   <td className="px-4 py-2">{ticket.assigned}</td>
//                   <td className="px-4 py-2">{ticket.dateCreated}</td>
//                   <td className="px-4 py-2">{ticket.status}</td>
//                   <td className="px-4 py-2">
//                     <div className="relative w-fit">
//                       {" "}
//                       <button onClick={handleButtonClick} className="text-xl">
//                         {" "}
//                         {isDropdownOpen ? "Close" : "..."}{" "}
//                       </button>{" "}
//                       {isDropdownOpen && (
//                         <div className="absolute bg-white border rounded-md shadow-md mt-2 z-10">
//                           {" "}
//                           <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                             {" "}
//                             View{" "}
//                           </button>{" "}
//                           <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                             {" "}
//                             Edit{" "}
//                           </button>{" "}
//                           <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                             {" "}
//                             Mark as Done{" "}
//                           </button>{" "}
//                         </div>
//                       )}{" "}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Ticket;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import redsearch from "../../../assets/CSIMAGES/redsearch.svg";
import csthreedots from "../../../assets/CSIMAGES/csthreedots.svg";
import exportimg from "../../../assets/CSIMAGES/exportimg.svg";
import printimg from "../../../assets/CSIMAGES/printimg.svg";
import filterimg from "../../../assets/CSIMAGES/filterimg.svg";
import { useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";

// Sample ticket data
const ticketData = [
  {
    id: 344324,
    title: "Issue with Login",
    category: "Bug",
    assigned: "John Doe",
    dateCreated: "2024-11-17",
    status: "Open",
  },
  {
    id: 344324,
    title: "Payment Gateway Error",
    category: "Escalation",
    assigned: "Jane Smith",
    dateCreated: "2024-11-16",
    status: "Closed",
  },
  {
    id: 344324,
    title: "Database Connection Timeout",
    category: "Bug",
    assigned: "Mary Johnson",
    dateCreated: "2024-11-15",
    status: "Open",
  },
  {
    id: 344324,
    title: "UI/UX Design Issues",
    category: "Escalation",
    assigned: "Samuel Lee",
    dateCreated: "2024-11-14",
    status: "Closed",
  },
];

function Ticket() {
  const { state } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = async (e) => {
    switch (e.key) {
      case "view":
        // navigate(`/department/${props.id}`);
        break;
      case "edit":
        // navigate(`/edit-department/${props.id}`);
        break;
      case "done":
        // showDeleteConfirm();
        break;
      default:
        break;
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(state?.filter || "All");

  const navigate = useNavigate();

  // const handleNavigate = (path) => {
  //   navigate(path);
  // };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="view">View</Menu.Item>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="done">Mark as Done</Menu.Item>
    </Menu>
  );

  // Filter tickets based on the search query and selected filter
  const filteredTickets = ticketData.filter((ticket) => {
    const matchesQuery = ticket.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "All") return matchesQuery;
    return matchesQuery && ticket.category === filter;
  });

  useEffect(() => {
    if (state?.filter) {
      setFilter(state.filter);
    }
  }, [state]);

  return (
    <div className="p-4 bg-lightblue">
      <div className="min-h-screen bg-white p-8">
        {/* Search Section */}
        <div className="flex flex-col justify-between mb-6">
          <div>Tickets</div>

          <div className="relative">
            <input
              type="text"
              className="pl-10 border rounded-md h-10 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-2 flex items-center">
              <img src={redsearch} alt="icon" className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-between mb-4">
          {/* Left side filter buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("All")}
              className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
                filter === "All"
                  ? "bg-white text-red-500 border-red-700 border-b-4"
                  : "bg-red-700 text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Open")}
              className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
                filter === "Open"
                  ? "bg-white text-red-500 border-red-700 border-b-4"
                  : "bg-red-700 text-white"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setFilter("Closed")}
              className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
                filter === "Closed"
                  ? "bg-white text-red-700 border-red-700 border-b-4"
                  : "bg-red-700 text-white"
              }`}
            >
              Closed
            </button>
            <button
              onClick={() => setFilter("Escalation")}
              className={`w-[142px] h-[43px] text-center py-2 px-4 rounded-md ${
                filter === "Escalation"
                  ? "bg-white text-red-700 border-red-700 border-b-4"
                  : "bg-red-700 text-white"
              }`}
            >
              Escalations
            </button>
          </div>

          {/* Right side additional buttons */}
          <div className="flex space-x-4 ml-auto">
            <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
              <img src={exportimg} alt="Export" className="w-5 h-5 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
              <img src={printimg} alt="Print" className="w-5 h-5 mr-2" />
              Print
            </button>
            <button className="flex items-center px-4 py-2 text-red-700 rounded-md">
              <img src={filterimg} alt="Filter" className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto table-fixed bg-white">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">#ID</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Assigned</th>
                <th className="px-4 py-2 text-left">Date Created</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="border-b">
                  <td className="px-4 py-2">{ticket.id}</td>
                  <td className="px-4 py-2">{ticket.title}</td>
                  <td className="px-4 py-2">{ticket.category}</td>
                  <td className="px-4 py-2">{ticket.assigned}</td>
                  <td className="px-4 py-2">{ticket.dateCreated}</td>
                  <td className="px-4 py-2">{ticket.status}</td>
                  <td className="px-4 py-2">
                    <div className="  ml-10 mt-5">
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <img
                          src={csthreedots}
                          alt="Options"
                          style={{ cursor: "pointer" }}
                        />
                      </Dropdown>
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
}

export default Ticket;

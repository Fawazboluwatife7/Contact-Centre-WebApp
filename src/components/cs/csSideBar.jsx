// import React from "react";

// const CsSidebar = () => {
//   return (
//     <div className="  flex">
//       <div className=" w-[82px] bg-[#121638] col-auto justify-items-center ">
//         <div className=" cursor-pointer mt-8 group hover:bg-[#C61531] p-2 ">
//           <img src="Underwriting@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
//           <img src="Sales Menu@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className="cursor-pointer hover:bg-[#C61531] p-2">
//           <img src="Enrollment Menu@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer bg-red-500  hover:bg-[#C61531] p-2">
//           <img src="ri_customer-service-fill@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
//           <img src="Client Services@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
//           <img src="Pharmacy Benefits@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img
//             src="icon-park-solid_category-management@3x.svg"
//             alt=""
//             onClick={""}
//           />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Reporting Menu@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Ticket Menu@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Finance & Settlement@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Admin@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Agent & broker management@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Group@3x.svg" alt="" onClick={""} />
//         </div>
//         <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
//           <img src="Vector@3x.svg" alt="" onClick={""} />
//         </div>
//       </div>
//       <div className=" bg-white w-[212] border  h-[982] justify-center items-center">
//         <img
//           src="SmallLogo.svg"
//           alt=""
//           className=" justify-items-center mt-8 ml-10"
//         />
//         <div
//           className="mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
//           onClick={"#"}
//         >
//           <img src="Dashboard.svg" alt="" />
//           <p className=" ml-2">Dashboard</p>
//         </div>
//         <div
//           className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
//           onClick={"#"}
//         >
//           <img src="carbon_hospital-bed@3x.svg" alt="" />
//           <p className=" ml-2">PA Requests</p>
//         </div>
//         <div
//           className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
//           onClick={"#"}
//         >
//           <img src="people-group@3x.svg" alt="" />
//           <p className=" ml-2"> Enrollees</p>
//           /Enrollees
//         </div>
//         <div
//           className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
//           onClick={"#"}
//         >
//           <img src="uil_invoice@3x.svg" alt="" />
//           <p className=" ml-2">Providers</p>
//         </div>
//         <div
//           className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
//           onClick={"#"}
//         >
//           <img src="Report.svg" alt="" />
//           <p className=" ml-2">Ticket</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CsSidebar;

import React from "react";
import { useNavigate } from "react-router-dom";

const CsSidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[82px] bg-[#121638] col-auto justify-items-center">
        <div className="cursor-pointer mt-8 group hover:bg-[#C61531] p-2">
          <img src="Underwriting@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Sales Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Enrollment Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer bg-red-500 hover:bg-[#C61531] p-2">
          <img src="ri_customer-service-fill@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Client Services@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Pharmacy Benefits@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="icon-park-solid_category-management@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Reporting Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Ticket Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Finance & Settlement@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Admin@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Agent & broker management@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Group@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-2">
          <img src="Vector@3x.svg" alt="" />
        </div>
      </div>
      <div className="bg-white w-[212] border min-h-screen justify-center items-center">
        <img
          src="SmallLogo.svg"
          alt=""
          className="justify-items-center mt-8 ml-10"
        />
        <div
          className="mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/CsDashboard")}
        >
          <img src="Dashboard.svg" alt="" />
          <p className="ml-2">Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/pa-requests")}
        >
          <img src="carbon_hospital-bed@3x.svg" alt="" />
          <p className="ml-2">PA Requests</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/enrollees")} // Navigate to /enrollees
        >
          <img src="people-group@3x.svg" alt="" />
          <p className="ml-2">Enrollees</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/providers")}
        >
          <img src="uil_invoice@3x.svg" alt="" />
          <p className="ml-2">Providers</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/ticket")}
        >
          <img src="Report.svg" alt="" />
          <p className="ml-2">Ticket</p>
        </div>
      </div>
    </div>
  );
};

export default CsSidebar;

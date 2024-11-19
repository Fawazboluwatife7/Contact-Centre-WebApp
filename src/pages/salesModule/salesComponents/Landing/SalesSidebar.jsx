import React from "react";
import { useNavigate } from "react-router-dom";
import settings from "../../../../assets/SalesModuleImages/gear_3808071.png"

const SalesSidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[82px] bg-[#121638] col-auto justify-items-center">
        <div className="cursor-pointer bg-red-500 hover:bg-[#C61531] p-4 mt-[120px]">
          <img src="Sales Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-4">
          <img src="Enrollment Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="ri_customer-service-fill@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="Client Services@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="Pharmacy Benefits@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="icon-park-solid_category-management@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="Reporting Menu@3x.svg" alt="" />
        </div>
        <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src="Ticket Menu@3x.svg" alt="" />
        </div>
        <div>
          <div className="cursor-pointer hover:bg-[#C61531] p-3">
          <img src={settings} alt="" />
        </div>
        </div>
        
      </div>
      <div className="bg-white w-[212] border min-h-screen justify-center items-center">
        <img
          src="SmallLogo.svg"
          alt=""
          className="justify-items-center mt-8 ml-10"
        />
        <div
          className="mt-14 flex px-10 cursor-pointer bg-red-600 hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/StaffDashboard")}
        >
          <img src="Dashboard.svg" alt="" />
          <p className="ml-2">Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/history")}
        >
          <img src="carbon_hospital-bed@3x.svg" alt="" />
          <p className="ml-2">Clients</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/enrollees")} // Navigate to /enrollees
        >
          <img src="people-group@3x.svg" alt="" />
          <p className="ml-2">Prospects</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/providers")}
        >
          <img src="uil_invoice@3x.svg" alt="" />
          <p className="ml-2">Proposals</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/providers")}
        >
          <img src="uil_invoice@3x.svg" alt="" />
          <p className="ml-2">Invoice</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/ticket")}
        >
          <img src="Report.svg" alt="" />
          <p className="ml-2">Tickets</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
          onClick={() => handleNavigate("/ticket")}
        >
          <img src="Report.svg" alt="" />
          <p className="ml-2">Reports</p>
        </div>
      </div>
    </div>
  );
};

export default SalesSidebar;

import React, { useState } from "react";
import search from "../../../assets/CSIMAGES/Search.svg";
import reddot from "../../../assets/CSIMAGES/reddot.svg";
import alarm from "../../../assets/CSIMAGES/alarmicon.svg";
import vangle from "../../../assets/CSIMAGES/vangle.svg";
import userimage from "../../../assets/CSIMAGES/userimage.svg";

const SalesNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex justify-between items-center w-full px-4 py-2 bg-white shadow-md">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-xs lg:max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-lightblue focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={search}
          alt="Search"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5"
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <div className="flex items-center space-x-2 bg-red-50 rounded-full px-3 py-1">
          <img src={reddot} alt="Red Dot" className="w-[7px] h-[7px]" />
          <span className="text-red-500 text-sm">Customer Service</span>
        </div>

        {/* Alarm Icon */}
        <img src={alarm} alt="Alarm" className="w-5 h-5 cursor-pointer" />

        {/* Profile Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={userimage} alt="User" className="w-8 h-8 rounded-full" />
          <img src={vangle} alt="Dropdown" className="w-4 ml-2" />
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="flex items-center p-2 border-b border-gray-200">
                <img
                  src={userimage}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-sm font-semibold">Username</p>
                  <p className="text-xs text-gray-500">Role: UserRole</p>
                </div>
              </div>
              <div className="p-2">
                <p className="text-sm text-gray-700">
                  Additional details here...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesNav;

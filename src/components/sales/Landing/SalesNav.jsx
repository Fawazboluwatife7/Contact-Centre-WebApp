import React, { useState } from "react";
import search from "../../../assets/SalesModuleImages/Search.svg";
import alarm from "../../../assets/CSIMAGES/alarmicon.svg";
import vangle from "../../../assets/CSIMAGES/vangle.svg";
import userimage from "../../../assets/CSIMAGES/userimage.svg";

function SalesNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 relative z-20">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border bg-lightblue border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={search}
          alt="Search"
          className="absolute top-1/2 ml-3 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      <div className="flex gap-2">
        <img src={alarm} />
        <div
          className="relative flex w-[52px] h-[38px] p-1 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={userimage} />
          <img className="w-[18px]" src={vangle} />
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-30">
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
}

export default SalesNav;

import React, { useState } from "react"; // Import useState from React
import search from "../../assets/CSIMAGES/Search.svg";
import reddot from "../../assets/CSIMAGES/reddot.svg";
import alarm from "../../assets/CSIMAGES/alarmicon.svg";
import vangle from "../../assets/CSIMAGES/vangle.svg";
import userimage from "../../assets/CSIMAGES/userimage.svg";

function Header() {
  const [searchTerm, setSearchTerm] = useState(""); // useState is now available

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-between  items-center w-full p-4">
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
          className="absolute  top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      <div className="flex gap-2 ">
        <div className="bg-red-50 flex items-center space-x-2 rounded-full p-2">
          <img src={reddot} alt="Red Dot" className="w-[7px] h-[7px]" />
          <div className="text-red-500 ">Customer Service</div>
        </div>
        <img src={alarm} />

        <div className="flex w-[52px] h-[38px] p-1 bg-red-500">
          <img src={userimage} />
          <img className="w-[18px]" src={vangle} />
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import search from "../../assets/CSIMAGES/Search.svg";

function CsEnrolles() {
  return (
    <div className="p-5 w-[1150px] bg-lightblue">
      <span className="">Enrollee</span>
      <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 bg-white">
        {/* First Name */}
        <div className="relative">
          <label htmlFor="firstname" className="block text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2 ">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>

        {/* Last Name */}
        <div className="relative">
          <label htmlFor="lastname" className="block text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>

        {/* Enrollee ID */}
        <div className="relative">
          <label htmlFor="enrolleeId" className="block text-gray-700 mb-1">
            Enrollee ID
          </label>
          <input
            id="enrolleeId"
            type="text"
            name="enrolleeId"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2 ">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label htmlFor="phoneNumber" className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2 ">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2 ">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>

        {/* Group */}
        <div className="relative">
          <label htmlFor="group" className="block text-gray-700 mb-1">
            Group
          </label>
          <input
            id="group"
            type="text"
            name="group"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <span className="absolute left-3 top-1/2 ">
            <img src={search} alt="Search" className="w-4 h-4 text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CsEnrolles;

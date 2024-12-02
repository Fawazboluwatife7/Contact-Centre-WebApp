import React, { useState } from "react";

const SendingProposals = () => {
  const [isProfileDetailsVisible, setIsProfileDetailsVisible] = useState(true);

  const toggleProfileDetails = () => {
    setIsProfileDetailsVisible(!isProfileDetailsVisible);
  };

  return (
    <div className="min-h-full p-6 font-sans">
      {/* Header Section */}
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Proposal - Smiths Hospital</h1>
        <a href="#" className="flex items-center text-red-600 font-semibold mt-2">
          <svg className="w-5 h-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          Back To Proposal
        </a>
      </div>

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-md p-6 flex items-center">
        {/* Profile Image & Title */}
        <div className="flex flex-col items-center p-6 ">
          <img src="https://via.placeholder.com/100" alt="Building" className="w-36 h-36 rounded-md object-cover  mb-2" />
          <h2 className="text-xl font-bold text-gray-700 text-center">FBN</h2>
        </div>

        {/* Profile Details & Edit Button */}
        <div className="flex-1 px-14 ">
          <div id="profile-details" className={`grid grid-cols-3 gap-6 ${!isProfileDetailsVisible ? "hidden" : ""}`}>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold text-gray-700">FBN Client</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Broker</p>
              <p className="font-semibold text-gray-700">Broker Name</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Policy Start Date</p>
              <p className="font-semibold text-gray-700">28/10/2022</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-semibold text-gray-700">08035911412</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold text-gray-700">r.olutope@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-semibold text-gray-700">35, Marina Road</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6">
            <button className="bg-red-600 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-red-700 focus:outline-none">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Dropdown Arrow */}
        <button id="toggle-profile" className="text-gray-500 pr-24 mb-32" onClick={toggleProfileDetails}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isProfileDetailsVisible ? "M19 9l-7 7-7-7" : "M19 15l-7-7-7 7"}
            />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <input type="text" placeholder="Search" className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none" />
      </div>

      {/* Search and Tabs */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-semibold text-red-600 border-b-2 border-red-600">All</button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-red-600">Customized</button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-red-600">Sent Proposals</button>
        </div>
        <button className="bg-red-600 text-white px-4 py-3 rounded-md text-sm font-semibold hover:bg-red-700">Upload Template</button>
      </div>

      {/* Proposals Table */}
      <div className="mt-6">
        <div className="bg-white shadow-md rounded-md">
          <div className="p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-500">
                  <th className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th className="px-4 py-2">Plan Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="px-4 py-2">Customized Plan #01</td>
                  <td className="px-4 py-2">Retail</td>
                  <td className="px-4 py-2">22 Aug 2022</td>
                  <td className="px-4 py-2 text-gray-500 text-center">...</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendingProposals;

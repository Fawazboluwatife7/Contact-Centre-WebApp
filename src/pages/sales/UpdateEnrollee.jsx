import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateEnrollee = () => {
  const [formData, setFormData] = useState({
    name: "",
    staffId: "",
    enrolleeId: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    phoneNumber: "",
    startDate: "",
    planType: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // To handle routing

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal
  };

  const handleViewEnrollee = () => {
    // Navigate to the newly added enrollee's profile
    navigate(`/SalesDashboard/client-enrollee-profile/${formData.enrolleeId}`);
  };

  return (
    <div className="p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-black font-bold text-2xl">Update Profile</h1>
        <a
          href="/SalesDashboard/client-enrollee-profile"
          className="flex items-center text-[#C61531] font-bold text-lg cursor-pointer gap-3"
        >
          {/* Back Arrow Icon */}
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path
              d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5"
              fill="#C61531"
            />
          </svg>
          Back To Profile
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
              placeholder="Enter name" readOnly
            />
          </div>

          {/* Staff ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="staffId">
              Staff ID
            </label>
            <input
              type="text"
              id="staffId"
              value={formData.staffId}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
              placeholder="Enter staff ID" readOnly
            />
          </div>

          {/* Enrollee ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="enrolleeId">
              Enrollee ID
            </label>
            <input
              type="text"
              id="enrolleeId"
              value={formData.enrolleeId}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
              placeholder="Enter enrollee ID" readOnly
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange} readOnly
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="maritalStatus">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
            >
              <option value="" disabled>
                Select marital status
              </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
              placeholder="Enter phone number"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
            />
          </div>

          {/* Plan Type */}
          <div className="">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="planType">
              Plan Type
            </label>
            <select
              id="planType"
              value={formData.planType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#C61531]/50"
            >
              <option value="" disabled>
                Select plan type
              </option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Other fields... */}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-[#C61531] text-white px-6 py-3 rounded-md font-bold hover:bg-[#a81229] transition duration-200"
          >
            Update
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-[684px] h-auto bg-white rounded-[5px] p-8 mx-4">
            <div className="text-center font-semibold text-[24px] md:text-[30px] text-black mb-6">
              {`${formData.name} with ID ${formData.enrolleeId} has been added successfully.`}
            </div>
            <svg className="flex ml-16 sm:ml-64" width="122" height="122" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 122 122" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" fill="#13132A" d="M5.971 39.673c-.187 0-.377-.035-.561-.114L.902 37.685a1.461 1.461 0 0 1 1.12-2.699l4.51 1.878c.746.31 1.1 1.163.787 1.909-.23.561-.775.9-1.348.9"/><path id="b" fill="#13132A" d="M61.003 103.672c23.568 0 42.674-19.109 42.674-42.677s-19.106-42.67-42.674-42.67S18.33 37.427 18.33 60.994c0 23.568 19.107 42.677 42.674 42.677"/><path id="c" fill="#00DD9D" d="M56.598 80.09 41.979 63.389a5.85 5.85 0 0 1 .553-8.254 5.847 5.847 0 0 1 8.253.553l5.848 6.686L74.157 42.51a5.848 5.848 0 1 1 8.771 7.739z"/></defs><use href="#a" opacity=".03"/><use href="#b"/><use href="#c"/><path fill="#13132A" d="M85.662 121.999c-.57 0-1.117-.34-1.35-.901l-1.878-4.511a1.467 1.467 0 0 1 .79-1.912 1.47 1.47 0 0 1 1.912.789l1.877 4.511a1.47 1.47 0 0 1-.79 1.915 1.5 1.5 0 0 1-.561.109"/><path fill="#13132A" d="M100.921 102.383c-.375 0-.749-.143-1.035-.427l-3.023-3.026a1.463 1.463 0 0 1 0-2.067 1.463 1.463 0 0 1 2.067 0l3.026 3.023c.57.573.57 1.497 0 2.07a1.47 1.47 0 0 1-1.035.427" opacity=".667"/><path fill="#13132A" d="M120.535 87.125c-.187 0-.377-.038-.561-.111l-4.511-1.877a1.465 1.465 0 0 1-.79-1.912 1.477 1.477 0 0 1 1.915-.79l4.512 1.877a1.467 1.467 0 0 1 .789 1.913c-.234.56-.784.9-1.354.9"/><path fill="#13132A" d="M117.454 62.46h-4.269a1.462 1.462 0 0 1 0-2.923h4.269a1.462 1.462 0 0 1 0 2.924" opacity=".667"/><path fill="#13132A" d="M116.027 39.676c-.57 0-1.12-.339-1.354-.9a1.47 1.47 0 0 1 .79-1.915l4.511-1.877a1.475 1.475 0 0 1 1.915.795c.307.742-.044 1.6-.789 1.909l-4.512 1.877a1.5 1.5 0 0 1-.561.111" opacity=".5"/><path fill="#13132A" d="M97.898 25.566a1.463 1.463 0 0 1-1.035-2.497l3.026-3.023a1.46 1.46 0 0 1 2.067 0c.57.57.57 1.497 0 2.067l-3.023 3.023c-.287.284-.661.43-1.035.43M83.788 7.434a1.463 1.463 0 0 1-1.35-2.023L84.313.902a1.457 1.457 0 0 1 1.912-.789 1.464 1.464 0 0 1 .79 1.91l-1.877 4.51c-.234.562-.78.901-1.351.901M61 10.273a1.46 1.46 0 0 1-1.46-1.462V4.542a1.462 1.462 0 0 1 2.923 0v4.269c0 .807-.655 1.462-1.462 1.462"/><path fill="#13132A" d="M38.21 7.434c-.572 0-1.116-.34-1.347-.9l-1.877-4.512A1.462 1.462 0 0 1 37.688.9l1.87 4.512a1.456 1.456 0 0 1-.786 1.909 1.4 1.4 0 0 1-.561.114" opacity=".667"/><path fill="#13132A" d="M24.101 25.566c-.374 0-.748-.146-1.035-.43l-3.02-3.023a1.46 1.46 0 0 1 0-2.066 1.457 1.457 0 0 1 2.067 0l3.023 3.023a1.463 1.463 0 0 1-1.035 2.496"/><use href="#a" opacity=".515"/><path fill="#13132A" d="M8.816 62.46H4.548a1.462 1.462 0 0 1 0-2.923h4.268a1.462 1.462 0 0 1 0 2.924"/><path fill="#13132A" d="M1.463 87.125a1.465 1.465 0 0 1-.561-2.815l4.511-1.878c.74-.301 1.6.05 1.91.792a1.463 1.463 0 0 1-.79 1.912l-4.508 1.877a1.5 1.5 0 0 1-.562.111" opacity=".5"/><path fill="#13132A" d="M21.081 102.383c-.374 0-.748-.143-1.035-.427a1.466 1.466 0 0 1 0-2.07l3.023-3.023a1.463 1.463 0 0 1 2.067 2.067l-3.02 3.026c-.287.284-.66.427-1.035.427"/><path fill="#13132A" d="M35.334 118.098c-.374 0-.749-.143-1.035-.427a1.466 1.466 0 0 1 0-2.07l3.023-3.023c.57-.57 1.497-.57 2.067 0a1.457 1.457 0 0 1 0 2.067l-3.02 3.026c-.287.284-.66.427-1.035.427" opacity=".667"/><use href="#b"/><use href="#c"/></svg>
            <button
              onClick={handleViewEnrollee}
              className="md:w-[196px] w-[70%] h-[53px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mx-auto mt-7"
            >
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateEnrollee;

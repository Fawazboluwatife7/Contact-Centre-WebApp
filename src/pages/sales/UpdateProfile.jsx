import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessModal from '../../components/sales/SuccessModal'; // Ensure the correct path to the SuccessModal

const UpdateProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" h-full flex flex-col justify-center items-center p-4 relative">
      {showModal && <SuccessModal onClose={handleCloseModal} />}
      <div className="relative -mt-24 mr-auto mb-2 text-black font-bold text-3xl">
        Update Profile
      </div>

      {/* back to profile link and Back Arrow */}
      <div className="flex items-center ml-auto space-x-2 cursor-pointer">
        {/* Backward Arrow Icon */}
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5" fill="#C61531"/>
        </svg>

        {/* back to profile Text Link */}
        <Link to="/SalesDashboard/clients-profile" className="mb-1 text-[#C61531] text-[19px] font-[Product Sans] font-bold">Back To Profile</Link>
      </div>

      <div className="w-full bg-white rounded-lg shadow-md p-8">
        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Policy Start Date */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="policy-start-date">Policy Start Date</label>
            <div className="relative">
              <input id="policy-start-date" type="date" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
            </div>
          </div>

          {/* Policy Cycle */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="policy-cycle">Policy Cycle</label>
            <div className="relative w-full">
              <select id="policy-cycle" className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none">
                <option value="annually">Annually</option>
                <option value="bi-annually">Bi-Annually</option>
                <option value="monthly">Monthly</option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#C61531" />
                  <path d="m11 16 6-6H5z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="company-name">Company Name</label>
            <input id="company-name" type="text" placeholder="Leadway Assurance" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">Address</label>
            <input id="address" type="text" placeholder="121/123 Funsho Williams Avenue, Iponri" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="info@leadway.com" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone-number">Phone Number</label>
            <input id="phone-number" type="text" placeholder="+234 567 435 3452" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>

          {/* Telephone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="telephone">Telephone</label>
            <input id="telephone" type="text" placeholder="01 7001 20" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" />
          </div>

          {/* Business Sector */}
          <div className="flex flex-col w-full max-w-full">
            <label htmlFor="businessSector" className="font-semibold text-[16px] text-[#353535] mb-2">State</label>
            <div className="relative w-full">
              <select id="businessSector" className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none">
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="health">Healthcare</option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#C61531" />
                  <path d="m11 16 6-6H5z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-end mt-8">
          <button 
            className="bg-red-600 text-white px-14 py-3 rounded-lg font-semibold hover:bg-red-700 transition" 
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
